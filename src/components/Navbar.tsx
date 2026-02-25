import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = ['features', 'howItWorks', 'demo', 'gallery'] as const;

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('tourlyai-lang', newLang);
  };

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-surface-200/50 dark:border-surface-700/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 cursor-pointer">
              <img
                src="/images/logos/logo-primary-horizontal.png"
                alt="TourlyAI"
                className="h-8 dark:hidden"
              />
              <img
                src="/images/logos/logo-white-horizontal.png"
                alt="TourlyAI"
                className="h-8 hidden dark:block"
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="px-4 py-2 text-sm font-medium text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="p-2 rounded-lg text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer"
                title={i18n.language === 'en' ? 'Español' : 'English'}
              >
                <Globe size={18} />
                <span className="ml-1 text-xs font-semibold uppercase">{i18n.language}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="https://github.com/victorwkey/TourlyAI/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow-sm"
              >
                {t('nav.download')}
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 cursor-pointer"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-surface-200/50 dark:border-surface-700/50 md:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg transition-colors cursor-pointer"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
              <a
                href="https://github.com/victorwkey/TourlyAI/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-2 px-4 py-3 text-base font-semibold rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                {t('nav.download')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
