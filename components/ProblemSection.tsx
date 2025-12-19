
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <div className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
            <span className="material-symbols-outlined !text-lg">error</span>
            O Problema
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            O campo não aceita erros. <br />
            <span className="text-text-muted">Falhas custam caro.</span>
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl text-text-muted border-l-4 border-primary/50 pl-6 py-2 leading-relaxed">
              Falhas na nutrição ou sanidade custam caro. O Agrobritoo traz a segurança técnica da Zootecnia traduzida em guias práticos para sua tomada de decisão. Pare de perder dinheiro por falta de conhecimento técnico.
            </p>
            
            <ul className="space-y-4">
              {[
                'Segurança na tomada de decisão',
                'Técnicas validadas cientificamente',
                'Linguagem acessível para o produtor'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white font-medium">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border-dark group aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=800" 
              alt="Gado Nelore no pasto" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">grass</span>
              <span className="text-white font-bold text-lg">Manejo Eficiente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
