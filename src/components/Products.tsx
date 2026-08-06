import Image from 'next/image';
import styles from './Products.module.css';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  oldPrice: number;
  offerPrice: number;
  discount: number;
  badge?: string;
  rating: number;
}

const products: Product[] = [
  { id: 1, name: 'Royal Oud Eau de Parfum', category: 'Perfume', image: '/images/products/perfume-1.jpg', oldPrice: 3999, offerPrice: 1999, discount: 50, badge: 'Best Seller', rating: 4.8 },
  { id: 2, name: 'Chronograph Pro Watch', category: 'Watch', image: '/images/products/watch-1.jpg', oldPrice: 8999, offerPrice: 5499, discount: 39, badge: 'New', rating: 4.9 },
  { id: 3, name: 'Aviator UV Shield', category: 'Cooling Glasses', image: '/images/products/sunglasses-1.jpg', oldPrice: 2499, offerPrice: 1299, discount: 48, rating: 4.7 },
  { id: 4, name: 'Galaxy Pro Max', category: 'Mobile', image: '/images/products/mobile-1.jpg', oldPrice: 45999, offerPrice: 34999, discount: 24, badge: 'Hot Deal', rating: 4.6 },
  { id: 5, name: 'UltraBook Air 15"', category: 'Laptop', image: '/images/products/laptop-1.jpg', oldPrice: 72999, offerPrice: 54999, discount: 25, rating: 4.8 },
  { id: 6, name: 'Heritage Wall Clock', category: 'Clock', image: '/images/products/clock-1.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, badge: 'Trending', rating: 4.5 },
  { id: 7, name: 'Velvet Rose Perfume', category: 'Perfume', image: '/images/products/perfume-2.jpg', oldPrice: 2999, offerPrice: 1799, discount: 40, rating: 4.7 },
  { id: 8, name: 'Executive Gold Watch', category: 'Watch', image: '/images/products/watch-2.jpg', oldPrice: 12999, offerPrice: 7999, discount: 38, badge: 'Premium', rating: 4.9 },
  { id: 9, name: 'Wayfarer Classic', category: 'Cooling Glasses', image: '/images/products/sunglasses-2.jpg', oldPrice: 1999, offerPrice: 999, discount: 50, badge: 'Deal', rating: 4.6 },
  { id: 10, name: 'Smartphone Pro Lite', category: 'Mobile', image: '/images/products/mobile-2.jpg', oldPrice: 29999, offerPrice: 21999, discount: 27, rating: 4.5 },
  { id: 11, name: 'Gaming Laptop Pro', category: 'Laptop', image: '/images/products/laptop-2.jpg', oldPrice: 89999, offerPrice: 69999, discount: 22, badge: 'New', rating: 4.8 },
  { id: 12, name: 'Modern Digital Clock', category: 'Clock', image: '/images/products/clock-2.jpg', oldPrice: 1999, offerPrice: 1199, discount: 40, rating: 4.4 },
];

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('★');
  if (hasHalf) stars.push('☆');
  return stars.join('');
};

const Products = () => {
  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionTag}>OUR PRODUCTS</span>
            <h2 className={styles.sectionTitle}>Featured Products</h2>
          </div>
          <a href="#" className={styles.viewAll}>VIEW ALL PRODUCTS →</a>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className={styles.discountBadge}>-{product.discount}%</div>
                {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                <div className={styles.cardActions}>
                  <button className={styles.actionBtn} aria-label="Add to wishlist">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                  </button>
                  <button className={styles.actionBtn} aria-label="Quick view">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{product.category}</span>
                <h3 className={styles.cardName}>{product.name}</h3>
                <div className={styles.cardRating}>
                  <span className={styles.stars}>{renderStars(product.rating)}</span>
                  <span className={styles.ratingNum}>({product.rating})</span>
                </div>
                <div className={styles.cardPricing}>
                  <span className={styles.offerPrice}>₹{product.offerPrice.toLocaleString()}</span>
                  <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString()}</span>
                  <span className={styles.savings}>Save ₹{(product.oldPrice - product.offerPrice).toLocaleString()}</span>
                </div>
                <button className={styles.addToCart}>ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
