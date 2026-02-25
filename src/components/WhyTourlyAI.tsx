import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, Brain, Download } from 'lucide-react';
import { Section, SectionHeader } from './Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

const items = [
  { key: 'simple', icon: Zap, gradient: 'from-amber-500 to-orange-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  { key: 'powerful', icon: Brain, gradient: 'from-violet-500 to-purple-500', bg: 'bg-violet-50 dark:bg-violet-950/30' },
  { key: 'yours', icon: Download, gradient: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
] as const;

export function WhyTourlyAI() {
  const { t } = useTranslation();

  return (
    <Section dark>
      <SectionHeader
        label={t('testimonialSection.label')}
        title={t('testimonialSection.title')}
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <ValueCard key={item.key} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ValueCard({ item, index }: { item: typeof items[number]; index: number }) {
  const { t } = useTranslation();
  const { ref, isInView } = useScrollReveal();
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative p-8 md:p-10 rounded-2xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Icon */}
      <div className={`inline-flex p-4 rounded-2xl ${item.bg} mb-6`}>
        <div className={`p-3 rounded-xl bg-linear-to-br ${item.gradient}`}>
          <Icon size={28} className="text-white" />
        </div>
      </div>

      <h3 className="text-xl font-bold font-display text-surface-900 dark:text-white mb-3">
        {t(`testimonialSection.items.${item.key}.title`)}
      </h3>

      <p className="text-surface-500 dark:text-surface-400 leading-relaxed">
        {t(`testimonialSection.items.${item.key}.description`)}
      </p>

      {/* Top gradient accent */}
      <div className={`absolute top-0 left-8 right-8 h-1 bg-linear-to-r ${item.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
}
