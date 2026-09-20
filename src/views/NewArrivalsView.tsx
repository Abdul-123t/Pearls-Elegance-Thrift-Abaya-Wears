import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { BUSINESS_INFO } from '../data/products';

interface NewArrivalsViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  inquiryListIds: string[];
  onToggleInquiryList: (product: Product) => void;
  onNavigateToShop: () => void;
}

export const NewArrivalsView: React.FC<NewArrivalsViewProps> = ({
  products,
  onSelectProduct,
  inquiryListIds,
  onToggleInquiryList,
  onNavigateToShop,
}) => {
  const newArrivals = products.filter((p) => p.isNewArrival);

  return (
    <div id="new-arrivals-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-[#1C1917] to-[#2B2724] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="max-w-2xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#C5A059] text-[#1C1917] text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Freshly Added
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            New Arrival Modest Wear Collection
          </h1>

          <p className="text-sm sm:text-base text-[#D5CEC4] leading-relaxed">
            Fresh shipment drop at Pearls Elegance! Discover newly arrived women&apos;s abayas around ₦12,000, comfortable adult jalabias at ₦6,000, and elegant thrift kinomo 2-piece sets.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#EAE2D7]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Washed & Steam-Pressed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Limited Piece Quantities</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Fast WhatsApp Confirmation</span>
            </div>
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12 font-serif text-[180px] font-bold">
          NEW
        </div>
      </div>

      {/* Grid of New Arrivals */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8C6D37] font-semibold">
              Current Drop
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Latest Pieces Available Now
            </h2>
          </div>

          <a
            id="new-arrivals-custom-request-btn"
            href="https://wa.me/2348112444087?text=Hello%20Pearls%20Elegance%2C%20what%20are%20the%20latest%20new%20arrivals%20today%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#1C1917] hover:text-[#8C6D37]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Ask for Video Previews on WhatsApp →</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              isInInquiryList={inquiryListIds.includes(product.id)}
              onToggleInquiryList={onToggleInquiryList}
            />
          ))}
        </div>
      </div>

      {/* Stock Notice & Updates */}
      <div className="bg-[#FAF0DE] border border-[#E8D4B0] p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold text-[#1C1917]">
            Thrift Inventory Moves Fast!
          </h3>
          <p className="text-xs sm:text-sm text-[#5A544C] max-w-xl">
            Because our thrift abayas and jalabiyas are unique Grade-A single pieces, high-demand designs sell out quickly. Message our WhatsApp number immediately when you spot your favorite design.
          </p>
        </div>

        <a
          id="instant-whatsapp-drop-btn"
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-md transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Message on WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
