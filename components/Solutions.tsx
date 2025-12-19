
import React from 'react';

const solutions = [
  {
    id: 1,
    title: 'Mentoria Elite: Manejo de Precisão',
    description: 'Acompanhamento individualizado de 3 meses para transformar sua fazenda em uma empresa de alta produtividade.',
    icon: 'star',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    tag: 'Mais Procurado',
    btnText: 'Quero Minha Vaga',
    price: 'Sob Consulta'
  },
  {
    id: 2,
    title: 'Curso: Nutrição Estratégica',
    description: 'Domine a formulação de dietas para gado de corte e leite, reduzindo custos e maximizando o ganho de peso.',
    icon: 'nutrition',
    img: 'https://images.unsplash.com/photo-1550828520-4cb49c929f15?auto=format&fit=crop&q=80&w=800',
    tag: 'Online',
    btnText: 'Começar Agora',
    price: 'R$ 497,00'
  },
  {
    id: 3,
    title: 'Combo de Ebooks Técnicos',
    description: 'Guia prático de Sanidade e Reprodução. O manual que todo produtor deve ter no bolso do colete.',
    icon: 'book',
    img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800',
    tag: 'Download Imediato',
    btnText: 'Garantir Acesso',
    price: 'R$ 97,00'
  }
];

interface SolutionsProps {
  onSelect: (item: any) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onSelect }) => {
  return (
    <div className="py-24 bg-[#171f15]" id="cursos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="text-primary font-bold tracking-widest uppercase text-sm">Programas Agrobritoo</div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Escolha seu caminho para a <span className="text-primary">excelência.</span></h2>
          </div>
          <p className="text-text-muted max-w-sm">
            Nossos treinamentos são focados em resultados práticos, eliminando o "juridiquês" acadêmico e focando no que funciona no curral.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item) => (
            <div 
              key={item.id} 
              className="group bg-card-dark border border-border-dark rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-[10px] font-bold text-primary uppercase tracking-tighter border border-primary/20">
                  {item.tag}
                </div>
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
                    {item.btnText}
                    <span className="material-symbols-outlined !text-xl transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
