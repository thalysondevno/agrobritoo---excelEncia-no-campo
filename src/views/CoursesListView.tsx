"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';

interface CoursesListViewProps {
  onBack: () => void;
  navigateToCheckout: (item: Course) => void;
}

interface Course {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  price: number;
  tag?: string; // Para compatibilidade com o componente Solutions
  payment_link?: string; // Adicionado o link de pagamento
}

const CoursesListView: React.FC<CoursesListViewProps> = ({ onBack, navigateToCheckout }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('courses')
        .select('id, title, description, image_url, price, payment_link') // Buscar payment_link
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
        setCourses([]);
      } else {
        const formattedCourses = (data || []).map(course => ({
          ...course,
          tag: 'Online', // Exemplo de tag padrão
          price: course.price, // Manter como número para o checkout
        }));
        setCourses(formattedCourses as Course[]);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  const handleCourseAction = (item: Course) => {
    if (item.payment_link) {
      window.open(item.payment_link, '_blank'); // Abrir link de pagamento em nova aba
    } else {
      navigateToCheckout(item); // Fallback para o comportamento original se não houver link de pagamento
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark text-white">
        Carregando cursos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark text-red-400">
        Erro ao carregar cursos: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-10 hover:gap-4 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar
        </button>

        <h1 className="text-4xl font-black text-white mb-12">Todos os Nossos Cursos</h1>
        
        {courses.length === 0 ? (
          <p className="text-text-muted text-lg text-center">Nenhum curso publicado ainda.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((item) => (
              <div 
                key={item.id} 
                className="group bg-card-dark border border-border-dark rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image_url || 'https://via.placeholder.com/800x600?text=Agrobritoo+Course'} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
                  {item.tag && (
                    <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter border border-primary/20">
                      {item.tag}
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-text-muted mb-6 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-white/40 text-xs uppercase font-bold tracking-widest">Investimento</span>
                    <div className="text-2xl font-black text-white">R$ {item.price.toFixed(2).replace('.', ',')}</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-[1px] bg-border-dark w-full" />
                    <button 
                      onClick={() => handleCourseAction(item)}
                      className="w-full py-4 rounded-2xl bg-primary text-bg-dark font-black hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-primary/10"
                    >
                      Ver Detalhes
                      <span className="material-symbols-outlined !text-xl transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesListView;