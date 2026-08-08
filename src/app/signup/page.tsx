'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import styles from '../login/auth.module.css';

export default function SignUpPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.authCard}>
          <div className={styles.header}>
            <h1 className={styles.title}>Create Account</h1>
            <p className={styles.subtitle}>Join MAN SULTHAN for exclusive rewards &amp; perks</p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" required placeholder="John Doe" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input type="email" required placeholder="name@example.com" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone Number</label>
              <input type="tel" required placeholder="+91 9876543210" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <input type="password" required placeholder="••••••••" className={styles.input} />
            </div>

            <label className={styles.checkboxLabel}>
              <input type="checkbox" required style={{ accentColor: '#c9a84c' }} />
              I agree to the <Link href="#" className={styles.forgotLink}>Terms &amp; Privacy Policy</Link>
            </label>

            <Link href="/account" className={styles.submitBtn} style={{ textAlign: 'center', textDecoration: 'none' }}>
              CREATE ACCOUNT
            </Link>
          </form>

          <p className={styles.footerText}>
            Already have an account? <Link href="/login">Sign In</Link>
          </p>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
