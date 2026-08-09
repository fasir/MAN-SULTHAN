'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TrendingProducts.module.css';

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
}

const trendingProducts: Product[] = [
  { id: 101, name: 'Executive Gold Watch', category: 'Watch', image: '/images/products/watch-2.jpg', oldPrice: 12999, offerPrice: 7999, discount: 38, badge: '🔥 HOT', rating: 4.9 },
  { id: 102, name: 'Velvet Rose Perfume', category: 'Perfume', image: '/images/products/perfume-2.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, badge: 'TRENDING', rating: 4.7 },
  { id: 103, name: 'Wayfarer Classic Eyewear', category: 'Cooling Glasses', image: '/images/products/sunglasses-2.jpg', oldPrice: 1999, offerPrice: 999, discount: 50, badge: 'TOP DEAL', rating: 4.6 },
  { id: 104, name: 'Smartphone Pro Lite', category: 'Mobile', image: '/images/products/mobile-2.jpg', oldPrice: 29999, offerPrice: 21999, discount: 27, badge: 'POPULAR', rating: 4.5 },
  { id: 105, name: 'Gaming Laptop Pro 16"', category: 'Laptop', image: '/images/products/laptop-2.jpg', oldPrice: 89999, offerPrice: 69999, discount: 22, badge: 'NEW', rating: 4.8 },
  { id: 106, name: 'Modern Digital Clock', category: 'Clock', image: '/images/products/clock-2.jpg', oldPrice: 1999, offerPrice: 1199, discount: 40, badge: 'BESTSELLER', rating: 4.4 },
  { id: 107, name: 'Chronograph Pro Watch', category: 'Watch', image: '/images/products/watch-1.jpg', oldPrice: 8999, offerPrice: 5499, discount: 39, badge: 'LIMITED', rating: 4.9 },
  { id: 108, name: 'Royal Oud Eau de Parfum', category: 'Perfume', image: '/images/products/perfume-1.jpg', oldPrice: 3999, offerPrice: 1999, discount: 50, badge: 'LUXURY', rating: 4.8 },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('★');
  if (hasHalf) stars.push('☆');
  return stars.join('');
};

const TrendingProducts = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="trending" className={styles.trendingSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>

            <h2 className={styles.sectionTitle}>Trending Products</h2>
          </div>
          <div className={styles.headerControls}>
            <div className={styles.arrowGroup}>
              <button className={styles.arrowBtn} onClick={scrollLeft} aria-label="Slide trending products left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className={styles.arrowBtn} onClick={scrollRight} aria-label="Slide trending products right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            <a href="#products" className={styles.viewAll}>VIEW ALL DEALS →</a>
          </div>
        </div>

        {/* Single Row Slider Track */}
        <div className={styles.sliderTrack} ref={sliderRef}>
          {trendingProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 20vw"
                />
                <div className={styles.discountBadge}>-{product.discount}%</div>
                {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                <div className={styles.cardActions}>
                  <button className={styles.actionBtn} aria-label="Add to wishlist">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                  <Link href={`/products/${product.id}`} className={styles.actionBtn} aria-label="View Details">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{product.category}</span>
                <h3 className={styles.cardName}>
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <div className={styles.cardRating}>
                  <span className={styles.stars}>{renderStars(product.rating)}</span>
                  <span className={styles.ratingNum}>({product.rating})</span>
                </div>
                <div className={styles.cardPricing}>
                  <span className={styles.offerPrice}>₹{product.offerPrice.toLocaleString()}</span>
                  <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString()}</span>
                  <span className={styles.savings}>Save ₹{(product.oldPrice - product.offerPrice).toLocaleString()}</span>
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

export default TrendingProducts;
