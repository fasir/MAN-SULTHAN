import styles from './Features.module.css';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M1 3h15v13H1z" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 8h4l3 3.5V16h-7V8z" fill="#c9a84c" fillOpacity="0.35" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" fill="#0a233c" stroke="#c9a84c" strokeWidth="1.8" />
        <circle cx="18.5" cy="18.5" r="2.5" fill="#0a233c" stroke="#c9a84c" strokeWidth="1.8" />
      </svg>
    ),
    title: 'FREE SHIPPING',
    desc: 'Free delivery on orders above ₹999',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="9" y="10" width="6" height="5" rx="1" fill="#c9a84c" fillOpacity="0.5" stroke="#c9a84c" strokeWidth="1.5" />
        <path d="M10 10V8a2 2 0 114 0v2" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'SECURE PAYMENT',
    desc: '100% secure payment gateway',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 3h12l4 6-10 12L2 9l4-6z" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11 3l-3 6 4 12 4-12-3-6" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 9h20" stroke="#c9a84c" strokeWidth="1.5" />
      </svg>
    ),
    title: 'PREMIUM QUALITY',
    desc: 'Handpicked premium products',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#c9a84c" fillOpacity="0.15" />
        <path d="M3.05 11a9 9 0 0114.39-4.8L20 4m0 5h-5m5 4a9 9 0 01-14.39 4.8L4 20m0-5h5" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'EASY RETURNS',
    desc: '7-day hassle-free returns',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 12a9 9 0 1118 0v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-3a2 2 0 012-2h4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12v7a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H3" fill="#c9a84c" fillOpacity="0.25" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: '24/7 SUPPORT',
    desc: 'Dedicated customer support',
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        {features.map((f, i) => (
          <div key={i} className={styles.featureItem}>
            <span className={styles.featureIcon}>{f.icon}</span>
            <div>
              <h4 className={styles.featureTitle}>{f.title}</h4>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
