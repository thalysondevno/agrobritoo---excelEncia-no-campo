"use client";

import React from 'react';
import { useSession } from '../components/SessionContextProvider';
import { supabase } from '../integrations/supabase/client';

interface DashboardViewProps {
  onBack: () => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ onBack }) => {
  const { session } = useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onBack(); // Redireciona para a home após o logout
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-bg-dark text-white">
      <div className="max-w-4xl mx-auto glass p-10 rounded-[2.5rem] border border-border-dark shadow-2xl">
        <h1 className="text-4xl font-black text-white mb-6">Bem-vindo ao Dashboard, {user?.email}!</h1>
        <p className="text-text-muted mb-8">Aqui você pode gerenciar seus blogs e cursos.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-2xl border border-primary/20 space-y-4">
            <h2 className="text-2xl font-bold text-white">Gerenciar Blogs</h2>
            <p className="text-text-muted">Crie, edite e publique seus posts do blog.</p>
            <button className="w-full py-3 bg-primary text-bg-dark font-black rounded-xl hover:bg-secondary transition-all">
              Criar Novo Blog
            </button>
            <button className="w-full py-3 glass border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
              Ver Meus Blogs
            </button>
          </div>

          <div className="glass p-6 rounded-2xl border border-primary/20 space-y-4">
            <h2 className="text-2xl font-bold text-white">Gerenciar Cursos</h2>
            <p className="text-text-muted">Adicione, atualize e gerencie seus cursos.</p>
            <button className="w-full py-3 bg-primary text-bg-dark font-black rounded-xl hover:bg-secondary transition-all">
              Criar Novo Curso
            </button>
            <button className="w-full py-3 glass border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
              Ver Meus Cursos
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button 
            onClick={handleLogout}
            className="text-red-500 font-bold hover:underline"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;