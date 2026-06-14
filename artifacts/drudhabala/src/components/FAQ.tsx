import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is it chemical free?",
    a: "Yes, Drudhabala products are made with natural ingredients and no harsh synthetic additives.",
  },
  {
    q: "Is it suitable for daily use?",
    a: "Yes, the products are designed for gentle daily care as part of a regular routine.",
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "Natural ingredients are usually gentle, but a patch test is recommended for very sensitive skin.",
  },
  {
    q: "How do I order?",
    a: "Use any Order on WhatsApp button and the team will help with product selection, payment, and delivery details.",
  },
  {
    q: "What is the delivery availability?",
    a: "Delivery is available across India. Timelines vary by location, usually 3 to 7 working days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section section-card">
      <div className="container narrow">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Frequently Asked Questions</h2>
        </motion.div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq-item" key={faq.q}>
                <button onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}>
                  {faq.q}
                  <ChevronDown className={isOpen ? "rotated" : ""} />
                </button>
                {isOpen && <p>{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
