import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

interface SectionHeadingProps {
  badge?: ReactNode;
  title: string;
  highlight: string;
  titleEnd?: string;
  subtitle?: string;
}

export function SectionHeading({ badge, title, highlight, titleEnd, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="mx-auto max-w-3xl text-center mb-16"
    >
      {badge && <motion.div variants={itemVariants}>{badge}</motion.div>}
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {title}{' '}
        <span className="gradient-text">{highlight}</span>
        {titleEnd && <> {titleEnd}</>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
