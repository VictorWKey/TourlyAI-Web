import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download, Github, Sparkles, BarChart3, Brain, Languages } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function Hero() {
  const { t } = useTranslation();

  const stats = [
    { icon: BarChart3, value: 10000, suffix: '+', label: t('hero.statsReviews') },
    { icon: Brain, value: 7, label: t('hero.statsPhases') },
    { icon: Sparkles, value: 4, label: t('hero.statsModels') },
    { icon: Languages, value: 2, label: t('hero.statsLanguages') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-40 dark:opacity-20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-400/20 dark:bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-950/50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:text-primary-300 mb-6"
            >
              <Sparkles className="h-4 w-4" />
              {t('hero.badge')}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
            >
              {t('hero.title')}{' '}
              <span className="gradient-text">{t('hero.titleHighlight')}</span>{' '}
              {t('hero.titleEnd')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/victorwkey/TourlyAI/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-primary-600/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="h-5 w-5" />
                {t('hero.cta')}
              </a>
              <a
                href="https://github.com/victorwkey/TourlyAI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Github className="h-5 w-5" />
                {t('hero.ctaSecondary')}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-5 w-5 text-primary-500 mx-auto mb-1" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-2xl" />
              {/* Screenshot */}
              <img
                src="/images/hero-dashboard.png"
                alt="TourlyAI Dashboard"
                className="relative screenshot-frame w-full rounded-xl"
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50">
                    <BarChart3 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">87% Positive</div>
                    <div className="text-xs text-gray-500">Sentiment Score</div>
                  </div>
                </div>
              </motion.div>
              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 rounded-xl bg-white dark:bg-gray-800 p-3 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">7 AI Phases</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
