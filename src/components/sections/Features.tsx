import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Heart,
  Compass,
  Tags,
  FileText,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionBadge } from '@/components/ui/SectionBadge';

const featureKeys = [
  { key: 'sentiment', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/30' },
  { key: 'topics', icon: Compass, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  { key: 'categories', icon: Tags, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { key: 'summaries', icon: FileText, color: 'text-primary-500', bg: 'bg-primary-50 dark:bg-primary-950/30' },
  { key: 'visualizations', icon: BarChart3, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/30' },
  { key: 'privacy', icon: ShieldCheck, color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-950/30' },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionBadge text={t('features.label')} />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('features.subtitle')}
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureKeys.map(({ key, icon: Icon, color, bg }, index) => (
            <motion.div
              key={key}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Subtle gradient on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-primary-50/0 to-accent-50/0 opacity-0 transition-opacity group-hover:opacity-100 dark:from-primary-950/0 dark:to-accent-950/0 dark:group-hover:from-primary-950/30 dark:group-hover:to-accent-950/20" />

              <div className="relative">
                <div className={`inline-flex rounded-xl p-3 ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed dark:text-gray-400">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
