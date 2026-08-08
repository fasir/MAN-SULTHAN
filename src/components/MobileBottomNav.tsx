'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './MobileBottomNav.module.css';

const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#categories') setActiveTab('categories');
      else if (hash === '#servicing') setActiveTab('servicing');
      else if (hash === '#cart') setActiveTab('cart');
      else setActiveTab('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className={styles.bottomNavContainer}>
      <nav className={styles.bottomNav}>
        {/* Item 1: Home */}
        <Link
          href="/"
          className={`${styles.navItem} ${activeTab === 'home' ? styles.active : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <div className={styles.iconWrap}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" fill={activeTab === 'home' ? '#c9a84c' : 'rgba(255, 255, 255, 0.4)'} fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </div>
          <span className={styles.navLabel}>Home</span>
        </Link>

        {/* Item 2: Categories */}
        <Link
          href="#categories"
          className={`${styles.navItem} ${activeTab === 'categories' ? styles.active : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          <div className={styles.iconWrap}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1.5" fill={activeTab === 'categories' ? '#c9a84c' : 'rgba(255, 255, 255, 0.4)'} fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" fill={activeTab === 'categories' ? '#c9a84c' : 'rgba(255, 255, 255, 0.4)'} fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" fill={activeTab === 'categories' ? '#c9a84c' : 'rgba(255, 255, 255, 0.4)'} fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" fill={activeTab === 'categories' ? '#c9a84c' : 'rgba(255, 255, 255, 0.4)'} fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </div>
          <span className={styles.navLabel}>Categories</span>
        </Link>

        {/* Item 3: Servicing */}
        <Link
          href="#servicing"
          className={`${styles.navItem} ${activeTab === 'servicing' ? styles.active : ''}`}
          onClick={() => setActiveTab('servicing')}
        >
          <div className={styles.iconWrap}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="2" width="14" height="20" rx="3" fill={activeTab === 'servicing' ? '#c9a84c' : 'rgba(255, 255, 255, 0.4)'} fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
              <line x1="10" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="18" r="1" fill="currentColor" />
            </svg>
          </div>
          <span className={styles.navLabel}>Servicing</span>
        </Link>

        {/* Item 4: Cart */}
        <Link
          href="/cart"
          className={`${styles.navItem} ${activeTab === 'cart' ? styles.active : ''}`}
          onClick={() => setActiveTab('cart')}
        >
          <div className={styles.iconWrap}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" fill={activeTab === 'cart' ? '#c9a84c' : 'rgba(255, 255, 255, 0.4)'} fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" />
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className={styles.badge}>3</span>
          </div>
          <span className={styles.navLabel}>Cart</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
