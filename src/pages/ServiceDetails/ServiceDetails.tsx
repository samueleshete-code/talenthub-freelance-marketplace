import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  HiStar, HiClock, HiRefresh, HiCheckCircle, HiArrowLeft, HiShare,
  HiHeart, HiShieldCheck,
} from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { services } from '../../data/services';
import styles from './ServiceDetails.module.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === Number(id));

  useEffect(() => {
    if (service) document.title = `${service.title} — TalentHub`;
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <div className={styles.notFound}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary">Back to Services</Link>
      </div>
    );
  }

  const packages = [
    { name: 'Basic', price: service.price, delivery: service.deliveryDays, revisions: 2, features: ['Source files', 'Basic support', '1 revision'] },
    { name: 'Standard', price: Math.round(service.price * 1.8), delivery: Math.round(service.deliveryDays * 0.7), revisions: 5, features: ['Source files', 'Priority support', '5 revisions', 'Commercial rights'] },
    { name: 'Premium', price: Math.round(service.price * 3), delivery: Math.round(service.deliveryDays * 0.5), revisions: -1, features: ['Source files', '24/7 support', 'Unlimited revisions', 'Commercial rights', 'NDA included', 'Dedicated PM'] },
  ];

  const mockReviews = [
    { name: 'Jordan T.', avatar: 'Jordan+T', bg: '2563EB', rating: 5, date: '2 weeks ago', text: 'Absolutely fantastic work. Delivered ahead of schedule with exceptional quality. Will definitely hire again!' },
    { name: 'Maria G.', avatar: 'Maria+G', bg: '7C3AED', rating: 5, date: '1 month ago', text: 'Professional, responsive, and extremely talented. The final deliverable exceeded my expectations completely.' },
    { name: 'Chris P.', avatar: 'Chris+P', bg: '06B6D4', rating: 4, date: '2 months ago', text: 'Great communication throughout the project. Minor revision needed but was handled promptly.' },
  ];

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            <HiArrowLeft /> Back to Services
          </button>
          <nav className={styles.breadNav} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.category}</span>
          </nav>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        {/* LEFT: Main Content */}
        <div className={styles.main}>
          {/* Banner */}
          <div className={styles.banner}>
            <img src={service.image} alt={service.title} className={styles.bannerImg} />
            <div className={styles.bannerOverlay}>
              <span className={styles.bannerCategory}>{service.category}</span>
            </div>
            <div className={styles.bannerActions}>
              <button className={styles.actionBtn} aria-label="Save to wishlist"><HiHeart /></button>
              <button className={styles.actionBtn} aria-label="Share"><HiShare /></button>
            </div>
          </div>

          {/* Title & Meta */}
          <div className={styles.titleSection}>
            <h1 className={styles.title}>{service.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaRating}>
                <HiStar className={styles.starIcon} />
                <strong>{service.rating}</strong>
                <span>({service.reviews} reviews)</span>
              </div>
              <span className={styles.metaDivider}>·</span>
              <div className={styles.metaDelivery}>
                <HiClock />
                {service.deliveryDays} days delivery
              </div>
            </div>
            <div className={styles.tags}>
              {service.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          {/* Seller */}
          <div className={styles.sellerCard}>
            <img
              src={service.sellerAvatar}
              alt={service.seller}
              className={styles.sellerAvatar}
            />
            <div className={styles.sellerInfo}>
              <div className={styles.sellerName}>
                {service.seller}
                <MdVerified className={styles.verifiedIcon} />
              </div>
              <div className={styles.sellerLevel}>{service.sellerLevel}</div>
            </div>
            <Link to={`/seller/${service.id}`} className={`btn btn-secondary ${styles.viewProfileBtn}`}>
              View Profile
            </Link>
          </div>

          {/* Description */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>About This Service</h2>
            <p className={styles.description}>{service.description}</p>
            <p className={styles.description}>
              I specialize in delivering production-ready solutions that combine technical excellence
              with clean, maintainable code. Every project comes with thorough documentation,
              optimized performance, and full communication throughout the process.
            </p>
            <div className={styles.featureList}>
              {['Industry-standard best practices', 'Full source code ownership', 'Post-delivery support', 'Optimized for performance and SEO'].map((f) => (
                <div key={f} className={styles.featureItem}>
                  <HiCheckCircle className={styles.featureCheck} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className={styles.section}>
            <div className={styles.reviewsHeader}>
              <h2 className={styles.sectionTitle}>Client Reviews</h2>
              <div className={styles.overallRating}>
                <HiStar className={styles.starIcon} />
                <strong>{service.rating}</strong>
                <span>({service.reviews})</span>
              </div>
            </div>
            <div className={styles.reviewsList}>
              {mockReviews.map((r) => (
                <div key={r.name} className={styles.reviewItem}>
                  <img
                    src={`https://ui-avatars.com/api/?name=${r.avatar}&background=${r.bg}&color=fff&size=40&bold=true`}
                    alt={r.name}
                    className={styles.reviewAvatar}
                  />
                  <div className={styles.reviewContent}>
                    <div className={styles.reviewTop}>
                      <span className={styles.reviewName}>{r.name}</span>
                      <div className={styles.reviewStars}>
                        {[...Array(r.rating)].map((_, i) => <HiStar key={i} />)}
                      </div>
                      <span className={styles.reviewDate}>{r.date}</span>
                    </div>
                    <p className={styles.reviewText}>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Packages Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.stickyWrap}>
            {/* Package Tabs */}
            <div className={styles.packageCard}>
              <div className={styles.packageTabs}>
                {packages.map((pkg) => (
                  <div key={pkg.name} className={[styles.packageTab, pkg.name === 'Standard' ? styles.packageTabActive : ''].join(' ')}>
                    <div className={styles.packageTabName}>{pkg.name}</div>
                    <div className={styles.packageTabPrice}>${pkg.price}</div>
                  </div>
                ))}
              </div>

              <div className={styles.packageBody}>
                <div className={styles.packageMeta}>
                  <div className={styles.packageMetaItem}>
                    <HiClock />
                    <span>{packages[1].delivery} day delivery</span>
                  </div>
                  <div className={styles.packageMetaItem}>
                    <HiRefresh />
                    <span>{packages[1].revisions} revisions</span>
                  </div>
                </div>

                <div className={styles.packageFeatures}>
                  {packages[1].features.map((f) => (
                    <div key={f} className={styles.packageFeatureItem}>
                      <HiCheckCircle className={styles.featureCheck} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <button className={`btn btn-primary ${styles.orderBtn}`}>
                  Continue — ${packages[1].price}
                </button>

                <div className={styles.packageNote}>
                  <HiShieldCheck />
                  <span>Secure payment · Money-back guarantee</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className={styles.contactCard}>
              <p className={styles.contactText}>Have questions? Contact the seller directly before ordering.</p>
              <Link to={`/seller/${service.id}`} className={`btn btn-secondary ${styles.contactBtn}`}>
                Contact Seller
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
