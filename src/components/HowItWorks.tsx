import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Upload, Sparkles, LineChart } from 'lucide-react';
import { Section, SectionHeader } from './Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stepConfig = [
  { key: 'upload', icon: Upload, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-950/30', screenshot: '/images/screenshots/step-upload' },
  { key: 'analyze', icon: Sparkles, color: 'from-violet-500 to-purple-500', bg: 'bg-violet-50 dark:bg-violet-950/30', screenshot: '/images/screenshots/step-pipeline' },
  { key: 'insights', icon: LineChart, color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30', screenshot: '/images/screenshots/step-results' },
] as const;

export function HowItWorks() {
  const { t } = useTranslation();

  return (
    <Section id="howItWorks">
      <SectionHeader
        label={t('howItWorks.label')}
        title={t('howItWorks.title')}
        subtitle={t('howItWorks.subtitle')}
      />

      <div className="space-y-20 md:space-y-28">
        {stepConfig.map((step, i) => (
          <StepRow key={step.key} step={step} index={i} />
        ))}
      </div>
    </Section>
  );
}

function StepRow({ step, index }: { step: typeof stepConfig[number]; index: number }) {
  const { t } = useTranslation();
  const { ref, isInView } = useScrollReveal();
  const Icon = step.icon;
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
    >
      {/* Text */}
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className={`inline-flex items-center gap-3 mb-6`}>
          <div className={`p-2.5 rounded-xl bg-linear-to-br ${step.color}`}>
            <Icon size={22} className="text-white" />
          </div>
          <span className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
            {t(`howItWorks.steps.${step.key}.step`)}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold font-display text-surface-900 dark:text-white mb-4">
          {t(`howItWorks.steps.${step.key}.title`)}
        </h3>

        <p className="text-base md:text-lg text-surface-500 dark:text-surface-400 leading-relaxed">
          {t(`howItWorks.steps.${step.key}.description`)}
        </p>
      </div>

      {/* Screenshot */}
      <div className={`${isReversed ? 'lg:order-1' : ''}`}>
        <div className="relative group">
          <div className={`absolute -inset-3 bg-linear-to-r ${step.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
          <div className="relative rounded-xl overflow-hidden screenshot-shadow border border-surface-200 dark:border-surface-700">
            <img
              src={`${step.screenshot}.png`}
              onError={(e) => { (e.target as HTMLImageElement).src = `${step.screenshot}.svg`; }}
              alt={t(`howItWorks.steps.${step.key}.title`)}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
