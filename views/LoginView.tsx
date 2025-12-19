
import React from 'react';

interface LoginViewProps {
  onBack: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div 
            onClick={onBack}
            className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 cursor-pointer hover:bg-primary hover:text-bg-dark transition-all"
          >
            <span className="material-symbols-outlined !text-3xl">spa</span>
          </div>
          <h1 className="text-3xl font-black text-white">Área do Aluno</h1>
          <p className="text-text-muted">Acesse seus treinamentos e materiais exclusivos.</p>
        </div>

        <div className="glass p-10 rounded-[2.5rem] border border-border-dark shadow-2xl space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-text-muted">E-mail</label>
            <input type="email" className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-4 text-white outline-none focus:border-primary transition-all" placeholder="aluno@agro.com" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Senha</label>
              <button className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">Esqueci a senha</button>
            </div>
            <input type="password" className="w-full bg-white/5 border border-border-dark rounded-xl px-5 py-4 text-white outline-none focus:border-primary transition-all" placeholder="••••••••" />
          </div>

          <button className="w-full py-5 bg-primary text-bg-dark font-black rounded-xl hover:bg-secondary transition-all shadow-lg shadow-primary/20">
            Acessar Plataforma
          </button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest">
              <span className="bg-card-dark px-4 text-white/20">ou</span>
            </div>
          </div>

          <button className="w-full py-4 glass border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
            Continuar com Google
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-text-muted">
          Ainda não é aluno? <button onClick={onBack} className="text-primary font-bold hover:underline">Ver cursos disponíveis</button>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
