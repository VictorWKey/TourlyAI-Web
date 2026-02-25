import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionBadge } from '@/components/ui/SectionBadge';

import videoPoster from '@/assets/video/demo-poster.png';

export function Demo() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section id="demo" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-primary-50/50 to-transparent dark:via-primary-950/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionBadge text={t('demo.label')} />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t('demo.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('demo.subtitle')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-14">
          <div className="relative mx-auto max-w-5xl">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-3xl bg-linear-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 blur-3xl" />

            {/* Video container */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-gray-900 shadow-2xl dark:border-gray-700/50">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-gray-700/50 bg-gray-800/80 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-gray-400">TourlyAI — Demo</span>
              </div>

              {/* Video area */}
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  poster={videoPoster}
                  className="h-full w-full object-cover"
                  controls={isPlaying}
                  playsInline
                >
                  <source src="/assets/video/demo.mp4" type="video/mp4" />
                </video>

                {/* Play overlay */}
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-[2px]"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePlay}
                      className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-2xl transition-all hover:bg-white cursor-pointer"
                    >
                      <Play className="h-8 w-8 translate-x-0.5 fill-current" />
                    </motion.button>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="text-lg font-semibold text-white">
                        {t('demo.playButton')}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm text-white/80 backdrop-blur-sm">
                        <Clock className="h-3.5 w-3.5" />
                        {t('demo.duration')}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
