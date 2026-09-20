import { Product, WholesaleInquiryData, InquiryItem } from '../types';
import { BUSINESS_INFO } from '../data/products';

const WHATSAPP_BASE = `https://wa.me/${BUSINESS_INFO.whatsappRaw}`;

/**
 * Creates the exact product-specific WhatsApp order message:
 * 
 * Hello Pearls Elegance,
 * 
 * I’m interested in:
 * [Product Name] — [PriceFormatted]
 * Size: [selected size]
 * 
 * Is this item still available?
 * 
 * Thank you.
 */
export function getProductWhatsAppUrl(
  product: Product,
  selectedSize?: string,
  selectedColor?: string
): string {
  let message = `Hello Pearls Elegance,\n\nI’m interested in:\n${product.name} — ${product.priceFormatted}`;
  
  if (selectedSize) {
    message += `\nSize: ${selectedSize}`;
  }
  if (selectedColor) {
    message += `\nColor: ${selectedColor}`;
  }
  
  message += `\n\nIs this item still available?\n\nThank you.`;
  
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a WhatsApp URL for wholesale and reseller inquiries
 */
export function getWholesaleWhatsAppUrl(data?: WholesaleInquiryData): string {
  if (!data) {
    const message = `Hello Pearls Elegance,\n\nI am interested in wholesale/bulk purchase of abayas, jalabiyas, and modest wears for my business. Please share your wholesale price list and availability.\n\nThank you.`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
  }

  const itemsList = data.productsInterested.length > 0 
    ? data.productsInterested.join(', ') 
    : 'Abayas and modest wear items';

  const message = `*WHOLESALE / RESELLER INQUIRY*\n\nName: ${data.name || 'Reseller'}\nBusiness Name: ${data.businessName || 'Boutique / Store'}\nPhone: ${data.phone}\nProducts Interested: ${itemsList}\nEstimated Quantity: ${data.quantityNeeded || 'Bulk'}\nDelivery Destination: ${data.deliveryLocation || 'Nigeria'}\nNote: ${data.message || 'Please send bulk pricing and shipping info.'}\n\nThank you.`;

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a combined WhatsApp message for multiple items in an inquiry list:
 * 
 * Hello Pearls Elegance,
 * 
 * I’m interested in the following items:
 * 
 * 1. [Product Name] — ₦[Price]
 * 2. [Product Name] — ₦[Price]
 * 
 * Please let me know which items are currently available.
 * 
 * Thank you.
 */
export function getCombinedInquiryWhatsAppUrl(items: InquiryItem[]): string {
  if (items.length === 0) {
    return `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello Pearls Elegance,\n\nI'm interested in learning more about your modest wear collection.\n\nThank you.")}`;
  }

  let text = `Hello Pearls Elegance,\n\nI’m interested in the following items:\n\n`;

  items.forEach((item, index) => {
    const qtyText = item.quantity > 1 ? ` (Qty: ${item.quantity})` : '';
    const sizeColorDetails: string[] = [];
    if (item.selectedSize) sizeColorDetails.push(`Size: ${item.selectedSize}`);
    if (item.selectedColor) sizeColorDetails.push(`Color: ${item.selectedColor}`);
    const detailsStr = sizeColorDetails.length > 0 ? ` [${sizeColorDetails.join(', ')}]` : '';

    text += `${index + 1}. ${item.product.name}${qtyText} — ${item.product.priceFormatted}${detailsStr}\n`;
  });

  text += `\nPlease let me know which items are currently available.\n\nThank you.`;

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}

/**
 * Creates a general question / store visit WhatsApp link
 */
export function getGeneralWhatsAppUrl(subject?: string): string {
  const text = subject 
    ? `Hello Pearls Elegance,\n\nI would like to inquire about ${subject}.\n\nThank you.`
    : `Hello Pearls Elegance,\n\nI would like to know more about your available thrift abayas and store location in Ijebu Ode.\n\nThank you.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
}
