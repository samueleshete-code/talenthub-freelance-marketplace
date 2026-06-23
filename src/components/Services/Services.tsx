import './Services.css';

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Web Development',
    description: 'Full-stack websites, e-commerce platforms, and web apps built with modern frameworks.',
    tags: ['React', 'Node.js', 'Next.js'],
    color: '#6c47ff',
    count: '2,400+ experts',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Graphic Design',
    description: 'Stunning logos, brand identities, print materials, and visual content that makes an impact.',
    tags: ['Figma', 'Illustrator', 'Branding'],
    color: '#ff6b6b',
    count: '1,800+ experts',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Mobile App Dev',
    description: 'Native and cross-platform mobile apps for iOS and Android with exceptional UX.',
    tags: ['React Native', 'Flutter', 'Swift'],
    color: '#00d4aa',
    count: '1,200+ experts',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <polyline points="10 9 9 9 8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Content Writing',
    description: 'SEO-optimized blog posts, copywriting, technical docs, and compelling brand storytelling.',
    tags: ['SEO', 'Copywriting', 'Blogging'],
    color: '#ffd93d',
    count: '3,100+ experts',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Digital Marketing',
    description: 'Data-driven campaigns, social media strategy, PPC, and growth hacking to scale your brand.',
    tags: ['SEO', 'Social Media', 'PPC'],
    color: '#ff9f43',
    count: '1,500+ experts',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Video Editing',
    description: 'Professional video production, motion graphics, YouTube content, and cinematic color grading.',
    tags: ['Premiere', 'After Effects', 'Color'],
    color: '#a29bfe',
    count: '900+ experts',
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__bg" aria-hidden="true">
        <div className="services__glow" />
      </div>

      <div className="container">
        <div className="services__header">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            What We Offer
          </span>
          <h2 className="section-title">
            Browse <span className="text-gradient">Featured Services</span>
          </h2>
          <p className="section-subtitle">
            Explore top-tier freelance services across every domain. Quality work from vetted professionals, delivered on time.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card"
              style={{ '--card-color': service.color, animationDelay: `${index * 0.08}s` } as React.CSSProperties}
            >
              <div className="service-card__icon-wrap">
                <div className="service-card__icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <div className="service-card__icon-glow" />
              </div>

              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>

                <div className="service-card__tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="service-card__tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="service-card__footer">
                <span className="service-card__count">{service.count}</span>
                <span className="service-card__cta">
                  Browse
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="service-card__border" />
            </div>
          ))}
        </div>

        <div className="services__bottom">
          <p className="services__bottom-text">
            Looking for something specific?
          </p>
          <a href="#" className="btn-primary">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
