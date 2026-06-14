import { useState } from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/config/whatsapp";
import PolicyModal from "./PolicyModal";

const quickLinks = [
  { label: "Products", id: "products" },
  { label: "Why Us", id: "why-us" },
  { label: "Order", id: "order" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const [policy, setPolicy] = useState<"privacy" | "terms" | null>(null);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand footer-brand-row">
              <span className="brand-mark brand-logo">
                <img src="/images/drudhabala-logo.jpeg" alt="" />
              </span>
              <span className="brand-text">
                <strong>Drudhabala</strong>
                <small>Ayur Products</small>
              </span>
            </div>
            <p>
              Bridging ancient Ayurvedic wisdom with modern living. Pure, potent, and crafted with devotion from
              Karnataka.
            </p>
            <div className="social-row">
              <a href={getWhatsAppUrl("hello")} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt />
                <span>
                  Drudhabala Ayur Products
                  <br />
                  Koppa, Karnataka - 577126
                  <br />
                  India
                </span>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+919611966497">+91 96119 66497</a>
              </li>
              <li>
                <FaWhatsapp />
                <a href={getWhatsAppUrl("inquiry")} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>Copyright 2026 Drudhabala Ayur Products. All rights reserved.</p>
          <div>
            <button onClick={() => setPolicy("privacy")}>Privacy Policy</button>
            <button onClick={() => setPolicy("terms")}>Terms of Service</button>
          </div>
        </div>
      </footer>
      <PolicyModal type={policy} onClose={() => setPolicy(null)} />
    </>
  );
}
