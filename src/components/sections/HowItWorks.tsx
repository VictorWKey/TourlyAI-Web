import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Upload, Zap, BarChart3 } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

const steps = [
  { key: 'step1', icon: Upload, number: '01', color: 'from-blue-500 to-cyan-500', image: '/images/screenshots/step-upload.png' },
  { key: 'step2', icon: Zap, number: '02', color: 'from-violet-500 to-purple-500', image: '/images/screenshots/step-analysis.png' },
  { key: 'step3', icon: BarChart3, number: '03', color: 'from-emerald-500 to-teal-500', image: '/images/screenshots/step-results.png' },
];

export default function HowItWorks() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-surface-50/50 dark:bg-surface-900/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 text-sm font-medium text-primary-700 dark:text-primary-300 mb-4">
            {t('howItWorks.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-surface-900 dark:text-white mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-surface-500 dark:text-surface-400">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * index }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Text */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${step.color} shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-extrabold text-surface-100 dark:text-surface-800 select-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-surface-900 dark:text-white mb-4">
                  {t(`howItWorks.${step.key}.title`)}
                </h3>
                <p className="text-lg text-surface-500 dark:text-surface-400 leading-relaxed">
                  {t(`howItWorks.${step.key}.description`)}
                </p>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/30 border border-surface-200 dark:border-surface-700 group">
                  <AppImage
                    src={step.image}
                    alt={t(`howItWorks.${step.key}.title`)}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
