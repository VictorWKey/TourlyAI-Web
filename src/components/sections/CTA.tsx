import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download, Github, ExternalLink } from 'lucide-react';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t('cta.title')}{' '}
            <span className="text-primary-200">{t('cta.titleHighlight')}</span>
          </h2>
          <p className="mt-6 text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/victorwkey/TourlyAI/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary-700 shadow-xl shadow-black/20 hover:bg-primary-50 transition-colors"
            >
              <Download className="h-5 w-5" />
              {t('cta.download')}
              <ExternalLink className="h-4 w-4 opacity-50" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/victorwkey/TourlyAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Github className="h-5 w-5" />
              {t('cta.github')}
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-primary-200/80">
            {t('cta.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
