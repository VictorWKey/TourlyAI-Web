import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Placeholder – user will replace with actual screenshot
import dashboardImg from '@/assets/screenshots/hero-dashboard.png';

export function Hero() {
  const { t } = useTranslation();

  const stats = [
    { value: t('hero.stat1Value'), label: t('hero.stat1Label') },
    { value: t('hero.stat2Value'), label: t('hero.stat2Label') },
    { value: t('hero.stat3Value'), label: t('hero.stat3Label') },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient pt-24 pb-16 sm:pt-32 sm:pb-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-600/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-accent-400/10 blur-3xl dark:bg-accent-600/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 px-4 py-1.5 text-sm font-medium text-primary-700 backdrop-blur-sm dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t('hero.title1')}{' '}
            <span className="gradient-text">{t('hero.titleHighlight')}</span>{' '}
            {t('hero.title2')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button
              variant="primary"
              size="lg"
              href="https://github.com/victorwkey/TourlyAI/releases/latest"
            >
              <Download className="h-5 w-5" />
              {t('hero.cta')}
            </Button>
            <Button variant="secondary" size="lg" href="#how-it-works">
              {t('hero.ctaSecondary')}
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex gap-8 sm:gap-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* App screenshot mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="relative">
              {/* Glow behind mockup */}
              <div className="absolute -inset-4 rounded-2xl bg-linear-to-r from-primary-500/20 to-accent-500/20 blur-2xl" />

              {/* Window chrome */}
              <div className="relative overflow-hidden rounded-xl border border-gray-200/50 bg-white shadow-2xl dark:border-gray-700/50 dark:bg-gray-900">
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-gray-200/50 bg-gray-100/80 px-4 py-3 dark:border-gray-700/50 dark:bg-gray-800/80">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-gray-400 dark:text-gray-500">TourlyAI</span>
                </div>
                {/* Screenshot */}
                <img
                  src={dashboardImg}
                  alt="TourlyAI Dashboard"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
