import { motion } from "framer-motion";

export default function AboutAyurveda() {
  return (
    <section id="about" className="about-section">
      <div className="about-bg" />
      <div className="container about-content">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="eyebrow compact">Our Philosophy</span>
          <h2>Honoring the Ancient Intelligence of Nature</h2>
          <p>
            At Drudhabala, we revive traditions with care. Every ingredient is chosen with respect for its
            origin, processed with classical inspiration, and shaped to support the skin's natural balance.
          </p>
        </motion.div>

        <div className="stats-grid">
          <div>
            <strong>100%</strong>
            <span>Natural and Pure</span>
          </div>
          <div>
            <strong>0</strong>
            <span>Harsh Chemicals</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Handcrafted Products</span>
          </div>
        </div>
      </div>
    </section>
  );
}
