import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, Leaf, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/config/whatsapp";
import type { Product } from "@/config/products";

type ProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          <motion.button
            className="modal-backdrop"
            aria-label="Close product details"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="product-modal"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
          >
            <button className="modal-close icon-button" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
            <div className="modal-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="modal-content">
              <span className="eyebrow compact">Ayurvedic Formulation</span>
              <h2>{product.name}</h2>
              <strong className="modal-price">Rs. {product.price}</strong>
              <p>{product.description}</p>

              <div className="modal-section">
                <h3>
                  <CheckCircle2 size={20} /> Key Benefits
                </h3>
                <ul className="benefit-list">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>
                  <Leaf size={20} /> Sacred Ingredients
                </h3>
                <div className="pill-row">
                  {product.ingredients.map((ingredient) => (
                    <span key={ingredient}>{ingredient}</span>
                  ))}
                </div>
              </div>

              <div className="wisdom-box">
                <h3>
                  <Info size={20} /> Ayurvedic Wisdom
                </h3>
                <p>{product.ayurvedic_explanation}</p>
              </div>

              <div className="modal-section">
                <h3>How to Use</h3>
                <p>{product.usage}</p>
              </div>

              <div className="modal-section">
                <h3>Common Questions</h3>
                {product.faqs.map((faq) => (
                  <div className="mini-faq" key={faq.q}>
                    <strong>{faq.q}</strong>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="modal-action">
                <button className="button button-gold full-width" onClick={() => window.open(getWhatsAppUrl(product.name), "_blank")}>
                  <FaWhatsapp />
                  Order on WhatsApp Now
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
