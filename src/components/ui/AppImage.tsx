import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface AppImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AppImage({ src, alt, className = '' }: AppImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-linear-to-br from-surface-100 to-surface-200 dark:from-surface-800 dark:to-surface-900 ${className}`} style={{ aspectRatio: '16/10' }}>
        <div className="text-center p-8">
          <ImageOff className="w-12 h-12 text-surface-300 dark:text-surface-600 mx-auto mb-3" />
          <p className="text-sm text-surface-400 dark:text-surface-500 font-medium">{alt}</p>
          <p className="text-xs text-surface-300 dark:text-surface-600 mt-1">Screenshot placeholder</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
