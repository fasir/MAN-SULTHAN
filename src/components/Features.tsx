import styles from './Features.module.css';

const features = [
  { icon: '🚚', title: 'FREE SHIPPING', desc: 'Free delivery on orders above ₹999' },
  { icon: '🔒', title: 'SECURE PAYMENT', desc: '100% secure payment gateway' },
  { icon: '⭐', title: 'PREMIUM QUALITY', desc: 'Handpicked premium products' },
  { icon: '🔄', title: 'EASY RETURNS', desc: '7-day hassle-free returns' },
  { icon: '🎧', title: '24/7 SUPPORT', desc: 'Dedicated customer support' },
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
