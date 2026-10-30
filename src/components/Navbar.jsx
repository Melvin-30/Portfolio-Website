import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo, resumeConfig } from '../data/socialLinks';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-page/85 backdrop-blur-md border-b border-theme shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-lg sm:text-xl text-primary-custom"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom font-mono text-sm font-extrabold group-hover:scale-105 transition-transform duration-200">
              {personalInfo.initials}
            </span>
            <span className="hidden sm:inline font-semibold tracking-tight text-primary-custom">
              {personalInfo.name.split(' ')[0]}
              <span className="accent-color">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-teal-600 dark:text-teal-400 bg-accent-soft font-semibold'
                      : 'text-secondary-custom hover:text-primary-custom hover:bg-card-hover'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Optional Resume Button (Only rendered if actual resume is available) */}
            {resumeConfig.available && (
              <a
                href={resumeConfig.path}
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-theme bg-card hover:bg-card-hover text-primary-custom transition-colors duration-150 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-teal-500" />
                Resume
              </a>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-theme bg-card text-primary-custom hover:bg-card-hover cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl border border-theme bg-card shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-teal-600 dark:text-teal-400 bg-accent-soft font-semibold'
                        : 'text-secondary-custom hover:text-primary-custom hover:bg-card-hover'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              {resumeConfig.available && (
                <a
                  href={resumeConfig.path}
                  download
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-theme bg-subtle text-primary-custom"
                >
                  <FileText className="w-4 h-4 text-teal-500" />
                  Download Resume
                </a>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
