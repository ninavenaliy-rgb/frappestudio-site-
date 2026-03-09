import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import Products from "@/components/Products";
import Community from "@/components/Community";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ecosystem />
      <Products />
      <Community />
      <Mission />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
