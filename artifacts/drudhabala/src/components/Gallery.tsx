import { motion } from "framer-motion";

const images = [
  {
    src: "/gallery/selected-botanicals.jpeg",
    alt: "Selected botanicals for Drudhabala Ayur Products",
  },
  {
    src: "/gallery/patient-preparation-wide.jpeg",
    alt: "Ayurvedic preparation with herbs, oils, and mortar",
  },
  {
    src: "/gallery/patient-preparation.jpeg",
    alt: "Patient preparation of Ayurvedic botanicals",
  },
];

export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <small>The Process</small>
          <h2>Nature's Atelier</h2>
        </motion.div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              className="gallery-tile"
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
