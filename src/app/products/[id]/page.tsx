'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from './product-detail.module.css';

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

const mockProductsData: Record<string, {
  id: number;
  name: string;
  category: string;
  image: string;
  images: string[];
  oldPrice: number;
  offerPrice: number;
  discount: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  description: string;
  specs: Record<string, string>;
}> = {
  '1': {
    id: 1,
    name: 'Royal Oud Eau de Parfum - 100ml Luxury Edition',
    category: 'Perfume',
    image: '/images/products/perfume-1.jpg',
    images: ['/images/products/perfume-1.jpg', '/images/products/perfume-2.jpg'],
    oldPrice: 3999,
    offerPrice: 1999,
    discount: 50,
    badge: 'Best Seller',
    rating: 4.8,
    reviewsCount: 142,
    description: 'Experience pure luxury with Royal Oud Eau de Parfum. A rich oriental fragrance featuring top notes of Agarwood and Rose, blended seamlessly with warm amber and musk for an unforgettable aura.',
    specs: {
      'Volume': '100 ml / 3.4 fl oz',
      'Fragrance Type': 'Eau de Parfum (EDP)',
      'Scent Profile': 'Woody, Amber, Spicy',
      'Country of Origin': 'United Arab Emirates',
      'Longevity': '12+ Hours Long Lasting'
    }
  },
  '2': {
    id: 2,
    name: 'Chronograph Pro Watch - Stainless Steel Gold',
    category: 'Watch',
    image: '/images/products/watch-1.jpg',
    images: ['/images/products/watch-1.jpg', '/images/products/watch-2.jpg'],
    oldPrice: 8999,
    offerPrice: 5499,
    discount: 39,
    badge: 'New',
    rating: 4.9,
    reviewsCount: 98,
    description: 'Precision engineering meets executive style. Built with Japanese Quartz Movement, scratch-resistant sapphire glass, and a water resistance of up to 50 meters.',
    specs: {
      'Case Material': '316L Stainless Steel',
      'Movement': 'Japanese Quartz Chronograph',
      'Water Resistance': '50 Meters (5 ATM)',
      'Dial Color': 'Sunray Gold',
      'Warranty': '2 Years International Warranty'
    }
  }
};

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id || '1';
  const product = mockProductsData[productId] || mockProductsData['1'];

  const [selectedImg, setSelectedImg] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          {/* Main Layout */}
          <div className={styles.productLayout}>
            {/* Gallery */}
            <div className={styles.galleryContainer}>
              <div className={styles.mainImageWrapper}>
                <Image
                  src={selectedImg}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <span className={styles.discountBadge}>-{product.discount}% OFF</span>
              </div>
              <div className={styles.thumbnailStrip}>
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className={`${styles.thumbWrapper} ${selectedImg === img ? styles.thumbActive : ''}`}
                    onClick={() => setSelectedImg(img)}
                  >
                    <Image src={img} alt="thumb" fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Info Container */}
            <div className={styles.infoContainer}>
              <span className={styles.categoryTag}>{product.category}</span>
              <h1 className={styles.productTitle}>{product.name}</h1>

              <div className={styles.ratingRow}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingText}>{product.rating} ({product.reviewsCount} customer reviews)</span>
              </div>

              <div className={styles.priceBox}>
                <span className={styles.offerPrice}>₹{product.offerPrice.toLocaleString()}</span>
                <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString()}</span>
                <span className={styles.savingsTag}>Save ₹{(product.oldPrice - product.offerPrice).toLocaleString()}</span>
              </div>

              <p className={styles.description}>{product.description}</p>

              {/* Quantity & Action */}
              <div className={styles.actionRow}>
                <div className={styles.quantitySelector}>
                  <button className={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span className={styles.qtyValue}>{quantity}</span>
                  <button className={styles.qtyBtn} onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <Link href="/cart" className={styles.addToCartBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  ADD TO CART
                </Link>
                <Link href="/checkout" className={styles.buyNowBtn}>
                  BUY NOW
                </Link>
              </div>

              {/* Perks */}
              <div className={styles.perksBox}>
                <div className={styles.perkItem}>
                  <span>🚚</span> Free Express Delivery
                </div>
                <div className={styles.perkItem}>
                  <span>🛡️</span> 1 Year Warranty
                </div>
                <div className={styles.perkItem}>
                  <span>🔄</span> 7 Days Easy Return
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className={styles.tabsContainer}>
            <div className={styles.tabHeaders}>
              <button
                className={`${styles.tabBtn} ${activeTab === 'desc' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('desc')}
              >
                Description
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'specs' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button
                className={`${styles.tabBtn} ${activeTab === 'reviews' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Customer Reviews ({product.reviewsCount})
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'desc' && (
                <div>
                  <p>{product.description}</p>
                  <br />
                  <p>All MAN SULTHAN products undergo rigorous quality inspection to ensure 100% genuine craftsmanship, luxury packaging, and complete buyer satisfaction.</p>
                </div>
              )}
              {activeTab === 'specs' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '600px' }}>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} style={{ padding: '12px', background: '#faf9f6', borderRadius: '8px', border: '1px solid #e8e5dc' }}>
                      <strong style={{ color: '#0a233c', display: 'block', fontSize: '0.85rem' }}>{key}</strong>
                      <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>{val}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'reviews' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '16px', border: '1px solid #e8e5dc', borderRadius: '12px', background: '#faf9f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong style={{ color: '#0a233c' }}>Ahmed K.</strong>
                      <span style={{ color: '#f39c12' }}>★★★★★</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#4a4a5a' }}>Exceptional quality and genuine product! Fast delivery to Kerala within 2 days.</p>
                  </div>
                  <div style={{ padding: '16px', border: '1px solid #e8e5dc', borderRadius: '12px', background: '#faf9f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong style={{ color: '#0a233c' }}>Rashid Khan</strong>
                      <span style={{ color: '#f39c12' }}>★★★★★</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#4a4a5a' }}>Luxury packaging with premium gold finish. Highly recommended!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
