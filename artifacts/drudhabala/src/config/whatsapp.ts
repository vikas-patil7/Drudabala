export const WHATSAPP_NUMBER = "919611966497";

export function getWhatsAppUrl(productName: string) {
  const text = `Hello Drudhabala Ayur Products, I want to order ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
