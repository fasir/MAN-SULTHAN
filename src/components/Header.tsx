'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M1 3h15v13H1z" fill="#c9a84c" fillOpacity="0.25" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16 8h4l3 3.5V16h-7V8z" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="5.5" cy="18.5" r="2.5" fill="#0a233c" stroke="#c9a84c" strokeWidth="1.8" />
                <circle cx="18.5" cy="18.5" r="2.5" fill="#0a233c" stroke="#c9a84c" strokeWidth="1.8" />
              </svg>
              Free Shipping on Orders Above ₹999
            </span>
          </div>
          <div className={styles.topBarRight}>
            <Link href="#track-order" className={styles.topBarLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2c-4 0-7 3-7 7 0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="#c9a84c" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="9" r="2.5" fill="currentColor" />
              </svg>
              Track Order
            </Link>
            <span className={styles.topBarDivider}>|</span>
            <Link href="#help" className={styles.topBarLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" fill="#c9a84c" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              Help Center
            </Link>
            <span className={styles.topBarDivider}>|</span>
            <Link href="#stores" className={styles.topBarLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" fill="#c9a84c" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Store Locator
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>
        <div className={styles.navInner}>
          {/* Logo - Left Aligned */}
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="MAN SULTHAN Logo"
              width={160}
              height={50}
              className={styles.logo}
              priority
            />
          </Link>

          {/* Center Nav Links */}
          <div className={styles.navCenter}>
            <Link href="/" className={styles.navLink}>HOME</Link>
            <div className={styles.dropdown}>
              <span className={styles.navLink}>
                CATEGORIES
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              <div className={styles.dropdownMenu}>
                <Link href="#perfumes" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M7 10h10v11a2 2 0 01-2 2H9a2 2 0 01-2-2V10z" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
                      <path d="M10 4h4v3h-4V4z" fill="#c9a84c" stroke="#c9a84c" strokeWidth="1.5" />
                      <path d="M12 1v3M9 7h6" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                  Perfumes
                </Link>
                <Link href="#watches" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="7" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
                      <path d="M12 9v3l2 2" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M9 1h6m-6 22h6" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  Watches
                </Link>
                <Link href="#glasses" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="6.5" cy="14.5" r="3.5" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.8" />
                      <circle cx="17.5" cy="14.5" r="3.5" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.8" />
                      <path d="M10 14.5h4M3 13L1 7m22 6l-2-6" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                  Cooling Glasses
                </Link>
                <Link href="#mobiles" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="2" width="14" height="20" rx="3" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
                      <line x1="10" y1="5" x2="14" y2="5" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
                      <circle cx="12" cy="18" r="1" fill="#c9a84c" />
                    </svg>
                  </span>
                  Mobiles
                </Link>
                <Link href="#mobile-acc" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 12a9 9 0 1118 0v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-3a2 2 0 012-2h4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 12v7a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H3" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Mobile Accessories
                </Link>
                <Link href="#laptops" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="12" rx="2" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
                      <path d="M1 18h22v1a1 1 0 01-1 1H2a1 1 0 01-1-1v-1z" fill="#c9a84c" fillOpacity="0.6" stroke="#c9a84c" strokeWidth="1.5" />
                    </svg>
                  </span>
                  Laptops
                </Link>
                <Link href="#laptop-acc" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="6" y="3" width="12" height="18" rx="6" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
                      <line x1="12" y1="3" x2="12" y2="9" stroke="#c9a84c" strokeWidth="1.8" />
                    </svg>
                  </span>
                  Laptop Accessories
                </Link>
                <Link href="#clocks" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
                      <path d="M12 7v5l3 3" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                  Clocks
                </Link>
              </div>
            </div>
            <Link href="#servicing" className={styles.navLink}>SERVICING</Link>
            <Link href="#deals" className={styles.navLink}>
              DEALS
              <span className={styles.badge}>HOT</span>
            </Link>
            <Link href="#products" className={styles.navLink}>NEW ARRIVALS</Link>
            <Link href="#about" className={styles.navLink}>ABOUT</Link>
          </div>

          {/* Right Side - E-Commerce Actions */}
          <div className={styles.navRight}>
            {/* Search */}
            <button
              className={styles.iconBtn}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" fill="#c9a84c" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Account */}
            <Link href="#account" className={styles.iconBtn} aria-label="My Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="7" r="4" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </Link>

            {/* Wishlist */}
            <Link href="#wishlist" className={styles.iconBtn} aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="#c9a84c" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              <span className={styles.iconBadge}>2</span>
            </Link>

            {/* Cart */}
            <Link href="#cart" className={styles.cartBtn} aria-label="Shopping Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className={styles.cartBadge}>3</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Search Bar - Expandable */}
        <div className={`${styles.searchBar} ${searchOpen ? styles.searchBarOpen : ''}`}>
          <div className={styles.searchBarInner}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="7" fill="#c9a84c" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search for perfumes, watches, accessories..."
              className={styles.searchInput}
            />
            <button
              className={styles.searchClose}
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOverlayOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <div className={styles.mobileLogoWrap}>
            <Image
              src="/logo.png"
              alt="MAN SULTHAN Logo"
              width={250}
              height={105}
              className={styles.mobileLogo}
            />
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Quick Actions */}
        <div className={styles.mobileQuickActions}>
          <Link href="#account" className={styles.mobileQuickBtn} onClick={() => setMobileMenuOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="7" r="4" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span>Account</span>
          </Link>
          <Link href="#wishlist" className={styles.mobileQuickBtn} onClick={() => setMobileMenuOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            <span>Wishlist</span>
          </Link>
          <Link href="#cart" className={styles.mobileQuickBtn} onClick={() => setMobileMenuOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" />
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span>Cart (3)</span>
          </Link>
          <Link href="#track-order" className={styles.mobileQuickBtn} onClick={() => setMobileMenuOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2c-4 0-7 3-7 7 0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="9" r="2.5" fill="currentColor" />
            </svg>
            <span>Track</span>
          </Link>
        </div>

        <div className={styles.mobileNavLinks}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>HOME</Link>
          <Link href="#perfumes" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>PERFUMES</Link>
          <Link href="#watches" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>WATCHES</Link>
          <Link href="#glasses" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>COOLING GLASSES</Link>
          <Link href="#mobiles" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>MOBILE &amp; ACCESSORIES</Link>
          <Link href="#laptops" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>LAPTOP &amp; ACCESSORIES</Link>
          <Link href="#clocks" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>CLOCKS</Link>
          <Link href="#servicing" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>REPAIR &amp; SERVICING</Link>
          <Link href="#deals" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            DEALS <span className={styles.badge}>HOT</span>
          </Link>
          <Link href="#products" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>NEW ARRIVALS</Link>
          <Link href="#about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
          <Link href="#contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
          <Link href="#products" className={styles.mobileShopBtn} onClick={() => setMobileMenuOpen(false)}>SHOP NOW</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
