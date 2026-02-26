import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Heart,
  Tags,
  Sparkles,
  FileText,
  TrendingUp,
  FileBarChart,
  LayoutDashboard,
  Search,
} from 'lucide-react';

const features = [
  { key: 'sentiment', icon: Heart, color: 'from-rose-500 to-pink-500', bg: 'bg-rose-50 dark:bg-rose-950/30' },
  { key: 'categories', icon: Tags, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { key: 'topics', icon: Sparkles, color: 'from-violet-500 to-purple-500', bg: 'bg-violet-50 dark:bg-violet-950/30' },
  { key: 'summaries', icon: FileText, color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { key: 'insights', icon: TrendingUp, color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  { key: 'reports', icon: FileBarChart, color: 'from-indigo-500 to-blue-500', bg: 'bg-indigo-50 dark:bg-indigo-950/30' },
  { key: 'visualizations', icon: LayoutDashboard, color: 'from-cyan-500 to-sky-500', bg: 'bg-cyan-50 dark:bg-cyan-950/30' },
  { key: 'reviews', icon: Search, color: 'from-fuchsia-500 to-pink-500', bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30' },
];

export default function Features() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 text-sm font-medium text-primary-700 dark:text-primary-300 mb-4">
            {t('features.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-surface-900 dark:text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-surface-500 dark:text-surface-400">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 hover:border-primary-300 dark:hover:border-primary-700 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-current" style={{ color: feature.key === 'sentiment' ? '#f43f5e' : feature.key === 'categories' ? '#3b82f6' : feature.key === 'topics' ? '#8b5cf6' : feature.key === 'summaries' ? '#10b981' : feature.key === 'insights' ? '#f59e0b' : feature.key === 'reports' ? '#6366f1' : feature.key === 'visualizations' ? '#06b6d4' : '#d946ef' }} />
              </div>
              <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-2">
                {t(`features.${feature.key}.title`)}
              </h3>
              <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
                {t(`features.${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
