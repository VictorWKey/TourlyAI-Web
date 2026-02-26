import { useTranslation } from 'react-i18next';
import { Github, Twitter } from 'lucide-react';
import type { Theme } from '@/App';

interface FooterProps {
  theme: Theme;
}

export default function Footer({ theme }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src={theme === 'dark' ? '/images/logos/logo-white-horizontal.png' : '/images/logos/logo-black-horizontal.png'}
                alt="TourlyAI"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-6 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/victorwkey/TourlyAI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/victorwkey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider mb-4">
              {t('footer.product')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 transition-colors">
                  {t('nav.features')}
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 transition-colors">
                  {t('nav.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/victorwkey/TourlyAI/blob/main/CHANGELOG.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 transition-colors"
                >
                  {t('footer.changelog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider mb-4">
              {t('footer.resources')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/victorwkey/TourlyAI#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 transition-colors"
                >
                  {t('footer.docs')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/victorwkey/TourlyAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 transition-colors"
                >
                  {t('footer.github')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/victorwkey/TourlyAI/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 transition-colors"
                >
                  {t('footer.contributing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider mb-4">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/victorwkey/TourlyAI/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 transition-colors"
                >
                  {t('footer.license')}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/victorwkey/TourlyAI/blob/main/PRIVACY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 transition-colors"
                >
                  {t('footer.privacy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-surface-200 dark:border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-400">
            © {new Date().getFullYear()} TourlyAI. {t('footer.rights')}
          </p>
          <p className="text-sm text-surface-400">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
