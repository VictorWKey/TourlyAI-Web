import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  FileText,
  Heart,
  MessageSquare,
  Tags,
  Lightbulb,
  BookOpen,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const phases = [
  { key: 'phase1', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/40', ring: 'ring-blue-500/20' },
  { key: 'phase2', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/40', ring: 'ring-rose-500/20' },
  { key: 'phase3', icon: MessageSquare, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/40', ring: 'ring-amber-500/20' },
  { key: 'phase4', icon: Tags, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/40', ring: 'ring-emerald-500/20' },
  { key: 'phase5', icon: Lightbulb, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/40', ring: 'ring-purple-500/20' },
  { key: 'phase6', icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/40', ring: 'ring-indigo-500/20' },
  { key: 'phase7', icon: BarChart3, color: 'text-teal-500', bg: 'bg-teal-100 dark:bg-teal-900/40', ring: 'ring-teal-500/20' },
] as const;

export function Pipeline() {
  const { t } = useTranslation();

  return (
    <section id="pipeline" className="relative py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={<SectionBadge>{t('pipeline.badge')}</SectionBadge>}
          title={t('pipeline.title')}
          highlight={t('pipeline.titleHighlight')}
          subtitle={t('pipeline.subtitle')}
        />

        {/* Desktop: Horizontal pipeline */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between gap-2">
            {/* Connecting line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-primary-300 via-accent-300 to-primary-300 dark:from-primary-700 dark:via-accent-700 dark:to-primary-700" />

            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center w-36"
                >
                  {/* Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${phase.bg} ring-4 ${phase.ring} ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900 mb-4`}
                  >
                    <Icon className={`h-7 w-7 ${phase.color}`} />
                    <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                      {i + 1}
                    </div>
                  </motion.div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {t(`pipeline.${phase.key}.title`)}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {t(`pipeline.${phase.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical pipeline */}
        <div className="lg:hidden space-y-4">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${phase.bg}`}>
                  <Icon className={`h-6 w-6 ${phase.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {t(`pipeline.${phase.key}.title`)}
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {t(`pipeline.${phase.key}.description`)}
                  </p>
                </div>
                {i < phases.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-gray-300 dark:text-gray-600 rotate-90 shrink-0 mt-3" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
