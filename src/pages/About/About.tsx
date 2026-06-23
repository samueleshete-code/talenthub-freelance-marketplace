import { useEffect } from 'react';
import type React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { MdWorkspacePremium } from 'react-icons/md';
import TeamCard from '../../components/TeamCard/TeamCard';
import { team } from '../../data/team';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './About.module.css';

const milestones = [
  { year: '2019', event: 'TalentHub founded in San Francisco by Jordan Blake and Sofia Reyes.' },
  { year: '2020', event: 'Reached 1,000 verified freelancers and $1M in transactions.' },
  { year: '2021', event: 'Series A funding of $15M. Expanded to 50+ countries.' },
  { year: '2022', event: 'Launched enterprise tier. 10,000+ businesses onboarded.' },
  { year: '2023', event: 'AI-powered talent matching launched. Series B of $40M closed.' },
  { year: '2024', event: '10,000+ freelancers. 50,000+ projects. Operating in 120+ countries.' },
];

const values = [
  { icon: '🎯', title: 'Quality Over Quantity', desc: 'We accept only the top 3% of freelancer applicants, ensuring every hire is exceptional.' },
  { icon: '🤝', title: 'Trust & Transparency', desc: 'Escrow payments, verified reviews, and full project visibility keep everyone accountable.' },
  { icon: '🌍', title: 'Global Inclusion', desc: 'We believe talent has no borders. Our platform celebrates diversity in skills and backgrounds.' },
  { icon: '⚡', title: 'Speed & Efficiency', desc: 'Our AI matches clients with the right freelancer in minutes, not days or weeks.' },
];

const About = () => {
  useEffect(() => {
    document.title = 'About Us — TalentHub';
    window.scrollTo(0, 0);
  }, []);

  const [missionRef, missionVis]   = useScrollAnimation({ threshold: 0.1 });
  const [storyRef, storyVis]       = useScrollAnimation({ threshold: 0.08 });
  const [valuesRef, valuesVis]     = useScrollAnimation({ threshold: 0.1 });
  const [teamRef, teamVis]         = useScrollAnimation({ threshold: 0.08 });
  const [goalsRef, goalsVis]       = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <span className={`section-badge ${styles.heroBadge}`}>Our Story</span>
          <h1 className={styles.heroTitle}>
            Redefining How the World
            <br />
            <span className={styles.heroHighlight}>Works Together</span>
          </h1>
          <p className={styles.heroSubtitle}>
            TalentHub was born from a simple belief: that exceptional work comes from exceptional
            people — and everyone deserves access to both, regardless of geography.
          </p>
          <div className={styles.heroCta}>
            <Link to="/services" className="btn btn-primary btn-lg">
              Hire Top Talent <HiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section ${styles.missionSection}`} ref={missionRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <div className={`reveal-stagger ${missionVis ? 'visible' : ''} ${styles.missionGrid}`}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>🎯</div>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                To empower businesses and freelancers by creating the most trusted, efficient,
                and human-centered marketplace for remote work. We make it easy to find, hire,
                and collaborate with the world's best talent — on every project, every time.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>🔭</div>
              <h2 className={styles.missionTitle}>Our Vision</h2>
              <p className={styles.missionText}>
                A world where every person can work on projects they love, from anywhere,
                with the freedom to grow their career on their own terms — and every business
                can instantly access the exact expertise they need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.storySection}`} ref={storyRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <div className={`${styles.storyLayout} reveal ${storyVis ? 'visible' : ''}`}>
            <div className={styles.storyContent}>
              <span className="section-badge">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>
                From a Garage to{' '}
                <span className="text-gradient">Global Platform</span>
              </h2>
              <p className={styles.storyText}>
                In 2019, Jordan Blake and Sofia Reyes were frustrated with the freelance
                platforms available — clunky interfaces, hidden fees, and no real way to
                verify talent quality. They set out to build something better.
              </p>
              <p className={styles.storyText}>
                Starting with just 50 hand-vetted freelancers and a simple interface,
                TalentHub grew through word of mouth. By 2021, they'd raised $15M in
                Series A funding and expanded to 50 countries.
              </p>
              <p className={styles.storyText}>
                Today, TalentHub processes over $2M in transactions monthly, with 10,000+
                verified freelancers and 50,000+ completed projects across 120 countries.
                The mission remains the same: make great work accessible to everyone.
              </p>
            </div>
            <div className={styles.storyTimeline}>
              {milestones.map((m) => (
                <div key={m.year} className={styles.milestone}>
                  <div className={styles.milestoneYear}>{m.year}</div>
                  <div className={styles.milestoneLine} aria-hidden="true" />
                  <div className={styles.milestoneContent}>{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`} ref={valuesRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <div className={`section-header reveal ${valuesVis ? 'visible' : ''}`}>
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">
              What We <span className="text-gradient">Stand For</span>
            </h2>
          </div>
          <div className={`reveal-stagger ${valuesVis ? 'visible' : ''} ${styles.valuesGrid}`}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`} ref={teamRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <div className={`section-header reveal ${teamVis ? 'visible' : ''}`}>
            <span className="section-badge">The Team</span>
            <h2 className="section-title">
              Meet the <span className="text-gradient">Founders & Leaders</span>
            </h2>
            <p className="section-subtitle">
              A diverse team of builders, designers, and dreamers united by one goal: making remote work work better.
            </p>
          </div>
          <div className={`reveal-stagger ${teamVis ? 'visible' : ''} ${styles.teamGrid}`}>
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Goals */}
      <section className={`section ${styles.goalsSection}`} ref={goalsRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <div className={`${styles.goalsLayout} reveal ${goalsVis ? 'visible' : ''}`}>
            <div>
              <span className="section-badge">2025 Goals</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px' }}>
                Where We're <span className="text-gradient">Headed</span>
              </h2>
              <p style={{ color: 'var(--gray-500)', marginBottom: '28px', lineHeight: '1.7', maxWidth: '400px' }}>
                We're scaling fast with ambitious targets for 2025 and beyond.
              </p>
              <div className={styles.goalList}>
                {[
                  'Reach 25,000 verified freelancers globally',
                  'Launch AI-powered project scoping tool',
                  'Expand to 150+ countries',
                  'Process $10M+ in monthly transactions',
                  'Open TalentHub Academy for skill certification',
                ].map((g) => (
                  <div key={g} className={styles.goalItem}>
                    <HiCheckCircle className={styles.goalCheck} />
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.goalsVisual}>
              <div className={styles.goalsCard}>
                <MdWorkspacePremium className={styles.goalsCardIcon} />
                <div className={styles.goalsCardTitle}>TalentHub 2025</div>
                <p className={styles.goalsCardText}>Redefining the future of work, one project at a time.</p>
                <Link to="/contact" className="btn btn-primary">
                  Join Our Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
