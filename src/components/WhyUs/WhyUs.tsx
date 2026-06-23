import './WhyUs.css';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Verified Freelancers',
    description: 'Every freelancer is thoroughly vetted through skill assessments, portfolio reviews, and background checks before joining the platform.',
    highlight: '100% Verified',
    color: '#6c47ff',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Secure Payments',
    description: 'Funds are held in escrow until you approve the work. Our secure payment system protects both clients and freelancers at every step.',
    highlight: 'Escrow Protected',
    color: '#00d4aa',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'Get your projects done faster with our streamlined workflow tools, milestone tracking, and real-time collaboration features.',
    highlight: 'On-Time Guarantee',
    color: '#ffd93d',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to help you resolve disputes, answer questions, and ensure project success.',
    highlight: 'Always Available',
    color: '#ff6b6b',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="why-us__bg" aria-hidden="true">
        <div className="why-us__orb why-us__orb--left" />
        <div className="why-us__orb why-us__orb--right" />
      </div>

      <div className="container">
        <div className="why-us__layout">
          {/* Left: Text */}
          <div className="why-us__left">
            <span className="section-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Why Choose Us
            </span>
            <h2 className="section-title">
              Built for the{' '}
              <span className="text-gradient">Future of Work</span>
            </h2>
            <p className="section-subtitle" style={{ margin: 0, textAlign: 'left', maxWidth: '420px' }}>
              FreelanceHub combines cutting-edge technology with a human touch to deliver
              the most reliable freelance experience on the market.
            </p>

            <div className="why-us__checklist">
              {['No hidden fees or commissions', 'Instant project matching AI', 'Money-back guarantee', 'NDA-protected projects'].map((item) => (
                <div key={item} className="why-us__check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="rgba(108,71,255,0.15)" stroke="rgba(108,71,255,0.4)" strokeWidth="1.5" />
                    <path d="M8 12l2.5 2.5L16 9" stroke="#6c47ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="#" className="btn-primary" style={{ width: 'fit-content', marginTop: '8px' }}>
              Learn More About Us
            </a>
          </div>

          {/* Right: Cards */}
          <div className="why-us__cards">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="why-card"
                style={{ '--card-color': feature.color, animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="why-card__top">
                  <div className="why-card__icon" style={{ color: feature.color }}>
                    {feature.icon}
                  </div>
                  <span className="why-card__highlight" style={{ color: feature.color }}>
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="why-card__title">{feature.title}</h3>
                <p className="why-card__desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
