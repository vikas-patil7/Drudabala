import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/config/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow compact">Contact</span>
          <h2>Talk to Drudhabala before you order.</h2>
          <p>
            Have a question about ingredients, usage, delivery, or gifting? Reach out directly and we will help
            you choose the right product.
          </p>
          <div className="contact-actions">
            <a className="button whatsapp-button" href={getWhatsAppUrl("product inquiry")} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
            <a className="button button-outline" href="tel:+919611966497">
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          <div>
            <MapPin />
            <span>
              <strong>Location</strong>
              Drudhabala Ayur Products, Koppa, Karnataka - 577126
            </span>
          </div>
          <div>
            <Phone />
            <span>
              <strong>Phone</strong>
              +91 96119 66497
            </span>
          </div>
          <div>
            <Mail />
            <span>
              <strong>Orders</strong>
              WhatsApp-first ordering and support
            </span>
          </div>
          <div>
            <Clock />
            <span>
              <strong>Support Hours</strong>
              9:00 AM - 8:00 PM IST
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
