import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Upload, Sparkles, LayoutDashboard } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionBadge } from '@/components/ui/SectionBadge';

import step1Img from '@/assets/screenshots/step-upload.png';
import step2Img from '@/assets/screenshots/step-pipeline.png';
import step3Img from '@/assets/screenshots/step-insights.png';

const steps = [
  { key: 'step1', icon: Upload, img: step1Img, accent: 'from-blue-500 to-cyan-500' },
  { key: 'step2', icon: Sparkles, img: step2Img, accent: 'from-violet-500 to-purple-500' },
  { key: 'step3', icon: LayoutDashboard, img: step3Img, accent: 'from-amber-500 to-orange-500' },
] as const;

export function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 section-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionBadge text={t('howItWorks.label')} />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t('howItWorks.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('howItWorks.subtitle')}
          </p>
        </AnimatedSection>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {steps.map(({ key, icon: Icon, img, accent }, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <div className={`inline-flex items-center gap-3 rounded-xl bg-linear-to-r ${accent} p-3 text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {t(`howItWorks.${key}.number`)}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                    {t(`howItWorks.${key}.title`)}
                  </h3>
                  <p className="mt-4 max-w-md text-lg text-gray-600 leading-relaxed dark:text-gray-400">
                    {t(`howItWorks.${key}.description`)}
                  </p>
                </div>

                {/* Screenshot */}
                <div className="flex-1">
                  <div className="relative">
                    <div className={`absolute -inset-4 rounded-2xl bg-linear-to-br ${accent} opacity-10 blur-2xl`} />
                    <div className="relative overflow-hidden rounded-xl border border-gray-200/50 shadow-2xl dark:border-gray-700/50">
                      <img
                        src={img}
                        alt={t(`howItWorks.${key}.title`)}
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
