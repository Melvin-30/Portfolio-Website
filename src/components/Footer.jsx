import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { personalInfo, socialLinks } from '../data/socialLinks';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-theme bg-card/50 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom font-mono text-xs font-bold">
                {personalInfo.initials}
              </span>
              <span className="font-bold text-sm tracking-tight text-primary-custom">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-secondary-custom max-w-sm">
              Computer Engineering Student & Software Developer. Focused on building genuine, practical solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks
              .filter((item) => item.available && item.url)
              .map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 rounded-xl border border-theme bg-card hover:bg-card-hover text-secondary-custom hover:text-primary-custom flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                >
                  {item.icon === 'Github' ? (
                    <GithubIcon className="w-4 h-4" />
                  ) : item.icon === 'Linkedin' ? (
                    <LinkedinIcon className="w-4 h-4" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </a>
              ))}

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl border border-theme bg-card hover:bg-card-hover text-secondary-custom hover:text-primary-custom flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-theme flex flex-col sm:flex-row items-center justify-between text-xs text-muted-custom gap-3">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
