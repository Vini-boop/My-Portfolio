import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail, Home, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg shadow-slate-900/10' 
        : 'bg-white/90 backdrop-blur-md border-b border-white/20'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/logo.png" 
              alt="Vincent Makori Logo" 
              className="h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 group ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100/50' 
                    : 'text-slate-800 hover:text-cyan-600 hover:bg-white/20'
                }`}
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Hire Me
            </a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-800 hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border border-slate-200/50 rounded-lg shadow-lg mb-4 p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:text-cyan-600 hover:bg-slate-100/50 rounded-lg transition-colors group"
              >
                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <a
                href="#contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center block"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;