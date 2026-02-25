import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Heart,
  Lightbulb,
  Tags,
  FileText,
  BarChart3,
  Shield,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';

const featureIcons = [Heart, Lightbulb, Tags, FileText, BarChart3, Shield, MessageSquare, TrendingUp];
const featureColors = [
  'from-red-500 to-rose-500',
  'from-purple-500 to-violet-500',
  'from-blue-500 to-cyan-500',
  'from-amber-500 to-yellow-500',
  'from-emerald-500 to-teal-500',
  'from-indigo-500 to-blue-500',
  'from-pink-500 to-rose-500',
  'from-orange-500 to-amber-500',
];
const featureBgs = [
  'bg-red-50 dark:bg-red-950/30',
  'bg-purple-50 dark:bg-purple-950/30',
  'bg-blue-50 dark:bg-blue-950/30',
  'bg-amber-50 dark:bg-amber-950/30',
  'bg-emerald-50 dark:bg-emerald-950/30',
  'bg-indigo-50 dark:bg-indigo-950/30',
  'bg-pink-50 dark:bg-pink-950/30',
  'bg-orange-50 dark:bg-orange-950/30',
];

const featureKeys = [
  'sentiment',
  'topics',
  'categories',
  'summaries',
  'visualizations',
  'privacy',
  'subjectivity',
  'insights',
] as const;

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={<SectionBadge>{t('features.badge')}</SectionBadge>}
          title={t('features.title')}
          highlight={t('features.titleHighlight')}
          subtitle={t('features.subtitle')}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${featureBgs[i]}`}
                >
                  <Icon className={`h-6 w-6 bg-gradient-to-br ${featureColors[i]} bg-clip-text`} style={{ color: `var(--tw-gradient-from)` }} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(`features.${key}.description`)}
                </p>
                {/* Hover glow */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-primary-500 to-accent-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
