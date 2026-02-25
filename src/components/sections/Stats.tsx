import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import {
  Layout,
  Component,
  GitBranch,
  Database,
  Languages,
  TestTube,
  Server,
  FileText,
} from 'lucide-react';

const statItems = [
  { key: 'pages', value: 12, icon: Layout, color: 'text-blue-500' },
  { key: 'components', value: 45, suffix: '+', icon: Component, color: 'text-purple-500' },
  { key: 'pipelinePhases', value: 9, icon: GitBranch, color: 'text-emerald-500' },
  { key: 'stores', value: 5, icon: Database, color: 'text-amber-500' },
  { key: 'languages', value: 2, icon: Languages, color: 'text-rose-500' },
  { key: 'testFiles', value: 13, icon: TestTube, color: 'text-cyan-500' },
  { key: 'ciPlatforms', value: 3, icon: Server, color: 'text-indigo-500' },
  { key: 'documentation', value: 4, icon: FileText, color: 'text-teal-500' },
] as const;

export function Stats() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-primary-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('stats.title')}{' '}
            <span className="gradient-text">{t('stats.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {statItems.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
              >
                <Icon className={`h-6 w-6 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  <AnimatedCounter end={stat.value} suffix={'suffix' in stat ? stat.suffix : ''} />
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t(`stats.${stat.key}`)}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
