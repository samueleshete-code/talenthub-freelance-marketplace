import { Link } from 'react-router-dom';
import {
  HiArrowRight, HiStar, HiCheckCircle, HiShieldCheck,
} from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { BsBriefcaseFill } from 'react-icons/bs';
import styles from './Hero.module.css';

const floatingFreelancers = [
  { name: 'Alex M.', role: 'React Dev', rating: 4.9, avatar: 'Alex+M', bg: '2563EB' },
  { name: 'Priya S.', role: 'UI Designer', rating: 5.0, avatar: 'Priya+S', bg: '7C3AED' },
  { name: 'Carlos R.', role: 'Mobile Dev', rating: 4.8, avatar: 'Carlos+R', bg: '06B6D4' },
];

const trustIndicators = [
  { icon: <HiShieldCheck />, text: 'Secure Payments' },
  { icon: <MdVerified />, text: 'Verified Talent' },
  { icon: <HiCheckCircle />, text: 'Money-Back Guarantee' },
];

const Hero = () => {
  return (
    <section className={styles.hero} id="home" aria-label="Hero">
      {/* Background */}
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.bgGradient} />
        <div className={styles.bgGrid} />
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      <div className={`container ${styles.heroInner}`}>
        {/* Left: Content */}
        <div className={styles.heroContent}>
          {/* Badge */}
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            <span>#1 Freelance Platform in 2025</span>
            <HiStar className={styles.heroBadgeStar} />
          </div>

          <h1 className={styles.heroTitle}>
            Find Elite{' '}
            <span className={styles.heroTitleHighlight}>
              Freelancers
            </span>
            <br />
            For Any Project
          </h1>

          <p className={styles.heroSubtitle}>
            Connect with talented developers, designers, writers, marketers, and
            digital experts from around the world — vetted, verified, and ready to deliver.
          </p>

          {/* CTA Buttons */}
          <div className={styles.heroCta}>
            <Link to="/services" className={`btn btn-primary btn-lg ${styles.btnHire}`}>
              <BsBriefcaseFill size={17} />
              Hire Talent
              <HiArrowRight size={17} />
            </Link>
            <Link to="/services" className={`btn btn-secondary btn-lg ${styles.btnFreelancer}`}>
              Become a Freelancer
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trustRow}>
            {trustIndicators.map((t) => (
              <div key={t.text} className={styles.trustItem}>
                <span className={styles.trustIcon}>{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className={styles.socialProof}>
            <div className={styles.avatarStack}>
              {['2563EB', '7C3AED', '06B6D4', '10B981'].map((color, i) => (
                <img
                  key={i}
                  src={`https://ui-avatars.com/api/?name=U${i + 1}&background=${color}&color=fff&size=36&bold=true`}
                  alt={`User ${i + 1}`}
                  className={styles.stackAvatar}
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <div className={styles.socialProofText}>
              <div className={styles.socialProofStars}>
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} size={14} style={{ color: '#F59E0B' }} />
                ))}
                <strong>4.9/5</strong>
              </div>
              <span>from 12,000+ verified reviews</span>
            </div>
          </div>
        </div>

        {/* Right: Visual Dashboard */}
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.dashboardCard}>
            {/* Header */}
            <div className={styles.dashHeader}>
              <div className={styles.dashDots}>
                <span className={`${styles.dashDot} ${styles.dotRed}`} />
                <span className={`${styles.dashDot} ${styles.dotYellow}`} />
                <span className={`${styles.dashDot} ${styles.dotGreen}`} />
              </div>
              <span className={styles.dashTitle}>Top Freelancers</span>
              <span className={styles.dashLive}>● Live</span>
            </div>

            {/* Freelancer items */}
            <div className={styles.dashBody}>
              {floatingFreelancers.map((f) => (
                <div key={f.name} className={styles.dashItem}>
                  <img
                    src={`https://ui-avatars.com/api/?name=${f.avatar}&background=${f.bg}&color=fff&size=40&bold=true`}
                    alt={f.name}
                    className={styles.dashAvatar}
                  />
                  <div className={styles.dashInfo}>
                    <div className={styles.dashName}>
                      {f.name}
                      <MdVerified className={styles.verifiedIcon} />
                    </div>
                    <div className={styles.dashRole}>{f.role}</div>
                  </div>
                  <div className={styles.dashRating}>
                    <HiStar className={styles.starIcon} />
                    {f.rating}
                  </div>
                </div>
              ))}

              {/* Progress */}
              <div className={styles.dashProgress}>
                <div className={styles.dashProgressLabel}>
                  <span>Projects Delivered Today</span>
                  <strong>347</strong>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '82%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
            <span className={styles.floatEmoji}>🚀</span>
            <div>
              <div className={styles.floatValue}>+2,847</div>
              <div className={styles.floatLabel}>Active Projects</div>
            </div>
          </div>

          <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
            <span className={styles.floatEmoji}>💰</span>
            <div>
              <div className={styles.floatValue}>$2.4M+</div>
              <div className={styles.floatLabel}>Paid This Month</div>
            </div>
          </div>

          <div className={`${styles.floatBadge} ${styles.floatBadge3}`}>
            <HiShieldCheck className={styles.shieldIcon} />
            <span className={styles.floatBadgeText}>Secure & Trusted</span>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 69.3C120 59 240 37 360 32C480 27 600 40 720 45.3C840 51 960 48 1080 42.7C1200 37 1320 27 1380 21.3L1440 16V80H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
