import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  Search
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  inquiryCount: number;
  onOpenInquiryDrawer: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  inquiryCount,
  onOpenInquiryDrawer,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  interface NavLinkItem {
    id: string;
    label: string;
    badge?: string;
  }

  const navLinks: NavLinkItem[] = [
    { id: 'shop', label: 'Shop' },
    { id: 'new-arrivals', label: 'New Arrivals', badge: 'New' },
    { id: 'wholesale', label: 'Wholesale' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-header" 
      className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE2D7] shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left group focus:outline-none py-1"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#8C6D37] transition-colors leading-none">
                Pearls Elegance
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C5A059] inline-block mb-1"></span>
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#6B655D] font-medium mt-1">
              Thrift Abaya Wears
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-sm font-medium transition-colors py-2 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#1C1917] font-semibold' 
                      : 'text-[#5A544C] hover:text-[#1C1917]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="bg-[#FAF0DE] text-[#8C6D37] border border-[#E8D4B0] text-[10px] px-1.5 py-0.2 rounded-full font-semibold">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Search, Inquiry Bag, WhatsApp CTA, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="search-trigger-btn"
              onClick={onOpenSearch}
              aria-label="Search catalog"
              className="p-2.5 rounded-full text-[#4A453E] hover:bg-[#F2EBE1] hover:text-[#1C1917] transition-colors"
              title="Search collection"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="inquiry-bag-btn"
              onClick={onOpenInquiryDrawer}
              aria-label="View Inquiry List"
              className="relative p-2.5 rounded-full text-[#4A453E] hover:bg-[#F2EBE1] hover:text-[#1C1917] transition-colors"
              title="Inquiry List"
            >
              <ShoppingBag className="w-5 h-5" />
              {inquiryCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-[#C5A059] text-[#1C1917] text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-[#FAF8F5]">
                  {inquiryCount}
                </span>
              )}
            </button>

            <a
              id="whatsapp-header-cta"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xs transition-all hover:shadow-md uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2.5 rounded-xl text-[#1C1917] hover:bg-[#F2EBE1] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer" 
          className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE2D7] px-4 pt-3 pb-6 space-y-2 shadow-lg"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-[#F2EBE1] text-[#1C1917] font-semibold border-l-4 border-[#C5A059]' 
                      : 'text-[#4A453E] hover:bg-[#F7F3EE]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="bg-[#FAF0DE] text-[#8C6D37] border border-[#E8D4B0] text-xs px-2 py-0.5 rounded-full font-semibold">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-[#EAE2D7] flex flex-col gap-3">
            <a
              id="mobile-whatsapp-direct"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#25D366] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs uppercase tracking-wider text-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat / Order on WhatsApp</span>
            </a>

            <a
              id="mobile-phone-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 px-4 bg-white border border-[#D9CFC4] text-[#1C1917] font-medium rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              <Phone className="w-4 h-4 text-[#8C6D37]" />
              <span>Call Store: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
