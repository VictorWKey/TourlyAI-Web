import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Play, BarChart3, Shield, Target } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-surface-950">
      {/* Background glow effects */}
      <div className="hero-glow bg-primary-400 top-[-200px] left-[-100px]" />
      <div className="hero-glow bg-accent-400 bottom-[-200px] right-[-100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,white_70%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#09090b_70%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] text-surface-900 dark:text-white">
              {t('hero.title1')}{' '}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>{' '}
              {t('hero.title2')}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-surface-500 dark:text-surface-400 leading-relaxed max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/victorwkey/TourlyAI/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 text-base font-semibold rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                {t('hero.cta')}
              </a>
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl border-2 border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-200 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Play size={18} className="fill-current" />
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 flex gap-8 md:gap-12"
            >
              {[
                { icon: BarChart3, value: '10K+', label: t('hero.stats.reviews') },
                { icon: Target, value: '95%', label: t('hero.stats.accuracy') },
                { icon: Shield, value: '🔒', label: t('hero.stats.privacy') },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-1.5 text-2xl font-bold text-surface-900 dark:text-white">
                    {stat.value === '🔒' ? (
                      <span>{stat.value}</span>
                    ) : (
                      <>
                        <stat.icon size={20} className="text-primary-500" />
                        <span>{stat.value}</span>
                      </>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-surface-500 dark:text-surface-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Hero image / App preview */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Big logo + app screenshot container */}
            <div className="relative">
              {/* Decorative glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />

              {/* Main screenshot frame */}
              <div className="relative rounded-2xl overflow-hidden screenshot-shadow bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-surface-400 dark:text-surface-500 font-medium">TourlyAI</span>
                  </div>
                </div>

                {/* Screenshot image placeholder */}
                <img
                  src="/images/screenshots/hero-dashboard.png"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/screenshots/hero-dashboard.svg'; }}
                  alt="TourlyAI Dashboard"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>

              {/* Floating logo badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-white dark:bg-surface-800 shadow-xl border border-surface-200 dark:border-surface-700 flex items-center justify-center p-2"
              >
                <img src="/images/logos/icon-512.png" alt="TourlyAI" className="w-full h-full object-contain" />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl bg-white dark:bg-surface-800 shadow-xl border border-surface-200 dark:border-surface-700"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                    <BarChart3 size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-surface-500 dark:text-surface-400">Sentiment</p>
                    <p className="text-sm font-bold text-surface-900 dark:text-white">92% Positive</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-surface-400 dark:text-surface-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
