import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Truck, 
  Navigation, 
  Send,
  Sparkles,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const ContactView: React.FC = () => {
  const [customerMessage, setCustomerMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('Store Visit / Directions');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const fullText = `Hello Pearls Elegance, regarding [${inquiryType}]: ${customerMessage || 'I would like to inquire about your store in Ijebu Ode.'}`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="contact-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#F5EFE6] rounded-3xl p-8 sm:p-12 border border-[#EAE2D7]">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#8C6D37] font-semibold">
            We are Here in Ijebu Ode
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-1 mb-3">
            Contact & Store Location
          </h1>
          <p className="text-sm sm:text-base text-[#5A544C] leading-relaxed">
            Visit our physical storefront at Ibadan Garage Side in Ijebu Ode, Ogun State, or chat with us directly on WhatsApp for orders, video previews, and nationwide waybill dispatch.
          </p>
        </div>
      </div>

      {/* Main Grid: Contact Cards & Quick Inquiry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Card 1: Store Location */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE2D7] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#8A847C] font-semibold">
                Storefront Address
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mt-1">
                Pearls Elegance Thrift Abaya Wears
              </h3>
              <p className="text-sm text-[#4A453E] mt-1 leading-relaxed">
                Ibadan Garage Side, Ijebu Ode, 120101, Ogun State, Nigeria
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                id="contact-get-directions-btn"
                href="https://www.google.com/maps/search/?api=1&query=Ibadan+Garage+Side+Ijebu+Ode+Ogun+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1C1917] hover:bg-[#8C6D37] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors uppercase tracking-wider"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Google Maps</span>
              </a>

              <a
                id="contact-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#D9CFC4] text-[#1C1917] text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#F2EBE1] transition-colors uppercase tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C6D37]" />
                <span>Call 0811 244 4087</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp & Direct Lines */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE2D7] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-[#25D366]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#8A847C] font-semibold">
                Instant Chat & Order Desk
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mt-1">
                WhatsApp Ordering Support
              </h3>
              <p className="text-sm text-[#5A544C] mt-1">
                Send photos, check fabric colors, get video previews, and track your waybill directly on WhatsApp.
              </p>
            </div>

            <a
              id="contact-whatsapp-chat-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-2xl shadow-md transition-all uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp: 0811 244 4087</span>
            </a>
          </div>

          {/* Card 3: Hours & Delivery */}
          <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#EAE2D7] space-y-3 text-xs text-[#5A544C]">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#8C6D37] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] block">Store Working Hours:</strong>
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Truck className="w-4 h-4 text-[#8C6D37] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1C1917] block">Nationwide Delivery:</strong>
                <span>{BUSINESS_INFO.deliveryNote}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Quick WhatsApp Message Composer & Quality Assurance */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE2D7] shadow-xs">
            <span className="text-xs uppercase tracking-widest text-[#8C6D37] font-semibold">
              Instant Inquiry
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917] mt-1 mb-2">
              Send a Quick Message
            </h3>
            <p className="text-xs text-[#6B655D] mb-6">
              Select your inquiry type and compose your message to send directly to Pearls Elegance on WhatsApp.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                  What is your inquiry about?
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CFC4] rounded-xl text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#8C6D37]"
                >
                  <option value="Store Visit / Directions">Store Visit & Directions in Ijebu Ode</option>
                  <option value="Checking Specific Abaya Availability">Checking Specific Abaya Availability</option>
                  <option value="Wholesale / Bulk Reseller Order">Wholesale / Bulk Reseller Order</option>
                  <option value="Nationwide Delivery & Waybill Cost">Nationwide Delivery & Waybill Cost</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g. Hello, I would like to know if you have black kimono sets in size 56 available for delivery to Lagos..."
                  value={customerMessage}
                  onChange={(e) => setCustomerMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CFC4] rounded-xl text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#8C6D37]"
                ></textarea>
              </div>

              <button
                id="send-quick-message-btn"
                type="submit"
                className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all text-xs sm:text-sm text-center uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Open Chat on WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Direct Ordering & Inspection Assurance */}
          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#EAE2D7]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D37] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Customer Care</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              Fast, Responsive & Personal Service
            </h4>
            <p className="text-xs text-[#5A544C] leading-relaxed mb-4">
              We respond promptly on WhatsApp with fabric details, precise measurements, close-up photos, and dispatch tracking details.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#EAE2D7] text-xs">
              <div className="flex items-center gap-2 text-[#1C1917] font-medium">
                <PackageCheck className="w-4 h-4 text-[#8C6D37]" />
                <span>Washed & Steamed</span>
              </div>
              <div className="flex items-center gap-2 text-[#1C1917] font-medium">
                <Truck className="w-4 h-4 text-[#8C6D37]" />
                <span>Nationwide Waybill</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
