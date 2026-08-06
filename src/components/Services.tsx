'use client';

import { useState } from 'react';
import styles from './Services.module.css';

const serviceCategories = [
  {
    id: 'display',
    icon: '📱',
    title: 'Screen & Display Replacement',
    badge: 'Mobile & Laptop',
    desc: 'Cracked screen or touch issues? We replace LCD, OLED & Retina displays with 100% original quality screens and warranty.',
    features: ['Original OLED / IPS Screens', 'Touch & TouchBar Repair', 'Same-Day Express Fitting', '90-Day Warranty'],
  },
  {
    id: 'battery',
    icon: '🔋',
    title: 'Battery & Power Repair',
    badge: 'Fast Service',
    desc: 'Battery draining fast or laptop not charging? Get certified high-capacity battery replacement and charging port repair.',
    features: ['30-Min Phone Battery Swap', 'Laptop Battery Replacement', 'Charging Port Repair', 'Battery Health Calibration'],
  },
  {
    id: 'chipset',
    icon: '💻',
    title: 'Motherboard & Chip-Level Repair',
    badge: 'Expert Level',
    desc: 'Advanced micro-soldering IC repair for dead devices, water damaged motherboards, and short circuit issues.',
    features: ['Water Damage Restoration', 'No Power / Dead Board Fix', 'Graphic Chip (GPU) Repair', 'Power IC & CPU Reballing'],
  },
  {
    id: 'software',
    icon: '⚡',
    title: 'Software & Data Recovery',
    badge: '100% Confidential',
    desc: 'OS installation, virus removal, boot error fixes, passcode unlocking, and deep data recovery from dead SSDs and phones.',
    features: ['Windows & macOS Clean Install', 'Deep Hard Drive Data Recovery', 'Boot Loop & Crash Fix', 'System Speed Optimization'],
  },
  {
    id: 'hardware',
    icon: '⌨️',
    title: 'Keyboard, Hinge & Body Repair',
    badge: 'Laptop Care',
    desc: 'Broken hinges, sticking keys, or cracked laptop casing? Complete structural restoration and original keyboard swap.',
    features: ['Original Backlit Keyboards', 'Precision Hinge Repair', 'Trackpad & Speaker Fix', 'Full Casing Replacement'],
  },
  {
    id: 'upgrade',
    icon: '🚀',
    title: 'SSD & RAM Performance Upgrade',
    badge: 'Instant Boost',
    desc: 'Make your old laptop up to 5X faster! NVMe SSD installation, RAM expansion, thermal cleaning, and paste re-application.',
    features: ['NVMe SSD Upgrade (Up to 2TB)', 'RAM Expansion (Up to 64GB)', 'Thermal Paste Re-application', 'Internal Dust Cleaning'],
  },
];

const guarantees = [
  { icon: '⏱️', title: 'Express Service', desc: 'Minor repairs done in 30–60 minutes' },
  { icon: '🛡️', title: '90-Day Warranty', desc: 'Warranty on all replaced spare parts' },
  { icon: '🔍', title: 'Free Diagnosis', desc: 'Complete device check with transparent quote' },
  { icon: '👨‍🔧', title: 'Certified Engineers', desc: 'Experienced micro-soldering technicians' },
];

const supportedBrands = [
  'Apple iPhone & MacBook',
  'Samsung Galaxy',
  'Dell',
  'HP',
  'Lenovo',
  'ASUS',
  'Acer',
  'OnePlus',
  'Xiaomi / Redmi',
  'Realme',
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="servicing" className={styles.services}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>EXPERT REPAIR &amp; MAINTENANCE</span>
          <h2 className={styles.sectionTitle}>Mobile &amp; Laptop Servicing</h2>
          <p className={styles.sectionSubtitle}>
            Fast, reliable, and professional repair services for all major smartphone &amp; laptop brands with genuine spare parts.
          </p>
        </div>

        {/* Guarantees Bar */}
        <div className={styles.guaranteesGrid}>
          {guarantees.map((item, i) => (
            <div key={i} className={styles.guaranteeCard}>
              <span className={styles.guaranteeIcon}>{item.icon}</span>
              <div>
                <h4 className={styles.guaranteeTitle}>{item.title}</h4>
                <p className={styles.guaranteeDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {serviceCategories.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>
                <span className={styles.badge}>{service.badge}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>

              <ul className={styles.featureList}>
                {service.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.check}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={styles.bookBtn}>
                BOOK REPAIR NOW →
              </a>
            </div>
          ))}
        </div>

        {/* Supported Brands Bar */}
        <div className={styles.brandsBox}>
          <h4 className={styles.brandsTitle}>BRANDS WE SERVICE:</h4>
          <div className={styles.brandsList}>
            {supportedBrands.map((brand, index) => (
              <span key={index} className={styles.brandPill}>
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaText}>
            <h3>Need Emergency Device Repair?</h3>
            <p>Bring your device to our service center or get a free estimate over phone / WhatsApp.</p>
          </div>
          <div className={styles.ctaActions}>
            <a href="tel:+919876543210" className={styles.ctaCallBtn}>
              📞 CALL TECHNICIAN
            </a>
            <a href="https://wa.me/919876543210" className={styles.ctaWhatsappBtn} target="_blank" rel="noopener noreferrer">
              💬 WHATSAPP INQUIRY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
