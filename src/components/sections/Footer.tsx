import { useTranslation } from 'react-i18next';
import { Github, Mail, ExternalLink } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import logoLight from '@/assets/logos/logo-primary-horizontal.png';
import logoDark from '@/assets/logos/logo-white-horizontal.png';

export function Footer() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const productLinks = [
    { label: t('footer.download'), href: 'https://github.com/victorwkey/TourlyAI/releases/latest', external: true },
    { label: t('footer.github'), href: 'https://github.com/victorwkey/TourlyAI', external: true },
    { label: t('footer.changelog'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/CHANGELOG.md', external: true },
  ];

  const resourceLinks = [
    { label: t('footer.documentation'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/README.md', external: true },
    { label: t('footer.contributing'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/CONTRIBUTING.md', external: true },
  ];

  const legalLinks = [
    { label: t('footer.privacy'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/PRIVACY.md', external: true },
    { label: t('footer.license'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/LICENSE', external: true },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={isDark ? logoDark : logoLight}
              alt="TourlyAI"
              className="h-8 mb-4"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/victorwkey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:victorwkey@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {t('footer.rights')}
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
