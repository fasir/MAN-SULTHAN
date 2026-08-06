import Image from 'next/image';
import styles from './Categories.module.css';

const categories = [
  { name: 'Perfumes', image: '/images/products/perfume-1.jpg', count: '25+ Products', href: '#perfumes' },
  { name: 'Watches', image: '/images/products/watch-1.jpg', count: '30+ Products', href: '#watches' },
  { name: 'Cooling Glasses', image: '/images/products/sunglasses-1.jpg', count: '20+ Products', href: '#glasses' },
  { name: 'Mobiles', image: '/images/products/mobile-1.jpg', count: '25+ Products', href: '#mobiles' },
  { name: 'Mobile Accessories', image: '/images/products/mobile-2.jpg', count: '40+ Products', href: '#mobile-acc' },
  { name: 'Laptops', image: '/images/products/laptop-1.jpg', count: '20+ Products', href: '#laptops' },
  { name: 'Laptop Accessories', image: '/images/products/laptop-2.jpg', count: '35+ Products', href: '#laptop-acc' },
  { name: 'Clocks', image: '/images/products/clock-1.jpg', count: '15+ Products', href: '#clocks' },
];

const Categories = () => {
  return (
    <section id="categories" className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Shop By Category</h2>
        </div>
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <a key={i} href={cat.href} className={styles.card}>
              <div className={styles.cardImage}>
                <Image src={cat.image} alt={cat.name} fill className={styles.cardImg} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 25vw" />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cat.name}</h3>
                <span className={styles.cardCount}>{cat.count}</span>
                <span className={styles.cardArrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
