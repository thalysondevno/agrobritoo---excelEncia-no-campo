import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Solutions from './components/Solutions';
import Authority from './components/Authority';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MentorshipView from './views/MentorshipView';
import CheckoutView from './views/CheckoutView';
import LoginView from './views/LoginView';
import DashboardView from './src/views/DashboardView';
import CreateBlogView from './src/views/CreateBlogView';
import CreateCourseView from './src/views/CreateCourseView';
import BlogListView from './src/views/BlogListView';
import BlogPostView from './src/views/BlogPostView';
import { SessionContextProvider, useSession } from './src/components/SessionContextProvider';

export type ViewState = 'home' | 'mentorship' | 'checkout' | 'login' | 'dashboard' | 'createBlog' | 'createCourse' | 'blogList' | 'blogPost';

const AppContent: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const { session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (session && currentView === 'login') {
      setCurrentView('dashboard');
    } else if (!session && (currentView === 'dashboard' || currentView === 'createBlog' || currentView === 'createCourse')) {
      setCurrentView('home');
    }
  }, [session, currentView]);

  const navigateTo = (view: ViewState, item?: any, blogId?: string) => {
    setCurrentView(view);
    if (item) setSelectedItem(item);
    if (blogId) setSelectedBlogId(blogId);
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
      case 'dashboard':
        if (!session) {
          return <LoginView onBack={() => navigateTo('home')} />;
        }
        return <DashboardView onBack={() => navigateTo('home')} navigateTo={navigateTo} />;
      case 'createBlog':
        if (!session) {
          return <LoginView onBack={() => navigateTo('home')} />;
        }
        return <CreateBlogView onBack={() => navigateTo('dashboard')} />;
      case 'createCourse':
        if (!session) {
          return <LoginView onBack={() => navigateTo('home')} />;
        }
        return <CreateCourseView onBack={() => navigateTo('dashboard')} />;
      case 'blogList':
        return <BlogListView onBack={() => navigateTo('home')} navigateToBlogPost={(id) => navigateTo('blogPost', undefined, id)} />;
      case 'blogPost':
        if (!selectedBlogId) {
          return <BlogListView onBack={() => navigateTo('home')} navigateToBlogPost={(id) => navigateTo('blogPost', undefined, id)} />;
        }
        return <BlogPostView blogId={selectedBlogId} onBack={() => navigateTo('blogList')} />;
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
    </div>
  );
};

const App: React.FC = () => (
  <SessionContextProvider>
    <AppContent />
  </SessionContextProvider>
);

export default App;