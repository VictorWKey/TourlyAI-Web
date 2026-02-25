import { useTranslation } from 'react-i18next';
import { Github } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import logoPrimary from '@/assets/logos/logo-primary-horizontal.png';
import logoWhite from '@/assets/logos/logo-white-horizontal.png';

export function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={theme === 'dark' ? logoWhite : logoPrimary}
              alt="TourlyAI"
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              {t('footer.description')}
            </p>
            <a
              href="https://github.com/victorwkey/TourlyAI"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              {t('footer.product')}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {t('footer.productLinks.features')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {t('footer.productLinks.howItWorks')}
                </a>
              </li>
              <li>
                <a href="https://github.com/victorwkey/TourlyAI/releases/latest" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {t('footer.productLinks.download')}
                </a>
              </li>
              <li>
                <a href="https://github.com/victorwkey/TourlyAI/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {t('footer.productLinks.changelog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Resource links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              {t('footer.resources')}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="https://github.com/victorwkey/TourlyAI" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {t('footer.resourceLinks.github')}
                </a>
              </li>
              <li>
                <a href="https://github.com/victorwkey/TourlyAI#readme" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {t('footer.resourceLinks.documentation')}
                </a>
              </li>
              <li>
                <a href="https://github.com/victorwkey/TourlyAI/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {t('footer.resourceLinks.contributing')}
                </a>
              </li>
              <li>
                <a href="https://github.com/victorwkey/TourlyAI/blob/main/PRIVACY.md" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {t('footer.resourceLinks.privacy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('footer.copyright')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('footer.madeWith')}{' '}
            <a
              href="https://github.com/victorwkey"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              victorwkey
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
