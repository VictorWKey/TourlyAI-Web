import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface TechItem {
  name: string;
  logo: string;
}

const techCategories: Record<string, TechItem[]> = {
  frontend: [
    { name: 'Electron', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  ],
  backend: [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  ],
  ai: [
    { name: 'HuggingFace', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
    { name: 'LangChain', logo: '/images/langchain-logo.png' },
    { name: 'Ollama', logo: '/images/ollama-logo.png' },
    { name: 'OpenAI', logo: '/images/openai-logo.png' },
  ],
  devops: [
    { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    { name: 'Sentry', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg' },
    { name: 'ESLint', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg' },
    { name: 'Vitest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg' },
  ],
};

const categoryKeys = ['frontend', 'backend', 'ai', 'devops'] as const;

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section id="tech-stack" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={<SectionBadge>{t('techStack.badge')}</SectionBadge>}
          title={t('techStack.title')}
          highlight={t('techStack.titleHighlight')}
          subtitle={t('techStack.subtitle')}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryKeys.map((cat, catIdx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-5">
                {t(`techStack.${cat}`)}
              </h3>
              <div className="space-y-4">
                {techCategories[cat].map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 group-hover:border-primary-300 dark:group-hover:border-primary-700 transition-colors">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-6 w-6"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
