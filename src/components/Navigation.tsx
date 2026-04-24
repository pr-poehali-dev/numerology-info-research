import { useState } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'calculator', label: 'Калькулятор' },
  { id: 'meanings', label: 'Числа Судьбы' },
  { id: 'learning', label: 'Обучение' },
  { id: 'articles', label: 'Статьи' },
  { id: 'about', label: 'О проекте' },
  { id: 'contacts', label: 'Контакты' },
];

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ 
      background: 'linear-gradient(180deg, rgba(8,12,26,0.98) 0%, rgba(8,12,26,0.85) 100%)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(201,168,76,0.15)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-gold/40 group-hover:border-gold/80 transition-colors" />
              <span className="text-gold font-cormorant font-bold text-lg leading-none">∞</span>
            </div>
            <span className="font-cormorant text-gold-light font-semibold text-lg hidden sm:block tracking-wider">
              Числа Судьбы
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-2 text-sm font-golos tracking-wide transition-all duration-300 rounded-md
                  ${activeSection === item.id
                    ? 'text-gold border-b border-gold/60'
                    : 'text-foreground/60 hover:text-gold/80'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gold/70 hover:text-gold transition-colors p-2"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gold/10" style={{ background: 'rgba(8,12,26,0.98)' }}>
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left px-4 py-3 text-sm font-golos tracking-wide transition-all duration-200 rounded-lg
                  ${activeSection === item.id
                    ? 'text-gold bg-gold/5 border border-gold/20'
                    : 'text-foreground/60 hover:text-gold/80 hover:bg-white/3'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
