import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-card border border-theme text-primary-custom hover:border-teal-500/40 hover:text-teal-500 shadow-lg transition-all duration-200 cursor-pointer hover:scale-105"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
