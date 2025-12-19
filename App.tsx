
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Solutions from './components/Solutions';
import Authority from './components/Authority';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import MentorshipView from './views/MentorshipView';
import CheckoutView from './views/CheckoutView';
import LoginView from './views/LoginView';

export type ViewState = 'home' | 'mentorship' | 'checkout' | 'login';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: ViewState, item?: any) => {
    setCurrentView(view);
    if (item) setSelectedItem(item);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'mentorship':
        return <MentorshipView onBack={() => navigateTo('home')} />;
      case 'checkout':
        return <CheckoutView item={selectedItem} onBack={() => navigateTo('home')} />;
      case 'login':
        return <LoginView onBack={() => navigateTo('home')} />;
      default:
        return (
          <>
            <section id="hero">
              <Hero onAction={() => navigateTo('mentorship')} onSeeCourses={() => {
                const el = document.getElementById('cursos');
                el?.scrollIntoView({ behavior: 'smooth' });
              }} />
            </section>
            
            <section id="problem">
              <ProblemSection />
            </section>
            
            <section id="cursos">
              <Solutions onSelect={(item) => navigateTo('checkout', item)} />
            </section>
            
            <section id="depoimentos">
              <Testimonials />
            </section>
            
            <section id="sobre">
              <Authority />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-bg-dark bg-bg-dark">
      <Header scrolled={scrolled} setView={navigateTo} currentView={currentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      {currentView === 'home' && <Footer setView={navigateTo} />}
      
      <AIAssistant />
    </div>
  );
};

export default App;
