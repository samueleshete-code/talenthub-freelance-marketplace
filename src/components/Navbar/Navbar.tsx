import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  HiMenuAlt3, HiX, HiChevronDown,
} from 'react-icons/hi';
import {
  MdWorkspacePremium,
} from 'react-icons/md';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Hide/show on scroll + scrolled state
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setVisible(currentY < lastScrollY.current || currentY < 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          styles.navbar,
          scrolled ? styles.scrolled : '',
          !visible ? styles.hidden : '',
        ].join(' ')}
        role="banner"
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="TalentHub Home">
            <div className={styles.logoIcon}>
              <MdWorkspacePremium size={22} />
            </div>
            <span className={styles.logoText}>
              Talent<span className={styles.logoAccent}>Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
                }
              >
                {link.label}
                <span className={styles.navLinkUnderline} />
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={styles.desktopActions}>
            <ThemeToggle />
            <Link to="/contact" className={`btn ${styles.btnLogin}`}>
              Log In
            </Link>
            <Link to="/services" className={`btn btn-primary ${styles.btnSignup}`}>
              Get Started
              <HiChevronDown size={14} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={[styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : ''].join(' ')}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className={styles.mobileMenuHeader}>
          <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <div className={styles.logoIcon}>
              <MdWorkspacePremium size={20} />
            </div>
            <span className={styles.logoText}>
              Talent<span className={styles.logoAccent}>Hub</span>
            </span>
          </Link>
          <button
            className={styles.mobileClose}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX size={22} />
          </button>
        </div>

        <nav className={styles.mobileNav}>
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [styles.mobileNavLink, isActive ? styles.mobileNavLinkActive : ''].join(' ')
              }
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.mobileActions}>
          <div className={styles.mobileThemeRow}>
            <span className={styles.mobileThemeLabel}>Dark Mode</span>
            <ThemeToggle />
          </div>
          <Link to="/contact" className={`btn btn-secondary ${styles.mobileBtnFull}`}>
            Log In
          </Link>
          <Link to="/services" className={`btn btn-primary ${styles.mobileBtnFull}`}>
            Get Started Free
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
