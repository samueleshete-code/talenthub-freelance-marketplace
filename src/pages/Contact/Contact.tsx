import { useEffect } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

const contactDetails = [
  {
    icon: <HiMail />,
    title: 'Email Us',
    value: 'hello@talenthub.io',
    sub: 'We reply within 2 hours',
    href: 'mailto:hello@talenthub.io',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    icon: <HiPhone />,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    sub: 'Mon–Fri, 9AM–6PM PST',
    href: 'tel:+15551234567',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: <HiLocationMarker />,
    title: 'Visit Us',
    value: '100 Market St, Suite 800',
    sub: 'San Francisco, CA 94107',
    href: 'https://maps.google.com',
    color: '#06B6D4',
    bg: '#ECFEFF',
  },
  {
    icon: <HiClock />,
    title: 'Support Hours',
    value: '24/7 Live Chat',
    sub: 'Phone: Mon–Fri 9AM–6PM',
    href: '#',
    color: '#10B981',
    bg: '#ECFDF5',
  },
];

const faqs = [
  { q: 'How do I hire a freelancer on TalentHub?', a: 'Post your project, review curated proposals from verified freelancers, then hire with secure escrow payment.' },
  { q: 'How are freelancers vetted?', a: 'All freelancers pass skill assessments, portfolio reviews, video interviews, and identity verification before approval.' },
  { q: 'What if I\'m not satisfied with the work?', a: 'Our money-back guarantee covers all projects. Contact support and we\'ll make it right.' },
  { q: 'How does payment work?', a: 'Funds are held in escrow. Money is only released to the freelancer when you approve the completed work.' },
];

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us — TalentHub';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <span className={`section-badge ${styles.heroBadge}`}>Get In Touch</span>
          <h1 className={styles.heroTitle}>
            We'd Love to <span className={styles.heroHighlight}>Hear From You</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Have a question, want a demo, or need help with a project?
            Our team is standing by and responds fast.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className={styles.cardsRow}>
        <div className="container">
          <div className={styles.cardsGrid}>
            {contactDetails.map((c) => (
              <a key={c.title} href={c.href} className={styles.contactCard} style={{ '--card-color': c.color, '--card-bg': c.bg } as React.CSSProperties}>
                <div className={styles.cardIcon} style={{ background: c.bg, color: c.color }}>
                  {c.icon}
                </div>
                <div>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <div className={styles.cardValue}>{c.value}</div>
                  <div className={styles.cardSub}>{c.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Form + Info */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.mainLayout}>
            {/* Form */}
            <div className={styles.formWrap}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>
                  Fill out the form below and we'll get back to you within 2 business hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Info */}
            <div className={styles.infoWrap}>
              {/* Map placeholder */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapContent}>
                  <HiLocationMarker className={styles.mapIcon} />
                  <p className={styles.mapText}>100 Market St, Suite 800<br />San Francisco, CA 94107</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className={styles.socialCard}>
                <h3 className={styles.socialTitle}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <FaTwitter />
                    <span>@TalentHubHQ</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <FaLinkedin />
                    <span>TalentHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{faq.q}</h3>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
