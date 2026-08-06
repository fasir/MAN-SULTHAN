import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Categories from '@/components/Categories';
import TrendingProducts from '@/components/TrendingProducts';
import Services from '@/components/Services';
import Products from '@/components/Products';
import PromoBar from '@/components/PromoBar';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <TrendingProducts />
        <Services />
        <Products />
        <PromoBar />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
