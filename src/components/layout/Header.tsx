import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import './Header.css';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header glass">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <span className="logo-icon">G</span>
          <span className="logo-text">Guessr<span className="text-primary">Template</span></span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{t('header.play')}</NavLink>
          <NavLink to="/how-to-play" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{t('header.howToPlay')}</NavLink>
          <NavLink to="/faq" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{t('header.faq')}</NavLink>
        </nav>

        <div className="header-actions">
          <Button variant="ghost" size="sm" onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')} title="Change Language">
            <Globe size={18} />
            <span className="lang-text">{language.toUpperCase()}</span>
          </Button>
          
          <Button variant="ghost" size="sm" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <button className="burger-btn" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass ${isOpen ? 'open' : ''}`}>
        <nav className="nav-mobile">
          <NavLink to="/" onClick={toggleMenu} className="mobile-link">{t('header.play')}</NavLink>
          <NavLink to="/how-to-play" onClick={toggleMenu} className="mobile-link">{t('header.howToPlay')}</NavLink>
          <NavLink to="/faq" onClick={toggleMenu} className="mobile-link">{t('header.faq')}</NavLink>
          <NavLink to="/stats" onClick={toggleMenu} className="mobile-link">{t('header.stats')}</NavLink>
          <NavLink to="/settings" onClick={toggleMenu} className="mobile-link">{t('header.settings')}</NavLink>
        </nav>
      </div>
    </header>
  );
};
