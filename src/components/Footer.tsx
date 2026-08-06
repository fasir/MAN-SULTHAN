'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Column 1: Brand & Contact */}
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.logoWrap}>
                <Image
                  src="/logo.png"
                  alt="MAN SULTHAN Logo"
                  width={160}
                  height={52}
                  className={styles.footerLogo}
                  priority
                />
              </Link>
              <p className={styles.brandTagline}>
                Your premier destination for luxury perfumes, timepieces, eyewear, tech devices, and certified repair servicing.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <a href="mailto:info@mansulthan.com">info@mansulthan.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Main Road, Sulthan Bathery, Kerala</span>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialBtn} aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="WhatsApp">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.199 4.38 4.442-1.164z" />
                  </svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>QUICK LINKS</h4>
              <ul className={styles.colList}>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#products">Featured Products</Link></li>
                <li><Link href="#categories">Shop Categories</Link></li>
                <li><Link href="#servicing">Servicing &amp; Repair</Link></li>
                <li><Link href="#deals">Deals &amp; Offers</Link></li>
                <li><Link href="#contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>CATEGORIES</h4>
              <ul className={styles.colList}>
                <li><Link href="#perfumes">Perfumes &amp; Fragrances</Link></li>
                <li><Link href="#watches">Executive Watches</Link></li>
                <li><Link href="#glasses">Cooling Glasses</Link></li>
                <li><Link href="#mobiles">Mobiles &amp; Smartphones</Link></li>
                <li><Link href="#mobile-acc">Mobile Accessories</Link></li>
                <li><Link href="#laptops">Laptops &amp; Computers</Link></li>
                <li><Link href="#laptop-acc">Laptop Accessories</Link></li>
                <li><Link href="#clocks">Clocks Collection</Link></li>
              </ul>
            </div>

            {/* Column 4: Customer Care & Policies */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>CUSTOMER CARE</h4>
              <ul className={styles.colList}>
                <li><Link href="#track">Track Your Order</Link></li>
                <li><Link href="#shipping">Shipping &amp; Delivery</Link></li>
                <li><Link href="#returns">Return &amp; Refund Policy</Link></li>
                <li><Link href="#privacy">Privacy Policy</Link></li>
                <li><Link href="#terms">Terms &amp; Conditions</Link></li>
                <li><Link href="#faq">Help &amp; FAQs</Link></li>
              </ul>
            </div>

            {/* Column 5: Newsletter */}
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>NEWSLETTER</h4>
              <p className={styles.newsletterText}>
                Subscribe to receive exclusive deals, new arrivals, and special promotional offers directly in your inbox.
              </p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email address" className={styles.emailInput} required />
                <button type="submit" className={styles.subscribeBtn}>SUBSCRIBE</button>
              </form>
              <div className={styles.trustBadgeWrap}>
                <span className={styles.trustShield}>🛡️</span>
                <span>100% Safe &amp; Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} MAN SULTHAN. All Rights Reserved.
            </p>
            <div className={styles.paymentIcons}>
              <span className={styles.paymentBadge}>VISA</span>
              <span className={styles.paymentBadge}>MASTERCARD</span>
              <span className={styles.paymentBadge}>UPI / GPAY</span>
              <span className={styles.paymentBadge}>RUPAY</span>
              <span className={styles.paymentBadge}>NETBANKING</span>
              <span className={styles.paymentBadge}>COD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
