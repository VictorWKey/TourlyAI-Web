import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, Play, Star, BarChart3, Languages, Layers } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import type { Theme } from '@/App';

interface HeroProps {
  theme: Theme;
}

const stats = [
  { icon: Star, valueKey: '10,000+', labelKey: 'hero.stats.reviews' },
  { icon: BarChart3, valueKey: '12', labelKey: 'hero.stats.categories' },
  { icon: Languages, valueKey: '6', labelKey: 'hero.stats.languages' },
  { icon: Layers, valueKey: '9', labelKey: 'hero.stats.phases' },
];

export default function Hero({ theme }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-linear-to-br from-primary-400/20 to-accent-400/20 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-linear-to-tr from-accent-400/15 to-primary-400/15 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-linear-to-r from-primary-500/5 to-accent-500/5 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Big Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6, type: 'spring' }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <img
                src={theme === 'dark' ? '/images/logos/logo-white-horizontal.png' : '/images/logos/logo-primary-horizontal.png'}
                alt="TourlyAI"
                className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-lg"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">{t('hero.badge')}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-surface-900 dark:text-white">{t('hero.title1')}</span>
              <br />
              <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-surface-500 dark:text-surface-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://drive.google.com/file/d/1J4l4lg7lu2E5UG2vjO-T5oS9ogq34mNb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-linear-to-r from-primary-500 to-accent-500 rounded-2xl hover:from-primary-600 hover:to-accent-600 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                {t('hero.cta')}
              </a>
              <button
                onClick={() => document.querySelector('#video')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-surface-700 dark:text-surface-200 bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-2xl hover:border-primary-300 dark:hover:border-primary-600 hover:bg-surface-50 dark:hover:bg-surface-700 shadow-lg shadow-black/5 transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 text-primary-500 transition-transform group-hover:scale-110" />
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>
          </motion.div>

          {/* Right: App screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40 border border-surface-200 dark:border-surface-700 animate-pulse-glow">
              <AppImage
                src="/images/screenshots/hero-dashboard.png"
                alt="TourlyAI Dashboard"
                className="w-full h-auto"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary-500/5 to-transparent pointer-events-none" />
            </div>

            {/* Floating logo badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring' }}
              className="hidden sm:block absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white dark:bg-surface-800 shadow-xl shadow-black/10 border border-surface-200 dark:border-surface-700"
            >
              <img
                src={theme === 'dark' ? '/images/logos/logo-white.png' : '/images/logos/logo-black.png'}
                alt="TourlyAI"
                className="w-12 h-12"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-white/50 dark:bg-surface-800/50 backdrop-blur-sm border border-surface-200/50 dark:border-surface-700/50"
            >
              <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-surface-900 dark:text-white">{stat.valueKey}</div>
              <div className="text-sm text-surface-500 dark:text-surface-400 mt-1">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
