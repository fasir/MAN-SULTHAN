import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Categories from '@/components/Categories';
import NewArrivals from '@/components/NewArrivals';
import BestSellers from '@/components/BestSellers';
import ShopByBrand from '@/components/ShopByBrand';
import GiftProducts from '@/components/GiftProducts';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <NewArrivals />
        <BestSellers />
        <ShopByBrand />
        <GiftProducts />
        <About />
        <Testimonials />
        {/* <WhyChooseUs /> */}
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
