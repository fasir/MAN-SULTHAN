import Image from 'next/image';
import styles from './PromoBar.module.css';

const PromoBar = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promoInner}>
        {/* Left Content Column */}
        <div className={styles.promoContent}>
          <div className={styles.promoTagWrap}>
            <span className={styles.promoTag}>LIMITED TIME OFFER</span>
            <span className={styles.badgeHot}>SPECIAL DISCOUNT</span>
          </div>

          <h2 className={styles.promoTitle}>
            Shop More, <span className={styles.highlightText}>Save Big</span>
          </h2>

          <p className={styles.promoText}>
            Upgrade your lifestyle with our curated luxury collection. Enjoy exclusive seasonal discounts on premium perfumes, watches, cooling glasses, and tech essentials.
          </p>

          {/* Feature Highlights */}
          <div className={styles.promoFeatures}>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Free Shipping Above ₹999</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>100% Authentic Guarantee</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Easy 7-Day Returns</span>
            </div>
          </div>

          <a href="#products" className={styles.promoBtn}>
            EXPLORE DEALS
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Right Image Showcase Column */}
        <div className={styles.promoImageWrapper}>
          <div className={styles.imageCard}>
            <Image
              src="/images/banners/banner-two.webp"
              alt="MAN SULTHAN Premium Deals Banner"
              width={640}
              height={360}
              className={styles.promoImg}
              quality={90}
            />
            <div className={styles.imageOverlay} />

            {/* Discount Badge Overlay on Image */}
            <div className={styles.discountBadge}>
              <span className={styles.badgeUp}>UP TO</span>
              <span className={styles.badgeValue}>50%</span>
              <span className={styles.badgeOff}>OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBar;
