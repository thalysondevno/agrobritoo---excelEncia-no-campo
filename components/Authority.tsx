import React, { useState, useEffect } from 'react';

const zootecniaAreas = [
  {
    title: 'Nutrição de Precisão',
    img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800',
    description: 'Maximizando a conversão alimentar.'
  },
  {
    title: 'Manejo de Pastagens',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    description: 'A ciência do capim transformada em carne e leite.'
  },
  {
    title: 'Melhoramento Genético',
    img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
    description: 'Evoluindo o rebanho a cada geração.'
  },
  {
    title: 'Bem-estar Animal',
    img: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=800',
    description: 'Ética e conforto gerando produtividade.'
  },
  {
    title: 'Gestão de Rebanho',
    img: 'https://images.unsplash.com/photo-1527859282244-9382f6e9196b?auto=format&fit=crop&q=80&w=800',
    description: 'Números que guiam o sucesso no campo.'
  }
];

const Authority: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % zootecniaAreas.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-24 bg-bg-dark border-t border-border-dark" id="sobre">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-card-dark rounded-[2.5rem] p-8 md:p-16 border border-border-dark relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full glass text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                Experiência no Campo
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Agrobritoo — Da Teoria à Prática no Agro
              </h2>
              
              <p className="text-xl text-text-muted leading-relaxed">
                Somos uma plataforma de conteúdo e soluções para quem vive e ama o campo. Nosso objetivo é transformar o conhecimento técnico em resultados reais, integrando ciência, manejo, saúde e produção animal de forma prática e aplicada.
                Aqui unimos os melhores recursos, dicas, cursos e materiais para melhorar a produção, sanidade e eficiência no agronegócio, independentemente da escala da propriedade ou da experiência do produtor.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-1">
                  <div className="text-4xl font-black text-white">5k+</div>
                  <div className="text-text-muted uppercase text-xs font-bold tracking-widest">Alunos Impactados</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black text-white">100%</div>
                  <div className="text-text-muted uppercase text-xs font-bold tracking-widest">Prático e Aplicável</div>
                </div>
              </div>
              
              <div className="pt-4">
                <a href="#cursos" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group">
                  Ver todas as formações
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">trending_flat</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Image Carousel Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-border-dark shadow-2xl aspect-video group">
                {zootecniaAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                    }`}
                  >
                    <img 
                      src={area.img} 
                      alt={area.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Info Tag */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/10 animate-fade-up">
                      <div className="text-primary font-bold text-lg mb-1">{area.title}</div>
                      <div className="text-white/70 text-sm">{area.description}</div>
                    </div>
                  </div>
                ))}

                {/* Navigation Dots */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {zootecniaAreas.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-3xl" />
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full border-2 border-white/5 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authority;