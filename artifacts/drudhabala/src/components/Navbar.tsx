import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/lib/theme";

const navLinks = [
  { label: "Products", id: "products" },
  { label: "Why Us", id: "why-us" },
  { label: "Order", id: "order" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo("hero")} aria-label="Go to top">
            <span className="brand-mark brand-logo">
              <img src="/images/drudhabala-logo.jpeg" alt="" />
            </span>
            <span className="brand-text">
              <strong>Drudhabala</strong>
              <small>Ayur Products</small>
            </span>
          </button>

          <div className="nav-links">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="icon-button mobile-only"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </>
  );
}
