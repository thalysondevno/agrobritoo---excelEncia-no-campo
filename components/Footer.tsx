import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  setView: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-[#0f140d] border-t border-border-dark pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/excel-insights-n8l3f.firebasestorage.app/o/869x191_branca.png?alt=media&token=443414b4-b7fd-45d6-a441-82d27224ff76" 
                alt="Agrobritoo Logo" 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-text-muted max-w-sm leading-relaxed">
              AgroBritoo – Educação que gera resultado no campo. Conteúdos técnicos, cursos online, treinamentos e materiais educacionais voltados à CIÊNCIA E PRÁTICA ANIMAL e medicina veterinária, produção animal e gestão no agronegócio.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full glass border border-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 transition-all">
                  <span className="sr-only">{social}</span>
                  <span className="material-symbols-outlined !text-xl">public</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setView('home')} className="text-text-muted hover:text-primary transition-colors text-sm">Blog</button></li>
              <li><button onClick={() => setView('home')} className="text-text-muted hover:text-primary transition-colors text-sm">Cursos</button></li>
              <li><button onClick={() => setView('home')} className="text-text-muted hover:text-primary transition-colors text-sm">Ebooks</button></li>
              <li><button onClick={() => setView('home')} className="text-text-muted hover:text-primary transition-colors text-sm">Sobre Nós</button></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4">
              {['Termos de Uso', 'Privacidade', 'Cookies', 'Contato'].map(item => (
                <li key={item}>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 font-medium">
          <p>Projeto educacional da DOMINE IMÓVEIS LTDA – CNPJ: 60.084.422/0001-14. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;