import React, { useState, useEffect } from 'react';
import { supabase } from '../src/integrations/supabase/client'; // Importar supabase

interface Course {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  tag?: string; // Adicionado para compatibilidade com o design existente
  price: number;
}

interface SolutionsProps {
  onSelect: (item: Course) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onSelect }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('courses')
        .select('id, title, description, image_url, price')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
        setCourses([]);
      } else {
        // Adicionar um tag padrão ou derivar se necessário
        const formattedCourses = (data || []).map(course => ({
          ...course,
          tag: 'Online', // Exemplo de tag padrão
          price: `R$ ${course.price.toFixed(2).replace('.', ',')}`, // Formatar preço
        }));
        setCourses(formattedCourses as Course[]);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="py-24 bg-[#171f15] flex items-center justify-center text-white">
        Carregando cursos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-24 bg-[#171f15] flex items-center justify-center text-red-400">
        Erro ao carregar cursos: {error}
      </div>
    );
  }

  return (
    <div className="py-24 bg-[#171f15]" id="cursos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-primary font-bold tracking-widest uppercase text-sm">Programas Agrobritoo</div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Escolha seu caminho para a <span className="text-primary">excelência.</span></h2>
          </div>
          <p className="text-text-muted max-w-sm">
            Aqui você encontra cursos online, ebooks e conteúdos que unem conhecimento técnico e aplicação prática, cobrindo temas como manejo de rebanho, nutrição, sanidade, produtividade e estratégias que transformam o seu trabalho no campo.
          </p>
        </div>
        
        {courses.length === 0 ? (
          <p className="text-text-muted text-lg text-center">Nenhum curso publicado ainda.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
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
                    <div className="text-2xl font-black text-white">{item.price}</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-[1px] bg-border-dark w-full" />
                    <button 
                      onClick={() => onSelect(item)}
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

export default Solutions;