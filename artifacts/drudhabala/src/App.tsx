import { useEffect } from "react";
import { ThemeProvider } from "@/lib/theme";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import OrderProcess from "@/components/OrderProcess";
import AboutAyurveda from "@/components/AboutAyurveda";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import CursorGlow from "@/components/CursorGlow";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="app-shell">
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <Products />
          <WhyChooseUs />
          <OrderProcess />
          <AboutAyurveda />
          <Testimonials />
          <Gallery />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppChat />
      </div>
    </ThemeProvider>
  );
}
