export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  description: string;
  ayurvedic_explanation: string;
  faqs: Array<{ q: string; a: string }>;
};

export const products: Product[] = [
  {
    id: "kumkumadi-lip-balm",
    name: "Kumkumadi Lip Balm",
    price: 100,
    image: "/images/kumkumadi-lip-balm.jpeg",
    benefits: [
      "Natural lip care",
      "Moisturizes dry lips",
      "Helps with pigmentation",
      "Protects from pollution",
    ],
    ingredients: ["Saffron", "Lotus", "Manjistha", "Yashtimadhu"],
    usage: "Apply gently on lips 2-3 times daily or before bed.",
    description:
      "An exquisite blend of ancient herbs formulated to nourish and restore your lips' natural softness and color.",
    ayurvedic_explanation:
      "Kumkumadi tailam is celebrated in Ayurveda for skin radiance. In balm form, saffron, lotus, manjistha, and yashtimadhu help balance dryness while supporting a healthy glow.",
    faqs: [
      {
        q: "Can I use it daily?",
        a: "Yes, it is natural and suitable for multiple daily applications.",
      },
      {
        q: "Will it help with dark lips?",
        a: "Regular use may help improve the appearance of pigmentation and dryness.",
      },
    ],
  },
  {
    id: "twakrakshak-soap",
    name: "Twakrakshak Special Soap",
    price: 160,
    image: "/images/twakrakshak-soap.jpeg",
    benefits: [
      "Healthy glowing skin",
      "Protects skin",
      "Natural cleansing",
      "Anti-bacterial botanicals",
    ],
    ingredients: ["Tiktaka Gritha", "Saffron", "Neem", "Turmeric"],
    usage: "Use daily during bath. Lather well and massage onto wet skin before rinsing.",
    description:
      "A cleansing bar that purifies while preserving the skin's natural moisture barrier with traditional healing botanicals.",
    ayurvedic_explanation:
      "Tiktaka Gritha is valued in Ayurveda for skin support. Neem and turmeric bring cleansing properties, while saffron supports a naturally luminous complexion.",
    faqs: [
      {
        q: "Is it suitable for dry skin?",
        a: "Yes, the gritha-based inspiration is designed to cleanse without a harsh stripped feeling.",
      },
      {
        q: "Does it contain artificial fragrances?",
        a: "No, the aroma is inspired by its herbal ingredients.",
      },
    ],
  },
];
