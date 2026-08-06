import styles from './About.module.css';

const reasons = [
  { icon: '💎', title: 'Premium Quality', desc: 'Exceptional products with attention to detail.' },
  { icon: '🎯', title: 'Curated Selection', desc: 'Handpicked products just for you.' },
  { icon: '✨', title: 'Best Prices', desc: 'Competitive pricing on premium brands.' },
  { icon: '🤝', title: 'Trusted by Thousands', desc: 'Thousands of happy & loyal customers.' },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <span className={styles.aboutTag}>ABOUT MAN SULTHAN</span>
            <h2 className={styles.aboutTitle}>Your Destination for<br />Premium Lifestyle</h2>
            <p className={styles.aboutText}>
              At MAN SULTHAN, we bring you the finest collection of premium lifestyle products. From luxury perfumes to cutting-edge tech accessories, we curate only the best for our valued customers.
            </p>
            <ul className={styles.aboutList}>
              <li>✓ Authentic premium products guaranteed</li>
              <li>✓ Fast & reliable delivery nationwide</li>
              <li>✓ Committed to your satisfaction</li>
            </ul>
            <a href="#products" className={styles.aboutBtn}>LEARN MORE ABOUT US →</a>
          </div>
          <div className={styles.aboutRight}>
            <h3 className={styles.whyTitle}>WHY CHOOSE US</h3>
            <div className={styles.reasonsGrid}>
              {reasons.map((r, i) => (
                <div key={i} className={styles.reasonCard}>
                  <span className={styles.reasonIcon}>{r.icon}</span>
                  <div>
                    <h4 className={styles.reasonTitle}>{r.title}</h4>
                    <p className={styles.reasonDesc}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
