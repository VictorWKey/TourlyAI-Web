import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionBadge } from '@/components/ui/SectionBadge';

import imgDashboard from '@/assets/screenshots/gallery-dashboard.png';
import imgPipeline from '@/assets/screenshots/gallery-pipeline.png';
import imgSentiments from '@/assets/screenshots/gallery-sentiments.png';
import imgTopics from '@/assets/screenshots/gallery-topics.png';
import imgSummaries from '@/assets/screenshots/gallery-summaries.png';
import imgVisualizations from '@/assets/screenshots/gallery-visualizations.png';

const galleryItems = [
  { key: 'dashboard', img: imgDashboard },
  { key: 'pipeline', img: imgPipeline },
  { key: 'sentiments', img: imgSentiments },
  { key: 'topics', img: imgTopics },
  { key: 'summaries', img: imgSummaries },
  { key: 'visualizations', img: imgVisualizations },
] as const;

export function Gallery() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? galleryItems.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === galleryItems.length - 1 ? 0 : c + 1));

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden section-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionBadge text={t('gallery.label')} />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t('gallery.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('gallery.subtitle')}
          </p>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.2} className="mt-14">
          <div className="relative mx-auto max-w-5xl">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white shadow-2xl dark:border-gray-700/50 dark:bg-gray-900">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-gray-200/50 bg-gray-100/80 px-4 py-3 dark:border-gray-700/50 dark:bg-gray-800/80">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-gray-400 dark:text-gray-500">
                  {t(`gallery.images.${galleryItems[current].key}`)}
                </span>
              </div>

              <div className="relative aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={galleryItems[current].img}
                    alt={t(`gallery.images.${galleryItems[current].key}`)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110 dark:bg-gray-800/90 dark:text-gray-200 dark:hover:bg-gray-800 cursor-pointer z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110 dark:bg-gray-800/90 dark:text-gray-200 dark:hover:bg-gray-800 cursor-pointer z-10"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {galleryItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => setCurrent(index)}
                className={`overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${
                  index === current
                    ? 'border-primary-500 shadow-lg shadow-primary-500/25 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <img
                  src={item.img}
                  alt={t(`gallery.images.${item.key}`)}
                  className="h-16 w-28 object-cover sm:h-20 sm:w-36"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Label */}
          <p className="mt-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            {t(`gallery.images.${galleryItems[current].key}`)}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
