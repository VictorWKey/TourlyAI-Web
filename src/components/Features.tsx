import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Heart,
  Search,
  Tags,
  FileText,
  BarChart3,
  Lock,
} from 'lucide-react';
import { Section, SectionHeader } from './Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

const featureKeys = ['sentiment', 'topics', 'categories', 'summaries', 'visualizations', 'privacy'] as const;

const icons = {
  sentiment: Heart,
  topics: Search,
  categories: Tags,
  summaries: FileText,
  visualizations: BarChart3,
  privacy: Lock,
};

const colors = {
  sentiment: 'from-rose-500 to-pink-500',
  topics: 'from-blue-500 to-cyan-500',
  categories: 'from-amber-500 to-orange-500',
  summaries: 'from-violet-500 to-purple-500',
  visualizations: 'from-emerald-500 to-teal-500',
  privacy: 'from-slate-500 to-zinc-500',
};

const bgColors = {
  sentiment: 'bg-rose-50 dark:bg-rose-950/30',
  topics: 'bg-blue-50 dark:bg-blue-950/30',
  categories: 'bg-amber-50 dark:bg-amber-950/30',
  summaries: 'bg-violet-50 dark:bg-violet-950/30',
  visualizations: 'bg-emerald-50 dark:bg-emerald-950/30',
  privacy: 'bg-slate-50 dark:bg-slate-950/30',
};

export function Features() {
  const { t } = useTranslation();

  return (
    <Section id="features" dark>
      <SectionHeader
        label={t('features.label')}
        title={t('features.title')}
        subtitle={t('features.subtitle')}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {featureKeys.map((key, i) => (
          <FeatureCard key={key} featureKey={key} index={i} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ featureKey, index }: { featureKey: typeof featureKeys[number]; index: number }) {
  const { t } = useTranslation();
  const { ref, isInView } = useScrollReveal();
  const Icon = icons[featureKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-1"
    >
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-xl ${bgColors[featureKey]} mb-5`}>
        <div className={`bg-gradient-to-br ${colors[featureKey]} p-2 rounded-lg`}>
          <Icon size={22} className="text-white" />
        </div>
      </div>

      <h3 className="text-lg font-bold font-display text-surface-900 dark:text-white mb-2">
        {t(`features.items.${featureKey}.title`)}
      </h3>

      <p className="text-surface-500 dark:text-surface-400 leading-relaxed text-sm">
        {t(`features.items.${featureKey}.description`)}
      </p>

      {/* Hover gradient line */}
      <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${colors[featureKey]} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </motion.div>
  );
}
