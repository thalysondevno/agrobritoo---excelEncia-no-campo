import React, { useState } from 'react';
import { ViewState } from '../App';

interface HeaderProps {
  scrolled: boolean;
  setView: (view: ViewState, item?: any, blogId?: string) => void;
  currentView: ViewState;
}

const Header: React.FC<HeaderProps> = ({ scrolled, setView, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (view: ViewState) => {
    setView(view);
    setIsMenuOpen(false);
  };

  const handleScrollNav = (id: string) => {
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-bg-dark/80 backdrop-blur-lg border-b border-border-dark py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          className="flex items-center group cursor-pointer"
          onClick={() => handleNav('home')}
        >
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/excel-insights-n8l3f.firebasestorage.app/o/869x191_branca.png?alt=media&token=443414b4-b7fd-45d6-a441-82d27224ff76" 
            alt="Agrobritoo Logo" 
            className="h-20 w-auto" 
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button onClick={() => handleNav('home')} className="text-white/80 hover:text-primary font-medium text-sm transition-colors">Início</button>
          <button onClick={() => handleScrollNav('cursos')} className="text-white/80 hover:text-primary font-medium text-sm transition-colors">Cursos</button>
          <button onClick={() => handleNav('blogList')} className="text-white/80 hover:text-primary font-medium text-sm transition-colors">Blog</button> {/* Novo link para o blog */}
          <button onClick={() => handleScrollNav('sobre')} className="text-white/80 hover:text-primary font-medium text-sm transition-colors">Sobre</button>
          <button 
            onClick={() => handleNav('login')}
            className="bg-primary hover:bg-secondary text-bg-dark font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            Entrar
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined !text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bg-dark z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => handleNav('home')} className="text-white text-3xl font-bold hover:text-primary transition-colors">Início</button>
        <button onClick={() => handleScrollNav('cursos')} className="text-white text-3xl font-bold hover:text-primary transition-colors">Cursos</button>
        <button onClick={() => handleNav('blogList')} className="text-white text-3xl font-bold hover:text-primary transition-colors">Blog</button> {/* Novo link para o blog */}
        <button onClick={() => handleScrollNav('sobre')} className="text-white text-3xl font-bold hover:text-primary transition-colors">Sobre</button>
        <button 
          onClick={() => handleNav('login')}
          className="bg-primary text-bg-dark font-bold px-10 py-4 rounded-xl text-xl mt-4"
        >
          Entrar agora
        </button>
      </div>
    </header>
  );
};

export default Header;