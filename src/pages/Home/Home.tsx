import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HiLockClosed, HiLightningBolt, HiSupport,
  HiStar, HiArrowRight, HiCheckCircle,
} from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import StatsSection from '../../components/StatsSection/StatsSection';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { featuredServices } from '../../data/services';
import { testimonials } from '../../data/testimonials';
import styles from './Home.module.css';

/* ---- Trusted By logos ---- */
const companies = [
  { name: 'Google', logo: 'G' },
  { name: 'Microsoft', logo: 'M' },
  { name: 'Spotify', logo: 'S' },
  { name: 'Airbnb', logo: 'A' },
  { name: 'Shopify', logo: 'Sh' },
  { name: 'Stripe', logo: 'St' },
];

/* ---- Why Choose Us ---- */
const whyUs = [
  {
    icon: <MdVerified />,
    title: 'Verified Freelancers',
    description: 'Every professional passes rigorous skill assessments, portfolio reviews, and identity verification before joining.',
    color: '#2563EB',
    bg: '#EFF6FF',
    stat: '100% Vetted',
  },
  {
    icon: <HiLockClosed />,
    title: 'Secure Payments',
    description: 'Industry-leading escrow system holds funds safely until you approve the work. No risk, ever.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    stat: 'Escrow Protected',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Fast Delivery',
    description: 'Get matched with the perfect freelancer in hours, not weeks. Our AI matching system ensures speed and quality.',
    color: '#06B6D4',
    bg: '#ECFEFF',
    stat: 'Same-Day Match',
  },
  {
    icon: <HiSupport />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support with dedicated account managers for enterprise clients.',
    color: '#10B981',
    bg: '#ECFDF5',
    stat: 'Always Available',
  },
];

/* ---- Categories ---- */
const categories = [
  { label: 'Web Development', icon: '💻', count: '2,400+' },
  { label: 'Graphic Design', icon: '🎨', count: '1,800+' },
  { label: 'Mobile Apps', icon: '📱', count: '1,200+' },
  { label: 'Digital Marketing', icon: '📈', count: '1,500+' },
  { label: 'Content Writing', icon: '✍️', count: '3,100+' },
  { label: 'Video Editing', icon: '🎬', count: '900+' },
];

const Home = () => {
  // Set page title
  useEffect(() => {
    document.title = 'TalentHub — Find Elite Freelancers For Any Project';
  }, []);

  // Scroll-reveal refs for each section
  const [trustedRef, trustedVis]         = useScrollAnimation({ threshold: 0.2 });
  const [categoriesRef, categoriesVis]   = useScrollAnimation({ threshold: 0.1 });
  const [servicesRef, servicesVis]       = useScrollAnimation({ threshold: 0.08 });
  const [whyRef, whyVis]                 = useScrollAnimation({ threshold: 0.1 });
  const [testimonialsRef, testimonialsVis] = useScrollAnimation({ threshold: 0.1 });
  const [howRef, howVis]                 = useScrollAnimation({ threshold: 0.1 });

  return (
    <main className={styles.home}>
      {/* ═══════════ HERO ═══════════ */}
      <Hero />

      {/* ═══════════ TRUSTED BY ═══════════ */}
      <section
        className={styles.trustedBy}
        aria-label="Trusted by"
        ref={trustedRef as React.RefObject<HTMLElement>}
      >
        <div className={`container reveal ${trustedVis ? 'visible' : ''}`}>
          <p className={styles.trustedLabel}>Trusted by world-class teams at</p>
          <div className={styles.logosRow}>
            {companies.map((c) => (
              <div key={c.name} className={styles.logoItem} title={c.name}>
                <span className={styles.logoLetter}>{c.logo}</span>
                <span className={styles.logoName}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CATEGORIES ═══════════ */}
      <section
        className={`section ${styles.categoriesSection}`}
        aria-label="Browse Categories"
        ref={categoriesRef as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div className={`section-header reveal ${categoriesVis ? 'visible' : ''}`}>
            <span className="section-badge">Browse by Category</span>
            <h2 className="section-title">
              Find Talent in <span className="text-gradient">Every Domain</span>
            </h2>
          </div>
          <div className={`reveal-stagger ${categoriesVis ? 'visible' : ''} ${styles.categoriesGrid}`}>
            {categories.map((cat, i) => (
              <Link
                to={`/services?category=${encodeURIComponent(cat.label)}`}
                key={cat.label}
                className={styles.categoryCard}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <span className={styles.categoryEmoji}>{cat.icon}</span>
                <span className={styles.categoryLabel}>{cat.label}</span>
                <span className={styles.categoryCount}>{cat.count} experts</span>
                <HiArrowRight className={styles.categoryArrow} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED SERVICES ═══════════ */}
      <section
        className={`section ${styles.servicesSection}`}
        id="services"
        aria-label="Featured Services"
        ref={servicesRef as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div className={`section-header reveal ${servicesVis ? 'visible' : ''}`}>
            <span className="section-badge">Featured Services</span>
            <h2 className="section-title">
              Premium <span className="text-gradient">Services</span> You'll Love
            </h2>
            <p className="section-subtitle">
              Hand-picked services from our top-rated freelancers — quality guaranteed.
            </p>
          </div>

          <div className={`reveal-stagger ${servicesVis ? 'visible' : ''} ${styles.servicesGrid}`}>
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className={styles.seeAll}>
            <Link to="/services" className="btn btn-primary btn-lg">
              Browse All Services
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section
        className={`section ${styles.whySection}`}
        id="why-us"
        aria-label="Why TalentHub"
        ref={whyRef as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div className={`${styles.whyLayout} reveal ${whyVis ? 'visible' : ''}`}>
            {/* Left: Text */}
            <div className={styles.whyLeft}>
              <span className="section-badge">Why TalentHub</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>
                Built for the{' '}
                <span className="text-gradient">Future of Work</span>
              </h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: '1.7', maxWidth: '420px' }}>
                We combine cutting-edge AI matching with rigorous vetting to deliver
                the most reliable freelance experience in the market.
              </p>
              <div className={styles.checkList}>
                {[
                  'No hidden fees — transparent pricing always',
                  'AI-powered talent matching in under 5 minutes',
                  'Full money-back guarantee on all projects',
                  'Dedicated account manager for every client',
                ].map((item) => (
                  <div key={item} className={styles.checkItem}>
                    <HiCheckCircle className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary" style={{ width: 'fit-content' }}>
                Learn More About Us
              </Link>
            </div>

            {/* Right: Feature Cards */}
            <div className={styles.whyRight}>
              {whyUs.map((item, i) => (
                <div
                  key={item.title}
                  className={styles.whyCard}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.whyIconWrap} style={{ background: item.bg, color: item.color }}>
                    {item.icon}
                  </div>
                  <div className={styles.whyBody}>
                    <h3 className={styles.whyTitle}>{item.title}</h3>
                    <p className={styles.whyDesc}>{item.description}</p>
                  </div>
                  <span className={styles.whyStat} style={{ color: item.color }}>
                    {item.stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <StatsSection />

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section
        className={`section ${styles.testimonialSection}`}
        aria-label="Client Reviews"
        ref={testimonialsRef as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div className={`section-header reveal ${testimonialsVis ? 'visible' : ''}`}>
            <span className="section-badge">
              <HiStar />
              Client Reviews
            </span>
            <h2 className="section-title">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="section-subtitle">
              Real stories from real businesses that transformed their projects with TalentHub.
            </p>
          </div>

          <div className={`reveal-stagger ${testimonialsVis ? 'visible' : ''} ${styles.testimonialsGrid}`}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} featured={i === 1} />
            ))}
          </div>

          {/* Rating Summary */}
          <div className={styles.ratingSummary}>
            <div className={styles.ratingStars}>
              {[...Array(5)].map((_, i) => (
                <HiStar key={i} className={styles.ratingStar} />
              ))}
            </div>
            <strong className={styles.ratingValue}>4.9 out of 5</strong>
            <span className={styles.ratingCount}>based on 12,000+ verified reviews</span>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section
        className={`section ${styles.howSection}`}
        aria-label="How It Works"
        ref={howRef as React.RefObject<HTMLElement>}
      >
        <div className="container">
          <div className={`section-header reveal ${howVis ? 'visible' : ''}`}>
            <span className="section-badge">Simple Process</span>
            <h2 className="section-title">
              Hire in <span className="text-gradient">3 Easy Steps</span>
            </h2>
          </div>
          <div className={`reveal-stagger ${howVis ? 'visible' : ''} ${styles.stepsGrid}`}>
            {[
              { step: '01', title: 'Post Your Project', desc: 'Describe what you need — our AI will match you with the best candidates within minutes.', icon: '📋' },
              { step: '02', title: 'Review & Choose', desc: 'Browse curated freelancer profiles, compare proposals, and pick the perfect match.', icon: '🔍' },
              { step: '03', title: 'Get It Done', desc: 'Collaborate seamlessly, track milestones, and pay securely when you\'re 100% satisfied.', icon: '🚀' },
            ].map((step, i) => (
              <div key={step.step} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepEmoji}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {i < 2 && <div className={styles.stepConnector} aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/services" className="btn btn-primary btn-lg">
              Start Hiring Now <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
