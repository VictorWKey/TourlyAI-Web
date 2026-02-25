import { useTranslation } from 'react-i18next';
import { Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const productLinks = [
    { label: t('footer.links.features'), href: '#features' },
    { label: t('footer.links.download'), href: 'https://github.com/victorwkey/TourlyAI/releases/latest', external: true },
    { label: t('footer.links.demo'), href: '#demo' },
  ];

  const resourceLinks = [
    { label: t('footer.links.github'), href: 'https://github.com/victorwkey/TourlyAI', external: true },
    { label: t('footer.links.docs'), href: 'https://github.com/victorwkey/TourlyAI#readme', external: true },
    { label: t('footer.links.changelog'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/CHANGELOG.md', external: true },
    { label: t('footer.links.contributing'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/CONTRIBUTING.md', external: true },
  ];

  const legalLinks = [
    { label: t('footer.links.privacy'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/PRIVACY.md', external: true },
    { label: t('footer.links.license'), href: 'https://github.com/victorwkey/TourlyAI/blob/main/LICENSE', external: true },
  ];

  return (
    <footer className="bg-surface-50 dark:bg-surface-900 border-t border-surface-200 dark:border-surface-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/images/logos/logo-primary-horizontal.png"
              alt="TourlyAI"
              className="h-8 mb-4 dark:hidden"
            />
            <img
              src="/images/logos/logo-white-horizontal.png"
              alt="TourlyAI"
              className="h-8 mb-4 hidden dark:block"
            />
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/victorwkey/TourlyAI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://twitter.com/victorwkey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:victorwkey@gmail.com"
                className="p-2 rounded-lg text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-surface-900 dark:text-white mb-4">
              {t('footer.product')}
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-surface-900 dark:text-white mb-4">
              {t('footer.resources')}
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-surface-900 dark:text-white mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-surface-500 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-surface-200 dark:border-surface-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-400 dark:text-surface-500">
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-surface-400 dark:text-surface-500">
            {t('footer.madeWith')}{' '}
            <a
              href="https://github.com/victorwkey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            >
              victorwkey
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
