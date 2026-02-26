import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play } from 'lucide-react';
import AppImage from '@/components/ui/AppImage';
import { useState } from 'react';

export default function VideoSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 text-sm font-medium text-primary-700 dark:text-primary-300 mb-4">
            {t('video.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-surface-900 dark:text-white mb-4">
            {t('video.title')}
          </h2>
          <p className="text-lg text-surface-500 dark:text-surface-400">
            {t('video.subtitle')}
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40 border border-surface-200 dark:border-surface-700 aspect-video"
        >
          {!isPlaying ? (
            <>
              {/* Poster/thumbnail */}
              <AppImage
                src="/images/screenshots/video-poster.png"
                alt="TourlyAI Demo"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 ml-1" fill="currentColor" />
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping" />
                </button>
              </div>
            </>
          ) : (
            <video
              src="/video/demo.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
