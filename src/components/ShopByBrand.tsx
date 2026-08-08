'use client';

import styles from './ShopByBrand.module.css';

interface Brand {
  name: string;
  logo: string;
  productCount: number;
}

const brands: Brand[] = [
  { name: 'Apple', logo: '🍎', productCount: 45 },
  { name: 'Samsung', logo: '📱', productCount: 38 },
  { name: 'Rolex', logo: '⌚', productCount: 12 },
  { name: 'Ray-Ban', logo: '🕶️', productCount: 24 },
  { name: 'Dell', logo: '💻', productCount: 18 },
  { name: 'Dior', logo: '✨', productCount: 16 },
  { name: 'Casio', logo: '⏱️', productCount: 32 },
  { name: 'HP', logo: '🖥️', productCount: 22 },
  { name: 'OnePlus', logo: '📲', productCount: 15 },
  { name: 'Titan', logo: '🕰️', productCount: 28 },
];

const ShopByBrand = () => {
  return (
    <section id="shop-by-brand" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>TRUSTED NAMES</span>
          <h2 className={styles.sectionTitle}>Shop By Brand</h2>
          <p className={styles.sectionSubtitle}>Explore premium products from the world&apos;s most trusted brands.</p>
        </div>

        <div className={styles.brandGrid}>
          {brands.map((brand, idx) => (
            <a key={idx} href="#" className={styles.brandCard}>
              <span className={styles.brandLogo}>{brand.logo}</span>
              <span className={styles.brandName}>{brand.name}</span>
              <span className={styles.brandCount}>{brand.productCount} products</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;
