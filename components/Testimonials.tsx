import React from 'react';

const testimonials = [
  {
    name: "Carlos Henrique",
    role: "Produtor Rural – GO",
    text: "Eu já tinha alguma noção, mas sempre ficava inseguro na hora de aplicar no campo. O material do Agrobritoo ajudou a organizar o raciocínio e evitar erros simples que custam caro. Hoje faço as decisões com muito mais segurança.",
    avatar: "https://i.pravatar.cc/150?u=carlos"
  },
  {
    name: "André Luiz",
    role: "Técnico Agropecuário – MG",
    text: "O conteúdo é direto e sem enrolação. Não é coisa de faculdade, é coisa do dia a dia mesmo. Uso bastante como consulta rápida quando surge dúvida no manejo.",
    avatar: "https://i.pravatar.cc/150?u=andre"
  },
  {
    name: "Paula Nogueira",
    role: "Estudante da área animal",
    text: "O diferencial pra mim foi a forma de explicar. Dá pra entender e aplicar, mesmo quem ainda está em formação. Já me ajudou muito em estágio e na rotina prática.",
    avatar: "https://i.pravatar.cc/150?u=paula"
  },
  {
    name: "Rafael Costa",
    role: "Consultor em Produção Animal",
    text: "Tem muita informação na internet, mas pouca coisa confiável e prática. No Agrobritoo eu sei que o conteúdo é técnico, mas adaptado pra realidade do campo.",
    avatar: "https://i.pravatar.cc/150?u=rafael"
  },
  {
    name: "João Victor",
    role: "Produtor – PI",
    text: "Uso os ebooks como apoio no trabalho. Não substitui a experiência, mas ajuda demais a evitar decisões erradas e ganhar tempo.",
    avatar: "https://i.pravatar.cc/150?u=joao"
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
                {/* Avatar removed as requested */}
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