import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/config/whatsapp";

export default function WhatsAppChat() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!dismissed) setShowPopup(true);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [dismissed]);

  const startChat = () => {
    const msg = encodeURIComponent("Hello! I'd like to know more about Drudhabala Ayur Products before ordering.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
    setShowPopup(false);
  };

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="chat-popup"
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
          >
            <header>
              <span>
                <FaWhatsapp /> Drudhabala Support
              </span>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setDismissed(true);
                }}
                aria-label="Close chat prompt"
              >
                <X size={16} />
              </button>
            </header>
            <p>Namaste. Have questions about our lip balm or soap before ordering?</p>
            <button className="button whatsapp-button full-width" onClick={startChat}>
              <FaWhatsapp />
              Start Chat on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="chat-fab"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setShowPopup((show) => !show)}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </motion.button>
    </div>
  );
}
