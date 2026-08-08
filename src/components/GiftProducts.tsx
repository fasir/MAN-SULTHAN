'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './GiftProducts.module.css';

interface BundleItem {
  name: string;
  image: string;
}

interface GiftBundle {
  id: number;
  title: string;
  tagline: string;
  occasion: string;
  items: BundleItem[];
  totalValue: number;
  bundlePrice: number;
  discount: number;
  rating: number;
  reviews: number;
  perks: string[];
  badge: string;
  color: string; /* accent gradient color for ribbon */
}

const giftBundles: GiftBundle[] = [
  {
    id: 1,
    title: 'The Gentleman\'s Essential',
    tagline: 'Watch + Perfume + Sunglasses — the complete gentleman kit',
    occasion: 'Birthday',
    items: [
      { name: 'Chronograph Pro Watch', image: '/images/products/watch-1.jpg' },
      { name: 'Royal Oud Parfum', image: '/images/products/perfume-1.jpg' },
      { name: 'Wayfarer Eyewear', image: '/images/products/sunglasses-1.jpg' },
    ],
    totalValue: 14997,
    bundlePrice: 7999,
    discount: 47,
    rating: 4.9,
    reviews: 238,
    perks: ['Free Gift Wrapping', 'Handwritten Note', 'Premium Box'],
    badge: '🏆 BESTSELLER',
    color: '#c9a84c',
  },
  {
    id: 2,
    title: 'Luxury Her Collection',
    tagline: 'Velvet Rose Perfume + Classic Eyewear — elegance redefined',
    occasion: 'Anniversary',
    items: [
      { name: 'Velvet Rose Perfume', image: '/images/products/perfume-2.jpg' },
      { name: 'Classic Sunglasses', image: '/images/products/sunglasses-2.jpg' },
    ],
    totalValue: 4998,
    bundlePrice: 2499,
    discount: 50,
    rating: 4.8,
    reviews: 175,
    perks: ['Rose Ribbon Wrap', 'Scented Card', 'Satin Pouch'],
    badge: '💝 FOR HER',
    color: '#e8a0bf',
  },
  {
    id: 3,
    title: 'Home & Style Bundle',
    tagline: 'Modern Clock + Executive Watch — timeless home + wrist style',
    occasion: 'Housewarming',
    items: [
      { name: 'Modern Digital Clock', image: '/images/products/clock-1.jpg' },
      { name: 'Executive Gold Watch', image: '/images/products/watch-2.jpg' },
    ],
    totalValue: 14998,
    bundlePrice: 8499,
    discount: 43,
    rating: 4.7,
    reviews: 142,
    perks: ['Luxury Gift Box', 'Free Engraving', 'Carry Bag'],
    badge: '🏠 HOME',
    color: '#6fc3a0',
  },
  {
    id: 4,
    title: 'The Tech Executive',
    tagline: 'Laptop + Smartphone + Elegant Clock — the power combo',
    occasion: 'Corporate',
    items: [
      { name: 'Gaming Laptop Pro', image: '/images/products/laptop-1.jpg' },
      { name: 'Smartphone Pro Lite', image: '/images/products/mobile-1.jpg' },
      { name: 'Elegant Desk Clock', image: '/images/products/clock-2.jpg' },
    ],
    totalValue: 121997,
    bundlePrice: 89999,
    discount: 26,
    rating: 4.9,
    reviews: 89,
    perks: ['Corporate Wrapping', 'Logo Branding', 'Priority Delivery'],
    badge: '💼 CORPORATE',
    color: '#7ba4d4',
  },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('★');
  if (hasHalf) stars.push('☆');
  return stars.join('');
};

const GiftProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -420, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 420, behavior: 'smooth' });
  };

  return (
    <section id="gift-products" className={styles.giftSection}>
      {/* Decorative background */}
      <div className={styles.bgPattern} />
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        {/* ─── Header ─── */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.headerTag}>
              {/* Gift box icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              GIFT BUNDLES
            </span>
            <h2 className={styles.sectionTitle}>
              Curated <span className={styles.titleAccent}>Gift Bundles</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Thoughtfully paired products, beautifully wrapped — ready to make someone&apos;s day special.
            </p>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.arrowGroup}>
              <button className={styles.arrowBtn} onClick={scrollLeft} aria-label="Scroll bundles left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className={styles.arrowBtn} onClick={scrollRight} aria-label="Scroll bundles right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <a href="#products" className={styles.viewAll}>VIEW ALL GIFTS →</a>
          </div>
        </div>

        {/* ─── Bundle List (Horizontal Scroll) ─── */}
        <div className={styles.bundleTrack} ref={scrollRef}>
          {giftBundles.map((bundle) => (
            <div key={bundle.id} className={styles.bundleCard}>
              {/* Top Ribbon */}
              <div className={styles.bundleRibbon} style={{ background: bundle.color }}>
                <span className={styles.ribbonText}>{bundle.badge}</span>
                {/* CSS ribbon triangle is handled via border trick in CSS */}
                <span className={styles.ribbonTail} style={{ borderLeftColor: bundle.color }} />
              </div>

              {/* Occasion tag — top-right */}
              <div className={styles.occasionTag}>
                🎀 {bundle.occasion}
              </div>

              {/* ── Stacked product images ── */}
              <div className={styles.bundleImages}>
                {bundle.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={styles.bundleImageCircle}
                    style={{ zIndex: bundle.items.length - idx }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="120px"
                    />
                  </div>
                ))}
                {/* "+" connector label */}
                <div className={styles.bundleCount}>
                  {bundle.items.length} items
                </div>
              </div>

              {/* ── Card Body ── */}
              <div className={styles.bundleBody}>
                <h3 className={styles.bundleTitle}>{bundle.title}</h3>
                <p className={styles.bundleTagline}>{bundle.tagline}</p>

                {/* Items list */}
                <div className={styles.itemsList}>
                  {bundle.items.map((item, idx) => (
                    <span key={idx} className={styles.itemChip}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      {item.name}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className={styles.bundleRating}>
                  <span className={styles.stars}>{renderStars(bundle.rating)}</span>
                  <span className={styles.ratingNum}>{bundle.rating}</span>
                  <span className={styles.reviewCount}>({bundle.reviews} reviews)</span>
                </div>

                {/* Perks row */}
                <div className={styles.perksRow}>
                  {bundle.perks.map((perk, idx) => (
                    <span key={idx} className={styles.perkBadge}>
                      🎁 {perk}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Pricing & CTA Footer ── */}
              <div className={styles.bundleFooter}>
                <div className={styles.pricingBlock}>
                  <div className={styles.priceRow}>
                    <span className={styles.bundlePrice}>₹{bundle.bundlePrice.toLocaleString()}</span>
                    <span className={styles.totalValue}>₹{bundle.totalValue.toLocaleString()}</span>
                  </div>
                  <div className={styles.savingsRow}>
                    <span className={styles.discountBadge}>-{bundle.discount}% OFF</span>
                    <span className={styles.savedAmount}>
                      You save ₹{(bundle.totalValue - bundle.bundlePrice).toLocaleString()}
                    </span>
                  </div>
                </div>
                <button className={styles.giftBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                  Send as Gift
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════ BUILD CUSTOM GIFT BOX ═══════ */}
        <div className={styles.customGiftBox}>
          {/* Decorative corner ribbons */}
          <div className={styles.cornerRibbonTL} />
          <div className={styles.cornerRibbonBR} />

          {/* Top sparkle accents */}
          <div className={styles.sparkles}>
            <span className={styles.sparkle} />
            <span className={styles.sparkle} />
            <span className={styles.sparkle} />
          </div>

          <div className={styles.customGiftInner}>
            {/* ── Left: 3D Gift Box Visual ── */}
            <div className={styles.giftBoxVisual}>
              <div className={styles.giftBox3d}>
                {/* Box body */}
                <div className={styles.boxBody}>
                  <div className={styles.boxFront} />
                  <div className={styles.boxSide} />
                </div>
                {/* Lid */}
                <div className={styles.boxLid}>
                  <div className={styles.boxLidTop} />
                  <div className={styles.boxLidFront} />
                </div>
                {/* Vertical ribbon */}
                <div className={styles.boxRibbonV} />
                {/* Horizontal ribbon */}
                <div className={styles.boxRibbonH} />
                {/* Bow */}
                <div className={styles.boxBow}>
                  <div className={styles.bowLeft} />
                  <div className={styles.bowRight} />
                  <div className={styles.bowCenter} />
                </div>
              </div>
              {/* Shadow beneath box */}
              <div className={styles.boxShadow} />
              {/* Label */}
              <span className={styles.boxLabel}>YOUR GIFT</span>
            </div>

            {/* ── Right: Content ── */}
            <div className={styles.customGiftContent}>
              <span className={styles.customTag}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                BUILD YOUR OWN
              </span>
              <h3 className={styles.customTitle}>
                Create a <span className={styles.customTitleGold}>Custom Gift Box</span>
              </h3>
              <p className={styles.customDesc}>
                Pick any products, choose your wrapping style, add a personal note — we&apos;ll craft the perfect surprise.
              </p>

              {/* ── 3 Steps ── */}
              <div className={styles.stepsRow}>
                <div className={styles.stepCard}>
                  <div className={styles.stepIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </div>
                  <span className={styles.stepNum}>01</span>
                  <span className={styles.stepLabel}>Pick Products</span>
                </div>
                <div className={styles.stepConnector}>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M0 6h16M13 1l5 5-5 5" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                  <span className={styles.stepNum}>02</span>
                  <span className={styles.stepLabel}>Personalize</span>
                </div>
                <div className={styles.stepConnector}>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M0 6h16M13 1l5 5-5 5" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                      <path d="M16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                  <span className={styles.stepNum}>03</span>
                  <span className={styles.stepLabel}>We Deliver</span>
                </div>
              </div>

              {/* ── Wrapping Style Options ── */}
              <div className={styles.wrappingRow}>
                <span className={styles.wrappingLabel}>Wrapping Style:</span>
                <div className={styles.wrappingOptions}>
                  <button className={`${styles.wrapOption} ${styles.wrapActive}`}>
                    <span className={styles.wrapSwatch} style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c76a)' }} />
                    <span>Royal Gold</span>
                  </button>
                  <button className={styles.wrapOption}>
                    <span className={styles.wrapSwatch} style={{ background: 'linear-gradient(135deg, #e8a0bf, #f0c6d8)' }} />
                    <span>Rose Blush</span>
                  </button>
                  <button className={styles.wrapOption}>
                    <span className={styles.wrapSwatch} style={{ background: 'linear-gradient(135deg, #0a233c, #183756)' }} />
                    <span>Midnight</span>
                  </button>
                </div>
              </div>

              {/* ── Bottom: Price + CTA ── */}
              <div className={styles.customBottom}>
                <div className={styles.customPriceInfo}>
                  <span className={styles.startsAt}>Starts at</span>
                  <span className={styles.customPrice}>₹2,499</span>
                  <span className={styles.customPriceNote}>incl. wrapping &amp; delivery</span>
                </div>
                <a href="#products" className={styles.buildBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                  Start Building Your Gift
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>

              {/* Trust badges */}
              <div className={styles.trustRow}>
                <span className={styles.trustBadge}>🎀 Premium Wrapping</span>
                <span className={styles.trustBadge}>✍️ Handwritten Note</span>
                <span className={styles.trustBadge}>🚚 Express Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftProducts;
