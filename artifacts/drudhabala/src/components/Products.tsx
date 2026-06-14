import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/config/whatsapp";
import { products } from "@/config/products";
import type { Product } from "@/config/products";
import ProductModal from "./ProductModal";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="section">
      <div className="container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Sacred Offerings</h2>
          <span />
        </motion.div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.article
              className="product-card"
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-body">
                <div className="product-title-row">
                  <h3>{product.name}</h3>
                  <strong>Rs. {product.price}</strong>
                </div>
                <div className="stars" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p>{product.description}</p>
                <div className="pill-row">
                  {product.ingredients.slice(0, 3).map((ingredient) => (
                    <span key={ingredient}>{ingredient}</span>
                  ))}
                </div>
                <button
                  className="button button-primary full-width"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.open(getWhatsAppUrl(product.name), "_blank", "noopener,noreferrer");
                  }}
                >
                  <FaWhatsapp />
                  Order on WhatsApp
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} isOpen={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
