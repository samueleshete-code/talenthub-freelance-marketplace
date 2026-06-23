import { useEffect, useRef, useState } from 'react';
import { HiUsers, HiBriefcase, HiEmojiHappy, HiGlobe } from 'react-icons/hi';
import styles from './StatsSection.module.css';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <HiUsers />,
    value: 10000,
    suffix: '+',
    label: 'Freelancers',
    description: 'Verified professionals across 50+ categories',
    color: '#2563EB',
  },
  {
    icon: <HiBriefcase />,
    value: 50000,
    suffix: '+',
    label: 'Completed Projects',
    description: 'Successfully delivered across all industries',
    color: '#7C3AED',
  },
  {
    icon: <HiEmojiHappy />,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Based on verified post-project reviews',
    color: '#06B6D4',
  },
  {
    icon: <HiGlobe />,
    value: 120,
    suffix: '+',
    label: 'Countries',
    description: 'Global talent network spanning every continent',
    color: '#10B981',
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const totalFrames = Math.round((duration / 1000) * 60);
    const increment = target / totalFrames;

    const tick = () => {
      frame++;
      const current = Math.min(Math.round(increment * frame), target);
      setCount(current);
      if (current < target) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

const StatItem = ({ stat, active }: { stat: Stat; active: boolean }) => {
  const count = useCountUp(stat.value, 2000, active);

  const format = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return `${n}`;
  };

  return (
    <div className={styles.statItem}>
      <div className={styles.statIcon} style={{ background: `${stat.color}18`, color: stat.color }}>
        {stat.icon}
      </div>
      <div className={styles.statValue} style={{ color: stat.color }}>
        {format(count)}{stat.suffix}
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
      <p className={styles.statDesc}>{stat.description}</p>
    </div>
  );
};

const StatsSection = () => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.statsSection}`} ref={ref} id="stats">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgPattern} />
      </div>
      <div className={`container ${styles.inner}`}>
        <div className="section-header">
          <span className="section-badge">Platform Stats</span>
          <h2 className="section-title">
            Trusted by <span className="text-gradient">Thousands</span> Worldwide
          </h2>
          <p className="section-subtitle">
            Real numbers that reflect our commitment to quality and the trust placed in us by our global community.
          </p>
        </div>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
