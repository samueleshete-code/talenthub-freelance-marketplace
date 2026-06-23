import { useEffect, useRef, useState } from 'react';
import './Stats.css';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
}

const stats: StatItem[] = [
  {
    value: 10000,
    suffix: '+',
    label: 'Freelancers',
    description: 'Verified professionals across 120+ skill categories',
    color: '#6c47ff',
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across all industries',
    color: '#00d4aa',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Average satisfaction score based on verified reviews',
    color: '#ffd93d',
  },
  {
    value: 120,
    suffix: '+',
    label: 'Countries Served',
    description: 'Connecting talent and clients across the globe',
    color: '#ff6b6b',
  },
];

function useCounter(target: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, startCounting]);

  return count;
}

const StatCard = ({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) => {
  const count = useCounter(stat.value, 2000, isVisible);

  const formatNumber = (n: number) => {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'k';
    return n.toString();
  };

  return (
    <div className="stat-card" style={{ '--stat-color': stat.color } as React.CSSProperties}>
      <div className="stat-card__glow" />
      <div className="stat-card__value">
        <span className="stat-card__number" style={{ color: stat.color }}>
          {formatNumber(count)}{stat.suffix}
        </span>
      </div>
      <div className="stat-card__label">{stat.label}</div>
      <p className="stat-card__desc">{stat.description}</p>
      <div className="stat-card__bar">
        <div
          className="stat-card__bar-fill"
          style={{
            background: `linear-gradient(90deg, ${stat.color}, transparent)`,
            width: isVisible ? '100%' : '0%',
          }}
        />
      </div>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="stats" ref={sectionRef}>
      <div className="stats__bg" aria-hidden="true">
        <div className="stats__gradient" />
      </div>

      <div className="container">
        <div className="stats__header">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            Platform Numbers
          </span>
          <h2 className="section-title">
            Numbers That Speak{' '}
            <span className="text-gradient">for Themselves</span>
          </h2>
          <p className="section-subtitle">
            Join a thriving community of professionals and businesses delivering results every single day.
          </p>
        </div>

        <div className="stats__grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="stats__banner">
          <div className="stats__banner-content">
            <h3 className="stats__banner-title">Ready to join the community?</h3>
            <p className="stats__banner-desc">
              Start hiring top freelancers or showcase your skills today.
            </p>
          </div>
          <div className="stats__banner-actions">
            <a href="#" className="btn-primary">Get Started Free</a>
            <a href="#services" className="btn-ghost">Browse Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
