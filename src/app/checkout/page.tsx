'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<string>('upi');
  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  if (isOrdered) {
    return (
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.mainContent}>
          <div className={styles.container} style={{ textAlign: 'center', padding: '60px 24px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
            <h1 style={{ color: '#0a233c', fontSize: '2.2rem', marginBottom: '12px' }}>Order Placed Successfully!</h1>
            <p style={{ color: '#6c757d', maxWidth: '500px', margin: '0 auto 24px' }}>
              Thank you for shopping with MAN SULTHAN. Your Order ID is <strong>#MS-84920</strong>. We have sent a confirmation email with tracking details.
            </p>
            <a href="/" className={styles.placeOrderBtn} style={{ display: 'inline-block', width: 'auto', padding: '14px 36px', textDecoration: 'none' }}>
              BACK TO HOMEPAGE
            </a>
          </div>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <h1 className={styles.title}>Checkout</h1>

          <form onSubmit={handlePlaceOrder} className={styles.checkoutLayout}>
            {/* Form Section */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionHeader}>1. Shipping Address</h2>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>First Name</label>
                  <input type="text" required placeholder="John" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Last Name</label>
                  <input type="text" required placeholder="Doe" className={styles.input} />
                </div>
                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Street Address</label>
                  <input type="text" required placeholder="Building no., Street, Area" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>City</label>
                  <input type="text" required placeholder="Kochi" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Pincode</label>
                  <input type="text" required placeholder="682001" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="tel" required placeholder="+91 9876543210" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" required placeholder="john@example.com" className={styles.input} />
                </div>
              </div>

              <h2 className={styles.sectionHeader} style={{ marginTop: '40px' }}>2. Payment Method</h2>
              <div className={styles.paymentOptions}>
                <label className={`${styles.paymentCard} ${paymentMethod === 'upi' ? styles.paymentActive : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    className={styles.radioInput}
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                  />
                  <div>
                    <strong style={{ color: '#0a233c', display: 'block' }}>GPay / PhonePe / Paytm / UPI</strong>
                    <span style={{ fontSize: '0.8rem', color: '#6c757d' }}>Fast & secure instant UPI payment</span>
                  </div>
                </label>

                <label className={`${styles.paymentCard} ${paymentMethod === 'card' ? styles.paymentActive : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    className={styles.radioInput}
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <div>
                    <strong style={{ color: '#0a233c', display: 'block' }}>Credit / Debit Card</strong>
                    <span style={{ fontSize: '0.8rem', color: '#6c757d' }}>Visa, Mastercard, RuPay supported</span>
                  </div>
                </label>

                <label className={`${styles.paymentCard} ${paymentMethod === 'cod' ? styles.paymentActive : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    className={styles.radioInput}
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <div>
                    <strong style={{ color: '#0a233c', display: 'block' }}>Cash on Delivery (COD)</strong>
                    <span style={{ fontSize: '0.8rem', color: '#6c757d' }}>Pay when your order arrives</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Summary Column */}
            <div className={styles.summaryBox}>
              <h2 className={styles.summaryTitle}>Your Order</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid #f0ece6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>Royal Oud Eau de Parfum × 1</span>
                  <strong>₹1,999</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>Chronograph Pro Watch × 1</span>
                  <strong>₹5,499</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>Wayfarer Classic Eyewear × 2</span>
                  <strong>₹1,998</strong>
                </div>
              </div>

              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal</span>
                  <span>₹9,496</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Shipping</span>
                  <span style={{ color: '#27ae60', fontWeight: 'bold' }}>FREE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', color: '#0a233c', marginTop: '12px', paddingTop: '12px', borderTop: '2px solid #e8e5dc' }}>
                  <span>Total Amount</span>
                  <span>₹9,496</span>
                </div>
              </div>

              <button type="submit" className={styles.placeOrderBtn}>
                PLACE ORDER NOW
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
