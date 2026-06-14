import { motion } from "framer-motion";
import { MessageCircle, PackageCheck, Sparkles, Truck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/config/whatsapp";

const steps = [
  {
    icon: MessageCircle,
    title: "Message Us",
    text: "Choose a product and send the pre-filled WhatsApp order request.",
  },
  {
    icon: Sparkles,
    title: "Personal Guidance",
    text: "We confirm usage, availability, quantity, and delivery details.",
  },
  {
    icon: PackageCheck,
    title: "Packed With Care",
    text: "Your order is prepared carefully from Koppa, Karnataka.",
  },
  {
    icon: Truck,
    title: "Delivered Across India",
    text: "We share dispatch updates and tracking details on WhatsApp.",
  },
];

export default function OrderProcess() {
  return (
    <section id="order" className="section order-section">
      <div className="container order-layout">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="eyebrow compact">How Ordering Works</span>
          <h2>Simple WhatsApp ordering, guided by a real person.</h2>
          <p>
            Drudhabala currently takes orders directly on WhatsApp so every customer gets the right product,
            usage guidance, and delivery support before purchase.
          </p>
          <a className="button button-gold" href={getWhatsAppUrl("Drudhabala Ayur Products")} target="_blank" rel="noreferrer">
            <FaWhatsapp />
            Start an Order
          </a>
        </motion.div>

        <div className="order-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                className="order-step"
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div>
                  <Icon />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
