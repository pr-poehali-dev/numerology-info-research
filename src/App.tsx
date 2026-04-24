import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import CalculatorPage from '@/pages/CalculatorPage';
import MeaningsPage from '@/pages/MeaningsPage';
import LearningPage from '@/pages/LearningPage';
import ArticlesPage from '@/pages/ArticlesPage';
import AboutPage from '@/pages/AboutPage';
import ContactsPage from '@/pages/ContactsPage';

type Section = 'home' | 'calculator' | 'meanings' | 'learning' | 'articles' | 'about' | 'contacts';

const App = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const navigate = (id: string) => {
    setActiveSection(id as Section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--deep-navy)' }}>
      <Toaster />
      {/* Starfield background */}
      <StarField />

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={navigate} />

      {/* Pages */}
      <main className="relative z-10">
        {activeSection === 'home' && <HomePage onNavigate={navigate} />}
        {activeSection === 'calculator' && <CalculatorPage />}
        {activeSection === 'meanings' && <MeaningsPage />}
        {activeSection === 'learning' && <LearningPage />}
        {activeSection === 'articles' && <ArticlesPage />}
        {activeSection === 'about' && <AboutPage />}
        {activeSection === 'contacts' && <ContactsPage />}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t py-10 px-4" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gold font-cormorant text-xl">∞</span>
              <span className="font-cormorant text-foreground/50 tracking-wider">Числа Судьбы</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'calculator', label: 'Калькулятор' },
                { id: 'meanings', label: 'Числа' },
                { id: 'learning', label: 'Обучение' },
                { id: 'articles', label: 'Статьи' },
                { id: 'about', label: 'О проекте' },
                { id: 'contacts', label: 'Контакты' },
              ].map(s => (
                <button key={s.id} onClick={() => navigate(s.id)}
                  className="font-golos text-xs text-foreground/35 hover:text-gold/70 transition-colors tracking-wide">
                  {s.label}
                </button>
              ))}
            </div>
            <p className="font-golos text-xs text-foreground/25">© 2026 Числа Судьбы</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
