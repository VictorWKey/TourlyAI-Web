import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, Wifi, Settings, Code } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

const privacyFeatures = [
  { key: 'local', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { key: 'noCloud', icon: Wifi, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { key: 'flexible', icon: Settings, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/30' },
  { key: 'open', icon: Code, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
];

export default function Privacy() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="privacy" className="relative py-24 sm:py-32 bg-surface-50/50 dark:bg-surface-900/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-4">
              {t('privacy.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-surface-900 dark:text-white mb-4">
              {t('privacy.title')}
            </h2>
            <p className="text-lg text-surface-500 dark:text-surface-400 mb-10 leading-relaxed">
              {t('privacy.subtitle')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-surface-900 dark:text-white mb-1">
                    {t(`privacy.features.${feature.key}.title`)}
                  </h3>
                  <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
                    {t(`privacy.features.${feature.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Privacy visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/30 border border-surface-200 dark:border-surface-700">
              <AppImage
                src="/images/screenshots/privacy-local.png"
                alt="Local AI Processing"
                className="w-full h-auto"
              />
            </div>
            {/* Shield badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
              className="hidden sm:flex absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-emerald-500 shadow-xl shadow-emerald-500/30 items-center justify-center"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
