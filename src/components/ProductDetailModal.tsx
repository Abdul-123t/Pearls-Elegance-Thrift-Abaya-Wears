import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageCircle, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Share2,
  Plus
} from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onNavigateToWholesale: () => void;
  isInInquiryList?: boolean;
  onToggleInquiryList?: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onNavigateToWholesale,
  isInInquiryList = false,
  onToggleInquiryList,
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || '');
  const [copied, setCopied] = useState(false);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Sync selected image when product changes
  useEffect(() => {
    setSelectedImage(product.image);
    setSelectedSize(product.sizes[0] || '');
    setSelectedColor(product.colors[0] || '');
  }, [product]);

  const images = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.image];

  const whatsappUrl = getProductWhatsAppUrl(product, selectedSize, selectedColor);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at Pearls Elegance Thrift Abaya Wears for ${product.priceFormatted}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      id="product-detail-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div 
        id="modal-content-container"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D7] my-auto"
      >
        {/* Close Button */}
        <button
          id="close-detail-modal-btn"
          onClick={onClose}
          aria-label="Close details modal"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#8C6D37]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery */}
          <div className="p-6 sm:p-8 bg-[#F5EFE6] flex flex-col justify-between">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-white shadow-xs border border-[#EAE2D7]">
              <img
                src={selectedImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNewArrival && (
                  <span className="bg-[#1C1917]/90 backdrop-blur-xs text-[#FAF8F5] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    New Arrival
                  </span>
                )}
                <span className="bg-white/90 backdrop-blur-xs text-[#8C6D37] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-xs border border-[#EAE2D7]">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center gap-2.5 mt-4 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    id={`thumb-btn-${idx}`}
                    onClick={() => setSelectedImage(img)}
                    aria-label={`View image thumbnail ${idx + 1}`}
                    className={`relative w-16 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImage === img 
                        ? 'border-[#C5A059] scale-102 shadow-xs' 
                        : 'border-[#D9CFC4] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt="" 
                      referrerPolicy="no-referrer" 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quick condition guarantee */}
            <div className="mt-4 p-3.5 bg-white/90 rounded-xl border border-[#EAE2D7] text-xs text-[#5A544C] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#8C6D37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1C1917] block">Handpicked & Cleaned Guarantee</span>
                <span className="text-[11px] leading-relaxed">Each thrift piece is inspected, washed, pressed, and neatly packed before delivery.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] uppercase tracking-widest text-[#8C6D37] font-semibold">
                  {product.subCategory || product.category}
                </span>
                <span className="text-[10px] font-medium tracking-wide px-3 py-1 rounded-full bg-[#EAE2D7] text-[#1C1917] border border-[#D5C6B1]">
                  {product.availability}
                </span>
              </div>

              {/* Title */}
              <h2 id="modal-product-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mb-2 leading-tight tracking-tight">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-[#EAE2D7]">
                <span id="modal-product-price" className="text-3xl font-serif font-bold text-[#1C1917]">
                  {product.priceFormatted}
                </span>
                {product.priceNote && (
                  <span className="text-xs text-[#8C6D37] font-medium">
                    ({product.priceNote})
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#5A544C] leading-relaxed mb-6 font-normal">
                {product.description}
              </p>

              {/* Item Condition Details */}
              <div className="mb-5 p-3.5 bg-[#F5EFE6] rounded-xl border border-[#E8DDCB]">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8C6D37] block mb-1">
                  Garment Presentation & Condition
                </span>
                <p className="text-xs font-medium text-[#1C1917]">
                  {product.condition}
                </p>
              </div>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4">
                  <label className="block text-[11px] uppercase tracking-widest font-semibold text-[#6B655D] mb-2">
                    Size / Fit: <span className="text-[#1C1917] font-bold">{selectedSize}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        id={`size-select-${sz.replace(/\s+/g, '-')}`}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                          selectedSize === sz
                            ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-xs'
                            : 'bg-white text-[#4A453E] border-[#D9CFC4] hover:border-[#8C6D37]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <label className="block text-[11px] uppercase tracking-widest font-semibold text-[#6B655D] mb-2">
                    Color: <span className="text-[#1C1917] font-bold">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((col) => (
                      <button
                        key={col}
                        id={`color-select-${col.replace(/\s+/g, '-')}`}
                        onClick={() => setSelectedColor(col)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                          selectedColor === col
                            ? 'bg-[#FAF0DE] text-[#8C6D37] border-[#C5A059] font-bold'
                            : 'bg-white text-[#5A544C] border-[#D9CFC4] hover:border-[#C5A059]'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#EAE2D7] space-y-3">
              
              {/* Primary WhatsApp Order Button */}
              <a
                id="modal-order-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold rounded-xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm tracking-wider uppercase text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Order on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                {onToggleInquiryList && (
                  <button
                    id="modal-add-inquiry-btn"
                    onClick={() => onToggleInquiryList(product)}
                    className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors uppercase tracking-wider ${
                      isInInquiryList 
                        ? 'bg-[#EAE2D7] border-[#C5B7A5] text-[#1C1917]' 
                        : 'bg-white border-[#D9CFC4] text-[#1C1917] hover:bg-[#F5EFE6]'
                    }`}
                  >
                    {isInInquiryList ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span>In Inquiry Bag</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Inquiry</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  id="modal-share-btn"
                  onClick={handleShare}
                  className="w-full py-2.5 px-3 bg-white border border-[#D9CFC4] text-[#1C1917] rounded-xl text-xs font-semibold hover:bg-[#F5EFE6] transition-colors flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#8C6D37]" />
                  <span>{copied ? 'Link Copied!' : 'Share Piece'}</span>
                </button>
              </div>

              {/* Wholesale Link */}
              <div className="pt-2 text-center">
                <button
                  id="modal-wholesale-link-btn"
                  onClick={() => {
                    onClose();
                    onNavigateToWholesale();
                  }}
                  className="text-xs text-[#8C6D37] hover:text-[#1C1917] font-semibold underline underline-offset-4"
                >
                  Buying for resale? Enquire about Wholesale Rates →
                </button>
              </div>

              {/* Location Note */}
              <div className="text-[11px] text-[#8A847C] flex items-center justify-center gap-1.5 text-center">
                <Truck className="w-3.5 h-3.5 text-[#8C6D37]" />
                <span>Store in Ijebu Ode • Delivering across Nigeria</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
