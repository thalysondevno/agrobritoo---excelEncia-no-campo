import React, { useState } from 'react';

interface MentorshipViewProps {
  onBack: () => void;
}

const MentorshipView: React.FC<MentorshipViewProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-md w-full glass p-10 rounded-[2.5rem] border border-primary/30 text-center space-y-6">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto">
            <span className="material-symbols-outlined !text-4xl">check_circle</span>
          </div>
          <h2 className="text-3xl font-black text-white">Aplicação Recebida!</h2>
          <p className="text-text-muted">Nossa equipe técnica analisará seu perfil e entraremos em contato via WhatsApp nas próximas 24 horas.</p>
          <button 
            onClick={onBack}
            className="w-full py-4 bg-primary text-bg-dark font-black rounded-xl hover:bg-secondary transition-all"
          >
            Voltar para o Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-bg-dark">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-10 hover:gap-4 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Voltar
        </button>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full glass border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              Vagas Limitadas
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Mentoria <span className="text-primary">Agrobritoo</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Não é apenas um curso. É um acompanhamento estratégico onde analisamos seus números e traçamos o caminho para a lucratividade real.
            </p>
            <div className="space-y-4">
              {[
                'Análise de viabilidade econômica',
                'Planejamento nutricional personalizado',
                'Suporte direto via WhatsApp',
                'Encontros quinzenais via Zoom'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/80">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-border-dark shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Formulário de Aplicação</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Nome Completo</label>
                <input required type="text" className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">WhatsApp</label>
                <input required type="tel" className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Tamanho do Rebanho/Animais</label>
                <select className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all">
                  <option className="bg-bg-dark">Selecione uma opção</option>
                  <option className="bg-bg-dark">de 10 a 20 animais</option>
                  <option className="bg-bg-dark">20 a 50 animais</option>
                  <option className="bg-bg-dark">50 a 100 animais</option>
                  <option className="bg-bg-dark">101 a 500 animais</option>
                  <option className="bg-bg-dark">Acima de 500 animais</option>
                  <option className="bg-bg-dark">Sou estudante/consultor</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Principal Dificuldade</label>
                <textarea className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-3 text-white focus:border-primary outline-none transition-all h-32" placeholder="Descreva seu desafio no campo..."></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-bg-dark font-black rounded-xl hover:bg-secondary transition-all shadow-lg shadow-primary/20 mt-4">
                Enviar Minha Aplicação
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipView;