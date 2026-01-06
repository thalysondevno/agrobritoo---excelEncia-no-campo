import React from 'react';

interface HeroProps {
  onAction: () => void;
  onSeeCourses: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAction, onSeeCourses }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/40 via-bg-dark/70 to-bg-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1920" 
          alt="Gado bovino em pastagem verde - CIÊNCIA E PRÁTICA ANIMAL Agrobritoo" 
          className="w-full h-full object-cover animate-fade-in transition-opacity duration-1000"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-gradient z-0 opacity-60" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
          <span className="material-symbols-outlined !text-sm">verified</span>
          CIÊNCIA E PRÁTICA ANIMAL de Elite
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 max-w-5xl mx-auto">
          Da Teoria à Prática: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Resultados Reais
          </span> na Pecuária e Veterinária.
        </h1>
        
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Nossa missão é democratizar o conhecimento técnico para o agronegócio e para o cuidado animal, traduzindo conceitos científicos em práticas de campo que gerem resultados consistentes — para produtores, profissionais e estudantes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onAction}
            className="w-full sm:w-auto bg-primary hover:bg-secondary text-bg-dark font-black px-8 py-5 rounded-xl text-lg transition-all duration-300 shadow-[0_0_30px_rgba(70,236,19,0.3)] hover:shadow-[0_0_40px_rgba(70,236,19,0.5)] transform hover:-translate-y-1"
          >
            Quero Profissionalizar Meu Manejo
          </button>
          <button 
            onClick={onSeeCourses}
            className="w-full sm:w-auto glass hover:bg-white/5 text-white font-bold px-8 py-5 rounded-xl text-lg transition-all border border-white/10"
          >
            Conheça Nossos Cursos
          </button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <span className="material-symbols-outlined text-white/40 !text-3xl">expand_more</span>
      </div>
    </div>
  );
};

export default Hero;