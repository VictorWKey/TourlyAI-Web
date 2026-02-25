import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary-600 via-primary-700 to-accent-700" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-accent-600/30 to-transparent" />
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-100 w-100 rounded-full bg-accent-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            {t('cta.subtitle')}
          </p>

          <div className="mt-10">
            <a
              href="https://github.com/victorwkey/TourlyAI/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-primary-700 shadow-2xl shadow-black/20 transition-all hover:-translate-y-1 hover:shadow-3xl cursor-pointer"
            >
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              {t('cta.button')}
            </a>
          </div>

          <p className="mt-6 text-sm text-white/60">
            {t('cta.note')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
