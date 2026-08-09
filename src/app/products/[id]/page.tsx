'use client';

import { useState, use, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from './product-detail.module.css';

/* ═══════════════════════════════════════════════════════════════════════════
   LATEST TRENDING TWO-TONE VECTOR ICONS SYSTEM (NAVY & GOLD THEME)
   ═══════════════════════════════════════════════════════════════════════════ */

const IconTruckTwoTone = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="12" rx="2" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M15 8H19L22 11V15H15V8Z" fill="#c9a84c" fillOpacity="0.4" stroke="#0a233c" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="5.5" cy="18.5" r="2.5" fill="#c9a84c" stroke="#0a233c" strokeWidth="1.8"/>
    <circle cx="17.5" cy="18.5" r="2.5" fill="#c9a84c" stroke="#0a233c" strokeWidth="1.8"/>
  </svg>
);

const IconShieldTwoTone = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V6L12 2Z" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 12L11.2 14.2L15.5 9.5" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconRotateTwoTone = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3 3 18.17 4.78 19.7 7.5" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M21 3V8H16" fill="#c9a84c" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCheckBadgeTwoTone = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.8 4.3L18.4 3.8L19.4 7.3L22.5 9.2L21.3 12.7L22.8 15.8L19.7 17.7L19.1 21.2L15.6 20.7L13 23.1L10.1 21.1L6.6 20.5L5.7 17L2.6 15.4L3.6 12L2.1 8.6L5.6 7.1L6.1 3.6L9.6 4.1L12 2Z" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.6"/>
    <path d="M9 12L11.2 14.2L15.5 9.5" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconFlameTwoTone = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 14.5 5.5 14.5 8.5C14.5 9.8 13.8 10.8 13 11.5C15 11.5 18 9.5 18 6.5C18 13.5 13 22 7.5 22C4.5 22 2 19.5 2 16.5C2 13 5 10 7.5 7.5C7.5 10.5 9.5 11.5 10.5 11.5C10.5 8 12 2 12 2Z" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8"/>
    <path d="M12 14C12 14 13.5 15.5 13.5 17C13.5 18.5 12.2 19.5 11 19.5C9.8 19.5 8.5 18.5 8.5 17C8.5 15.5 10 14 10 14" fill="#ffffff"/>
  </svg>
);

const IconCompareTwoTone = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4V20M7 4L3 8M7 4L11 8" stroke="#0a233c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 20V4M17 20L13 16M17 20L21 16" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconHeartTwoTone = ({ size = 18, active = false }: { size?: number; active?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
      fill={active ? '#e74c3c' : '#c9a84c'}
      fillOpacity={active ? '1' : '0.3'}
      stroke={active ? '#e74c3c' : '#0a233c'}
      strokeWidth="1.8"
    />
  </svg>
);

const IconShareTwoTone = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="5" r="3" fill="#c9a84c" fillOpacity="0.3" stroke="#0a233c" strokeWidth="1.8"/>
    <circle cx="6" cy="12" r="3" fill="#c9a84c" fillOpacity="0.3" stroke="#0a233c" strokeWidth="1.8"/>
    <circle cx="18" cy="19" r="3" fill="#c9a84c" fillOpacity="0.3" stroke="#0a233c" strokeWidth="1.8"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#0a233c" strokeWidth="1.8"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#0a233c" strokeWidth="1.8"/>
  </svg>
);

const IconCartTwoTone = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" fill="#c9a84c" fillOpacity="0.3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke={color} strokeWidth="1.8"/>
    <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconZapTwoTone = ({ size = 20, color = '#0a233c' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#c9a84c" fillOpacity="0.4" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

const IconGiftTwoTone = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="18" height="4" rx="1" fill="#c9a84c" fillOpacity="0.35" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M12 8V22" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M19 12V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V12" fill="#c9a84c" fillOpacity="0.15" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M7.5 8C6.12 8 5 6.88 5 5.5C5 4.12 6.12 3 7.5 3C9.5 3 12 8 12 8C12 8 14.5 3 16.5 3C17.88 3 19 4.12 19 5.5C19 6.88 17.88 8 16.5 8" stroke="#c9a84c" strokeWidth="1.8"/>
  </svg>
);

const IconBagTwoTone = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V9" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
    <rect x="3" y="8" width="18" height="15" rx="3" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <circle cx="9" cy="12" r="1" fill="#0a233c"/>
    <circle cx="15" cy="12" r="1" fill="#0a233c"/>
  </svg>
);

const IconLeafTwoTone = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 20A9 9 0 0 1 2.44 10.74 9 9 0 0 1 11.26 2A9 9 0 0 1 20 11C20 16 16 20 11 20Z" fill="#c9a84c" fillOpacity="0.3" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M11 20C11 14 14 8 20 4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconClockTwoTone = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" fill="#c9a84c" fillOpacity="0.3" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M12 7V12L15.5 14" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCrownTwoTone = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4L5 18H19L22 4L16 9L12 2L8 9L2 4Z" fill="#c9a84c" fillOpacity="0.35" stroke="#0a233c" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M5 21H19" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const IconZoomTwoTone = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M20 20L16 16" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="11" y1="8" x2="11" y2="14" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="8" y1="11" x2="14" y2="11" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconLockTwoTone = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="11" rx="2" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1.5" fill="#0a233c"/>
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════
   DATA & TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

interface ProductData {
  id: number;
  name: string;
  category: string;
  sku: string;
  image: string;
  images: string[];
  oldPrice: number;
  offerPrice: number;
  discount: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  description: string;
  subDescription: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  variants: { id: string; title: string; sub: string }[];
  specs: Record<string, string>;
  accessories: { id: string; name: string; price: number; image: string }[];
  bundle: { id: string; name: string; price: number; oldPrice?: number; image: string; tag?: string; options?: string[]; defaultChecked: boolean }[];
}

const mockProductsData: Record<string, ProductData> = {
  '1': {
    id: 1,
    name: 'Royal Oud Eau de Parfum - 100ml Luxury Edition',
    category: 'Perfume',
    sku: 'MS-OUD-90214',
    image: '/images/products/perfume-1.jpg',
    images: [
      '/images/products/perfume-1.jpg',
      '/images/products/perfume-2.jpg',
      '/images/products/perfume-1.jpg',
      '/images/products/perfume-2.jpg'
    ],
    oldPrice: 3999,
    offerPrice: 1999,
    discount: 50,
    badge: 'Best Seller',
    rating: 4.9,
    reviewsCount: 142,
    description: 'Experience pure luxury with Royal Oud Eau de Parfum. A rich oriental fragrance featuring top notes of Agarwood and Rose, blended seamlessly with warm amber and musk for an unforgettable aura.',
    subDescription: 'High-concentration luxury fragrance with 24-hour long projection, crafted with 100% natural organic oils.',
    colors: [
      { name: 'Royal Gold', hex: '#c9a84c' },
      { name: 'Midnight Black', hex: '#0a233c' },
      { name: 'Rose Amber', hex: '#b34a4a' },
      { name: 'Pure Platinum', hex: '#d1d5db' }
    ],
    sizes: ['50ml / 1.7 fl oz', '100ml Luxury Edition', '200ml Refill Bottle'],
    variants: [
      { id: 'v1', title: 'Classic EDP', sub: 'Standard Bottle' },
      { id: 'v2', title: 'Extrait de Parfum', sub: 'Higher Concentration' },
      { id: 'v3', title: 'Travel Gift Set', sub: 'Includes 10ml Spray' }
    ],
    specs: {
      'Volume': '100 ml / 3.4 fl oz',
      'Fragrance Type': 'Eau de Parfum (EDP)',
      'Scent Profile': 'Woody, Amber, Spicy',
      'Country of Origin': 'United Arab Emirates',
      'Longevity': '12+ Hours Projection',
      'Authenticity': '100% Guaranteed Genuine'
    },
    accessories: [
      { id: 'acc1', name: 'Leather Travel Atomizer (10ml)', price: 499, image: '/images/products/perfume-2.jpg' },
      { id: 'acc2', name: 'Luxury Velvet Gift Bag', price: 199, image: '/images/products/perfume-1.jpg' },
      { id: 'acc3', name: 'Sultan Solid Perfume Balm', price: 349, image: '/images/products/perfume-2.jpg' }
    ],
    bundle: [
      { id: 'b1', name: 'Royal Oud Eau de Parfum 100ml', price: 1999, oldPrice: 3999, tag: 'Main Item', options: ['100ml Luxury Edition', '50ml Standard', '200ml Refill'], image: '/images/products/perfume-1.jpg', defaultChecked: true },
      { id: 'b2', name: 'Leather Travel Atomizer Case', price: 499, oldPrice: 899, tag: 'Best Match', options: ['Black Leather', 'Brown Leather', 'Gold Trim'], image: '/images/products/perfume-2.jpg', defaultChecked: true },
      { id: 'b3', name: 'Executive Chronograph Watch', price: 3999, oldPrice: 5999, tag: 'Popular Add-On', options: ['42mm Gold Dial', '40mm Silver Dial'], image: '/images/products/watch-1.jpg', defaultChecked: true }
    ]
  },
  '2': {
    id: 2,
    name: 'Chronograph Pro Watch - Stainless Steel Gold',
    category: 'Watch',
    sku: 'MS-WCH-88120',
    image: '/images/products/watch-1.jpg',
    images: [
      '/images/products/watch-1.jpg',
      '/images/products/watch-2.jpg',
      '/images/products/watch-1.jpg',
      '/images/products/watch-2.jpg'
    ],
    oldPrice: 8999,
    offerPrice: 5499,
    discount: 39,
    badge: 'New',
    rating: 4.9,
    reviewsCount: 98,
    description: 'Precision engineering meets executive style. Built with Japanese Quartz Movement, scratch-resistant sapphire glass, and a water resistance of up to 50 meters.',
    subDescription: 'Executive stainless steel chronograph watch with sunray gold dial and luminous hands.',
    colors: [
      { name: 'Sunray Gold', hex: '#c9a84c' },
      { name: 'Deep Sapphire Blue', hex: '#1e3a8a' },
      { name: 'Onyx Black', hex: '#000000' }
    ],
    sizes: ['40mm Dial', '42mm Dial', '44mm Executive Dial'],
    variants: [
      { id: 'vw1', title: 'Stainless Steel', sub: 'Metallic Link Bracelet' },
      { id: 'vw2', title: 'Italian Leather', sub: 'Brown Genuine Strap' }
    ],
    specs: {
      'Case Material': '316L Stainless Steel',
      'Movement': 'Japanese Quartz Chronograph',
      'Water Resistance': '50 Meters (5 ATM)',
      'Dial Color': 'Sunray Gold',
      'Warranty': '2 Years International Warranty'
    },
    accessories: [
      { id: 'accw1', name: 'Leather Strap Replacement', price: 899, image: '/images/products/watch-2.jpg' },
      { id: 'accw2', name: 'Watch Winder Display Box', price: 1499, image: '/images/products/watch-1.jpg' }
    ],
    bundle: [
      { id: 'bw1', name: 'Chronograph Pro Watch Gold', price: 5499, oldPrice: 8999, tag: 'Main Item', options: ['42mm Dial', '40mm Dial'], image: '/images/products/watch-1.jpg', defaultChecked: true },
      { id: 'bw2', name: 'Leather Strap Replacement', price: 899, oldPrice: 1299, tag: 'Top Add-On', options: ['Brown Leather', 'Black Leather'], image: '/images/products/watch-2.jpg', defaultChecked: true },
      { id: 'bw3', name: 'Aviator Sunglasses Polarized', price: 2499, oldPrice: 3999, tag: 'Luxury Style', options: ['Gold Frame', 'Black Frame'], image: '/images/products/sunglasses-1.jpg', defaultChecked: true }
    ]
  }
};

const relatedProductsMock = [
  { id: '2', name: 'Chronograph Pro Watch - Gold', price: 5499, rating: 4.9, image: '/images/products/watch-1.jpg' },
  { id: '3', name: 'Luxury Aviator Sunglasses Polarized', price: 2499, rating: 4.7, image: '/images/products/sunglasses-1.jpg' },
  { id: '4', name: 'Executive Smart Watch Series 8', price: 6999, rating: 4.8, image: '/images/products/mobile-1.jpg' }
];

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id || '1';
  const product = mockProductsData[productId] || mockProductsData['1'];

  const [selectedImg, setSelectedImg] = useState<string>(product.image);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '');
  const [selectedVariant, setSelectedVariant] = useState<string>(product.variants[0]?.id || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  // Bundle states
  const [bundleChecked, setBundleChecked] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    product.bundle.forEach((item) => {
      initial[item.id] = item.defaultChecked;
    });
    return initial;
  });

  // Accessories add-on state
  const [selectedAccessories, setSelectedAccessories] = useState<Record<string, boolean>>({});

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleThumbClick = (img: string, index: number) => {
    setSelectedImg(img);
    setSelectedImgIndex(index);
  };

  const handlePrevImg = () => {
    const prevIdx = (selectedImgIndex - 1 + product.images.length) % product.images.length;
    setSelectedImgIndex(prevIdx);
    setSelectedImg(product.images[prevIdx]);
  };

  const handleNextImg = () => {
    const nextIdx = (selectedImgIndex + 1) % product.images.length;
    setSelectedImgIndex(nextIdx);
    setSelectedImg(product.images[nextIdx]);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2500);
  };

  const toggleBundleItem = (id: string) => {
    setBundleChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAccessory = (id: string) => {
    setSelectedAccessories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculated bundle totals
  const calculatedBundleTotal = product.bundle.reduce((sum, item) => {
    return bundleChecked[item.id] ? sum + item.price : sum;
  }, 0);

  const calculatedOriginalTotal = product.bundle.reduce((sum, item) => {
    return bundleChecked[item.id] ? sum + (item.oldPrice || Math.round(item.price * 1.3)) : sum;
  }, 0);

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.container}>

          {/* ── Top Header / Breadcrumb Bar ─────────────────────────────── */}
          <div className={styles.topHeaderBar}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/products">Products</Link>
              <span>/</span>
              <Link href="/products">{product.category}</Link>
              <span>/</span>
              <span className={styles.breadcrumbCurrent}>{product.name}</span>
            </div>

            <div className={styles.topActions}>
              <button className={styles.actionIconBtn}>
                <IconCompareTwoTone /> Compare
              </button>
              <button className={styles.actionIconBtn} onClick={() => setIsWishlisted(!isWishlisted)}>
                <IconHeartTwoTone active={isWishlisted} /> Wishlist
              </button>
              <button className={styles.actionIconBtn}>
                <IconShareTwoTone /> Share
              </button>
            </div>
          </div>

          {/* ── Main Product Section (2-Column Grid) ───────────────────── */}
          <div className={styles.productMainGrid}>

            {/* LEFT COLUMN: MEDIA GALLERY */}
            <div className={styles.gallerySection}>
              {/* Vertical Thumbnails */}
              <div className={styles.verticalThumbs}>
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className={`${styles.thumbWrapper} ${selectedImgIndex === i ? styles.thumbActive : ''}`}
                    onClick={() => handleThumbClick(img, i)}
                  >
                    <Image src={img} alt="thumb" fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>

              {/* Main Image Stage */}
              <div className={styles.mainStageWrapper}>
                <div className={styles.stageBadges}>
                  {product.badge && <span className={styles.badgeNew}>{product.badge}</span>}
                  <span className={styles.badgeDiscount}>-{product.discount}% OFF</span>
                </div>

                <button className={`${styles.stageNavBtn} ${styles.prevBtn}`} onClick={handlePrevImg}>
                  ❮
                </button>
                <button className={`${styles.stageNavBtn} ${styles.nextBtn}`} onClick={handleNextImg}>
                  ❯
                </button>

                <Image
                  src={selectedImg}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />

                <button className={styles.zoomBtn} title="Zoom View">
                  <IconZoomTwoTone size={20} />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: PRODUCT INFO & PURCHASE CONTROLS */}
            <div className={styles.infoSection}>

              <div className={styles.expressNotice}>
                <IconZapTwoTone size={16} color="#0a233c" /> Express Delivery Available • Order within 2h 15m for Same-Day Dispatch
              </div>

              <div className={styles.brandSkuRow}>
                <span className={styles.brandTag}>Brand: MAN SULTHAN</span>
                <span>Ref: {product.sku}</span>
                <span className={styles.stockStatus}>● In Stock (Limited Units)</span>
              </div>

              <h1 className={styles.productTitle}>{product.name}</h1>
              <p className={styles.subDescription}>{product.subDescription}</p>

              {/* Rating & Actions */}
              <div className={styles.ratingWishlistRow}>
                <div className={styles.ratingBox}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.ratingScore}>{product.rating}</span>
                  <span className={styles.reviewsCount}>({product.reviewsCount} customer reviews)</span>
                </div>
                <div className={styles.quickActions}>
                  <button
                    className={`${styles.wishlistBtn} ${isWishlisted ? styles.wishlistActive : ''}`}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <IconHeartTwoTone active={isWishlisted} size={16} /> {isWishlisted ? 'Saved' : 'Wishlist'}
                  </button>
                  <button className={styles.shareBtn}>
                    <IconShareTwoTone size={16} /> Share
                  </button>
                </div>
              </div>

              {/* Trust Badges Strip */}
              <div className={styles.trustBadgesStrip}>
                <div className={styles.trustBadgeItem}>
                  <IconTruckTwoTone size={22} /> Express Shipping
                </div>
                <div className={styles.trustBadgeItem}>
                  <IconShieldTwoTone size={22} /> 1 Year Warranty
                </div>
                <div className={styles.trustBadgeItem}>
                  <IconRotateTwoTone size={22} /> 7 Days Return
                </div>
                <div className={styles.trustBadgeItem}>
                  <IconCheckBadgeTwoTone size={22} /> 100% Authentic
                </div>
              </div>

              {/* Price Container */}
              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>₹{product.offerPrice.toLocaleString()}</span>
                <span className={styles.originalPrice}>₹{product.oldPrice.toLocaleString()}</span>
                <span className={styles.savingsTag}>Save ₹{(product.oldPrice - product.offerPrice).toLocaleString()}</span>
              </div>

              {/* Color Swatches */}
              <div className={styles.selectorGroup}>
                <label className={styles.selectorLabel}>
                  Color: <span className={styles.selectedValName}>{selectedColor}</span>
                </label>
                <div className={styles.colorSwatches}>
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      className={`${styles.colorSwatchBtn} ${selectedColor === c.name ? styles.swatchActive : ''}`}
                      onClick={() => setSelectedColor(c.name)}
                    >
                      <span className={styles.colorCircle} style={{ background: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className={styles.selectorGroup}>
                <label className={styles.selectorLabel}>
                  Size / Volume: <span className={styles.selectedValName}>{selectedSize}</span>
                </label>
                <select
                  className={styles.customSelect}
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  {product.sizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Variant Style Selector */}
              <div className={styles.selectorGroup}>
                <label className={styles.selectorLabel}>Select Edition / Variant:</label>
                <div className={styles.variantPillsGrid}>
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      className={`${styles.variantPillBtn} ${selectedVariant === v.id ? styles.variantPillActive : ''}`}
                      onClick={() => setSelectedVariant(v.id)}
                    >
                      <span className={styles.variantPillTitle}>{v.title}</span>
                      <span className={styles.variantPillSub}>{v.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Countdown Timer Box */}
              <div className={styles.dealTimerBox}>
                <div className={styles.dealText}>
                  <IconFlameTwoTone size={22} /> Special Deal Ends In:
                </div>
                <div className={styles.timerDigits}>
                  <span className={styles.timerUnit}>{String(timeLeft.hours).padStart(2, '0')}h</span>
                  <span>:</span>
                  <span className={styles.timerUnit}>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                  <span>:</span>
                  <span className={styles.timerUnit}>{String(timeLeft.seconds).padStart(2, '0')}s</span>
                </div>
              </div>

              {/* Stock Bar */}
              <div className={styles.stockBox}>
                <div className={styles.stockText}>
                  <span>Hurry up! Only 4 left in stock</span>
                  <span>80% Sold</span>
                </div>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{ width: '80%' }} />
                </div>
              </div>

              {/* Quantity & CTA Buttons */}
              <div className={styles.actionRow}>
                <div className={styles.quantitySelector}>
                  <button className={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span className={styles.qtyValue}>{quantity}</span>
                  <button className={styles.qtyBtn} onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <Link href="/cart" className={styles.addToCartBtn}>
                  <IconCartTwoTone size={20} color="#0a233c" /> Add to Cart
                </Link>
                <Link href="/checkout" className={styles.buyNowBtn}>
                  <IconZapTwoTone size={20} color="#0a233c" /> BUY NOW
                </Link>
              </div>

              <div className={styles.guaranteeSub}>
                <IconLockTwoTone size={15} /> 256-Bit Encrypted Secure Checkout • Free 7-Day Returns
              </div>

              {/* Promotional Coupons Cards */}
              <div className={styles.couponsContainer}>
                <div className={styles.couponsTitle}>
                  <IconGiftTwoTone size={20} /> Available Offers & Instant Coupons
                </div>
                <div className={styles.couponList}>
                  <div className={styles.couponCard}>
                    <div className={styles.couponText}>
                      <span className={styles.couponCode}>SULTHAN50</span>
                      <span className={styles.couponDesc}>Save ₹500 on orders &gt; ₹1,999</span>
                    </div>
                    <button className={styles.copyCodeBtn} onClick={() => handleCopyCode('SULTHAN50')}>
                      {copiedCoupon === 'SULTHAN50' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className={styles.couponCard}>
                    <div className={styles.couponText}>
                      <span className={styles.couponCode}>FREESHIP</span>
                      <span className={styles.couponDesc}>Free Express Delivery prepaid</span>
                    </div>
                    <button className={styles.copyCodeBtn} onClick={() => handleCopyCode('FREESHIP')}>
                      {copiedCoupon === 'FREESHIP' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Add-on Accessories Section */}
              <div className={styles.accessoriesSection}>
                <div className={styles.accessoriesTitle}>
                  <span>Add Accessories To This Product</span>
                  <span style={{ fontSize: '0.8rem', color: '#c9a84c', cursor: 'pointer' }}>View All</span>
                </div>
                <div className={styles.accessoryList}>
                  {product.accessories.map((acc) => (
                    <div key={acc.id} className={styles.accessoryItem}>
                      <input
                        type="checkbox"
                        className={styles.accessoryCheck}
                        checked={!!selectedAccessories[acc.id]}
                        onChange={() => toggleAccessory(acc.id)}
                      />
                      <Image src={acc.image} alt={acc.name} width={48} height={48} className={styles.accessoryImg} />
                      <div className={styles.accessoryInfo}>
                        <div className={styles.accessoryName}>{acc.name}</div>
                        <div className={styles.accessoryPrice}>+ ₹{acc.price}</div>
                      </div>
                      <button
                        className={styles.addAccBtn}
                        onClick={() => toggleAccessory(acc.id)}
                      >
                        {selectedAccessories[acc.id] ? 'Added ✓' : '+ Add'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Quick Summary */}
              <div className={styles.specsSummary}>
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className={styles.specSummaryItem}>
                    <span className={styles.specKey}>{key}</span>
                    <span className={styles.specVal}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Payment Methods */}
              <div className={styles.paymentsStrip}>
                <span>Guaranteed Safe Checkout:</span>
                <div className={styles.paymentBadges}>
                  <span className={styles.payBadge}>VISA</span>
                  <span className={styles.payBadge}>MasterCard</span>
                  <span className={styles.payBadge}>UPI</span>
                  <span className={styles.payBadge}>Apple Pay</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── Frequently Bought Together / Complete Bundle Section ───── */}
          <div className={styles.bundleCard}>
            <div className={styles.bundleHeaderBar}>
              <h3 className={styles.bundleTitle}>
                <IconBagTwoTone size={24} /> Complete The Look — Frequently Bought Together
              </h3>
              <span className={styles.bundleBadge}>⚡ SAVE UP TO 25% ON THIS BUNDLE</span>
            </div>

            <div className={styles.bundleMainGrid}>
              {/* Left Column: Visual Product Cards & Configurator List */}
              <div className={styles.bundleLeftContent}>
                {/* Visual Row */}
                <div className={styles.bundleVisualRow}>
                  {product.bundle.map((item, idx) => (
                    <div key={item.id} className={styles.bundleItemWrapper}>
                      <div
                        className={`${styles.bundleItemCard} ${bundleChecked[item.id] ? styles.bundleItemCardActive : ''}`}
                        onClick={() => toggleBundleItem(item.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className={styles.bundleCardTag}>{item.tag || 'ADD-ON'}</span>
                        <div className={styles.bundleImgWrapper}>
                          <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
                        </div>
                        <div className={styles.bundleItemTitle}>{item.name}</div>
                        <div className={styles.bundleItemPrice}>₹{item.price.toLocaleString()}</div>
                      </div>
                      {idx < product.bundle.length - 1 && <span className={styles.bundlePlusSign}>+</span>}
                    </div>
                  ))}
                </div>

                {/* Configurator Row Cards */}
                <div className={styles.bundleConfigList}>
                  {product.bundle.map((item) => (
                    <div key={item.id} className={styles.bundleConfigRow}>
                      <input
                        type="checkbox"
                        className={styles.bundleCheckbox}
                        checked={!!bundleChecked[item.id]}
                        onChange={() => toggleBundleItem(item.id)}
                      />
                      <Image src={item.image} alt={item.name} width={48} height={48} className={styles.bundleRowThumb} />
                      <div className={styles.bundleRowInfo}>
                        <div className={styles.bundleRowName}>{item.name}</div>
                        {item.options && item.options.length > 0 && (
                          <select className={styles.bundleRowOption}>
                            {item.options.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        )}
                      </div>
                      <div className={styles.bundleRowPrices}>
                        <span className={styles.bundleRowCurrentPrice}>₹{item.price.toLocaleString()}</span>
                        {item.oldPrice && <span className={styles.bundleRowOldPrice}>₹{item.oldPrice.toLocaleString()}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Total Price Box */}
              <div className={styles.bundleSummaryBox}>
                <div className={styles.bundleSummaryHead}>
                  <div className={styles.bundleSummaryTitle}>Bundle Price Summary</div>
                  <div className={styles.bundleSummarySub}>
                    {Object.values(bundleChecked).filter(Boolean).length} of {product.bundle.length} items selected
                  </div>
                </div>

                <div className={styles.bundlePriceRow}>
                  <div className={styles.bundleOriginalTotal}>Original Total: ₹{calculatedOriginalTotal.toLocaleString()}</div>
                  <div className={styles.bundleFinalTotal}>₹{calculatedBundleTotal.toLocaleString()}</div>
                  <div className={styles.bundleSavingsBadge}>
                    🎉 Save ₹{(calculatedOriginalTotal - calculatedBundleTotal).toLocaleString()} Instant Discount
                  </div>
                </div>

                <div className={styles.bundleActions}>
                  <button className={styles.bundleBuyBtn}>
                    🛒 Add Selected Items To Cart
                  </button>
                  <button className={styles.bundleSecondaryBtn}>
                    ⚡ Buy Complete Bundle
                  </button>
                </div>

                <div className={styles.bundleTrustPoints}>
                  <span>✓ Free Express Shipping Applied</span>
                  <span>✓ 7 Days Easy Returns Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Product Tabs & Sidebar Grid ────────────────────────────── */}
          <div className={styles.tabsSection}>
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

            <div className={styles.tabBodyGrid}>
              {/* Left Main Tab Content */}
              <div className={styles.tabMainContent}>
                {activeTab === 'desc' && (
                  <>
                    <h3 className={styles.descHeading}>Unrivaled Luxury Craftsmanship</h3>
                    <p>{product.description}</p>
                    <p>Each bottle of MAN SULTHAN Royal Oud is meticulously aged and blended using centuries-old Arabic perfumery techniques combined with contemporary French distillation standard.</p>

                    {/* Hero Graphic Banner */}
                    <div className={styles.heroBannerCard}>
                      <div className={styles.heroBannerText}>
                        <h4 className={styles.heroBannerTitle}>MAN SULTHAN SIGNATURE</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem' }}>Elevate your presence with pure organic luxury ingredients, zero artificial synthetic fillers.</p>
                      </div>
                    </div>

                    {/* Feature Highlight 3 Cards */}
                    <div className={styles.featuresThreeGrid}>
                      <div className={styles.featureGridCard}>
                        <div className={styles.featureCardIcon}>
                          <IconLeafTwoTone size={28} />
                        </div>
                        <h5 className={styles.featureCardTitle}>100% Organic Oils</h5>
                        <p className={styles.featureCardDesc}>Distilled directly from natural Cambodian Agarwood & Damask Rose.</p>
                      </div>

                      <div className={styles.featureGridCard}>
                        <div className={styles.featureCardIcon}>
                          <IconClockTwoTone size={28} />
                        </div>
                        <h5 className={styles.featureCardTitle}>24H Long Lasting</h5>
                        <p className={styles.featureCardDesc}>Formulated for all-day aura projection and rich sillage.</p>
                      </div>

                      <div className={styles.featureGridCard}>
                        <div className={styles.featureCardIcon}>
                          <IconCrownTwoTone size={28} />
                        </div>
                        <h5 className={styles.featureCardTitle}>Gold Embossed Bottle</h5>
                        <p className={styles.featureCardDesc}>Hand-crafted heavy glass crystal container with magnetic cap.</p>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'specs' && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} style={{ padding: '16px', background: '#ffffff', borderRadius: '12px', border: '1px solid #e8e5dc' }}>
                        <strong style={{ color: '#0a233c', display: 'block', fontSize: '0.85rem' }}>{key}</strong>
                        <span style={{ color: '#6c757d', fontSize: '0.95rem' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ padding: '20px', border: '1px solid #e8e5dc', borderRadius: '14px', background: '#ffffff' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <strong style={{ color: '#0a233c' }}>Ahmed K.</strong>
                        <span style={{ color: '#f39c12' }}>★★★★★</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: '#4a4a5a' }}>Exceptional quality and genuine product! Fast delivery to Kerala within 2 days. The fragrance stays for over 18 hours.</p>
                    </div>

                    <div style={{ padding: '20px', border: '1px solid #e8e5dc', borderRadius: '14px', background: '#ffffff' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <strong style={{ color: '#0a233c' }}>Rashid Khan</strong>
                        <span style={{ color: '#f39c12' }}>★★★★★</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: '#4a4a5a' }}>Luxury packaging with premium gold finish. Highly recommended for gifting!</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar: Related Products */}
              <div className={styles.relatedSidebar}>
                <div className={styles.sidebarTitle}>You May Also Like</div>
                <div className={styles.sidebarProductList}>
                  {relatedProductsMock.map((item) => (
                    <Link href={`/products/${item.id}`} key={item.id} className={styles.sidebarProductCard}>
                      <div className={styles.sidebarImgWrapper}>
                        <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.sidebarProductInfo}>
                        <div style={{ fontSize: '0.75rem', color: '#f39c12' }}>★★★★★ {item.rating}</div>
                        <div className={styles.sidebarProductTitle}>{item.name}</div>
                        <div className={styles.sidebarProductPrice}>₹{item.price.toLocaleString()}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* ── Sticky Bottom Bar ────────────────────────────────────────── */}
      <div className={styles.stickyBottomBar}>
        <div className={styles.stickyProductInfo}>
          <Image src={product.image} alt={product.name} width={48} height={48} className={styles.stickyThumb} />
          <div className={styles.stickyText}>
            <span className={styles.stickyTitle}>{product.name}</span>
            <span className={styles.stickyPrice}>₹{product.offerPrice.toLocaleString()}</span>
          </div>
        </div>
        <div className={styles.stickyActions}>
          <Link href="/cart" className={styles.stickyAddBtn}>Add to Cart</Link>
          <Link href="/checkout" className={styles.stickyBuyBtn}>Buy Now</Link>
        </div>
      </div>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
