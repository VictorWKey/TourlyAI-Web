import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const chartCategories = [
  { key: 'sentiment', image: '/images/screenshots/chart-sentiment.png' },
  { key: 'temporal', image: '/images/screenshots/chart-temporal.png' },
  { key: 'categories', image: '/images/screenshots/chart-categories.png' },
  { key: 'radar', image: '/images/screenshots/chart-radar.png' },
  { key: 'wordcloud', image: '/images/screenshots/chart-wordcloud.png' },
  { key: 'cross', image: '/images/screenshots/chart-cross.png' },
];

export default function Dashboard() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const [activeChart, setActiveChart] = useState(0);

  return (
    <section id="dashboard" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 text-sm font-medium text-primary-700 dark:text-primary-300 mb-4">
            {t('dashboard.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-surface-900 dark:text-white mb-4">
            {t('dashboard.title')}
          </h2>
          <p className="text-lg text-surface-500 dark:text-surface-400">
            {t('dashboard.subtitle')}
          </p>
        </motion.div>

        {/* Chart selector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {chartCategories.map((chart, index) => (
            <button
              key={chart.key}
              onClick={() => setActiveChart(index)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeChart === index
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-surface-800 text-surface-600 dark:text-surface-300 border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
            >
              {t(`dashboard.charts.${chart.key}`)}
            </button>
          ))}
        </motion.div>

        {/* Main screenshot display */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/15 dark:shadow-black/40 border border-surface-200 dark:border-surface-700"
        >
          <AppImage
            src={chartCategories[activeChart].image}
            alt={t(`dashboard.charts.${chartCategories[activeChart].key}`)}
            className="w-full h-auto transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Chart thumbnails row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-3"
        >
          {chartCategories.map((chart, index) => (
            <button
              key={chart.key}
              onClick={() => setActiveChart(index)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeChart === index
                  ? 'border-primary-500 shadow-lg shadow-primary-500/20 scale-105'
                  : 'border-surface-200 dark:border-surface-700 opacity-60 hover:opacity-100 hover:border-primary-300'
              }`}
            >
              <AppImage src={chart.image} alt={t(`dashboard.charts.${chart.key}`)} className="w-full h-auto" />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
