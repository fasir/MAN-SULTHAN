'use client';

import Image from 'next/image';
import styles from './Services.module.css';

const guarantees = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="13" r="8" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M12 9v4l2.5 2.5" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 3h4m-2 0v2" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Express 30-Min Service',
    desc: 'Quick counter repair for minor issues',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '90-Day Parts Warranty',
    desc: '100% genuine spare parts guarantee',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M16 16l4.5 4.5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 11h4m-2-2v4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Free Diagnostic Check',
    desc: 'Instant inspection & upfront quote',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="#c9a84c" fillOpacity="0.2" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M9 9h6v6H9z" fill="#c9a84c" fillOpacity="0.5" stroke="#c9a84c" strokeWidth="1.2" />
        <path d="M9 1v4m6-4v4m4 4h4m-4 6h4m-6 4v4m-6-4v4M1 9h4m-4 6h4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Certified Engineers',
    desc: 'Expert micro-soldering technicians',
  },
];

const supportedBrands = [
  'Apple iPhone & MacBook',
  'Samsung Galaxy',
  'Dell',
  'HP',
  'Lenovo',
  'ASUS',
  'Acer',
  'OnePlus',
  'Xiaomi / Redmi',
  'Realme',
];

const Services = () => {
  return (
    <section id="servicing" className={styles.services}>
      <div className={styles.container}>
        {/* 2 Main Background Image Cards */}
        <div className={styles.hubGrid}>
          {/* Mobile Servicing Card */}
          <div className={styles.hubCard}>
            <div className={styles.cardImageBg}>
              <Image
                src="/images/products/mobile-1.jpg"
                alt="Mobile Servicing"
                fill
                className={styles.cardBgImg}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className={styles.cardOverlay} />
            </div>

            <div className={styles.hubContent}>
              <div className={styles.hubCardHeader}>
                <div className={styles.iconWrap}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="2" width="14" height="20" rx="3" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
                    <line x1="10" y1="5" x2="14" y2="5" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="12" cy="18" r="1" fill="#c9a84c" />
                  </svg>
                </div>
                <h3 className={styles.hubTitle}>Mobile Servicing</h3>
              </div>

              <p className={styles.hubDesc}>
                Complete repair solutions including screen replacement, battery swap, liquid damage restoration &amp; IC chip repair for iPhone, Samsung, OnePlus &amp; all smartphone brands.
              </p>

              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.hubBtn}>
                BOOK MOBILE REPAIR →
              </a>
            </div>
          </div>

          {/* Laptop Servicing Card */}
          <div className={styles.hubCard}>
            <div className={styles.cardImageBg}>
              <Image
                src="/images/products/laptop-1.jpg"
                alt="Laptop Servicing"
                fill
                className={styles.cardBgImg}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className={styles.cardOverlay} />
            </div>

            <div className={styles.hubContent}>
              <div className={styles.hubCardHeader}>
                <div className={styles.iconWrap}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="12" rx="2" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
                    <path d="M1 18h22v1a1 1 0 01-1 1H2a1 1 0 01-1-1v-1z" fill="#c9a84c" fillOpacity="0.6" stroke="#c9a84c" strokeWidth="1.5" />
                    <path d="M10 18h4" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className={styles.hubTitle}>Laptop Servicing &amp; Upgrades</h3>
              </div>

              <p className={styles.hubDesc}>
                Comprehensive maintenance, NVMe SSD &amp; RAM speed upgrades, keyboard swap, hinge repair, and motherboard IC fix for MacBook, Dell, HP, Lenovo &amp; Gaming laptops.
              </p>

              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.hubBtn}>
                BOOK LAPTOP REPAIR →
              </a>
            </div>
          </div>
        </div>

        {/* Guarantees Bar */}
        <div className={styles.guaranteesGrid}>
          {guarantees.map((item, i) => (
            <div key={i} className={styles.guaranteeCard}>
              <span className={styles.guaranteeIcon}>{item.icon}</span>
              <div>
                <h4 className={styles.guaranteeTitle}>{item.title}</h4>
                <p className={styles.guaranteeDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands We Service */}
        <div className={styles.brandsBox}>
          <h4 className={styles.brandsTitle}>BRANDS WE SERVICE:</h4>
          <div className={styles.brandsList}>
            {supportedBrands.map((brand, index) => (
              <span key={index} className={styles.brandPill}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
