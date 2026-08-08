'use client';

import Image from 'next/image';
import styles from './BestSellers.module.css';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  oldPrice: number;
  offerPrice: number;
  discount: number;
  badge?: string;
  rating: number;
  soldCount: number;
}

const bestSellers: Product[] = [
  { id: 401, name: 'Royal Oud Eau de Parfum', category: 'Perfume', image: '/images/products/perfume-1.jpg', oldPrice: 3999, offerPrice: 1999, discount: 50, badge: '🔥 #1 SELLER', rating: 4.8, soldCount: 2340 },
  { id: 402, name: 'Chronograph Pro Watch', category: 'Watch', image: '/images/products/watch-1.jpg', oldPrice: 8999, offerPrice: 5499, discount: 39, badge: '🔥 TOP 5', rating: 4.9, soldCount: 1890 },
  { id: 403, name: 'Aviator UV Shield', category: 'Sunglasses', image: '/images/products/sunglasses-1.jpg', oldPrice: 2499, offerPrice: 1299, discount: 48, rating: 4.7, soldCount: 1560 },
  { id: 404, name: 'Galaxy Pro Max', category: 'Mobile', image: '/images/products/mobile-1.jpg', oldPrice: 45999, offerPrice: 34999, discount: 24, badge: '🔥 TOP 5', rating: 4.6, soldCount: 980 },
  { id: 405, name: 'UltraBook Air 15"', category: 'Laptop', image: '/images/products/laptop-1.jpg', oldPrice: 72999, offerPrice: 54999, discount: 25, rating: 4.8, soldCount: 720 },
  { id: 406, name: 'Heritage Wall Clock', category: 'Clock', image: '/images/products/clock-1.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, badge: '🔥 POPULAR', rating: 4.5, soldCount: 1120 },
  { id: 407, name: 'Velvet Rose Perfume', category: 'Perfume', image: '/images/products/perfume-2.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, rating: 4.7, soldCount: 1640 },
  { id: 408, name: 'Executive Gold Watch', category: 'Watch', image: '/images/products/watch-2.jpg', oldPrice: 12999, offerPrice: 7999, discount: 38, badge: '🔥 TOP 5', rating: 4.9, soldCount: 890 },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('★');
  if (hasHalf) stars.push('☆');
  return stars.join('');
};

const BestSellers = () => {
  return (
    <section id="best-sellers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionTag}>MOST LOVED</span>
            <h2 className={styles.sectionTitle}>Best Sellers</h2>
          </div>
          <a href="#" className={styles.viewAllBtn}>
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* 2-Row Grid */}
        <div className={styles.productGrid}>
          {bestSellers.map((product, idx) => (
            <div key={product.id} className={styles.card}>
              {/* Rank badge for top 3 */}
              {idx < 3 && (
                <div className={styles.rankBadge}>
                  <span className={styles.rankNumber}>#{idx + 1}</span>
                </div>
              )}
              <div className={styles.cardImageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className={styles.discountBadge}>-{product.discount}%</div>
                {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                <div className={styles.cardActions}>
                  <button className={styles.actionBtn} aria-label="Add to wishlist">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                  <button className={styles.actionBtn} aria-label="Quick view">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{product.category}</span>
                <h3 className={styles.cardName}>{product.name}</h3>
                <div className={styles.cardRating}>
                  <span className={styles.stars}>{renderStars(product.rating)}</span>
                  <span className={styles.ratingNum}>({product.rating})</span>
                </div>
                <div className={styles.soldInfo}>
                  <div className={styles.soldBar}>
                    <div
                      className={styles.soldFill}
                      style={{ width: `${Math.min((product.soldCount / 2500) * 100, 100)}%` }}
                    />
                  </div>
                  <span className={styles.soldText}>{product.soldCount.toLocaleString()} sold</span>
                </div>
                <div className={styles.cardPricing}>
                  <span className={styles.offerPrice}>₹{product.offerPrice.toLocaleString()}</span>
                  <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString()}</span>
                </div>
                <button className={styles.addToCart}>ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
