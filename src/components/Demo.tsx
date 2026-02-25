import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Section, SectionHeader } from './Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';

export function Demo() {
  const { t } = useTranslation();
  const { ref, isInView } = useScrollReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <Section id="demo" dark>
      <SectionHeader
        label={t('demo.label')}
        title={t('demo.title')}
        subtitle={t('demo.subtitle')}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Decorative glow */}
        <div className="absolute -inset-6 bg-linear-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-3xl blur-3xl" />

        <div className="relative rounded-2xl overflow-hidden screenshot-shadow border border-surface-200 dark:border-surface-700 bg-surface-900">
          {!playing ? (
            /* Video thumbnail with play button */
            <div className="relative cursor-pointer group" onClick={() => setPlaying(true)}>
              <img
                src="/images/screenshots/video-thumbnail.png"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/screenshots/video-thumbnail.svg'; }}
                alt={t('demo.videoAlt')}
                className="w-full h-auto opacity-80 group-hover:opacity-90 transition-opacity duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-surface-900/30 group-hover:bg-surface-900/20 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 dark:bg-white shadow-2xl flex items-center justify-center animate-pulse-glow"
                >
                  <Play size={32} className="text-primary-600 ml-1 fill-primary-600" />
                </motion.div>
              </div>
            </div>
          ) : (
            /* Actual video player */
            <video
              src="/video/demo.mp4"
              controls
              autoPlay
              className="w-full h-auto"
              poster="/images/screenshots/video-thumbnail.png"
            >
              <track kind="captions" />
            </video>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
