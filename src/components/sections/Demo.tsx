import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  LayoutDashboard,
  GitBranch,
  BarChart3,
  Settings,
  Search,
  MessageSquare,
} from 'lucide-react';

const tabs = [
  { key: 'dashboard', icon: LayoutDashboard, image: '/images/screenshot-dashboard.png' },
  { key: 'pipelineView', icon: GitBranch, image: '/images/screenshot-pipeline.png' },
  { key: 'visualizationsView', icon: BarChart3, image: '/images/screenshot-visualizations.png' },
  { key: 'setupWizard', icon: Settings, image: '/images/screenshot-setup.png' },
  { key: 'results', icon: Search, image: '/images/screenshot-results.png' },
  { key: 'reviews', icon: MessageSquare, image: '/images/screenshot-reviews.png' },
] as const;

export function Demo() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  return (
    <section id="demo" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={<SectionBadge>{t('demo.badge')}</SectionBadge>}
          title={t('demo.title')}
          highlight={t('demo.titleHighlight')}
          subtitle={t('demo.subtitle')}
        />

        {/* Tab bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{t(`demo.${tab.key}`)}</span>
              </button>
            );
          })}
        </div>

        {/* Screenshot display */}
        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Window chrome */}
          <div className="rounded-t-xl bg-gray-200 dark:bg-gray-800 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="rounded-md bg-gray-300 dark:bg-gray-700 px-8 py-1 text-xs text-gray-500 dark:text-gray-400">
                TourlyAI
              </div>
            </div>
          </div>

          {/* Screenshot area */}
          <div className="relative overflow-hidden rounded-b-xl bg-gray-100 dark:bg-gray-900 border border-t-0 border-gray-200 dark:border-gray-800">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={tabs[active].image}
                alt={t(`demo.${tabs[active].key}`)}
                className="w-full"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Shadow glow */}
          <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-2xl blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
