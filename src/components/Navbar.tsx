import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Sun, Moon, Globe, ChevronDown, Check, Inbox } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { MsrLogo } from './MsrLogo';

interface NavbarProps {
  onOpenAiAssistant: () => void;
  onOpenAdminInbox?: () => void;
  activeSection: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAiAssistant,
  onOpenAdminInbox,
  activeSection,
  language,
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language].nav;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { href: '#about', label: t.about },
    { href: '#roles', label: t.pillars },
    { href: '#demos', label: t.demos },
    { href: '#projects', label: t.projects },
    { href: '#skills', label: t.skills },
    { href: '#contact', label: t.contact },
  ];

  const languagesList: { code: Language; label: string; flag: string; nativeName: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
    { code: 'fr', label: 'Français', flag: '🇫🇷', nativeName: 'French' },
    { code: 'sw', label: 'Kiswahili', flag: '🇰🇪', nativeName: 'Swahili' },
  ];

  const currentLangObj = languagesList.find((l) => l.code === language) || languagesList[0];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F2]/90 dark:bg-[#1A1A1A]/90 backdrop-blur-md border-b border-[#D6CCC2] dark:border-stone-800 text-[#1A1A1A] dark:text-[#F8F5F2] shadow-sm py-3'
          : 'bg-[#F8F5F2]/80 dark:bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-[#D6CCC2]/60 dark:border-stone-800/60 text-[#1A1A1A] dark:text-[#F8F5F2] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" id="nav-brand-link" className="flex items-center gap-3 group">
            <MsrLogo size="md" />
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg sm:text-xl tracking-tight uppercase text-[#1A1A1A] dark:text-[#F8F5F2] group-hover:text-[#5A5A40] transition-colors">
                Mubaarakah Rashid
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#5A5A40] dark:text-stone-400 font-medium">
                {t.location}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#EFEDE8] dark:bg-stone-900/80 p-1.5 rounded-full border border-[#D6CCC2] dark:border-stone-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#5A5A40] text-white shadow-sm'
                      : 'text-[#4A4A4A] dark:text-stone-300 hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#F5F2ED] dark:hover:bg-stone-800'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="language-switcher-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#EFEDE8] dark:bg-stone-800 hover:bg-[#D6CCC2]/50 text-[#1A1A1A] dark:text-stone-200 border border-[#D6CCC2] dark:border-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors"
                title="Select language"
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5 text-[#5A5A40] dark:text-amber-200" />
                <span className="text-sm leading-none">{currentLangObj.flag}</span>
                <span className="text-[11px] font-bold">{currentLangObj.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 text-[#5A5A40] transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-[#5A5A40] dark:text-stone-400 border-b border-[#D6CCC2]/50 dark:border-stone-800 mb-1">
                    Select Language / Lugha
                  </div>
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-[#F5F2ED] dark:hover:bg-stone-800 text-xs transition-colors ${
                        language === lang.code
                          ? 'font-bold text-[#5A5A40] dark:text-amber-200 bg-[#EFEDE8]/60 dark:bg-stone-800/60'
                          : 'text-[#1A1A1A] dark:text-stone-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </div>
                      {language === lang.code && <Check className="w-3.5 h-3.5 text-[#5A5A40] dark:text-amber-200" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Switch */}
            <div className="flex items-center">
              <button
                id="theme-toggle-switch"
                onClick={() => setDarkMode(!darkMode)}
                className="relative flex items-center p-1 rounded-full bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-xs font-semibold tracking-wider transition-all duration-300 hover:border-[#5A5A40] dark:hover:border-amber-300/50"
                title={darkMode ? "Switch to Warm Organic theme" : "Switch to High-Contrast Dark mode"}
                aria-label="Toggle theme mode"
              >
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-200 ${
                    !darkMode
                      ? 'bg-[#5A5A40] text-white shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Sun className={`w-3.5 h-3.5 ${!darkMode ? 'text-amber-300' : 'text-stone-400'}`} />
                  <span className="text-[10px] uppercase font-bold hidden lg:inline">Organic</span>
                </div>
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-200 ${
                    darkMode
                      ? 'bg-amber-300/20 text-amber-200 border border-amber-300/40 shadow-sm'
                      : 'text-[#5A5A40] hover:text-[#1A1A1A]'
                  }`}
                >
                  <Moon className={`w-3.5 h-3.5 ${darkMode ? 'text-amber-300' : 'text-[#5A5A40]'}`} />
                  <span className="text-[10px] uppercase font-bold hidden lg:inline">Dark</span>
                </div>
              </button>
            </div>

            {/* Admin Inbox & AI Assistant Buttons */}
            {onOpenAdminInbox && (
              <button
                id="admin-inbox-btn"
                onClick={onOpenAdminInbox}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#EFEDE8] dark:bg-stone-800 hover:bg-[#D6CCC2]/60 text-[#1A1A1A] dark:text-stone-200 border border-[#D6CCC2] dark:border-stone-700 text-xs font-semibold tracking-wider transition-all"
                title="View Admin Contact Submissions & Inbox"
              >
                <Inbox className="w-3.5 h-3.5 text-[#5A5A40] dark:text-amber-200" />
                <span className="hidden xl:inline">Inbox</span>
              </button>
            )}

            <button
              id="ai-assistant-trigger-btn"
              onClick={onOpenAiAssistant}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#5A5A40] hover:bg-[#484833] text-[#F8F5F2] text-xs font-semibold uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.aiConcierge}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenAdminInbox && (
              <button
                id="mobile-inbox-btn"
                onClick={onOpenAdminInbox}
                className="p-2 rounded-full bg-[#EFEDE8] dark:bg-stone-800 text-[#1A1A1A] dark:text-stone-200 border border-[#D6CCC2] dark:border-stone-700 text-xs font-medium"
                aria-label="Admin Inbox"
              >
                <Inbox className="w-4 h-4 text-[#5A5A40] dark:text-amber-200" />
              </button>
            )}
            <button
              id="mobile-ai-btn"
              onClick={onOpenAiAssistant}
              className="p-2 rounded-full bg-[#5A5A40] text-white text-xs font-medium"
              aria-label="AI Concierge"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#EFEDE8] text-[#1A1A1A] hover:bg-[#D6CCC2]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5F2] dark:bg-stone-900 border-b border-[#D6CCC2] dark:border-stone-800 px-6 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-serif font-medium text-[#1A1A1A] dark:text-stone-200 hover:text-[#5A5A40] hover:bg-[#EFEDE8]"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="pt-3 border-t border-[#D6CCC2] dark:border-stone-800 space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#5A5A40] dark:text-stone-400 font-bold block">
              Language / Lugha
            </span>
            <div className="grid grid-cols-3 gap-2">
              {languagesList.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 px-2 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    language === lang.code
                      ? 'bg-[#5A5A40] text-white shadow-sm'
                      : 'bg-[#EFEDE8] dark:bg-stone-800 text-[#1A1A1A] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Theme Switcher */}
          <div className="pt-3 border-t border-[#D6CCC2] dark:border-stone-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#5A5A40] dark:text-stone-400 font-bold">
                Theme / mande
              </span>
              <span className="text-[10px] uppercase font-bold text-[#5A5A40] dark:text-amber-200">
                {darkMode ? 'High-Contrast Dark' : 'Warm Organic'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setDarkMode(false)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  !darkMode
                    ? 'bg-[#5A5A40] text-white shadow-sm'
                    : 'bg-[#EFEDE8] dark:bg-stone-800 text-[#1A1A1A] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span>Warm Organic</span>
              </button>
              <button
                onClick={() => setDarkMode(true)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  darkMode
                    ? 'bg-amber-300/20 text-amber-200 border border-amber-300/40 shadow-sm'
                    : 'bg-[#EFEDE8] dark:bg-stone-800 text-[#1A1A1A] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-amber-300" />
                <span>High-Contrast</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


