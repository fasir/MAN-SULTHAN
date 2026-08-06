import Image from 'next/image';
import styles from './About.module.css';

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#c9a84c" fillOpacity="0.25" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: '100% Authentic Products',
    desc: 'Handpicked genuine items directly from certified luxury brands.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1 3h15v13H1z" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 8h4l3 3.5V16h-7V8z" fill="#c9a84c" fillOpacity="0.35" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" fill="#0a233c" stroke="#c9a84c" strokeWidth="1.8" />
        <circle cx="18.5" cy="18.5" r="2.5" fill="#0a233c" stroke="#c9a84c" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Express Nationwide Delivery',
    desc: 'Fast, trackable & safe door delivery across the country.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M9 9h6v6H9z" fill="#c9a84c" fillOpacity="0.5" stroke="#c9a84c" strokeWidth="1.2" />
        <path d="M9 1v4m6-4v4m4 4h4m-4 6h4m-6 4v4m-6-4v4M1 9h4m-4 6h4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Certified Repair Service',
    desc: 'Expert mobile & laptop servicing with 90-day parts warranty.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '5-Star Customer Trust',
    desc: 'Over 50,000+ satisfied & loyal customers nationwide.',
  },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          {/* Left Column: Image Showcase Card with Floating Stats Badge */}
          <div className={styles.imageCol}>
            <div className={styles.imageCard}>
              <Image
                src="/images/banners/about_showroom_ai.png"
                alt="MAN SULTHAN Luxury Boutique Store"
                fill
                className={styles.aboutImg}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className={styles.imageOverlay} />

              {/* Floating Experience Badge */}
              <div className={styles.experienceBadge}>
                <div className={styles.badgeNumber}>10+</div>
                <div className={styles.badgeText}>
                  <span>YEARS OF</span>
                  <strong>EXCELLENCE</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & 4 Pillars Grid */}
          <div className={styles.contentCol}>
            <span className={styles.aboutTag}>ABOUT MAN SULTHAN</span>
            <h2 className={styles.aboutTitle}>
              Your Premier Destination For <br />
              <span className={styles.goldText}>Luxury Lifestyle &amp; Tech</span>
            </h2>
            <p className={styles.aboutText}>
              At MAN SULTHAN, we redefine premium shopping and expert device servicing. From luxury perfumes, executive timepieces, and designer eyewear to high-performance mobiles, laptops, and expert repair services — we bring you unmatched quality, authenticity, and customer care under one roof.
            </p>

            {/* 4 Pillars Grid */}
            <div className={styles.pillarsGrid}>
              {pillars.map((item, i) => (
                <div key={i} className={styles.pillarCard}>
                  <div className={styles.pillarIconWrap}>
                    <span className={styles.pillarIcon}>{item.icon}</span>
                  </div>
                  <div>
                    <h4 className={styles.pillarTitle}>{item.title}</h4>
                    <p className={styles.pillarDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#products" className={styles.aboutBtn}>
              DISCOVER OUR COLLECTION →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
