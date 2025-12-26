import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './language-switcher.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <span className="language-switcher__flag">{currentLanguage.flag}</span>
        <span className="language-switcher__name">{currentLanguage.name}</span>
        <span className={`language-switcher__arrow ${isOpen ? 'language-switcher__arrow--up' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="language-switcher__dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-switcher__option ${
                i18n.language === lang.code ? 'language-switcher__option--active' : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-switcher__flag">{lang.flag}</span>
              <span className="language-switcher__name">{lang.name}</span>
              {i18n.language === lang.code && (
                <i className="icon-check"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

