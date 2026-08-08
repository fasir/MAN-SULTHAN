'use client';

import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#c9a84c" fillOpacity="0.15" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '100% Authentic Products',
    desc: 'Every product is sourced directly from authorized distributors and verified for authenticity.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="3" width="15" height="13" rx="2" fill="#c9a84c" fillOpacity="0.15" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6" stroke="#c9a84c" strokeWidth="1.8" />
        <circle cx="5.5" cy="18.5" r="2.5" fill="#c9a84c" fillOpacity="0.15" stroke="#c9a84c" strokeWidth="1.8" />
        <circle cx="18.5" cy="18.5" r="2.5" fill="#c9a84c" fillOpacity="0.15" stroke="#c9a84c" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Free & Fast Delivery',
    desc: 'Enjoy complimentary express shipping on all orders above ₹999, delivered within 2-4 days.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M23 6l-13.5 13.5L4 14" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 6l-13.5 13.5L1 14" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
    ),
    title: 'Easy 7-Day Returns',
    desc: 'Not satisfied? Return within 7 days for a full refund — no questions asked.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" fill="#c9a84c" fillOpacity="0.15" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="#c9a84c" />
      </svg>
    ),
    title: 'Secure Payments',
    desc: 'Shop with confidence — we support UPI, cards, and net banking with 256-bit encryption.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#c9a84c" fillOpacity="0.15" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M12 8v4l3 3" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: '24/7 Customer Support',
    desc: 'Our dedicated team is available around the clock via chat, phone, or WhatsApp.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polyline points="20 12 20 22 4 22 4 12" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="7" width="20" height="5" fill="#c9a84c" fillOpacity="0.15" stroke="#c9a84c" strokeWidth="1.8" rx="1" />
        <line x1="12" y1="22" x2="12" y2="7" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" stroke="#c9a84c" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Gift Wrapping Available',
    desc: 'Make it special — premium gift wrapping with a handwritten note on every order.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>OUR PROMISE</span>
          <h2 className={styles.sectionTitle}>Why Choose <span className={styles.titleGold}>Man Sulthan</span></h2>
          <p className={styles.sectionSubtitle}>We go beyond just selling — we deliver trust, quality, and an unforgettable shopping experience.</p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, idx) => (
            <div key={idx} className={styles.reasonCard}>
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDesc}>{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>10K+</span>
            <span className={styles.trustLabel}>Happy Customers</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>500+</span>
            <span className={styles.trustLabel}>Products</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>4.8★</span>
            <span className={styles.trustLabel}>Avg. Rating</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>99%</span>
            <span className={styles.trustLabel}>Positive Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
