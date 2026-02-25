import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CTA() {
  const { t } = useTranslation();
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-surface-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Logo */}
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src="/images/logos/logo-white.png"
          alt="TourlyAI"
          className="w-16 h-16 mx-auto mb-8"
        />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
          {t('cta.title')}
        </h2>

        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/victorwkey/TourlyAI/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-xl bg-white text-primary-700 hover:bg-surface-50 transition-colors shadow-xl shadow-black/20"
          >
            {t('cta.button')}
            <ArrowRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/victorwkey/TourlyAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            <Github size={18} />
            {t('cta.github')}
          </motion.a>
        </div>

        <p className="mt-6 text-sm text-white/60">
          {t('cta.note')}
        </p>
      </motion.div>
    </section>
  );
}
