import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Truck, 
  ArrowUpRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className="bg-[#161412] text-[#FAF8F5] pt-16 sm:pt-20 pb-24 sm:pb-16 border-t border-[#26221F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Brand Intro Banner */}
        <div className="border-b border-[#2A2622] pb-12 mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#C5A059] font-medium block">
                Modest Fashion House • Ijebu Ode
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Pearls Elegance <span className="text-[#C5A059] font-normal italic">Thrift Abayas</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A89E91] leading-relaxed font-normal">
                Carefully selected, washed, and pressed modest wear—bringing affordable elegance, dignity, and grace to everyday wardrobes across Nigeria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => handleLinkClick('shop')}
                className="px-6 py-3.5 bg-white text-[#1C1917] hover:bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-full transition-all text-center"
              >
                Browse Collection
              </button>
              <a
                id="footer-header-whatsapp-cta"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16">
          
          {/* Column 1: Brand Essence */}
          <div className="space-y-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              Pearls Elegance
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#8C6D37] font-semibold block">
              Thrift Abaya Wears
            </span>
            <p className="text-xs sm:text-sm text-[#A89E91] leading-relaxed pt-1">
              Grade-A thrift abayas, jalabiyas, and modest ensembles in Ijebu Ode, Ogun State. Every piece is cleaned, steam-pressed, and packaged for immediate wear.
            </p>
          </div>

          {/* Column 2: Collections */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D5CEC4]">
              <li>
                <button 
                  onClick={() => handleLinkClick('shop')} 
                  className="hover:text-white transition-colors text-left"
                >
                  All Modest Wears
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('new-arrivals')} 
                  className="hover:text-white transition-colors text-left"
                >
                  New Arrivals Drop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('shop')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Thrift Abayas (From ₦9,000)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('shop')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Adult Jalabias (₦6,000)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('shop')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Kiddies Abaya & Jalabia (₦6,000)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('shop')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Thrift Tops & Gowns (From ₦2,000)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Business & Reseller */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D5CEC4]">
              <li>
                <button 
                  onClick={() => handleLinkClick('wholesale')} 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Wholesale & Reseller Packs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="hover:text-white transition-colors text-left"
                >
                  About Pearls Elegance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Store Location & Directions
                </button>
              </li>
              <li className="pt-2 text-xs text-[#8C8275] leading-relaxed">
                Wholesale bales and hand-selected bundles available for boutique retailers and online vendors.
              </li>
            </ul>
          </div>

          {/* Column 4: Store & Delivery Details */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
              Store & Orders
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#D5CEC4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href={BUSINESS_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  WhatsApp: {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-[#8C8275]">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#8C8275]">
                <Truck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Nationwide delivery via motor park waybills & couriers</span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean, Refined Bottom Closing Frame (Exact requested content & hierarchy) */}
        <div className="pt-10 border-t border-[#26221F] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C8275] text-center md:text-left font-normal">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p className="text-[#A89E91]">
              © {currentYear} Pearls Elegance Thrift Abaya Wears. All rights reserved.
            </p>
            <p className="text-[#7A7268]">
              Designed & Engineered by <span className="text-[#C5A059] font-medium">Namaco Technology Nigeria Limited</span>.
            </p>
          </div>

          <p className="text-[#7A7268]">
            Ijebu Ode, Ogun State, Nigeria
          </p>
        </div>

      </div>
    </footer>
  );
};
