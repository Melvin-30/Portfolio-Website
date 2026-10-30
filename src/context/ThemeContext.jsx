import React, { useEffect, useState } from 'react';
import { themeConfig } from '../config/theme';
import { ThemeContext, STORAGE_KEY } from './ThemeContextCore';

function getInitialTheme() {
  if (typeof window === 'undefined') return themeConfig.defaultTheme;

  if (themeConfig.persistPreference) {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark' || (saved === 'system' && themeConfig.allowSystemTheme)) {
      return saved;
    }
  }
  return themeConfig.defaultTheme;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);
  const [systemIsDark, setSystemIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Track system preference changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setSystemIsDark(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const isDark = theme === 'system' ? systemIsDark : theme === 'dark';
  const resolvedTheme = isDark ? 'dark' : 'light';

  // Apply class to HTML element & save preference
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (themeConfig.persistPreference) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme, isDark]);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const currentResolved = prev === 'system' ? (systemIsDark ? 'dark' : 'light') : prev;
      return currentResolved === 'dark' ? 'light' : 'dark';
    });
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
