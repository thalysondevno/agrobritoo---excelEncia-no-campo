"use client";

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../src/integrations/supabase/client'; // Caminho corrigido
import { useSession } from '../src/components/SessionContextProvider';
import { ViewState } from '../App';

interface LoginViewProps {
  onBack: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onBack }) => {
  const { session } = useSession();

  useEffect(() => {
    if (session) {
      onBack(); 
    }
  }, [session, onBack]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-bg-dark">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <button 
            onClick={onBack}
            className="mx-auto mb-6 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/excel-insights-n8l3f.firebasestorage.app/o/869x191_branca.png?alt=media&token=443414b4-b7fd-45d6-a441-82d27224ff76" 
              alt="Agrobritoo Logo" 
              className="h-40 w-auto" 
            />
          </button>
          <h1 className="text-3xl font-black text-white">Área do Aluno</h1>
          <p className="text-text-muted">Acesse seus treinamentos e materiais exclusivos.</p>
        </div>

        <div className="glass p-10 rounded-[2.5rem] border border-border-dark shadow-2xl space-y-6">
          <Auth
            supabaseClient={supabase}
            providers={[]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#46ec13',
                    brandAccent: '#8fff6b',
                    inputBackground: '#1e271c',
                    inputBorder: '#2c3928',
                    inputPlaceholder: '#a3b99d',
                    inputText: '#ffffff',
                    messageBackground: '#1e271c',
                    messageText: '#ffffff',
                    messageAction: '#46ec13',
                    dividerBackground: '#2c3928',
                    anchorTextColor: '#46ec13',
                    anchorTextHoverColor: '#8fff6b',
                  },
                },
              },
            }}
            theme="dark"
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Seu e-mail',
                  password_label: 'Sua senha',
                  email_input_placeholder: 'aluno@agro.com',
                  password_input_placeholder: '••••••••',
                  button_label: 'Acessar Plataforma',
                  link_text: 'Já tem uma conta? Faça login',
                },
                sign_up: {
                  email_label: 'Seu e-mail',
                  password_label: 'Crie uma senha',
                  email_input_placeholder: 'aluno@agro.com',
                  password_input_placeholder: '••••••••',
                  button_label: 'Criar Conta',
                  link_text: 'Não tem uma conta? Crie uma',
                },
                forgotten_password: {
                  email_label: 'Seu e-mail',
                  password_reset_button_label: 'Enviar link de recuperação',
                  link_text: 'Esqueceu sua senha?',
                  email_input_placeholder: 'aluno@agro.com',
                },
                update_password: {
                  password_label: 'Nova senha',
                  password_input_placeholder: '••••••••',
                  button_label: 'Atualizar senha',
                },
                magic_link: {
                  email_input_placeholder: 'aluno@agro.com',
                  button_label: 'Enviar link mágico',
                  link_text: 'Enviar um link mágico por e-mail',
                },
              },
            }}
          />
        </div>

        <p className="text-center mt-8 text-sm text-text-muted">
          Ainda não é aluno? <button onClick={onBack} className="text-primary font-bold hover:underline">Ver cursos disponíveis</button>
        </p>
      </div>
    </div>
  );
};

export default LoginView;