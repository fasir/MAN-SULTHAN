'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from './account.module.css';

type AccountTab = 'orders' | 'wishlist' | 'payment' | 'reviews' | 'profile' | 'notifications' | 'help' | 'terms';

/* ═══════════════════════════════════════════════════════════════════════════
   ACCOUNT SIDEBAR VECTOR ICONS SYSTEM (MATCHING THEME)
   ═══════════════════════════════════════════════════════════════════════════ */

const IconCartSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M3 6H21" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M16 10C16 12.2 14.2 14 12 14C9.8 14 8 12.2 8 10" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconHeartSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#c9a84c" fillOpacity="0.3" stroke="#0a233c" strokeWidth="1.8"/>
  </svg>
);

const IconCardSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="3" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <line x1="2" y1="10" x2="22" y2="10" stroke="#0a233c" strokeWidth="1.8"/>
    <rect x="6" y="14" width="4" height="2" rx="0.5" fill="#0a233c"/>
  </svg>
);

const IconStarSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#c9a84c" fillOpacity="0.35" stroke="#0a233c" strokeWidth="1.8"/>
  </svg>
);

const IconUserSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="4" fill="#c9a84c" fillOpacity="0.3" stroke="#0a233c" strokeWidth="1.8"/>
  </svg>
);

const IconBellSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M18 8A6 6 0 006 8C6 15 3 17 3 17H21S18 15 18 8Z" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M13.73 21A2 2 0 0110.27 21" stroke="#0a233c" strokeWidth="1.8"/>
  </svg>
);

const IconHelpSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <path d="M9.09 9A3 3 0 0115 10C15 12 12 13 12 15" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="18" r="0.8" fill="#0a233c"/>
  </svg>
);

const IconInfoSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" fill="#c9a84c" fillOpacity="0.25" stroke="#0a233c" strokeWidth="1.8"/>
    <line x1="12" y1="16" x2="12" y2="12" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="0.8" fill="#0a233c"/>
  </svg>
);

const IconLogoutSide = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M9 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H9" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 17L21 12L16 7" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="21" y1="12" x2="9" y2="12" stroke="#0a233c" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const IconGiftSide = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="8" width="18" height="4" rx="1" fill="#c9a84c" stroke="#c9a84c" strokeWidth="1.5"/>
    <path d="M12 8V22" stroke="#c9a84c" strokeWidth="1.5"/>
    <path d="M19 12V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V12" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1.5"/>
  </svg>
);

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<AccountTab>('profile');

  // Form State
  const [formData, setFormData] = useState({
    firstName: 'Johnson',
    lastName: 'Charle',
    email: 'johnson.charle@mansulthan.com',
    phone: '+91 98765 43210',
    birthday: '1995-08-15',
    gender: 'Male'
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.layoutGrid}>

            {/* ── LEFT SIDEBAR (EXACT MATCH TO REFERENCE MOCKUP) ──────────── */}
            <div className={styles.sidebarCard}>

              {/* User Profile Header */}
              <div className={styles.userProfileHeader}>
                <div className={styles.avatarWrapper}>
                  <span>JC</span>
                </div>
                <div className={styles.userInfoText}>
                  <h2 className={styles.userName}>{formData.firstName} {formData.lastName}</h2>
                  <div className={styles.bonusBadge}>
                    <IconGiftSide size={16} />
                    <span><strong className={styles.bonusHighlight}>100 bonuses</strong> available</span>
                  </div>
                </div>
              </div>

              {/* Top Navigation Items */}
              <div className={styles.navGroup}>
                <button
                  className={`${styles.navItemBtn} ${activeTab === 'orders' ? styles.navActive : ''}`}
                  onClick={() => setActiveTab('orders')}
                >
                  <div className={styles.navItemLeft}>
                    <IconCartSide />
                    <span>Orders</span>
                  </div>
                  <span className={styles.countBadge}>1</span>
                </button>

                <button
                  className={`${styles.navItemBtn} ${activeTab === 'wishlist' ? styles.navActive : ''}`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <div className={styles.navItemLeft}>
                    <IconHeartSide />
                    <span>Wishlist</span>
                  </div>
                </button>

                <button
                  className={`${styles.navItemBtn} ${activeTab === 'payment' ? styles.navActive : ''}`}
                  onClick={() => setActiveTab('payment')}
                >
                  <div className={styles.navItemLeft}>
                    <IconCardSide />
                    <span>Payment Methods</span>
                  </div>
                </button>

                <button
                  className={`${styles.navItemBtn} ${activeTab === 'reviews' ? styles.navActive : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  <div className={styles.navItemLeft}>
                    <IconStarSide />
                    <span>My reviews</span>
                  </div>
                </button>
              </div>

              {/* Group 2: Manage Account */}
              <div className={styles.navGroup}>
                <div className={styles.groupTitle}>Manage account</div>
                <button
                  className={`${styles.navItemBtn} ${activeTab === 'profile' ? styles.navActive : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <div className={styles.navItemLeft}>
                    <IconUserSide />
                    <span>Personal info</span>
                  </div>
                </button>

                <button
                  className={`${styles.navItemBtn} ${activeTab === 'notifications' ? styles.navActive : ''}`}
                  onClick={() => setActiveTab('notifications')}
                >
                  <div className={styles.navItemLeft}>
                    <IconBellSide />
                    <span>Notifications</span>
                  </div>
                </button>
              </div>

              {/* Group 3: Customer Service */}
              <div className={styles.navGroup}>
                <div className={styles.groupTitle}>Customer service</div>
                <button
                  className={`${styles.navItemBtn} ${activeTab === 'help' ? styles.navActive : ''}`}
                  onClick={() => setActiveTab('help')}
                >
                  <div className={styles.navItemLeft}>
                    <IconHelpSide />
                    <span>Help</span>
                  </div>
                </button>

                <button
                  className={`${styles.navItemBtn} ${activeTab === 'terms' ? styles.navActive : ''}`}
                  onClick={() => setActiveTab('terms')}
                >
                  <div className={styles.navItemLeft}>
                    <IconInfoSide />
                    <span>Terms and conditions</span>
                  </div>
                </button>
              </div>

              <div className={styles.sidebarDivider} />

              {/* Footer: Log Out */}
              <button className={styles.logoutBtn} onClick={() => alert('Logged out successfully.')}>
                <IconLogoutSide />
                <span>Log out</span>
              </button>

            </div>

            {/* ── RIGHT CONTENT CARD AREA ─────────────────────────────────── */}
            <div className={styles.contentCard}>

              {/* 1. PERSONAL INFO TAB */}
              {activeTab === 'profile' && (
                <div>
                  <div className={styles.cardHeader}>
                    <div>
                      <h1 className={styles.cardTitle}>Personal Information</h1>
                      <div className={styles.cardSub}>Manage your account personal details and preferences</div>
                    </div>
                    {savedSuccess && (
                      <span style={{ color: '#27ae60', fontWeight: 'bold', fontSize: '0.88rem' }}>
                        ✓ Details saved successfully!
                      </span>
                    )}
                  </div>

                  <form onSubmit={handleSave} className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>First Name</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Last Name</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Email Address</label>
                      <input
                        type="email"
                        className={styles.formInput}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Phone Number</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Date of Birth</label>
                      <input
                        type="date"
                        className={styles.formInput}
                        value={formData.birthday}
                        onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Gender</label>
                      <select
                        className={styles.formInput}
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Prefer not to say</option>
                      </select>
                    </div>

                    <div style={{ gridColumn: '1 / -1', marginTop: '12px' }}>
                      <button type="submit" className={styles.saveBtn}>Save Changes</button>
                    </div>
                  </form>
                </div>
              )}

              {/* 2. ORDERS TAB */}
              {activeTab === 'orders' && (
                <div>
                  <div className={styles.cardHeader}>
                    <div>
                      <h1 className={styles.cardTitle}>My Orders</h1>
                      <div className={styles.cardSub}>Track your recent orders and view purchase history</div>
                    </div>
                  </div>

                  <div className={styles.orderList}>
                    <div className={styles.orderCardItem}>
                      <div className={styles.orderMetaRow}>
                        <div>
                          <div className={styles.orderId}>Order #MS-90214</div>
                          <div className={styles.orderDate}>Placed on August 8, 2026 • 2 Items</div>
                        </div>
                        <span className={styles.statusBadgeTransit}>IN TRANSIT</span>
                      </div>

                      <div className={styles.orderProductsRow}>
                        <Image src="/images/products/perfume-1.jpg" alt="perfume" width={56} height={56} className={styles.orderThumb} />
                        <div className={styles.orderProductDetails}>
                          <div className={styles.orderProductName}>Royal Oud Eau de Parfum - 100ml Luxury Edition</div>
                          <div className={styles.orderProductQty}>Qty: 1 • Color: Royal Gold</div>
                        </div>
                        <div className={styles.orderTotal}>₹1,999</div>
                      </div>

                      <div className={styles.orderActions}>
                        <button className={styles.orderActionBtn}>Track Package</button>
                        <button className={styles.orderActionBtn}>Download Invoice</button>
                      </div>
                    </div>

                    <div className={styles.orderCardItem}>
                      <div className={styles.orderMetaRow}>
                        <div>
                          <div className={styles.orderId}>Order #MS-84120</div>
                          <div className={styles.orderDate}>Placed on July 28, 2026 • 1 Item</div>
                        </div>
                        <span className={styles.statusBadgeDelivered}>DELIVERED</span>
                      </div>

                      <div className={styles.orderProductsRow}>
                        <Image src="/images/products/watch-1.jpg" alt="watch" width={56} height={56} className={styles.orderThumb} />
                        <div className={styles.orderProductDetails}>
                          <div className={styles.orderProductName}>Chronograph Pro Watch - Stainless Steel Gold</div>
                          <div className={styles.orderProductQty}>Qty: 1 • Edition: 42mm Dial</div>
                        </div>
                        <div className={styles.orderTotal}>₹5,499</div>
                      </div>

                      <div className={styles.orderActions}>
                        <button className={styles.orderActionBtn}>Reorder Item</button>
                        <button className={styles.orderActionBtn}>Write Review</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. WISHLIST TAB */}
              {activeTab === 'wishlist' && (
                <div>
                  <div className={styles.cardHeader}>
                    <div>
                      <h1 className={styles.cardTitle}>My Saved Wishlist</h1>
                      <div className={styles.cardSub}>Items you saved for future purchases</div>
                    </div>
                  </div>

                  <div className={styles.wishlistGrid}>
                    <div className={styles.wishlistCard}>
                      <div className={styles.wishlistImgWrapper}>
                        <Image src="/images/products/perfume-2.jpg" alt="wishlist product" fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.wishlistTitle}>Velvet Oud Cologne Spray 50ml</div>
                      <div className={styles.wishlistPrice}>₹1,499</div>
                      <button className={styles.wishlistAddBtn}>🛒 Add to Cart</button>
                    </div>

                    <div className={styles.wishlistCard}>
                      <div className={styles.wishlistImgWrapper}>
                        <Image src="/images/products/sunglasses-1.jpg" alt="wishlist product" fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.wishlistTitle}>Aviator Polarized Sunglasses</div>
                      <div className={styles.wishlistPrice}>₹2,499</div>
                      <button className={styles.wishlistAddBtn}>🛒 Add to Cart</button>
                    </div>

                    <div className={styles.wishlistCard}>
                      <div className={styles.wishlistImgWrapper}>
                        <Image src="/images/products/watch-2.jpg" alt="wishlist product" fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div className={styles.wishlistTitle}>Classic Leather Watch Strap</div>
                      <div className={styles.wishlistPrice}>₹899</div>
                      <button className={styles.wishlistAddBtn}>🛒 Add to Cart</button>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. PAYMENT METHODS TAB */}
              {activeTab === 'payment' && (
                <div>
                  <div className={styles.cardHeader}>
                    <div>
                      <h1 className={styles.cardTitle}>Payment Methods</h1>
                      <div className={styles.cardSub}>Manage your saved credit cards and UPI payment methods</div>
                    </div>
                    <button className={styles.saveBtn} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>+ Add New Card</button>
                  </div>

                  <div className={styles.paymentGrid}>
                    <div className={styles.paymentMethodCard}>
                      <div className={styles.cardType}>VISA</div>
                      <div className={styles.cardNumber}>•••• •••• •••• 4291</div>
                      <div className={styles.cardFooter}>
                        <span>EXPIRES 08/28</span>
                        <span>JOHNSON CHARLE</span>
                      </div>
                    </div>

                    <div className={styles.paymentMethodCard} style={{ background: 'linear-gradient(135deg, #183756, #0a233c)' }}>
                      <div className={styles.cardType}>MASTERCARD</div>
                      <div className={styles.cardNumber}>•••• •••• •••• 8812</div>
                      <div className={styles.cardFooter}>
                        <span>EXPIRES 11/27</span>
                        <span>JOHNSON CHARLE</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. REVIEWS TAB */}
              {activeTab === 'reviews' && (
                <div>
                  <div className={styles.cardHeader}>
                    <div>
                      <h1 className={styles.cardTitle}>My Product Reviews</h1>
                      <div className={styles.cardSub}>Reviews and feedback submitted by you</div>
                    </div>
                  </div>

                  <div className={styles.reviewsList}>
                    <div className={styles.reviewItem}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ color: '#0a233c' }}>Royal Oud Eau de Parfum - 100ml</strong>
                        <span style={{ color: '#f39c12' }}>★★★★★ (5.0)</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#4a4a5a' }}>
                        &quot;Absolutely sublime scent! The agarwood notes are genuine and projection lasts over 18 hours. Packaging was magnificent.&quot;
                      </p>
                      <div style={{ fontSize: '0.78rem', color: '#6c757d' }}>Reviewed on August 1, 2026</div>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. NOTIFICATIONS TAB */}
              {activeTab === 'notifications' && (
                <div>
                  <div className={styles.cardHeader}>
                    <div>
                      <h1 className={styles.cardTitle}>Notification Preferences</h1>
                      <div className={styles.cardSub}>Manage how you receive order updates and promotional alerts</div>
                    </div>
                  </div>

                  <div className={styles.notifList}>
                    <div className={styles.notifRow}>
                      <div className={styles.notifText}>
                        <span className={styles.notifTitle}>Order Status Updates</span>
                        <span className={styles.notifSub}>Receive immediate SMS & email tracking updates for dispatched orders</span>
                      </div>
                      <div className={styles.toggleSwitch}><div className={styles.toggleKnob} /></div>
                    </div>

                    <div className={styles.notifRow}>
                      <div className={styles.notifText}>
                        <span className={styles.notifTitle}>Promotions & Exclusive Offers</span>
                        <span className={styles.notifSub}>Get notified when new luxury drops and VIP coupons become available</span>
                      </div>
                      <div className={styles.toggleSwitch}><div className={styles.toggleKnob} /></div>
                    </div>
                  </div>
                </div>
              )}

              {/* 7. HELP TAB */}
              {activeTab === 'help' && (
                <div>
                  <div className={styles.cardHeader}>
                    <div>
                      <h1 className={styles.cardTitle}>Customer Service & Help</h1>
                      <div className={styles.cardSub}>We are here 24/7 to assist you with orders, returns, and inquiries</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    <div style={{ padding: '20px', background: '#faf9f6', borderRadius: '14px', border: '1px solid #e8e5dc' }}>
                      <strong style={{ color: '#0a233c', display: 'block', fontSize: '1rem', marginBottom: '6px' }}>📞 Phone Support</strong>
                      <p style={{ fontSize: '0.88rem', color: '#6c757d', margin: 0 }}>Call our toll-free concierge hotline: +91 1800 900 100</p>
                    </div>

                    <div style={{ padding: '20px', background: '#faf9f6', borderRadius: '14px', border: '1px solid #e8e5dc' }}>
                      <strong style={{ color: '#0a233c', display: 'block', fontSize: '1rem', marginBottom: '6px' }}>✉️ Email Support</strong>
                      <p style={{ fontSize: '0.88rem', color: '#6c757d', margin: 0 }}>Reach out directly to support@mansulthan.com</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 8. TERMS TAB */}
              {activeTab === 'terms' && (
                <div>
                  <div className={styles.cardHeader}>
                    <div>
                      <h1 className={styles.cardTitle}>Terms and Conditions</h1>
                      <div className={styles.cardSub}>MAN SULTHAN Buyer Protection & Service Policy</div>
                    </div>
                  </div>

                  <div style={{ color: '#4a4a5a', fontSize: '0.92rem', lineHeight: '1.7' }}>
                    <p>Welcome to MAN SULTHAN. All orders placed on our website are protected by 100% Genuine Authenticity Guarantees.</p>
                    <p>We provide 7-day hassle-free returns on all unopened items, free express shipping across India, and 256-bit encrypted checkout safety.</p>
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
