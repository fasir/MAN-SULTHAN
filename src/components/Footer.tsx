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
            <div className={styles.footerBrand}>
              <Image src="/brand-logo.png" alt="MAN SULTHAN" width={60} height={60} className={styles.footerLogo} />
              <p className={styles.brandTagline}>Premium Lifestyle Store.<br />Your destination for luxury.</p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialBtn} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className={styles.socialBtn} aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/></svg>
                </a>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>QUICK LINKS</h4>
              <ul className={styles.colList}>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#products">Products</Link></li>
                <li><Link href="#categories">Categories</Link></li>
                <li><Link href="#deals">Deals</Link></li>
                <li><Link href="#contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>CATEGORIES</h4>
              <ul className={styles.colList}>
                <li><Link href="#perfumes">Perfumes</Link></li>
                <li><Link href="#watches">Watches</Link></li>
                <li><Link href="#glasses">Cooling Glasses</Link></li>
                <li><Link href="#mobiles">Mobile & Accessories</Link></li>
                <li><Link href="#laptops">Laptop & Accessories</Link></li>
                <li><Link href="#clocks">Clocks</Link></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.colTitle}>NEWSLETTER</h4>
              <p className={styles.newsletterText}>Subscribe to get exclusive offers and latest updates.</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className={styles.emailInput} />
                <button type="submit" className={styles.subscribeBtn}>SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>&copy; 2024 MAN SULTHAN. All Rights Reserved.</p>
            <div className={styles.paymentIcons}>
              <span className={styles.paymentBadge}>VISA</span>
              <span className={styles.paymentBadge}>MC</span>
              <span className={styles.paymentBadge}>UPI</span>
              <span className={styles.paymentBadge}>COD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
