import { Link } from 'react-router-dom';
import {
  FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaYoutube,
} from 'react-icons/fa';
import { MdWorkspacePremium } from 'react-icons/md';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
      { label: 'Blog', to: '#' },
      { label: 'Investors', to: '#' },
    ],
    services: [
      { label: 'Web Development', to: '/services' },
      { label: 'Graphic Design', to: '/services' },
      { label: 'Mobile Apps', to: '/services' },
      { label: 'Digital Marketing', to: '/services' },
      { label: 'Content Writing', to: '/services' },
    ],
    support: [
      { label: 'Help Center', to: '#' },
      { label: 'Safety & Trust', to: '#' },
      { label: 'Community', to: '#' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Status', to: '#' },
    ],
  };

  const socials = [
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className={styles.footer}>
      {/* CTA Band */}
      <div className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
            <p className={styles.ctaSubtitle}>
              Join 10,000+ businesses hiring top freelancers on TalentHub today.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link to="/services" className="btn btn-primary btn-lg">
              Hire Freelancers
            </Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brandCol}>
              <Link to="/" className={styles.logo}>
                <div className={styles.logoIcon}>
                  <MdWorkspacePremium size={20} />
                </div>
                <span className={styles.logoText}>
                  Talent<span className={styles.logoAccent}>Hub</span>
                </span>
              </Link>

              <p className={styles.brandDesc}>
                The world's leading freelance marketplace, connecting businesses with
                top-tier talent across every discipline and timezone.
              </p>

              {/* Contact Info */}
              <div className={styles.contactInfo}>
                <a href="mailto:hello@talenthub.io" className={styles.contactItem}>
                  <HiMail />
                  hello@talenthub.io
                </a>
                <a href="tel:+15551234567" className={styles.contactItem}>
                  <HiPhone />
                  +1 (555) 123-4567
                </a>
                <span className={styles.contactItem}>
                  <HiLocationMarker />
                  San Francisco, CA 94107
                </span>
              </div>

              {/* Socials */}
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.linkList}>
                {links.company.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className={styles.link}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.linkList}>
                {links.services.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className={styles.link}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Support</h4>
              <ul className={styles.linkList}>
                {links.support.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className={styles.link}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {year} TalentHub, Inc. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacy Policy</a>
              <span>·</span>
              <a href="#" className={styles.bottomLink}>Terms of Service</a>
              <span>·</span>
              <a href="#" className={styles.bottomLink}>Cookie Settings</a>
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              All systems normal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
