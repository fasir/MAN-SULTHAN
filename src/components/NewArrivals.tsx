'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NewArrivals.module.css';

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

const newArrivals: Product[] = [
  { id: 301, name: 'Executive Gold Watch', category: 'Watch', image: '/images/products/watch-2.jpg', oldPrice: 12999, offerPrice: 7999, discount: 38, badge: '🆕 NEW', rating: 4.9 },
  { id: 302, name: 'Velvet Rose Perfume', category: 'Perfume', image: '/images/products/perfume-2.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, badge: '🆕 NEW', rating: 4.7 },
  { id: 303, name: 'Wayfarer Classic Eyewear', category: 'Sunglasses', image: '/images/products/sunglasses-2.jpg', oldPrice: 1999, offerPrice: 999, discount: 50, rating: 4.6 },
  { id: 304, name: 'Smartphone Pro Lite', category: 'Mobile', image: '/images/products/mobile-2.jpg', oldPrice: 29999, offerPrice: 21999, discount: 27, badge: '🆕 NEW', rating: 4.5 },
  { id: 305, name: 'Gaming Laptop Pro 16"', category: 'Laptop', image: '/images/products/laptop-2.jpg', oldPrice: 89999, offerPrice: 69999, discount: 22, rating: 4.8 },
  { id: 306, name: 'Modern Digital Clock', category: 'Clock', image: '/images/products/clock-2.jpg', oldPrice: 1999, offerPrice: 1199, discount: 40, badge: '🆕 NEW', rating: 4.4 },
  { id: 307, name: 'Chronograph Pro Watch', category: 'Watch', image: '/images/products/watch-1.jpg', oldPrice: 8999, offerPrice: 5499, discount: 39, rating: 4.9 },
  { id: 308, name: 'Royal Oud Eau de Parfum', category: 'Perfume', image: '/images/products/perfume-1.jpg', oldPrice: 3999, offerPrice: 1999, discount: 50, badge: '🆕 NEW', rating: 4.8 },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('★');
  if (hasHalf) stars.push('☆');
  return stars.join('');
};

const NewArrivals = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <section id="new-arrivals" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <h2 className={styles.sectionTitle}>New Arrivals</h2>
          </div>
          <Link href="/products?tab=New+Arrivals" className={styles.viewAllBtn}>
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* 2-Row Grid */}
        <div className={styles.productGrid}>
          {newArrivals.map((product) => (
            <div key={product.id} className={styles.card}>
              <Link href={`/products/${product.id}`} className={styles.cardImageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className={styles.discountBadge}>-{product.discount}%</div>
                {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                <div className={styles.cardActions} onClick={(e) => e.preventDefault()}>
                  <button className={styles.actionBtn} aria-label="Add to wishlist">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </Link>
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
                </div>
                <div className={styles.cardFooter}>
                  <button
                    className={styles.addToCart}
                    onClick={() => alert(`"${product.name}" added to cart!`)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                    </svg>
                    Add to Cart
                  </button>
                  <Link
                    href={`/products/${product.id}`}
                    className={styles.quickViewBtn}
                    aria-label="View Details"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className={styles.modalOverlay} onClick={() => setQuickViewProduct(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setQuickViewProduct(null)}>✕</button>
            <div className={styles.modalGrid}>
              <div className={styles.modalImageWrapper}>
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                {quickViewProduct.badge && <span className={styles.productBadge}>{quickViewProduct.badge}</span>}
                <div className={styles.discountBadge}>-{quickViewProduct.discount}%</div>
              </div>
              <div className={styles.modalInfo}>
                <span className={styles.cardCategory}>{quickViewProduct.category}</span>
                <h2 className={styles.modalTitle}>{quickViewProduct.name}</h2>
                <div className={styles.cardRating}>
                  <span className={styles.stars}>{renderStars(quickViewProduct.rating)}</span>
                  <span className={styles.ratingNum}>({quickViewProduct.rating} rating)</span>
                </div>
                <div className={styles.cardPricing} style={{ marginTop: '12px' }}>
                  <span className={styles.offerPrice} style={{ fontSize: '1.4rem' }}>
                    ₹{quickViewProduct.offerPrice.toLocaleString()}
                  </span>
                  <span className={styles.oldPrice} style={{ fontSize: '1rem' }}>
                    ₹{quickViewProduct.oldPrice.toLocaleString()}
                  </span>
                  <span style={{ color: '#27ae60', fontWeight: '700', fontSize: '0.85rem' }}>({quickViewProduct.discount}% OFF)</span>
                </div>
                <p className={styles.modalDescription}>
                  Just dropped! Brand new arrival {quickViewProduct.name} with premium craftmanship, official warranty, and fast delivery nationwide.
                </p>
                <div className={styles.modalFooterActions}>
                  <button
                    className={styles.addToCart}
                    style={{ padding: '12px 20px', fontSize: '0.88rem' }}
                    onClick={() => {
                      alert(`"${quickViewProduct.name}" added to cart!`);
                      setQuickViewProduct(null);
                    }}
                  >
                    Add to Shopping Cart
                  </button>
                  <Link
                    href={`/products/${quickViewProduct.id}`}
                    className={styles.modalViewFullBtn}
                    onClick={() => setQuickViewProduct(null)}
                  >
                    View Product Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewArrivals;
