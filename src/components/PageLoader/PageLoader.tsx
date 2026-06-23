import styles from './PageLoader.module.css';

interface PageLoaderProps {
  /** true = full viewport overlay (initial app load), false = inline section loader */
  fullscreen?: boolean;
}

const PageLoader = ({ fullscreen = false }: PageLoaderProps) => (
  <div className={[styles.wrap, fullscreen ? styles.fullscreen : styles.inline].join(' ')} role="status" aria-label="Loading">
    <div className={styles.logoMark}>
      {/* Animated logo mark */}
      <svg viewBox="0 0 48 48" fill="none" className={styles.logoSvg} aria-hidden="true">
        <defs>
          <linearGradient id="pl-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="14" fill="url(#pl-grad)" />
        <path d="M12 24L20 14L28 24L20 34L12 24Z" fill="white" fillOpacity="0.95" />
        <path d="M24 24L32 14L40 24L32 34L24 24Z" fill="white" fillOpacity="0.45" />
      </svg>
    </div>

    {fullscreen && (
      <>
        <p className={styles.brand}>TalentHub</p>
        <p className={styles.tagline}>Loading your experience...</p>
      </>
    )}

    {/* Dots loader */}
    <div className={styles.dots} aria-hidden="true">
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  </div>
);

export default PageLoader;
