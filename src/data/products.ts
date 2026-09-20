import { Product } from '../types';

// Real product catalog based on Pearls Elegance Thrift Abaya Wears verified information & pricing
export const PRODUCTS: Product[] = [
  {
    id: 'thrift-abaya-wear-01',
    name: 'Thrift Abaya Wears',
    category: 'Adults\' Abayas',
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
    name: 'New Arrivals Adult Abaya',
    category: 'Adults\' Abayas',
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
    id: 'adult-luxury-velvet-abaya-07',
    name: 'Adult Premium Velvet Trim Abaya',
    category: 'Adults\' Abayas',
    subCategory: 'Luxury Modest Wear',
    price: 12000,
    priceFormatted: '₦12,000',
    image: '/assets/images/adult_luxury_abaya.jpg',
    gallery: [
      '/assets/images/adult_luxury_abaya.jpg',
      '/assets/images/classic_abaya_mannequin_1789896383443.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Select high-grade modest abaya',
    sizes: ['54', '56', '58', '60'],
    colors: ['Royal Black', 'Deep Emerald', 'Plum Burgundy'],
    description: 'Elegantly tailored adult abaya with smooth velvet cuffs and refined neckline borders. Designed for occasion wear and formal modest elegance.',
    features: [
      'Refined velvet trim along sleeves',
      'Generous flowing modest cut',
      'Steam-ironed and ready for immediate wear'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'kids-abaya-08',
    name: 'Kids\' Premium Modest Abaya & Gown',
    category: 'Kids\' Abayas',
    subCategory: 'Children Modest Abaya',
    price: 6000,
    priceFormatted: '₦6,000',
    image: '/assets/images/kids_abaya_pink_embroidered_01.jpg',
    gallery: [
      '/assets/images/kids_abaya_pink_embroidered_01.jpg',
      '/assets/images/kids_abaya_brown_tulle_frill_02.jpg',
      '/assets/images/kids_abaya_black_open_front_04.jpg',
      '/assets/images/kids_abaya_floral_blue_satin_03.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Clean, comfortable quality modest wear for young girls',
    sizes: ['Ages 4-6', 'Ages 7-9', 'Ages 10-13'],
    colors: ['Soft Pink Embroidered', 'Cocoa Brown & Blue Tulle Frill', 'Black Open-Front & White Inner', 'Floral Blue Satin'],
    description: 'Charming and modest abayas tailored specifically for young girls. Features delicate neck embroidery, frill cuffs, satin prints, and open-front layering styles with tassel waist ties.',
    features: [
      'Soft breathable fabric designed for kids\' active comfort',
      'Intricate embroidery, frills & tassel tie waist accents',
      'Pre-washed and steam-ironed before packaging',
      'Available for retail order and bulk reseller packages'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'kids-open-abaya-set-16',
    name: 'Kids\' 2-Piece Open Abaya & Inner Dress',
    category: 'Kids\' Abayas',
    subCategory: 'Children Open Abaya',
    price: 6500,
    priceFormatted: '₦6,500',
    image: '/assets/images/kids_abaya_black_open_front_04.jpg',
    gallery: [
      '/assets/images/kids_abaya_black_open_front_04.jpg',
      '/assets/images/kids_abaya_brown_tulle_frill_02.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Complete 2-piece open outer abaya + white inner dress + tassel belt',
    sizes: ['Ages 5-7', 'Ages 8-10', 'Ages 11-13'],
    colors: ['Jet Black Outer & White Inner', 'Cocoa Brown & Sky Blue Tulle'],
    description: 'A cute 2-piece open-front abaya set for young girls featuring a flowing outer cloak, a clean inner gown, and a black braided tassel waist tie.',
    features: [
      'Includes open outer coat + inner gown + waist tie belt',
      'Lightweight and graceful modest drape',
      'Washed and steam-ironed ready to wear'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'new-arrival-adult-jalabia-04',
    name: 'Adults\' Clean White & Color Jalabia',
    category: 'Jalabiyas',
    subCategory: 'Adult Modest Jalabia',
    price: 6000,
    priceFormatted: '₦6,000',
    image: '/assets/images/jalabia_kids_adults_stock.jpg',
    gallery: [
      '/assets/images/jalabia_kids_adults_stock.jpg',
      '/assets/images/white_jalabia_mannequin_1789896330008.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Clean select modest jalabia — Kids & Adults sizes, packaged & ready',
    sizes: ['Size 40 (Kids)', 'Size 42 (Kids)', 'Size 44 (Adults)', 'Size 46 (Adults)', 'Size 48 (Adults)', 'Size 50 (Adults)'],
    colors: ['Pure White', 'Off-White / Cream', 'Light Lavender', 'Beige Khaki'],
    description: 'Neatly packaged clean jalabias for both kids and adults. Available in multiple collar styles — mandarin collar, embroidered chest panel, classic button placket — all sealed in individual polythene bags ready for delivery.',
    features: [
      'Available in Kids & Adults sizing (40–50)',
      'Multiple collar & embroidery styles in one stock',
      'Individually sealed in polythene — hygenic & gift-ready',
      'Ideal for Friday prayers, Eid, and Islamic school'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'kids-jalabia-09',
    name: 'Kids\' Modest Jalabia',
    category: 'Jalabiyas',
    subCategory: 'Children Jalabia',
    price: 5500,
    priceFormatted: '₦5,500',
    image: '/assets/images/jalabia_kids_adults_stock.jpg',
    gallery: [
      '/assets/images/jalabia_kids_adults_stock.jpg'
    ],
    isNewArrival: false,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Clean quality modest jalabia for kids — neatly packaged',
    sizes: ['Size 40', 'Size 42', 'Size 44'],
    colors: ['Pure White', 'Off-White / Cream', 'Light Lavender'],
    description: 'Classic clean jalabias for children in neat polythene packaging. Available in embroidered neck, mandarin collar, and plain button-up styles. Perfect for Friday prayers, Islamic school, and festive occasions.',
    features: [
      'Various embroidery and collar styles available',
      'Hygienically sealed in individual polythene bags',
      'Modest length with comfortable fit for active children',
      'Ideal bulk purchase for resellers & school uniforms'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'thrift-kinomo-abaya-03',
    name: 'Thrift Kinomo Abaya Set with Inner Dress',
    category: 'Kimonos',
    subCategory: 'Kinomo & Inner Set',
    price: 12500,
    priceFormatted: '₦10,000 – ₦15,000',
    priceNote: 'Price: ₦10,000 – ₦15,000 depending on style',
    image: '/assets/images/kimono_black_embroidered_belt_01.jpg',
    gallery: [
      '/assets/images/kimono_black_embroidered_belt_01.jpg',
      '/assets/images/kimono_floral_trim_satin_02.jpg',
      '/assets/images/kimono_floral_trim_white_inner_03.jpg',
      '/assets/images/kimono_navy_blue_inner_04.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'Few Pieces Left',
    condition: 'Thrift kinomo layer paired with coordinating new inner dress',
    sizes: ['M', 'L', 'XL', 'Free Size'],
    colors: ['Jet Black & Silver Satin Inner', 'Black Floral Trim & Blush Satin Inner', 'Midnight Navy & Royal Blue Inner'],
    description: 'A stylish 2-piece combination featuring an open-front flowing thrift kinomo (kimono) jacket paired with a coordinating inner dress and braided tassel belt. Offers versatility and modest elegance.',
    features: [
      'Includes open outer kinomo + inner dress + tassel waist tie belt',
      'Intricate sleeve and collar embroidery accent trim',
      'Can be styled together or worn separately',
      'Neatly packaged and ready to wear'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'chiffon-kimono-outer-15',
    name: 'Open-Front Floral Trim Kimono Abaya',
    category: 'Kimonos',
    subCategory: 'Kimono Layering',
    price: 10000,
    priceFormatted: '₦10,000',
    image: '/assets/images/kimono_floral_trim_satin_02.jpg',
    gallery: [
      '/assets/images/kimono_floral_trim_satin_02.jpg',
      '/assets/images/kimono_floral_trim_white_inner_03.jpg',
      '/assets/images/kimono_navy_blue_inner_04.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Select open kimono cover layer with inner dress',
    sizes: ['Free Size (Fits 52 - 58)'],
    colors: ['Floral Border Black', 'Solid Midnight Navy', 'Satin Inner Layer'],
    description: 'Flowing open-front kimono featuring detailed floral lace embroidery along the lapels and cuffs. Paired with a silk-touch inner gown.',
    features: [
      'Premium floral embroidery on sleeves and collar',
      'Includes waist tie cord with tassel ends',
      'Versatile daily and occasion layering piece'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'gown-dress-maxi-10',
    name: 'Flowing Modest Maxi Gown Dress',
    category: 'Gown Dresses',
    subCategory: 'Maxi Dresses',
    price: 8500,
    priceFormatted: '₦8,500',
    image: '/assets/images/gown_dress_modest.jpg',
    gallery: [
      '/assets/images/gown_dress_modest.jpg',
      '/assets/images/product_thrift_gown_1789895120024.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Select modest gown dress (Washed & ironed)',
    sizes: ['M', 'L', 'XL', 'Free Size'],
    colors: ['Warm Terracotta', 'Mustard Gold', 'Deep Olive', 'Floral Prints'],
    description: 'Beautiful full-length maxi gown dress with long sleeves and elasticated cuffs. Perfect for casual outings, work, or modest gathering.',
    features: [
      'Full coverage modest cut',
      'Lightweight non-see-through fabric',
      'Washed, steam-ironed & individually packed'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'henna-design-stickers-12',
    name: 'Heinna Design Stencil Stickers',
    category: 'Henna Essentials',
    subCategory: 'Henna Accessories',
    price: 1000,
    priceFormatted: '₦1,000',
    image: '/assets/images/henna_design_stickers.jpg',
    gallery: [
      '/assets/images/henna_design_stickers.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Brand new reusable henna stencils',
    sizes: ['Pack of 2 Stencils', 'Pack of 5 Stencils'],
    colors: ['Intricate Floral Patterns', 'Geometric Eid Designs'],
    description: 'Easy-to-use self-adhesive henna stencils. Place sticker on hands or feet, apply henna paste over template, and peel off for flawless artistic designs.',
    features: [
      'Self-adhesive and easy to stick',
      'Achieve professional henna art effortlessly',
      'Reusable stencil material'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'henna-finger-cups-13',
    name: 'Heinna Modest Finger Cups Set',
    category: 'Henna Essentials',
    subCategory: 'Henna Accessories',
    price: 1200,
    priceFormatted: '₦1,200',
    image: '/assets/images/henna_finger_cups.jpg',
    gallery: [
      '/assets/images/henna_finger_cups.jpg'
    ],
    isNewArrival: false,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Brand new finger caps',
    sizes: ['Set of 10 Finger Caps'],
    colors: ['Clear/Transparent', 'Classic Soft Rose'],
    description: 'Traditional henna finger caps designed to protect and lock in moisture after applying henna paste on fingertips, ensuring deep rich stain development.',
    features: [
      'Set includes 10 reusable finger caps',
      'Prevents smudging while henna dries',
      'Ensures rich, dark henna stain results'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'henna-cone-paste-14',
    name: 'Natural Organic Heinna Cone Paste',
    category: 'Henna Essentials',
    subCategory: 'Henna Paste',
    price: 1500,
    priceFormatted: '₦1,500',
    image: '/assets/images/henna_paste_cone.jpg',
    gallery: [
      '/assets/images/henna_paste_cone.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Freshly prepared organic henna cone',
    sizes: ['Single Cone (25g)', 'Pack of 3 Cones'],
    colors: ['Deep Reddish Brown Stain', 'Dark Cherry Stain'],
    description: 'Ready-to-use natural organic henna cone. Prepared with fine henna leaves and essential oils for smooth application and long-lasting dark stain.',
    features: [
      '100% natural organic ingredients',
      'Smooth fine tip cone applicator',
      'Rich long-lasting color payoff for Eid & weddings'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'thrift-socks-pack-11',
    name: 'Thrift Modest Socks — Black, Blue & Brown Pack',
    category: 'Socks & Accessories',
    subCategory: 'Modest Socks',
    price: 1500,
    priceFormatted: '₦1,500',
    priceNote: 'Pack of 3 Pairs',
    image: '/assets/images/thrift_socks_pack.jpg',
    gallery: [
      '/assets/images/thrift_socks_pack.jpg'
    ],
    isNewArrival: true,
    isPopular: true,
    availability: 'In Stock',
    condition: 'Select thrift socks (Sanitized, washed & paired)',
    sizes: ['Free Size (Stretch fit)'],
    colors: ['Black', 'Navy Blue', 'Warm Brown'],
    description: 'Comfy, breathable modest ankle and calf socks pack containing black, navy blue, and warm brown pairs. Ideal for wearing under abayas and long gowns with sandals or shoes.',
    features: [
      'Includes 3 pairs: 1x Black, 1x Navy Blue, 1x Warm Brown',
      'Soft stretch cotton blend fabric',
      'Sanitized, washed and neatly packaged'
    ],
    wholesaleAvailable: true,
  },
  {
    id: 'thrift-tops-gowns-06',
    name: 'Thrift Tops and Tunics',
    category: 'Thrift Tops & Gowns',
    subCategory: 'Modest Tops',
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
  { name: 'All', description: 'Explore our full catalog of affordable modest wear & accessories', count: PRODUCTS.length },
  { name: 'Adults\' Abayas', description: 'Classic thrift abayas & new luxury drops (₦9,000–₦12,000)', count: PRODUCTS.filter(p => p.category === 'Adults\' Abayas').length },
  { name: 'Kids\' Abayas', description: 'Charming modest abayas for young girls (₦6,000)', count: PRODUCTS.filter(p => p.category === 'Kids\' Abayas').length },
  { name: 'Jalabiyas', description: 'Clean white & color jalabias for adults (₦6,000) and kids (₦5,500)', count: PRODUCTS.filter(p => p.category === 'Jalabiyas').length },
  { name: 'Kimonos', description: 'Thrift kinomo sets & chiffon open robes (₦10,000–₦15,000)', count: PRODUCTS.filter(p => p.category === 'Kimonos').length },
  { name: 'Gown Dresses', description: 'Flowing maxi gowns & modest dresses from ₦8,500', count: PRODUCTS.filter(p => p.category === 'Gown Dresses').length },
  { name: 'Henna Essentials', description: 'Heinna design stickers (₦1,000), finger cups (₦1,200), & organic paste (₦1,500)', count: PRODUCTS.filter(p => p.category === 'Henna Essentials').length },
  { name: 'Socks & Accessories', description: 'Quality thrift socks in black, blue & brown (₦1,500 pack)', count: PRODUCTS.filter(p => p.category === 'Socks & Accessories').length },
  { name: 'Thrift Tops & Gowns', description: 'Affordable thrift tops and gowns from ₦2,000', count: PRODUCTS.filter(p => p.category === 'Thrift Tops & Gowns').length },
  { name: 'New Arrivals', description: 'Latest stock arrivals and fresh modesty drops', count: PRODUCTS.filter(p => p.isNewArrival).length },
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
