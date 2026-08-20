import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.css';

const categories = [
  {
    id: 1,
    name: 'Perfumes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M7 10h10v11a2 2 0 01-2 2H9a2 2 0 01-2-2V10z" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M10 4h4v3h-4V4z" fill="#c9a84c" stroke="#c9a84c" strokeWidth="1.5" />
        <path d="M12 1v3M9 7h6" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    image: '/images/products/perfume-1.jpg',
    count: '25+ Items',
    href: '/products?category=Perfume',
  },
  {
    id: 2,
    name: 'Watches',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="7" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M12 9v3l2 2" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 1h6m-6 22h6" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    image: '/images/products/watch-1.jpg',
    count: '30+ Items',
    href: '/products?category=Watch',
  },
  {
    id: 3,
    name: 'Cooling Glasses',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="6.5" cy="14.5" r="3.5" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.8" />
        <circle cx="17.5" cy="14.5" r="3.5" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M10 14.5h4M3 13L1 7m22 6l-2-6" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    image: '/images/products/sunglasses-1.jpg',
    count: '20+ Items',
    href: '/products?category=Glasses',
  },
  {
    id: 4,
    name: 'Mobiles',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
        <line x1="10" y1="5" x2="14" y2="5" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="18" r="1" fill="#c9a84c" />
      </svg>
    ),
    image: '/images/products/mobile-1.jpg',
    count: '25+ Items',
    href: '/products?category=Mobile',
  },
  {
    id: 5,
    name: 'Mobile Accessories',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 12a9 9 0 1118 0v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-3a2 2 0 012-2h4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12v7a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H3" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    image: '/images/products/mobile-2.jpg',
    count: '40+ Items',
    href: '/products?category=Mobile',
  },
  {
    id: 6,
    name: 'Laptops',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="12" rx="2" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M1 18h22v1a1 1 0 01-1 1H2a1 1 0 01-1-1v-1z" fill="#c9a84c" fillOpacity="0.6" stroke="#c9a84c" strokeWidth="1.5" />
      </svg>
    ),
    image: '/images/products/laptop-1.jpg',
    count: '20+ Items',
    href: '/products?category=Laptop',
  },
  {
    id: 7,
    name: 'Laptop Accessories',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="3" width="12" height="18" rx="6" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
        <line x1="12" y1="3" x2="12" y2="9" stroke="#c9a84c" strokeWidth="1.8" />
      </svg>
    ),
    image: '/images/products/laptop-2.jpg',
    count: '35+ Items',
    href: '/products?category=Laptop',
  },
  {
    id: 8,
    name: 'Wall & Table Clocks',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    image: '/images/products/clock-1.jpg',
    count: '15+ Items',
    href: '/products?category=Clock',
  },
  {
    id: 9,
    name: 'Luxury Fragrance',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 5.2 5.6.8-4 4.1 1 5.7-5-2.8-5 2.8 1-5.7-4-4.1 5.6-.8L12 2z" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    image: '/images/products/perfume-2.jpg',
    count: '18+ Items',
    href: '/products?category=Perfume',
  },
  {
    id: 10,
    name: 'Executive Watches',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M2 4l3 12h14l3-12-5 4-5-6-5 6-4-4z" fill="#c9a84c" fillOpacity="0.4" stroke="#c9a84c" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="18" r="1.5" fill="#c9a84c" />
      </svg>
    ),
    image: '/images/products/watch-2.jpg',
    count: '22+ Items',
    href: '/products?category=Watch',
  },
];

const Categories = () => {
  return (
    <section id="categories" className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Shop By Category</h2>
        </div>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.href} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className={styles.cardImg}
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.iconBadge}>{cat.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cat.name}</h3>
                <span className={styles.cardCount}>{cat.count}</span>
                <span className={styles.cardArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
