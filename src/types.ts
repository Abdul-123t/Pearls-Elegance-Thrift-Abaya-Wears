export type ProductCategory =
  | 'All'
  | 'Adults\' Abayas'
  | 'Kids\' Abayas'
  | 'Jalabiyas'
  | 'Kimonos'
  | 'Gown Dresses'
  | 'Henna Essentials'
  | 'Socks & Accessories'
  | 'Thrift Tops & Gowns'
  | 'Abayas'
  | 'Kinomo'
  | 'Dresses'
  | 'Kiddies Wear'
  | 'New Arrivals'
  | 'Wholesale / Bulk';

export type ProductAvailability = 'In Stock' | 'Few Pieces Left' | 'Sold Out';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  price: number;
  priceFormatted: string;
  priceNote?: string;
  image: string;
  gallery?: string[];
  isNewArrival?: boolean;
  isPopular?: boolean;
  isUnlisted?: boolean;
  availability: ProductAvailability;
  condition: string;
  sizes: string[];
  colors: string[];
  description: string;
  features: string[];
  wholesaleAvailable: boolean;
}

export interface WholesaleInquiryData {
  name: string;
  businessName: string;
  phone: string;
  productsInterested: string[];
  quantityNeeded: string;
  deliveryLocation: string;
  message: string;
}

export interface InquiryItem {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
}
