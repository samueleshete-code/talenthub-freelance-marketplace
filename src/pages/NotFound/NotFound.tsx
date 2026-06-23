import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiHome, HiSearch, HiArrowLeft } from 'react-icons/hi';
import styles from './NotFound.module.css';

const quickLinks = [
  { label: 'Browse Services', to: '/services', icon: <HiSearch /> },
  { label: 'About TalentHub', to: '/about', icon: <HiHome /> },
  { label: 'Contact Support', to: '/contact', icon: <HiSearch /> },
];

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 — Page Not Found | TalentHub';
  }, []);

  return (
    <div className={styles.page}>
      {/* Animated background */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.content}>
        {/* 404 Number */}
        <div className={styles.numberWrap} aria-hidden="true">
          <span className={styles.num}>4</span>
          {/* Animated logo O */}
          <div className={styles.logoO}>
            <svg viewBox="0 0 80 80" fill="none" className={styles.logoSvg}>
              <defs>
                <linearGradient id="nf-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              <rect width="80" height="80" rx="22" fill="url(#nf-grad)" />
              <path d="M20 40L34 22L48 40L34 58L20 40Z" fill="white" fillOpacity="0.95" />
              <path d="M40 40L54 22L68 40L54 58L40 40Z" fill="white" fillOpacity="0.4" />
            </svg>
          </div>
          <span className={styles.num}>4</span>
        </div>

        {/* Message */}
        <h1 className={styles.title}>Oops! Page Not Found</h1>
        <p className={styles.subtitle}>
          The page you're looking for has been moved, deleted, or never existed.
          Don't worry — let's get you back on track.
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={`btn btn-secondary ${styles.backBtn}`}
            onClick={() => navigate(-1)}
          >
            <HiArrowLeft />
            Go Back
          </button>
          <Link to="/" className={`btn btn-primary btn-lg ${styles.homeBtn}`}>
            <HiHome />
            Back to Home
          </Link>
        </div>

        {/* Quick links */}
        <div className={styles.quickLinks}>
          <p className={styles.quickLabel}>Or try one of these pages:</p>
          <div className={styles.quickGrid}>
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className={styles.quickLink}>
                <span className={styles.quickIcon}>{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
