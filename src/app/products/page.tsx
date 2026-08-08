'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from './products.module.css';

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

const allProducts: Product[] = [
  { id: 1, name: 'Royal Oud Eau de Parfum', category: 'Perfume', image: '/images/products/perfume-1.jpg', oldPrice: 3999, offerPrice: 1999, discount: 50, badge: 'Best Seller', rating: 4.8 },
  { id: 2, name: 'Chronograph Pro Watch', category: 'Watch', image: '/images/products/watch-1.jpg', oldPrice: 8999, offerPrice: 5499, discount: 39, badge: 'New', rating: 4.9 },
  { id: 3, name: 'Aviator UV Shield Eyewear', category: 'Glasses', image: '/images/products/sunglasses-1.jpg', oldPrice: 2499, offerPrice: 1299, discount: 48, rating: 4.7 },
  { id: 4, name: 'Galaxy Pro Max Smartphone', category: 'Mobile', image: '/images/products/mobile-1.jpg', oldPrice: 45999, offerPrice: 34999, discount: 24, badge: 'Hot Deal', rating: 4.6 },
  { id: 5, name: 'UltraBook Air 15" Laptop', category: 'Laptop', image: '/images/products/laptop-1.jpg', oldPrice: 72999, offerPrice: 54999, discount: 25, rating: 4.8 },
  { id: 6, name: 'Heritage Wooden Wall Clock', category: 'Clock', image: '/images/products/clock-1.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, badge: 'Trending', rating: 4.5 },
  { id: 7, name: 'Velvet Rose Luxury Perfume', category: 'Perfume', image: '/images/products/perfume-2.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, rating: 4.7 },
  { id: 8, name: 'Executive Gold Watch Edition', category: 'Watch', image: '/images/products/watch-2.jpg', oldPrice: 12999, offerPrice: 7999, discount: 38, badge: 'Premium', rating: 4.9 },
  { id: 9, name: 'Wayfarer Classic Sunglasses', category: 'Glasses', image: '/images/products/sunglasses-2.jpg', oldPrice: 1999, offerPrice: 999, discount: 50, badge: 'Deal', rating: 4.6 },
  { id: 10, name: 'Smartphone Pro Lite 5G', category: 'Mobile', image: '/images/products/mobile-2.jpg', oldPrice: 29999, offerPrice: 21999, discount: 27, rating: 4.5 },
  { id: 11, name: 'Gaming Laptop Pro 16"', category: 'Laptop', image: '/images/products/laptop-2.jpg', oldPrice: 89999, offerPrice: 69999, discount: 22, badge: 'New', rating: 4.8 },
  { id: 12, name: 'Modern Digital LED Clock', category: 'Clock', image: '/images/products/clock-2.jpg', oldPrice: 1999, offerPrice: 1199, discount: 40, rating: 4.4 },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('★');
  if (hasHalf) stars.push('☆');
  return stars.join('');
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Perfume', 'Watch', 'Glasses', 'Mobile', 'Laptop', 'Clock'];

  const filteredProducts = allProducts.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.offerPrice - b.offerPrice);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.offerPrice - a.offerPrice);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>All Products</span>
          </div>

          {/* Page Header */}
          <div className={styles.pageHeader}>
            <div>
              <h1 className={styles.pageTitle}>Shop Collection</h1>
              <p className={styles.resultCount}>Showing {filteredProducts.length} items</p>
            </div>
            <div className={styles.sortContainer}>
              <span className={styles.sortLabel}>Sort By:</span>
              <select
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Layout Grid */}
          <div className={styles.layoutGrid}>
            {/* Sidebar Filters */}
            <aside className={styles.sidebar}>
              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Categories</h3>
                <div className={styles.filterOptions}>
                  {categories.map((cat) => (
                    <label key={cat} className={styles.filterLabel}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          type="checkbox"
                          className={styles.checkboxInput}
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                        />
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Price Range</h3>
                <div className={styles.filterOptions}>
                  <label className={styles.filterLabel}>
                    <input type="checkbox" className={styles.checkboxInput} defaultChecked /> Under ₹2,000
                  </label>
                  <label className={styles.filterLabel}>
                    <input type="checkbox" className={styles.checkboxInput} /> ₹2,000 - ₹10,000
                  </label>
                  <label className={styles.filterLabel}>
                    <input type="checkbox" className={styles.checkboxInput} /> ₹10,000 - ₹50,000
                  </label>
                  <label className={styles.filterLabel}>
                    <input type="checkbox" className={styles.checkboxInput} /> Above ₹50,000
                  </label>
                </div>
              </div>

              <button
                className={styles.clearFiltersBtn}
                onClick={() => {
                  setSelectedCategory('All');
                  setSortBy('featured');
                }}
              >
                Clear All Filters
              </button>
            </aside>

            {/* Product Grid */}
            <div className={styles.productsGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.card}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={styles.discountBadge}>-{product.discount}%</div>
                    {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                    <div className={styles.cardActions}>
                      <button className={styles.actionBtn} aria-label="Add to wishlist">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardCategory}>{product.category}</span>
                    <Link href={`/products/${product.id}`} className={styles.cardName}>
                      {product.name}
                    </Link>
                    <div className={styles.cardRating}>
                      <span className={styles.stars}>{renderStars(product.rating)}</span>
                      <span className={styles.ratingNum}>({product.rating})</span>
                    </div>
                    <div className={styles.cardPricing}>
                      <span className={styles.offerPrice}>₹{product.offerPrice.toLocaleString()}</span>
                      <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString()}</span>
                    </div>
                    <Link href={`/products/${product.id}`} className={styles.addToCart} style={{ textAlign: 'center', textDecoration: 'none' }}>
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={`${styles.pageBtn} ${styles.activePageBtn}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}>→</button>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
