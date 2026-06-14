import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/config/whatsapp";

const PARTICLE_COUNT = 24;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    type Particle = { x: number; y: number; r: number; dx: number; dy: number; opacity: number };
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(0, window.innerHeight),
      r: randomBetween(2, 7),
      dx: randomBetween(-0.35, 0.35),
      dy: randomBetween(-0.55, -0.12),
      opacity: randomBetween(0.2, 0.6),
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 174, 74, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = randomBetween(0, canvas.width);
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToProducts = () => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-pattern" />
      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <span className="eyebrow">Luxury Ayurvedic Care</span>
          <h1>
            Pure Ayurveda.
            <span>Naturally Beautiful.</span>
          </h1>
          <p>
            Ancient Ayurvedic care for modern lifestyles. Handcrafted with sacred botanicals and patient wisdom.
          </p>
          <div className="hero-actions">
            <button className="button button-gold" onClick={scrollToProducts}>
              Explore Products
            </button>
            <a className="button button-glass" href={getWhatsAppUrl("products")} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
      <button className="down-button" onClick={scrollToProducts} aria-label="Scroll to products">
        <ArrowDown />
      </button>
    </section>
  );
}
