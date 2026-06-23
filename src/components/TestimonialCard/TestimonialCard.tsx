import { HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import type { Testimonial } from '../../data/testimonials';
import styles from './TestimonialCard.module.css';

interface Props {
  testimonial: Testimonial;
  featured?: boolean;
}

const TestimonialCard = ({ testimonial, featured = false }: Props) => {
  return (
    <div className={[styles.card, featured ? styles.featured : ''].join(' ')}>
      {/* Quote Icon */}
      <FaQuoteLeft className={styles.quoteIcon} aria-hidden="true" />

      {/* Stars */}
      <div className={styles.stars}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <HiStar key={i} className={styles.star} />
        ))}
      </div>

      {/* Text */}
      <blockquote className={styles.text}>
        "{testimonial.text}"
      </blockquote>

      {/* Project Label */}
      <div className={styles.projectTag}>
        <span className={styles.projectLabel}>Project:</span>
        <span className={styles.projectName}>{testimonial.project}</span>
      </div>

      {/* Author */}
      <div className={styles.author}>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={styles.avatar}
        />
        <div>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.role}>
            {testimonial.title} · {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
