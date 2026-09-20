import { Product } from '../types';

// Real product catalog based on Pearls Elegance Thrift Abaya Wears verified information & pricing
export const PRODUCTS: Product[] = [
  {
    id: 'thrift-abaya-wear-01',
    name: 'Thrift Abaya Wears',
    category: 'Abayas',
    subCategory: 'Classic Abaya',
    price: 9000,
    priceFormatted: '₦9,000',
    image: '/assets/images/classic_abaya_mannequin_1789896383443.jpg',
    gallery: [
      '/assets/images/classic_abaya_mannequin_1789896383443.jpg',
      '/assets/images/hero_editorial_mannequin_1789896317613.jpg'
    ],
    isPopular: true,
    isNewArrival: false,
    availability: 'In Stock',
    condition: 'Hand-selected quality thrift (Washed, ironed & neatly packaged)',
    sizes: ['Free Size (Fits 52 - 58)'],
    colors: ['Classic Black', 'Charcoal & Gold trim', 'Midnight Navy'],
    description: 'Carefully curated quality thrift abaya with tasteful embroidery details. Flowing modest silhouette suitable for daily wear, Friday prayers, and special events. Pre-washed and ironed ready to wear.',
    features: [
      'Hand-selected modest thrift quality',
      'Breathable, graceful modest drape',
      'Washed, steam-ironed & individually packed',
      'Retail and bulk purchase options available'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'new-arrival-abaya-02',
    name: 'New Arrivals Abaya',
    category: 'Abayas',
    subCategory: 'New Arrival Modest Wear',
    price: 12000,
    priceFormatted: '₦12,000',
    image: '/assets/images/hero_editorial_mannequin_1789896317613.jpg',
    gallery: [
      '/assets/images/hero_editorial_mannequin_1789896317613.jpg',
      '/assets/images/classic_abaya_mannequin_1789896383443.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'New arrival modest abaya',
    sizes: ['54', '56', '58'],
    colors: ['Deep Jet Black', 'Champagne Beige', 'Rich Chocolate'],
    description: 'Fresh batch of new arrival modest abayas featuring modern cuts, delicate sleeve detailing, and elegant drape. High quality fabric offering timeless modesty and sophistication.',
    features: [
      'Freshly stocked collection piece',
      'Detailed sleeve & neckline accents',
      'Flattering modest fit',
      'Available for individual order and bulk resale inquiry'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'thrift-kinomo-abaya-03',
    name: 'Thrift Kinomo Abaya with New Inner Dress',
    category: 'Kinomo',
    subCategory: 'Kinomo & Inner Set',
    price: 12500,
    priceFormatted: '₦10,000 – ₦15,000',
    priceNote: 'Price: ₦10,000 – ₦15,000 depending on style',
    image: '/assets/images/kinomo_set_mannequin_1789896343549.jpg',
    gallery: [
      '/assets/images/kinomo_set_mannequin_1789896343549.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'Few Pieces Left',
    condition: 'Thrift kinomo layer paired with coordinating new inner dress',
    sizes: ['M', 'L', 'XL', 'Free Size'],
    colors: ['Mocha Brown Set', 'Taupe Earth Set', 'Classic Noir Set'],
    description: 'A stylish 2-piece combination featuring an open-front flowing thrift kinomo (kimono) jacket paired with a new matching inner gown. Offers versatility and modest elegance.',
    features: [
      'Includes open outer kinomo + inner dress',
      'Can be styled together or worn separately',
      'Neatly packaged and ready to wear',
      'High-demand modest style for retail & resale'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'new-arrival-adult-jalabia-04',
    name: 'New Arrivals Clean White Adults Jalabia',
    category: 'Jalabiyas',
    subCategory: 'Adult Modest Jalabia',
    price: 6000,
    priceFormatted: '₦6,000',
    image: '/assets/images/white_jalabia_mannequin_1789896330008.jpg',
    gallery: [
      '/assets/images/white_jalabia_mannequin_1789896330008.jpg'
    ],
    isNewArrival: true,
    isPopular: false,
    availability: 'In Stock',
    condition: 'Clean select modest jalabia (Adult fit)',
    sizes: ['M (54)', 'L (56)', 'XL (58)', 'XXL (60)'],
    colors: ['Clean White', 'Emerald Green', 'Royal Navy', 'Sand Stone'],
    description: 'Comfortable and lightweight adult jalabias designed for ease, prayer, and relaxation. Features clean collar designs with subtle embroidery stitching.',
    features: [
      'Comfortable lightweight breathable fabric',
      'Modest cut suitable for women and men',
      'Clean white and rich neutral colors',
      'Bulk purchase available for resellers'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'kiddies-abaya-jalabia-05',
    name: 'Kiddies Abaya and Jalabia',
    category: 'Kiddies Wear',
    subCategory: 'Children Modest Wear',
    price: 6000,
    priceFormatted: '₦6,000',
    image: '/assets/images/kiddies_abaya_mannequin_1789896358376.jpg',
    gallery: [
      '/assets/images/kiddies_abaya_mannequin_1789896358376.jpg'
    ],
    isNewArrival: false,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Clean, quality modest wear for children',
    sizes: ['Ages 3-5', 'Ages 6-8', 'Ages 9-12'],
    colors: ['Soft Lilac', 'Pastel Pink', 'Cream & Gold', 'Sky Blue'],
    description: 'Charming and modest abayas and jalabiyas tailored for children and young girls/boys. Breathable, durable, and comfortable with gentle embroidery.',
    features: [
      'Gentle and comfortable for active children',
      'Easy wash and wear durability',
      'Modest lengths and easy fit',
      'Affordable modest fashion for families'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'thrift-tops-gowns-06',
    name: 'Thrift Tops and Gowns',
    category: 'Thrift Tops & Gowns',
    subCategory: 'Modest Tops & Maxi Gowns',
    price: 2000,
    priceFormatted: '₦2,000',
    image: '/assets/images/thrift_gown_mannequin_1789896370138.jpg',
    gallery: [
      '/assets/images/thrift_gown_mannequin_1789896370138.jpg'
    ],
    isNewArrival: false,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Hand-selected thrift tops & gowns (Washed and pressed)',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Caramel Earth', 'Floral Modest Prints', 'Solid Neutrals'],
    description: 'Budget-friendly thrift tops, tunics, and modest gowns starting from just ₦2,000. Each piece is hand-selected, cleaned, and ready to style.',
    features: [
      'Affordable price of ₦2,000',
      'Washed and ironed before dispatch',
      'Ideal for everyday wear and casual layering',
      'Available for individual purchase and bulk reseller inquiry'
    ],
    wholesaleAvailable: true,
  }
];

export const CATEGORIES: { name: string; description: string; count: number }[] = [
  { name: 'All', description: 'Explore our full catalog of affordable modest wear', count: PRODUCTS.length },
  { name: 'Abayas', description: 'Classic thrift abayas from ₦9,000 and new arrivals at ₦12,000', count: 2 },
  { name: 'Jalabiyas', description: 'Clean adult jalabias for prayer & daily wear from ₦6,000', count: 1 },
  { name: 'Kinomo', description: 'Thrift kinomo with new inner dress set (₦10,000–₦15,000)', count: 1 },
  { name: 'Kiddies Wear', description: 'Kiddies abayas and jalabiyas for boys & girls (₦6,000)', count: 1 },
  { name: 'Thrift Tops & Gowns', description: 'Affordable thrift tops and gowns from ₦2,000', count: 1 },
  { name: 'New Arrivals', description: 'Latest stock arrivals and fresh styles', count: 3 },
  { name: 'Wholesale / Bulk', description: 'Bulk purchase packages for resellers & boutique owners', count: PRODUCTS.length }
];

export const BUSINESS_INFO = {
  name: 'Pearls Elegance Thrift Abaya Wears',
  tagline: 'Affordable thrift abayas, jalabiyas, and modest fashion',
  address: 'Ibadan Garage Side, Ijebu Ode, 120101, Ogun State, Nigeria',
  shortLocation: 'Ibadan Garage Side, Ijebu Ode, Ogun State',
  phone: '0811 244 4087',
  phoneRaw: '08112444087',
  phoneIntl: '+2348112444087',
  whatsappRaw: '2348112444087',
  whatsappUrl: 'https://wa.me/2348112444087',
  deliveryNote: 'Serving customers in Ijebu Ode, Ogun State, and delivering across Nigeria',
  openingHours: 'In-store visits & inquiries welcome — call or message on WhatsApp for directions and current stock availability',
};
