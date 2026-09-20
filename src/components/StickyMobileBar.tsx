import React from 'react';
import { MessageCircle, ShoppingBag, Grid, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface StickyMobileBarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  inquiryCount: number;
  onOpenInquiryDrawer: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  currentView,
  onNavigate,
  inquiryCount,
  onOpenInquiryDrawer,
}) => {
  return (
    <div 
      id="sticky-mobile-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE2D7] p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Quick Shop Button */}
        <button
          id="mobile-bar-catalog-btn"
          onClick={() => {
            onNavigate('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`p-2.5 rounded-xl flex flex-col items-center justify-center shrink-0 min-w-[58px] transition-colors ${
            currentView === 'shop' 
              ? 'bg-[#F2EBE1] text-[#8C6D37]' 
              : 'text-[#5A544C] hover:bg-[#F2EBE1]'
          }`}
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-semibold mt-0.5">Catalog</span>
        </button>

        {/* Quick Inquiry list with badge */}
        <button
          id="mobile-bar-inquiry-btn"
          onClick={onOpenInquiryDrawer}
          className="relative p-2.5 rounded-xl flex flex-col items-center justify-center shrink-0 min-w-[58px] text-[#5A544C] hover:bg-[#F2EBE1] transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {inquiryCount > 0 && (
            <span className="absolute top-1 right-2.5 w-4 h-4 bg-[#C5A059] text-[#1C1917] text-[10px] font-bold rounded-full flex items-center justify-center">
              {inquiryCount}
            </span>
          )}
          <span className="text-[10px] font-semibold mt-0.5">Inquiry</span>
        </button>

        {/* Primary Sticky WhatsApp Order Button */}
        <a
          id="sticky-whatsapp-order-btn"
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3.5 bg-[#25D366] active:bg-[#20BE5B] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm text-xs text-center"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">Order on WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
