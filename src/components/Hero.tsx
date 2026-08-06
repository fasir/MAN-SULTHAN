'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const rawSlides = [
  {
    id: 's1',
    image: '/images/banners/banner-two.webp',
    alt: 'MAN SULTHAN Premium Lifestyle Store',
    link: '#products'
  },
  {
    id: 's2',
    image: '/images/banners/banner-three.png',
    alt: 'Special Offers & Exclusive Collections',
    link: '#deals'
  },
  {
    id: 's3',
    image: '/images/banners/banner-two.webp',
    alt: 'Luxury Perfumes & Fragrances',
    link: '#perfumes'
  },
  {
    id: 's4',
    image: '/images/banners/banner-three.png',
    alt: 'Premium Timepieces & Watches',
    link: '#watches'
  }
];

// Create 3 copies of slides for seamless infinite looping
const extendedSlides = [...rawSlides, ...rawSlides, ...rawSlides];
const N = rawSlides.length; // 4

const Hero = () => {
  // Start at index N (middle copy, index 4 = first slide)
  const [currentIndex, setCurrentIndex] = useState(N);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Handle seamless infinite loop jump when transition finishes
  const handleTransitionEnd = () => {
    if (currentIndex >= 2 * N) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - N);
    } else if (currentIndex < N) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + N);
    }
  };

  // Auto slide effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers for swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Banner Carousel"
    >
      <div className={styles.sliderContainer}>
        <div
          className={styles.sliderTrack}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-${currentIndex} * (var(--slide-width) + var(--slide-gap)) + var(--slide-offset)))`,
            transition: isTransitioning ? 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
          }}
        >
          {extendedSlides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={`${slide.id}-${index}`}
                className={`${styles.slide} ${isActive ? styles.activeSlide : styles.inactiveSlide}`}
                onClick={() => {
                  if (!isActive) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                  }
                }}
              >
                <Link href={slide.link} className={styles.slideLink} tabIndex={isActive ? 0 : -1}>
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index === N}
                    style={{ objectFit: 'cover' }}
                    quality={85}
                    sizes="(max-width: 768px) 92vw, 88vw"
                  />
                  <div className={styles.slideOverlay} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className={`${styles.arrowBtn} ${styles.prevBtn}`}
        onClick={prevSlide}
        aria-label="Previous Banner Slide"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        className={`${styles.arrowBtn} ${styles.nextBtn}`}
        onClick={nextSlide}
        aria-label="Next Banner Slide"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
