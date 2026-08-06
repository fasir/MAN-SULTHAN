import Image from 'next/image';
import styles from './Categories.module.css';

const categories = [
  { id: 1, name: 'Perfumes', icon: '🧴', image: '/images/products/perfume-1.jpg', count: '25+ Items', href: '#perfumes' },
  { id: 2, name: 'Watches', icon: '⌚', image: '/images/products/watch-1.jpg', count: '30+ Items', href: '#watches' },
  { id: 3, name: 'Cooling Glasses', icon: '🕶️', image: '/images/products/sunglasses-1.jpg', count: '20+ Items', href: '#glasses' },
  { id: 4, name: 'Mobiles', icon: '📱', image: '/images/products/mobile-1.jpg', count: '25+ Items', href: '#mobiles' },
  { id: 5, name: 'Mobile Accessories', icon: '🎧', image: '/images/products/mobile-2.jpg', count: '40+ Items', href: '#mobile-acc' },
  { id: 6, name: 'Laptops', icon: '💻', image: '/images/products/laptop-1.jpg', count: '20+ Items', href: '#laptops' },
  { id: 7, name: 'Laptop Accessories', icon: '🖱️', image: '/images/products/laptop-2.jpg', count: '35+ Items', href: '#laptop-acc' },
  { id: 8, name: 'Wall & Table Clocks', icon: '🕐', image: '/images/products/clock-1.jpg', count: '15+ Items', href: '#clocks' },
  { id: 9, name: 'Luxury Fragrance', icon: '✨', image: '/images/products/perfume-2.jpg', count: '18+ Items', href: '#perfumes' },
  { id: 10, name: 'Executive Watches', icon: '👑', image: '/images/products/watch-2.jpg', count: '22+ Items', href: '#watches' },
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
            <a key={cat.id} href={cat.href} className={styles.card}>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
