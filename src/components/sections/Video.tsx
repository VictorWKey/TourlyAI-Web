import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Video() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={<SectionBadge>{t('video.badge')}</SectionBadge>}
          title={t('video.title')}
          highlight={t('video.titleHighlight')}
          subtitle={t('video.subtitle')}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Video container */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl aspect-video group">
            <video
              className="w-full h-full object-cover"
              poster="/images/video-poster.png"
              controls
              preload="metadata"
            >
              <source src="/video/demo.mp4" type="video/mp4" />
            </video>

            {/* Play overlay (shown when video has poster, hidden on play via CSS) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-has-[video:not([poster])]:hidden pointer-events-none">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl pointer-events-auto cursor-pointer"
              >
                <Play className="h-8 w-8 text-primary-600 ml-1" />
              </motion.div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -inset-4 -z-10 bg-linear-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-2xl blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
