import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenContact: () => void;
  onOpenResume?: () => void;
  onItemClick?: (item: string) => void;
  isDarkTheme?: boolean;
}

export default function Navigation({ onOpenContact, onOpenResume, onItemClick, isDarkTheme = true }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About me', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Resume', id: 'resume' },
  ];

  const handleNavClick = (label: string, id: string) => {
    setMobileMenuOpen(false);
    if (id === 'resume' && onOpenResume) {
      onOpenResume();
      return;
    }
    if (id === 'portfolio' || id === 'projects') {
      const el = document.getElementById('portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onItemClick) {
      onItemClick(label);
    }
  };

  return (
    <nav className="relative z-30 select-none">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-7 lg:gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.label, item.id)}
            className={`text-sm lg:text-base font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
              isDarkTheme
                ? 'text-neutral-300 hover:text-white'
                : 'text-neutral-700 hover:text-black'
            }`}
          >
            {item.label}
          </button>
        ))}

        {/* Contact Me Button */}
        <button
          onClick={onOpenContact}
          className="bg-white text-black font-bold text-xs lg:text-sm tracking-wider uppercase px-6 lg:px-7 py-2.5 rounded-full hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
        >
          CONTACT ME
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={onOpenContact}
          className="bg-white text-black font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full hover:bg-neutral-200 transition-all shadow-sm"
        >
          CONTACT
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`p-2 rounded-lg transition-colors ${
            isDarkTheme ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-12 right-0 w-56 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 rounded-xl p-4 shadow-2xl flex flex-col gap-3 md:hidden z-50 animate-in fade-in zoom-in-95 duration-150">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.label, item.id)}
              className="text-left text-sm font-medium text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-neutral-800/80 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-neutral-800 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center bg-white text-black font-bold text-xs uppercase tracking-wider py-2.5 rounded-full hover:bg-neutral-200 transition-all"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
