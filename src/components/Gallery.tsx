import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Section, SectionHeader } from './Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

const galleryImages = [
  { key: 'dashboard', file: '/images/screenshots/gallery-dashboard' },
  { key: 'pipeline', file: '/images/screenshots/gallery-pipeline' },
  { key: 'visualizations', file: '/images/screenshots/gallery-visualizations' },
  { key: 'sentiments', file: '/images/screenshots/gallery-sentiments' },
  { key: 'topics', file: '/images/screenshots/gallery-topics' },
  { key: 'summaries', file: '/images/screenshots/gallery-summaries' },
  { key: 'setup', file: '/images/screenshots/gallery-setup' },
  { key: 'settings', file: '/images/screenshots/gallery-settings' },
] as const;

export function Gallery() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    if (direction === 'prev') {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    } else {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <Section id="gallery">
      <SectionHeader
        label={t('gallery.label')}
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((img, i) => (
          <GalleryItem
            key={img.key}
            image={img}
            index={i}
            label={t(`gallery.images.${img.key}`)}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
              src={`${galleryImages[selectedIndex].file}.png`}
              onError={(e) => { (e.target as HTMLImageElement).src = `${galleryImages[selectedIndex].file}.svg`; }}
                alt={t(`gallery.images.${galleryImages[selectedIndex].key}`)}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center text-white/80 mt-4 text-sm font-medium">
                {t(`gallery.images.${galleryImages[selectedIndex].key}`)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function GalleryItem({
  image,
  index,
  label,
  onClick,
}: {
  image: typeof galleryImages[number];
  index: number;
  label: string;
  onClick: () => void;
}) {
  const { ref, isInView } = useScrollReveal();

  // Make first two images span 2 columns on large screens
  const spanClass = index < 2 ? 'lg:col-span-2' : '';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group cursor-pointer ${spanClass}`}
      onClick={onClick}
    >
      <div className="relative rounded-xl overflow-hidden border border-surface-200 dark:border-surface-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg">
        <img
          src={`${image.file}.png`}
          onError={(e) => { (e.target as HTMLImageElement).src = `${image.file}.svg`; }}
          alt={label}
          className="w-full h-48 sm:h-52 lg:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-surface-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-semibold">{label}</span>
        </div>
      </div>
    </motion.div>
  );
}
