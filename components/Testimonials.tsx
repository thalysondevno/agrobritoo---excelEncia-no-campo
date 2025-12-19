
import React from 'react';

const testimonials = [
  {
    name: "João Pereira",
    role: "Produtor Rural - MS",
    text: "Com a mentoria do Agrobritoo, consegui reduzir a mortalidade de bezerros em 15% logo no primeiro ciclo. O conhecimento técnico traduzido pra nossa realidade é o diferencial.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Mariana Silva",
    role: "Estudante de Veterinária",
    text: "A faculdade me deu a base, mas o curso de Nutrição Estratégica me deu a confiança para prescrever dietas que realmente funcionam no campo. Vale cada centavo!",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Ricardo Mendes",
    role: "Zootecnista Consultor",
    text: "Os ebooks são meu guia de bolso. Sempre que surge uma dúvida no manejo de pastagens, recorro ao material. Simples, direto e eficiente.",
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Quem aplica, aprova.</h2>
          <p className="text-text-muted">Histórias reais de quem transformou a produtividade com o Agrobritoo.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-border-dark hover:border-primary/20 transition-colors">
              <div className="flex gap-1 text-primary mb-6">
                {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined !text-sm">star</span>)}
              </div>
              <p className="text-white/80 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-text-muted text-xs uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
