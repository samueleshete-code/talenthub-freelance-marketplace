import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  HiStar, HiLocationMarker, HiClock, HiArrowLeft, HiCheckCircle,
} from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import { services } from '../../data/services';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import styles from './SellerProfile.module.css';

const SellerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === Number(id));

  useEffect(() => {
    if (service) document.title = `${service.seller} — TalentHub`;
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <div className={styles.notFound}>
        <h2>Profile not found</h2>
        <Link to="/services" className="btn btn-primary">Browse Services</Link>
      </div>
    );
  }

  const skills = ['React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'AWS', 'GraphQL', 'Docker'];

  const otherServices = services.filter((s) => s.seller !== service.seller).slice(0, 3);

  return (
    <div className={styles.page}>
      <div className="container">
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <HiArrowLeft /> Back
        </button>

        <div className={styles.layout}>
          {/* LEFT: Profile sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.profileCard}>
              <div className={styles.avatarWrap}>
                <img src={service.sellerAvatar} alt={service.seller} className={styles.avatar} />
                <span className={styles.onlineDot} aria-label="Online" />
              </div>

              <h1 className={styles.name}>
                {service.seller}
                <MdVerified className={styles.verifiedIcon} />
              </h1>
              <p className={styles.jobTitle}>{service.category} Specialist</p>

              <div className={styles.levelBadge}>{service.sellerLevel}</div>

              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <HiStar className={styles.statStar} />
                  <strong>{service.rating}</strong>
                  <span>Rating</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                  <strong>{service.reviews}</strong>
                  <span>Reviews</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statItem}>
                  <strong>98%</strong>
                  <span>Completion</span>
                </div>
              </div>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <HiLocationMarker />
                  <span>San Francisco, CA</span>
                </div>
                <div className={styles.infoItem}>
                  <HiClock />
                  <span>Responds in ~2 hours</span>
                </div>
              </div>

              <Link to={`/services/${service.id}`} className={`btn btn-primary ${styles.contactBtn}`}>
                Contact Me
              </Link>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" className={styles.socialLink} aria-label="Portfolio"><FaGlobe /></a>
              </div>
            </div>
          </aside>

          {/* RIGHT: Main Content */}
          <main className={styles.main}>
            {/* About */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p className={styles.bio}>
                I'm a passionate {service.category.toLowerCase()} professional with 7+ years of experience
                delivering high-quality solutions for startups and Fortune 500 companies alike.
                My approach combines technical excellence with creative problem-solving to create
                products that truly make a difference.
              </p>
              <p className={styles.bio}>
                I've worked with clients across 30+ countries and contributed to projects that have
                collectively generated over $50M in revenue. When I'm not coding, I contribute to
                open-source and mentor junior developers.
              </p>
            </section>

            {/* Skills */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
              <div className={styles.skills}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.skillBadge}>{skill}</span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <div className={styles.timeline}>
                {[
                  { role: 'Senior Freelancer', company: 'TalentHub', period: '2022 – Present', desc: 'Top-rated freelancer with 300+ completed projects.' },
                  { role: 'Lead Developer', company: 'TechCorp Inc.', period: '2019 – 2022', desc: 'Led a team of 8 engineers building SaaS products.' },
                  { role: 'Software Engineer', company: 'StartupXYZ', period: '2017 – 2019', desc: 'Full-stack development of core product features.' },
                ].map((exp) => (
                  <div key={exp.role} className={styles.timelineItem}>
                    <div className={styles.timelineDot}>
                      <HiCheckCircle />
                    </div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeader}>
                        <strong>{exp.role}</strong>
                        <span className={styles.timelineCompany}> · {exp.company}</span>
                      </div>
                      <div className={styles.timelinePeriod}>{exp.period}</div>
                      <p className={styles.timelineDesc}>{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Portfolio */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Portfolio</h2>
              <div className={styles.portfolioGrid}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={styles.portfolioItem}>
                    <img
                      src={`https://images.unsplash.com/photo-${1547658719 + i * 100000}-da2b51169166?auto=format&fit=crop&w=400&q=80`}
                      alt={`Portfolio ${i}`}
                      className={styles.portfolioImg}
                      loading="lazy"
                    />
                    <div className={styles.portfolioOverlay}>
                      <span className={styles.portfolioView}>View Project</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Services */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Other Services You May Like</h2>
              <div className={styles.otherGrid}>
                {otherServices.map((s) => (
                  <ServiceCard key={s.id} service={s} variant="compact" />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
