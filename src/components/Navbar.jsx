import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="brand">Fun<span>Techz</span></a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="links-group">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>{t.navHome}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.navServices}</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>{t.navPortfolio}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.navAbout}</a>
          </div>
          <div className="actions-group">
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>{t.navContact}</a>
            <button onClick={toggleLang} className="btn btn-secondary lang-toggle" title="Toggle Language">
              {lang === 'en' ? 'BM' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="btn btn-secondary theme-toggle" title="Toggle Dark Mode" style={{padding: '0.8rem', borderRadius: '50%'}}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
