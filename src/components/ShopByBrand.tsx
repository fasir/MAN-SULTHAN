'use client';

import React from 'react';
import Link from 'next/link';
import styles from './ShopByBrand.module.css';

interface BrandItem {
  id: string;
  name: string;
  logo: React.ReactNode;
}

const brands: BrandItem[] = [
  {
    id: 'anker',
    name: 'Anker',
    logo: (
      <svg height="26" viewBox="0 0 120 30" fill="none">
        <path d="M10 4L2 26H7.5L9.5 20H16.5L18.5 26H24L16 4H10ZM11.2 15L13 9.5L14.8 15H11.2Z" fill="#00A3E0"/>
        <path d="M6 12L1 14L8 8L6 12Z" fill="#00A3E0"/>
        <text x="28" y="22" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="18" fill="#00A3E0" letterSpacing="1">ANKER</text>
      </svg>
    ),
  },
  {
    id: 'baseus',
    name: 'Baseus',
    logo: (
      <div className={styles.baseusBadge}>
        <span>Baseus</span>
      </div>
    ),
  },
  {
    id: 'belkin',
    name: 'Belkin',
    logo: (
      <svg height="26" viewBox="0 0 120 30" fill="none">
        <g fill="#000000">
          <circle cx="8" cy="7" r="1.5" />
          <circle cx="8" cy="15" r="2" />
          <circle cx="8" cy="23" r="1.5" />
          <circle cx="3" cy="15" r="1.5" />
          <circle cx="13" cy="15" r="1.5" />
          <circle cx="4" cy="10" r="1.5" />
          <circle cx="12" cy="10" r="1.5" />
          <circle cx="4" cy="20" r="1.5" />
          <circle cx="12" cy="20" r="1.5" />
          <text x="22" y="22" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="19" letterSpacing="-0.5">belkin</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'ecoflow',
    name: 'EcoFlow',
    logo: (
      <svg height="20" viewBox="0 0 130 24" fill="none">
        <text x="0" y="18" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="15" fill="#1A1A1A" letterSpacing="3">ECOFLOW</text>
      </svg>
    ),
  },
  {
    id: 'energizer',
    name: 'Energizer',
    logo: (
      <svg height="24" viewBox="0 0 130 28" fill="none">
        <text x="0" y="21" fontFamily="'Inter', sans-serif" fontWeight="900" fontStyle="italic" fontSize="20" fill="#000000" letterSpacing="-0.5">Energizer</text>
      </svg>
    ),
  },
  {
    id: 'huawei',
    name: 'Huawei',
    logo: (
      <svg height="26" viewBox="0 0 130 30" fill="none">
        <path d="M10 4C8 8 8 14 10 18C12 14 12 8 10 4Z" fill="#ED1C24" />
        <path d="M10 4C6 7 3 12 4 16C7 14 11 10 10 4Z" fill="#ED1C24" />
        <path d="M10 4C14 7 17 12 16 16C13 14 9 10 10 4Z" fill="#ED1C24" />
        <path d="M10 18C5 17 1 14 0 9C4 11 9 14 10 18Z" fill="#ED1C24" />
        <path d="M10 18C15 17 19 14 20 9C16 11 11 14 10 18Z" fill="#ED1C24" />
        <text x="26" y="21" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="15" fill="#000000" letterSpacing="1">HUAWEI</text>
      </svg>
    ),
  },
  {
    id: 'logitech',
    name: 'Logitech',
    logo: (
      <svg height="24" viewBox="0 0 120 28" fill="none">
        <text x="0" y="20" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="19" fill="#000000" letterSpacing="-0.5">logitech</text>
      </svg>
    ),
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    logo: (
      <svg height="22" viewBox="0 0 130 26" fill="none">
        <text x="0" y="19" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="17" fill="#000000" letterSpacing="-0.5">Panasonic</text>
      </svg>
    ),
  },
  {
    id: 'samsung',
    name: 'Samsung',
    logo: (
      <svg height="22" viewBox="0 0 130 26" fill="none">
        <text x="0" y="19" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="17" fill="#1428A0" letterSpacing="1.2">SAMSUNG</text>
      </svg>
    ),
  },
  {
    id: 'spigen',
    name: 'Spigen',
    logo: (
      <svg height="24" viewBox="0 0 120 28" fill="none">
        <path d="M2 14L8 8L8 12L4 16L8 20L8 24L2 18Z" fill="#000000" />
        <text x="12" y="20" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="17" fill="#000000" letterSpacing="-0.5">spigen</text>
      </svg>
    ),
  },
  {
    id: 'nillkin',
    name: 'Nillkin',
    logo: (
      <svg height="24" viewBox="0 0 120 28" fill="none">
        <text x="0" y="20" fontFamily="'Inter', sans-serif" fontWeight="900" fontStyle="italic" fontSize="18" fill="#00A88F" letterSpacing="1">NILLKIN</text>
      </svg>
    ),
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    logo: (
      <div className={styles.miBadge}>
        <span>mi</span>
      </div>
    ),
  },
];

const ShopByBrand = () => {
  return (
    <section id="shop-by-brand" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Popular By Brands</h2>
          <Link href="/products" className={styles.viewAllBtn}>
            View All Brands
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        </div>

        {/* Brand Cards Grid - 6 columns x 2 rows */}
        <div className={styles.brandGrid}>
          {brands.map((brand) => (
            <Link key={brand.id} href={`/products?brand=${brand.id}`} className={styles.brandCard} aria-label={brand.name}>
              <div className={styles.logoWrapper}>
                {brand.logo}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;
