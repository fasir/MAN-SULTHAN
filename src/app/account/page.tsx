'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from './account.module.css';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses'>('profile');

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Header Banner */}
          <div className={styles.accountHeader}>
            <div className={styles.avatar}>MS</div>
            <div>
              <h1 className={styles.accountName}>Man Sulthan User</h1>
              <span className={styles.accountEmail}>user@mansulthan.com • Gold Member</span>
            </div>
          </div>

          {/* Main Layout */}
          <div className={styles.layoutGrid}>
            {/* Sidebar Navigation */}
            <div className={styles.sidebar}>
              <div
                className={`${styles.navItem} ${activeTab === 'profile' ? styles.navActive : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                👤 Profile Info
              </div>
              <div
                className={`${styles.navItem} ${activeTab === 'orders' ? styles.navActive : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                📦 My Orders (2)
              </div>
              <div
                className={`${styles.navItem} ${activeTab === 'addresses' ? styles.navActive : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                📍 Saved Addresses
              </div>
            </div>

            {/* Content Area */}
            <div className={styles.contentCard}>
              {activeTab === 'profile' && (
                <div>
                  <h2 className={styles.cardTitle}>Personal Information</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: '#6c757d' }}>Full Name</label>
                      <p style={{ fontWeight: '700', color: '#0a233c', marginTop: '4px' }}>Man Sulthan User</p>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: '#6c757d' }}>Email Address</label>
                      <p style={{ fontWeight: '700', color: '#0a233c', marginTop: '4px' }}>user@mansulthan.com</p>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: '#6c757d' }}>Phone Number</label>
                      <p style={{ fontWeight: '700', color: '#0a233c', marginTop: '4px' }}>+91 98765 43210</p>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: '#6c757d' }}>Member Since</label>
                      <p style={{ fontWeight: '700', color: '#0a233c', marginTop: '4px' }}>August 2026</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className={styles.cardTitle}>Order History</h2>
                  
                  <div className={styles.orderCard}>
                    <div className={styles.orderHeader}>
                      <div>
                        <strong style={{ color: '#0a233c' }}>Order #MS-84920</strong>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#6c757d' }}>Placed on Aug 8, 2026</span>
                      </div>
                      <span className={`${styles.statusBadge} ${styles.statusDelivered}`}>DELIVERED</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#4a4a5a', margin: '8px 0' }}>
                      Royal Oud Eau de Parfum, Wayfarer Classic Eyewear
                    </p>
                    <strong style={{ color: '#0a233c' }}>Total: ₹3,997</strong>
                  </div>

                  <div className={styles.orderCard}>
                    <div className={styles.orderHeader}>
                      <div>
                        <strong style={{ color: '#0a233c' }}>Order #MS-78219</strong>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#6c757d' }}>Placed on Aug 5, 2026</span>
                      </div>
                      <span className={`${styles.statusBadge} ${styles.statusTransit}`}>IN TRANSIT</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#4a4a5a', margin: '8px 0' }}>
                      Chronograph Pro Watch
                    </p>
                    <strong style={{ color: '#0a233c' }}>Total: ₹5,499</strong>
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <h2 className={styles.cardTitle}>Saved Shipping Addresses</h2>
                  <div style={{ border: '1px solid #e8e5dc', borderRadius: '12px', padding: '16px', background: '#faf9f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong style={{ color: '#0a233c' }}>Default Address</strong>
                      <span style={{ color: '#c9a84c', fontSize: '0.85rem', fontWeight: 'bold' }}>HOME</span>
                    </div>
                    <p style={{ color: '#4a4a5a', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Man Sulthan Tower, MG Road, Marine Drive,<br />
                      Kochi, Kerala - 682001<br />
                      Phone: +91 98765 43210
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
