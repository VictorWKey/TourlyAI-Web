import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, children, className = '', dark }: SectionProps) {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 overflow-hidden ${
        dark
          ? 'bg-surface-50 dark:bg-surface-900/50'
          : 'bg-white dark:bg-surface-950'
      } ${className}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
      <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-surface-900 dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-surface-500 dark:text-surface-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
