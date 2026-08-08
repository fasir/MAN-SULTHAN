'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

interface MegaCategory {
  title: string;
  icon: string;
  items: string[];
}

const megaMenuData: MegaCategory[] = [
  {
    title: "Perfumes",
    icon: "🌸",
    items: [
      "Men's Perfumes",
      "Women's Perfumes",
      "Unisex Perfumes",
      "Arabian Perfumes",
      "French Perfumes",
      "Attar / Perfume Oil",
      "Eau de Parfum (EDP)",
      "Eau de Toilette (EDT)",
      "Mini Perfumes",
    ],
  },
  {
    title: "Oudh & Bakhoor",
    icon: "🌿",
    items: [
      "Pure Oudh",
      "Bakhoor",
      "Muattar",
      "Incense",
      "Oudh Gift Sets",
    ],
  },
  {
    title: "Watches",
    icon: "⌚",
    items: [
      "Men's Watches",
      "Women's Watches",
      "Smart Watches",
      "Luxury Watches",
      "Premium Brands",
    ],
  },
  {
    title: "Fashion & Accessories",
    icon: "💎",
    items: [
      "Sunglasses",
      "Wallets",
      "Belts",
      "Handbags",
      "Jewelry",
      "Caps",
      "Scarves",
      "Travel Accessories",
    ],
  },
  {
    title: "Gift Sets",
    icon: "🎁",
    items: [
      "Perfume Gift Sets",
      "Luxury Gift Boxes",
      "Corporate Gifts",
      "Eid Collection",
      "Wedding Collection",
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenMobileAccordion(openMobileAccordion === title ? null : title);
  };

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

            {/* FULL MEGA MENU TRIGGER - ALL ITEMS */}
            <div className={`${styles.navLink} ${styles.megaDropdown}`}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                ALL ITEMS
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              
              {/* Full Width 5-Column Mega Menu Panel */}
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuInner}>
                  {megaMenuData.map((cat, idx) => (
                    <div key={idx} className={styles.megaColumn}>
                      <div className={styles.megaTitle}>
                        <span className={styles.megaTitleIcon}>{cat.icon}</span>
                        {cat.title}
                      </div>
                      <ul className={styles.megaList}>
                        {cat.items.map((sub, i) => (
                          <li key={i}>
                            <Link href="/products" className={styles.megaItemLink}>
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Bottom Promo Strip inside Mega Menu */}
                  <div className={styles.megaPromoCard}>
                    <div className={styles.megaPromoText}>
                      <span>✨ Exclusive Eid &amp; Luxury Collections Available Now!</span>
                    </div>
                    <Link href="/products" className={styles.megaPromoBtn}>
                      EXPLORE ALL COLLECTIONS →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfumes Dropdown */}
            <div className={styles.dropdown}>
              <Link href="/products" className={styles.navLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                PERFUMES
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              <div className={styles.dropdownMenu}>
                {megaMenuData[0].items.map((item, idx) => (
                  <Link key={idx} href="/products" className={styles.dropdownItem}>
                    • {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Oudh & Bakhoor Dropdown */}
            <div className={styles.dropdown}>
              <Link href="/products" className={styles.navLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                OUDH &amp; BAKHOOR
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              <div className={styles.dropdownMenu}>
                {megaMenuData[1].items.map((item, idx) => (
                  <Link key={idx} href="/products" className={styles.dropdownItem}>
                    • {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Watches Dropdown */}
            <div className={styles.dropdown}>
              <Link href="/products" className={styles.navLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                WATCHES
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              <div className={styles.dropdownMenu}>
                {megaMenuData[2].items.map((item, idx) => (
                  <Link key={idx} href="/products" className={styles.dropdownItem}>
                    • {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Accessories Dropdown */}
            <div className={styles.dropdown}>
              <Link href="/products" className={styles.navLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                ACCESSORIES
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
              <div className={styles.dropdownMenu}>
                {megaMenuData[3].items.map((item, idx) => (
                  <Link key={idx} href="/products" className={styles.dropdownItem}>
                    • {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Gift Sets Dropdown */}
            <div className={styles.dropdown}>
              <Link href="/products" className={styles.navLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                GIFT SETS
                <span className={styles.badge}>HOT</span>
              </Link>
              <div className={styles.dropdownMenu}>
                {megaMenuData[4].items.map((item, idx) => (
                  <Link key={idx} href="/products" className={styles.dropdownItem}>
                    • {item}
                  </Link>
                ))}
              </div>
            </div>
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
            <Link href="/account" className={styles.iconBtn} aria-label="My Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="7" r="4" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </Link>

            {/* Wishlist */}
            <Link href="/products" className={styles.iconBtn} aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="#c9a84c" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              <span className={styles.iconBadge}>2</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className={styles.cartBtn} aria-label="Shopping Cart">
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
              placeholder="Search for perfumes, oudh, watches, accessories..."
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
        <div className={styles.mobileNavHeader}>
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
          <Link href="/account" className={styles.mobileQuickBtn} onClick={() => setMobileMenuOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="7" r="4" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <span>Account</span>
          </Link>
          <Link href="/products" className={styles.mobileQuickBtn} onClick={() => setMobileMenuOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="#c9a84c" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            <span>Wishlist</span>
          </Link>
          <Link href="/cart" className={styles.mobileQuickBtn} onClick={() => setMobileMenuOpen(false)}>
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

        {/* Mobile Accordion Nav Links */}
        <div className={styles.mobileNavLinks}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>HOME</Link>

          {/* Accordions for each Mega Category */}
          {megaMenuData.map((cat, idx) => (
            <div key={idx} className={styles.mobileAccordionGroup}>
              <button className={styles.mobileAccordionHeader} onClick={() => toggleAccordion(cat.title)}>
                <span>{cat.icon} {cat.title.toUpperCase()}</span>
                <span>{openMobileAccordion === cat.title ? '−' : '+'}</span>
              </button>
              {openMobileAccordion === cat.title && (
                <div className={styles.mobileAccordionBody}>
                  {cat.items.map((sub, i) => (
                    <Link key={i} href="/products" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/products" className={styles.mobileShopBtn} onClick={() => setMobileMenuOpen(false)}>SHOP ALL PRODUCTS</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
