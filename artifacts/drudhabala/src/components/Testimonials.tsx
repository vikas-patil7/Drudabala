import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Kumkumadi Lip Balm is really amazing. My lips feel soft after just a week of use. It feels herbal and genuine.",
    author: "Kavitha R.",
    location: "Shivamogga, Karnataka",
    product: "Kumkumadi Lip Balm",
  },
  {
    quote:
      "Twakrakshak Soap feels very natural. My skin feels fresh and soft, and the herbal fragrance is gentle.",
    author: "Suresh M.",
    location: "Koppa, Karnataka",
    product: "Twakrakshak Special Soap",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section muted-section">
      <div className="container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <small>Customer Love</small>
          <h2>Words of Trust</h2>
          <span />
        </motion.div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>
              <p>"{testimonial.quote}"</p>
              <footer>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.location}</span>
                <em>{testimonial.product}</em>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
