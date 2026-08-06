import Image from 'next/image';
import styles from './PromoBar.module.css';

const PromoBar = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.promoContainer}>
        <div className={styles.promoCard}>
          {/* Ambient Background Glows */}
          <div className={styles.glowTop} />
          <div className={styles.glowBottom} />

          <div className={styles.cardGrid}>
            {/* Left Content Column */}
            <div className={styles.promoContent}>
              <div className={styles.promoTagWrap}>
                <span className={styles.promoTag}>
                  <span className={styles.pulseDot} />
                  SPECIAL PROMOTIONAL DEAL
                </span>
                <span className={styles.badgeHot}>LIMITED STOCK</span>
              </div>

              <h2 className={styles.promoTitle}>
                Grand Luxury Sale <br />
                <span className={styles.highlightText}>Save Up To 50% Off</span>
              </h2>

              <p className={styles.promoText}>
                Elevate your everyday style with our curated luxury collection. Premium perfumes, executive watches, cooling glasses, and tech accessories at unbeatable prices.
              </p>

              {/* Features List */}
              <div className={styles.promoFeatures}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Free Express Delivery Above ₹999</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>100% Genuine &amp; Authentic Guarantee</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Hassle-Free 7-Day Returns</span>
                </div>
              </div>

              <div className={styles.actionWrap}>
                <a href="#products" className={styles.promoBtn}>
                  EXPLORE DEALS
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <span className={styles.offerEndsText}>⚡ Offer Ends Soon</span>
              </div>
            </div>

            {/* Right Image Showcase Column */}
            <div className={styles.promoImageWrapper}>
              <div className={styles.imageCard}>
                <Image
                  src="/images/banners/promo_banner_ai.png"
                  alt="MAN SULTHAN Luxury Deal Banner"
                  width={640}
                  height={360}
                  className={styles.promoImg}
                  quality={90}
                />
                <div className={styles.imageOverlay} />

                {/* Floating Discount Badge */}
                <div className={styles.discountBadge}>
                  <span className={styles.badgeUp}>UP TO</span>
                  <span className={styles.badgeValue}>50%</span>
                  <span className={styles.badgeOff}>OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBar;
