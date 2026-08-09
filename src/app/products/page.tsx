'use client';

import { useState, useMemo } from 'react';
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
  brand: string;
  image: string;
  oldPrice: number;
  offerPrice: number;
  discount: number;
  badge?: string;
  rating: number;
  reviewCount: number;
  color: string;
  freeShipping?: boolean;
}

const allProducts: Product[] = [
  { id: 1, name: 'Royal Oud Eau de Parfum', category: 'Perfume', brand: 'Man Sulthan', image: '/images/products/perfume-1.jpg', oldPrice: 3999, offerPrice: 1999, discount: 50, badge: 'Best Seller', rating: 4.8, reviewCount: 142, color: 'gold', freeShipping: true },
  { id: 2, name: 'Chronograph Pro Watch', category: 'Watch', brand: 'Man Sulthan', image: '/images/products/watch-1.jpg', oldPrice: 8999, offerPrice: 5499, discount: 39, badge: 'New', rating: 4.9, reviewCount: 89, color: 'black', freeShipping: true },
  { id: 3, name: 'Aviator UV Shield Eyewear', category: 'Glasses', brand: 'Man Sulthan', image: '/images/products/sunglasses-1.jpg', oldPrice: 2499, offerPrice: 1299, discount: 48, rating: 4.7, reviewCount: 67, color: 'black' },
  { id: 4, name: 'Galaxy Pro Max Smartphone', category: 'Mobile', brand: 'Man Sulthan', image: '/images/products/mobile-1.jpg', oldPrice: 45999, offerPrice: 34999, discount: 24, badge: 'Hot Deal', rating: 4.6, reviewCount: 203, color: 'blue', freeShipping: true },
  { id: 5, name: 'UltraBook Air 15" Laptop', category: 'Laptop', brand: 'Man Sulthan', image: '/images/products/laptop-1.jpg', oldPrice: 72999, offerPrice: 54999, discount: 25, rating: 4.8, reviewCount: 156, color: 'silver', freeShipping: true },
  { id: 6, name: 'Heritage Wooden Wall Clock', category: 'Clock', brand: 'Man Sulthan', image: '/images/products/clock-1.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, badge: 'Trending', rating: 4.5, reviewCount: 78, color: 'brown' },
  { id: 7, name: 'Velvet Rose Luxury Perfume', category: 'Perfume', brand: 'Man Sulthan', image: '/images/products/perfume-2.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, rating: 4.7, reviewCount: 95, color: 'pink', freeShipping: true },
  { id: 8, name: 'Executive Gold Watch Edition', category: 'Watch', brand: 'Man Sulthan', image: '/images/products/watch-2.jpg', oldPrice: 12999, offerPrice: 7999, discount: 38, badge: 'Premium', rating: 4.9, reviewCount: 64, color: 'gold', freeShipping: true },
  { id: 9, name: 'Wayfarer Classic Sunglasses', category: 'Glasses', brand: 'Man Sulthan', image: '/images/products/sunglasses-2.jpg', oldPrice: 1999, offerPrice: 999, discount: 50, badge: 'Deal', rating: 4.6, reviewCount: 112, color: 'black' },
  { id: 10, name: 'Smartphone Pro Lite 5G', category: 'Mobile', brand: 'Man Sulthan', image: '/images/products/mobile-2.jpg', oldPrice: 29999, offerPrice: 21999, discount: 27, rating: 4.5, reviewCount: 187, color: 'blue' },
  { id: 11, name: 'Gaming Laptop Pro 16"', category: 'Laptop', brand: 'Man Sulthan', image: '/images/products/laptop-2.jpg', oldPrice: 89999, offerPrice: 69999, discount: 22, badge: 'New', rating: 4.8, reviewCount: 134, color: 'black', freeShipping: true },
  { id: 12, name: 'Modern Digital LED Clock', category: 'Clock', brand: 'Man Sulthan', image: '/images/products/clock-2.jpg', oldPrice: 1999, offerPrice: 1199, discount: 40, rating: 4.4, reviewCount: 56, color: 'white' },
];

const categoryIcons: { name: string; image: string }[] = [
  { name: 'All', image: '/images/products/perfume-1.jpg' },
  { name: 'Perfume', image: '/images/products/perfume-1.jpg' },
  { name: 'Watch', image: '/images/products/watch-1.jpg' },
  { name: 'Glasses', image: '/images/products/sunglasses-1.jpg' },
  { name: 'Mobile', image: '/images/products/mobile-1.jpg' },
  { name: 'Laptop', image: '/images/products/laptop-1.jpg' },
  { name: 'Clock', image: '/images/products/clock-1.jpg' },
];

const tabFilters = ['Best Seller', 'Hot Deals', 'New Arrivals', 'Trending', 'Premium'];

const priceRanges = [
  { label: 'Under ₹2,000', min: 0, max: 2000 },
  { label: '₹2,000 - ₹10,000', min: 2000, max: 10000 },
  { label: '₹10,000 - ₹50,000', min: 10000, max: 50000 },
  { label: 'Above ₹50,000', min: 50000, max: Infinity },
];

const starFilters = [5, 4, 3, 2, 1];

const colorOptions = [
  { name: 'Black', hex: '#1a1a2e' },
  { name: 'Gold', hex: '#c9a84c' },
  { name: 'Silver', hex: '#c0c0c0' },
  { name: 'Blue', hex: '#2980b9' },
  { name: 'Pink', hex: '#e84393' },
  { name: 'Brown', hex: '#8B4513' },
  { name: 'White', hex: '#f5f5f5' },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i} className={styles.starFilled}>★</span>);
    } else if (i - rating < 1 && i - rating > 0) {
      stars.push(<span key={i} className={styles.starHalf}>★</span>);
    } else {
      stars.push(<span key={i} className={styles.starEmpty}>★</span>);
    }
  }
  return stars;
};

const ITEMS_PER_PAGE = 12;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTab, setSelectedTab] = useState<string>('Best Seller');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const togglePriceRange = (index: number) => {
    setSelectedPriceRanges(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
    setCurrentPage(1);
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;

      // Tab filter
      if (selectedTab === 'Best Seller' && p.badge !== 'Best Seller') {
        // show all if no specific badge match
      }
      if (selectedTab === 'Hot Deals' && p.discount < 40) return false;
      if (selectedTab === 'New Arrivals' && p.badge !== 'New') return false;
      if (selectedTab === 'Trending' && p.badge !== 'Trending') return false;
      if (selectedTab === 'Premium' && p.badge !== 'Premium') return false;

      // Price range filter
      if (selectedPriceRanges.length > 0) {
        const inRange = selectedPriceRanges.some(idx => {
          const range = priceRanges[idx];
          return p.offerPrice >= range.min && p.offerPrice < range.max;
        });
        if (!inRange) return false;
      }

      // Rating filter
      if (selectedRating !== null && Math.floor(p.rating) < selectedRating) return false;

      // Color filter
      if (selectedColors.length > 0 && !selectedColors.includes(p.color)) return false;

      return true;
    });

    // Sort
    if (sortBy === 'price-low') filtered.sort((a, b) => a.offerPrice - b.offerPrice);
    else if (sortBy === 'price-high') filtered.sort((a, b) => b.offerPrice - a.offerPrice);
    else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'discount') filtered.sort((a, b) => b.discount - a.discount);

    return filtered;
  }, [selectedCategory, selectedTab, sortBy, selectedPriceRanges, selectedRating, selectedColors]);

  // Show all products for "Best Seller" tab (default view)
  const displayProducts = selectedTab === 'Best Seller' ? 
    (selectedCategory === 'All' && selectedPriceRanges.length === 0 && selectedRating === null && selectedColors.length === 0 
      ? (() => {
          const sorted = [...allProducts];
          if (sortBy === 'price-low') sorted.sort((a, b) => a.offerPrice - b.offerPrice);
          else if (sortBy === 'price-high') sorted.sort((a, b) => b.offerPrice - a.offerPrice);
          else if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);
          else if (sortBy === 'discount') sorted.sort((a, b) => b.discount - a.discount);
          return sorted;
        })()
      : filteredProducts)
    : filteredProducts;

  const totalPages = Math.ceil(displayProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = displayProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedTab('Best Seller');
    setSortBy('featured');
    setSelectedPriceRanges([]);
    setSelectedRating(null);
    setSelectedColors([]);
    setCurrentPage(1);
  };

  const activeFilterCount = (selectedCategory !== 'All' ? 1 : 0) +
    selectedPriceRanges.length +
    (selectedRating !== null ? 1 : 0) +
    selectedColors.length;

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        {/* Retouched Hero Promo Banner */}
        <div className={styles.heroPromoBanner}>
          <div className={styles.heroPromoContainer}>
            <div className={styles.heroPromoImageWrapper}>
              <Image
                src="/images/productbanner.jpg"
                alt="Seal The Mega Deal Now - Hurry Sale 50%"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
              <div className={styles.heroPromoOverlay} />
            </div>

            <div className={styles.heroPromoContent}>
              <span className={styles.heroPromoTag}>HURRY SALE 50%</span>
              <h2 className={styles.heroPromoTitle}>
                Seal The Mega <span>Deal Now</span>
              </h2>
              <p className={styles.heroPromoSubtitle}>
                Shop unbeatable deals on trending picks before this exclusive offer ends.
              </p>
              <div className={styles.heroPromoActions}>
                <Link href="#products-grid" className={styles.heroPromoBtn}>
                  SHOP MEGA DEALS →
                </Link>
                <span className={styles.heroPromoCoupon}>
                  CODE: <strong>MEGA50</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Circular Images Bar */}
        <div className={styles.categoryIconsWrapper}>
          <div className={styles.categoryIcons}>
            {categoryIcons.map((cat) => (
              <button
                key={cat.name}
                className={`${styles.categoryIconBtn} ${selectedCategory === cat.name ? styles.categoryIconActive : ''}`}
                onClick={() => { setSelectedCategory(cat.name); setCurrentPage(1); }}
              >
                <span className={styles.categoryIconCircle}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="80px"
                    className={styles.categoryIconImg}
                    style={{ objectFit: 'cover' }}
                  />
                </span>
                <span className={styles.categoryIconLabel}>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.container}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator}>›</span>
            <Link href="#">Shop</Link>
            <span className={styles.breadcrumbSeparator}>›</span>
            <span className={styles.breadcrumbCurrent}>All Products</span>
          </div>

          {/* Toolbar */}
          <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <div className={styles.tabFilters}>
                {tabFilters.map((tab) => (
                  <button
                    key={tab}
                    className={`${styles.tabBtn} ${selectedTab === tab ? styles.tabBtnActive : ''}`}
                    onClick={() => { setSelectedTab(tab); setCurrentPage(1); }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.toolbarRight}>
              <div className={styles.viewModes}>
                <button
                  className={`${styles.viewModeBtn} ${viewMode === 'grid' ? styles.viewModeActive : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="0" y="0" width="7" height="7" rx="1.5"/>
                    <rect x="9" y="0" width="7" height="7" rx="1.5"/>
                    <rect x="0" y="9" width="7" height="7" rx="1.5"/>
                    <rect x="9" y="9" width="7" height="7" rx="1.5"/>
                  </svg>
                </button>
                <button
                  className={`${styles.viewModeBtn} ${viewMode === 'list' ? styles.viewModeActive : ''}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="0" y="0" width="16" height="3" rx="1"/>
                    <rect x="0" y="5" width="16" height="3" rx="1"/>
                    <rect x="0" y="10" width="16" height="3" rx="1"/>
                  </svg>
                </button>
              </div>
              <span className={styles.resultCount}>
                Showing {paginatedProducts.length} of {displayProducts.length} items
              </span>
              <select
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <button className={styles.mobileFilterToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="16" y2="12" />
              <line x1="4" y1="18" x2="12" y2="18" />
            </svg>
            Filters {activeFilterCount > 0 && <span className={styles.filterBadge}>{activeFilterCount}</span>}
          </button>

          {/* Main Layout */}
          <div className={styles.layoutGrid}>
            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
              <div className={styles.sidebarHeader}>
                <h3 className={styles.sidebarTitle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="16" y2="12" />
                    <line x1="4" y1="18" x2="12" y2="18" />
                  </svg>
                  Filters
                </h3>
                {activeFilterCount > 0 && (
                  <button className={styles.clearAllBtn} onClick={clearAllFilters}>
                    Clear All
                  </button>
                )}
                <button className={styles.sidebarCloseBtn} onClick={() => setSidebarOpen(false)}>✕</button>
              </div>

              {/* Categories */}
              <div className={styles.filterGroup}>
                <h4 className={styles.filterTitle}>Categories</h4>
                <div className={styles.filterOptions}>
                  {categoryIcons.map((cat) => (
                    <label key={cat.name} className={styles.filterLabel}>
                      <span className={styles.filterLabelLeft}>
                        <input
                          type="checkbox"
                          className={styles.checkboxInput}
                          checked={selectedCategory === cat.name}
                          onChange={() => { setSelectedCategory(cat.name); setCurrentPage(1); }}
                        />
                        <span>{cat.name}</span>
                      </span>
                      <span className={styles.filterCount}>
                        {cat.name === 'All' ? allProducts.length : allProducts.filter(p => p.category === cat.name).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Star Rating */}
              <div className={styles.filterGroup}>
                <h4 className={styles.filterTitle}>Customer Ratings</h4>
                <div className={styles.filterOptions}>
                  {starFilters.map((star) => (
                    <label key={star} className={styles.filterLabel}>
                      <span className={styles.filterLabelLeft}>
                        <input
                          type="radio"
                          name="rating"
                          className={styles.radioInput}
                          checked={selectedRating === star}
                          onChange={() => { setSelectedRating(star); setCurrentPage(1); }}
                        />
                        <span className={styles.starsFilter}>
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < star ? styles.starFilled : styles.starEmpty}>★</span>
                          ))}
                        </span>
                        <span className={styles.ratingText}>{star === 5 ? 'only' : '& up'}</span>
                      </span>
                    </label>
                  ))}
                  {selectedRating !== null && (
                    <button className={styles.clearFilterBtn} onClick={() => { setSelectedRating(null); setCurrentPage(1); }}>
                      Clear rating
                    </button>
                  )}
                </div>
              </div>

              {/* Price Range */}
              <div className={styles.filterGroup}>
                <h4 className={styles.filterTitle}>Price Range</h4>
                <div className={styles.filterOptions}>
                  {priceRanges.map((range, idx) => (
                    <label key={idx} className={styles.filterLabel}>
                      <span className={styles.filterLabelLeft}>
                        <input
                          type="checkbox"
                          className={styles.checkboxInput}
                          checked={selectedPriceRanges.includes(idx)}
                          onChange={() => togglePriceRange(idx)}
                        />
                        <span>{range.label}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className={styles.filterGroup}>
                <h4 className={styles.filterTitle}>Colors</h4>
                <div className={styles.colorOptions}>
                  {colorOptions.map((color) => (
                    <button
                      key={color.name}
                      className={`${styles.colorSwatch} ${selectedColors.includes(color.name.toLowerCase()) ? styles.colorSwatchActive : ''}`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => toggleColor(color.name.toLowerCase())}
                      title={color.name}
                      aria-label={`Filter by ${color.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Brand */}
              <div className={styles.filterGroup}>
                <h4 className={styles.filterTitle}>Brand</h4>
                <div className={styles.filterOptions}>
                  <label className={styles.filterLabel}>
                    <span className={styles.filterLabelLeft}>
                      <input type="checkbox" className={styles.checkboxInput} defaultChecked />
                      <span>Man Sulthan</span>
                    </span>
                    <span className={styles.filterCount}>{allProducts.length}</span>
                  </label>
                </div>
              </div>

              <button className={styles.clearFiltersBtn} onClick={clearAllFilters}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14" />
                </svg>
                Clear All Filters
              </button>
            </aside>

            {/* Sidebar Overlay for mobile */}
            {sidebarOpen && <div className={styles.sidebarOverlay} onClick={() => setSidebarOpen(false)} />}

            {/* Products Grid */}
            <div className={styles.productsArea}>
              {paginatedProducts.length === 0 ? (
                <div className={styles.noResults}>
                  <span className={styles.noResultsIcon}>🔍</span>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters to find what you&apos;re looking for.</p>
                  <button className={styles.clearFiltersBtn} onClick={clearAllFilters}>
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className={`${styles.productsGrid} ${viewMode === 'list' ? styles.productsListView : ''}`}>
                  {paginatedProducts.map((product) => (
                    <div key={product.id} className={`${styles.card} ${viewMode === 'list' ? styles.cardList : ''}`}>
                      <div className={styles.cardImageWrapper}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                        <div className={styles.discountBadge}>-{product.discount}%</div>
                        <div className={styles.cardActions}>
                          <button className={styles.actionBtn} aria-label="Add to wishlist">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                            </svg>
                          </button>
                          <Link href={`/products/${product.id}`} className={styles.actionBtn} aria-label="View Details">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </Link>
                          <button className={styles.actionBtn} aria-label="Compare">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="17 1 21 5 17 9" />
                              <path d="M3 11V9a4 4 0 014-4h14" />
                              <polyline points="7 23 3 19 7 15" />
                              <path d="M21 13v2a4 4 0 01-4 4H3" />
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
                          <div className={styles.starsWrapper}>
                            {renderStars(product.rating)}
                          </div>
                          <span className={styles.ratingNum}>({product.reviewCount})</span>
                        </div>
                        <div className={styles.cardPricing}>
                          <span className={styles.offerPrice}>₹{product.offerPrice.toLocaleString()}</span>
                          <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString()}</span>
                          <span className={styles.discountText}>({product.discount}% off)</span>
                        </div>
                        {product.freeShipping && (
                          <span className={styles.freeShipping}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <rect x="1" y="3" width="15" height="13" rx="2" />
                              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                              <circle cx="5.5" cy="18.5" r="2.5" />
                              <circle cx="18.5" cy="18.5" r="2.5" />
                            </svg>
                            Free Shipping
                          </span>
                        )}
                        <div className={styles.cardFooter}>
                          <button
                            className={styles.addToCart}
                            onClick={() => alert(`"${product.name}" has been added to your shopping cart!`)}
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
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className={styles.pagination}>
                  <button
                    className={`${styles.pageBtn} ${styles.pageNavBtn}`}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`${styles.pageBtn} ${currentPage === page ? styles.activePageBtn : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    className={`${styles.pageBtn} ${styles.pageNavBtn}`}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

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
                  <div className={styles.starsWrapper}>{renderStars(quickViewProduct.rating)}</div>
                  <span className={styles.ratingNum}>({quickViewProduct.reviewCount} customer reviews)</span>
                </div>
                <div className={styles.cardPricing} style={{ marginTop: '12px' }}>
                  <span className={styles.offerPrice} style={{ fontSize: '1.4rem' }}>
                    ₹{quickViewProduct.offerPrice.toLocaleString()}
                  </span>
                  <span className={styles.oldPrice} style={{ fontSize: '1rem' }}>
                    ₹{quickViewProduct.oldPrice.toLocaleString()}
                  </span>
                  <span className={styles.discountText}>({quickViewProduct.discount}% OFF)</span>
                </div>
                <p className={styles.modalDescription}>
                  Experience luxury & craftsmanship with {quickViewProduct.name}. Features official warranty, premium packaging, and fast delivery nationwide.
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

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
