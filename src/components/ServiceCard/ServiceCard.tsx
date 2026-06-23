import { Link } from 'react-router-dom';
import { HiStar, HiClock, HiArrowRight } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import type { Service } from '../../data/services';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact';
}

const ServiceCard = ({ service, variant = 'default' }: ServiceCardProps) => {
  const levelColor: Record<string, string> = {
    'Top Rated': '#059669',
    'Pro': '#2563EB',
    'Level 2': '#7C3AED',
    'Level 1': '#64748B',
  };

  return (
    <Link
      to={`/services/${service.id}`}
      className={[styles.card, variant === 'compact' ? styles.compact : ''].join(' ')}
      aria-label={`View ${service.title}`}
    >
      {/* Image */}
      <div className={styles.imageWrap}>
        <img
          src={service.image}
          alt={service.title}
          className={styles.image}
          loading="lazy"
        />
        <span className={styles.categoryBadge}>{service.category}</span>
        {service.featured && (
          <span className={styles.featuredBadge}>Featured</span>
        )}
        <div className={styles.imageOverlay}>
          <span className={styles.viewBtn}>
            View Service <HiArrowRight />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Seller */}
        <div className={styles.seller}>
          <img
            src={service.sellerAvatar}
            alt={service.seller}
            className={styles.sellerAvatar}
          />
          <div className={styles.sellerInfo}>
            <span className={styles.sellerName}>
              {service.seller}
              <MdVerified className={styles.verifiedIcon} />
            </span>
            <span
              className={styles.sellerLevel}
              style={{ color: levelColor[service.sellerLevel] }}
            >
              {service.sellerLevel}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className={styles.title}>{service.title}</h3>

        {/* Description */}
        {variant !== 'compact' && (
          <p className={styles.description}>{service.description}</p>
        )}

        {/* Tags */}
        <div className={styles.tags}>
          {service.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.meta}>
          <span className={styles.rating}>
            <HiStar className={styles.starIcon} />
            <strong>{service.rating}</strong>
            <span className={styles.reviews}>({service.reviews})</span>
          </span>
          <span className={styles.delivery}>
            <HiClock className={styles.clockIcon} />
            {service.deliveryDays}d delivery
          </span>
        </div>
        <div className={styles.price}>
          <span className={styles.priceFrom}>From</span>
          <strong className={styles.priceValue}>${service.price}</strong>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
