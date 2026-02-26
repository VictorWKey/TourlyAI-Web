import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';

const screenshots = [
  { key: 'home', src: '/images/screenshots/app-home.png' },
  { key: 'pipeline', src: '/images/screenshots/app-pipeline.png' },
  { key: 'dashboard', src: '/images/screenshots/app-dashboard.png' },
  { key: 'metrics', src: '/images/screenshots/app-metrics.png' },
  { key: 'summaries', src: '/images/screenshots/app-summaries.png' },
  { key: 'reviews', src: '/images/screenshots/app-reviews.png' },
  { key: 'reports', src: '/images/screenshots/app-reports.png' },
  { key: 'settings', src: '/images/screenshots/app-settings.png' },
];

const labels: Record<string, Record<string, string>> = {
  en: {
    label: 'App Gallery',
    title: 'Explore Every Detail',
    subtitle: 'Take a closer look at the powerful interface designed for tourism professionals.',
    home: 'Home Dashboard',
    pipeline: 'Analysis Pipeline',
    dashboard: 'Visualizations',
    metrics: 'Metrics & KPIs',
    summaries: 'AI Summaries',
    reviews: 'Review Explorer',
    reports: 'Report Generator',
    settings: 'Settings',
  },
  es: {
    label: 'Galería de la App',
    title: 'Explora Cada Detalle',
    subtitle: 'Mira de cerca la poderosa interfaz diseñada para profesionales del turismo.',
    home: 'Panel Principal',
    pipeline: 'Pipeline de Análisis',
    dashboard: 'Visualizaciones',
    metrics: 'Métricas y KPIs',
    summaries: 'Resúmenes con IA',
    reviews: 'Explorador de Reseñas',
    reports: 'Generador de Reportes',
    settings: 'Configuración',
  },
};

export default function Gallery() {
  const { i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const lang = i18n.language.startsWith('es') ? 'es' : 'en';
  const l = labels[lang];

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    const next = (lightbox + dir + screenshots.length) % screenshots.length;
    setLightbox(next);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-surface-50/50 dark:bg-surface-900/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 text-sm font-medium text-primary-700 dark:text-primary-300 mb-4">
            {l.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-surface-900 dark:text-white mb-4">
            {l.title}
          </h2>
          <p className="text-lg text-surface-500 dark:text-surface-400">
            {l.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {screenshots.map((item, index) => (
            <motion.button
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              onClick={() => setLightbox(index)}
              className="group relative rounded-xl overflow-hidden border border-surface-200 dark:border-surface-700 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <AppImage
                src={item.src}
                alt={l[item.key]}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-medium text-white">{l[item.key]}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="absolute left-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="absolute right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <img
            src={screenshots[lightbox].src}
            alt={l[screenshots[lightbox].key]}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
