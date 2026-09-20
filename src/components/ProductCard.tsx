import React from 'react';
import { MessageCircle, Eye, Sparkles, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isInInquiryList?: boolean;
  onToggleInquiryList?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  isInInquiryList = false,
  onToggleInquiryList,
}) => {
  const whatsappUrl = getProductWhatsAppUrl(product);

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-xl border border-[#EAE2D7]/80 hover:border-[#C5A059]/60 hover:shadow-lg transition-all duration-500 flex flex-col justify-between overflow-hidden"
    >
      {/* Product Image Area */}
      <div 
        onClick={() => onSelectProduct(product)}
        className="relative aspect-3/4 bg-[#F5EFE6] overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Minimal Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
          {product.isNewArrival && (
            <span className="inline-flex items-center gap-1 bg-[#1C1917]/90 backdrop-blur-xs text-[#FAF8F5] text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full shadow-xs">
              <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
              New Arrival
            </span>
          )}
        </div>

        {/* Availability Badge */}
        <div className="absolute top-3.5 right-3.5">
          <span className="text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#1C1917] border border-[#EAE2D7] shadow-xs">
            {product.availability}
          </span>
        </div>

        {/* Editorial Quick Action Overlay */}
        <div className="absolute inset-0 bg-[#1C1917]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 justify-center">
          <button
            id={`quick-view-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="w-full bg-[#FAF8F5]/95 backdrop-blur-md text-[#1C1917] hover:bg-white text-xs font-semibold py-2.5 px-4 rounded-full shadow-md flex items-center justify-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>View Piece</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Subtle Category */}
          <div className="text-[10px] uppercase tracking-widest text-[#8C6D37] font-semibold mb-1">
            {product.category}
          </div>

          {/* Product Title */}
          <h3 
            id={`product-title-${product.id}`}
            onClick={() => onSelectProduct(product)}
            className="font-serif text-lg font-bold text-[#1C1917] hover:text-[#8C6D37] transition-colors cursor-pointer line-clamp-1 mb-1 tracking-tight"
          >
            {product.name}
          </h3>

          {/* Clean Subtext */}
          <p className="text-xs text-[#6B655D] line-clamp-2 mb-3 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        <div>
          {/* Understated Price */}
          <div className="pt-2.5 border-t border-[#F5EFE6] mb-3.5 flex items-baseline justify-between">
            <span className="text-lg sm:text-xl font-bold font-serif text-[#1C1917]">
              {product.priceFormatted}
            </span>
            {product.priceNote && (
              <span className="text-[10px] text-[#8C6D37] font-medium truncate max-w-[120px]">
                {product.priceNote}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              id={`view-details-btn-${product.id}`}
              onClick={() => onSelectProduct(product)}
              className="w-full py-2.5 px-2 rounded-xl border border-[#D9CFC4] text-xs font-semibold text-[#1C1917] hover:bg-[#FAF8F5] transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Details</span>
            </button>

            <a
              id={`order-whatsapp-btn-${product.id}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-2 bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
              title={`Order ${product.name} on WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="truncate">Order on WhatsApp</span>
            </a>
          </div>

          {onToggleInquiryList && (
            <button
              id={`add-inquiry-btn-${product.id}`}
              onClick={() => onToggleInquiryList(product)}
              className={`w-full mt-2 py-2 text-[11px] font-medium rounded-lg flex items-center justify-center gap-1.5 transition-colors border ${
                isInInquiryList 
                  ? 'bg-[#EAE2D7] border-[#D5C6B1] text-[#1C1917]' 
                  : 'bg-transparent border-transparent text-[#6B655D] hover:bg-[#F5EFE6] hover:text-[#1C1917]'
              }`}
            >
              {isInInquiryList ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span>In Inquiry Bag</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 text-[#8C6D37]" />
                  <span>Add to Inquiry Basket</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
