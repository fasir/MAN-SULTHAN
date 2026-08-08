'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from './cart.module.css';

interface CartItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Royal Oud Eau de Parfum - 100ml',
    category: 'Perfume',
    image: '/images/products/perfume-1.jpg',
    price: 1999,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Chronograph Pro Watch Stainless Steel',
    category: 'Watch',
    image: '/images/products/watch-1.jpg',
    price: 5499,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Wayfarer Classic Eyewear',
    category: 'Glasses',
    image: '/images/products/sunglasses-2.jpg',
    price: 999,
    quantity: 2,
  },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <h1 className={styles.title}>Shopping Cart ({items.length})</h1>

          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', background: '#ffffff', borderRadius: '16px' }}>
              <h2 style={{ color: '#0a233c', marginBottom: '16px' }}>Your cart is empty</h2>
              <p style={{ color: '#6c757d', marginBottom: '24px' }}>Looks like you haven&apos;t added any luxury items yet.</p>
              <Link href="/products" className={styles.checkoutBtn} style={{ display: 'inline-block', width: 'auto', padding: '12px 32px' }}>
                EXPLORE PRODUCTS
              </Link>
            </div>
          ) : (
            <div className={styles.cartLayout}>
              {/* Items Container */}
              <div className={styles.itemsContainer}>
                {items.map((item) => (
                  <div key={item.id} className={styles.itemRow}>
                    <div className={styles.itemImageWrapper}>
                      <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={styles.itemDetails}>
                      <span className={styles.itemCategory}>{item.category}</span>
                      <Link href={`/products/${item.id}`} className={styles.itemName}>
                        {item.name}
                      </Link>
                      <span className={styles.itemPrice}>₹{item.price.toLocaleString()}</span>
                    </div>

                    <div className={styles.qtyControl}>
                      <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span className={styles.qtyVal}>{item.quantity}</span>
                      <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>

                    <button className={styles.removeBtn} onClick={() => removeItem(item.id)} aria-label="Remove item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className={styles.summaryContainer}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? <strong style={{ color: '#27ae60' }}>FREE</strong> : `₹${shipping}`}</span>
                </div>

                <div className={styles.couponBox}>
                  <input type="text" placeholder="Promo Code" className={styles.couponInput} />
                  <button className={styles.applyBtn}>APPLY</button>
                </div>

                <div className={styles.totalRow}>
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <br />
                <Link href="/checkout" className={styles.checkoutBtn}>
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
