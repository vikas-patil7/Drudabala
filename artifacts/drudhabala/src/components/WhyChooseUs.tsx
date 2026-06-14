import { motion } from "framer-motion";
import { Award, Droplets, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Ayurvedic", desc: "Authentic formulations" },
  { icon: Droplets, title: "Chemical Free", desc: "Pure and unadulterated" },
  { icon: Heart, title: "Handmade Care", desc: "Crafted with devotion" },
  { icon: ShieldCheck, title: "Natural Ingredients", desc: "Sourced responsibly" },
  { icon: Sparkles, title: "Gentle Rituals", desc: "Kind daily care" },
  { icon: Award, title: "Trusted Quality", desc: "Premium standards" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-card">
      <div className="container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Why Drudhabala?</h2>
          <span />
        </motion.div>
        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                className="feature"
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="feature-icon">
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
