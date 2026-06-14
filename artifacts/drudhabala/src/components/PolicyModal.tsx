import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type PolicyType = "privacy" | "terms";

const content: Record<PolicyType, { title: string; sections: Array<{ heading: string; body: string }> }> = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you contact us on WhatsApp, we may receive your name, phone number, delivery address, product preference, and order details.",
      },
      {
        heading: "How We Use It",
        body: "We use this information only to confirm orders, answer questions, coordinate delivery, and provide customer support.",
      },
      {
        heading: "Sharing",
        body: "Delivery information may be shared with shipping partners only when needed to complete your order.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      {
        heading: "Orders",
        body: "Orders are confirmed through WhatsApp after product availability, quantity, price, payment, and delivery details are verified.",
      },
      {
        heading: "Product Use",
        body: "Our products are cosmetic and wellness care products. Patch testing is recommended, especially for sensitive skin.",
      },
      {
        heading: "Delivery",
        body: "Delivery timelines depend on location and courier availability. We share dispatch updates directly on WhatsApp.",
      },
    ],
  },
};

type PolicyModalProps = {
  type: PolicyType | null;
  onClose: () => void;
};

export default function PolicyModal({ type, onClose }: PolicyModalProps) {
  const policy = type ? content[type] : null;

  return (
    <AnimatePresence>
      {policy && (
        <>
          <motion.button
            className="modal-backdrop"
            aria-label="Close policy"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="policy-modal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <button className="modal-close icon-button" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
            <h2>{policy.title}</h2>
            {policy.sections.map((section) => (
              <section key={section.heading}>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </section>
            ))}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
