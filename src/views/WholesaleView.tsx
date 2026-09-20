import React, { useState } from 'react';
import { 
  Package, 
  MessageCircle, 
  CheckCircle2, 
  Store, 
  TrendingUp, 
  Truck, 
  ShieldCheck, 
  Send,
  Sparkles,
  Phone
} from 'lucide-react';
import { WholesaleInquiryData } from '../types';
import { getWholesaleWhatsAppUrl } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/products';

export const WholesaleView: React.FC = () => {
  const [formData, setFormData] = useState<WholesaleInquiryData>({
    name: '',
    businessName: '',
    phone: '',
    productsInterested: ['Thrift Abayas', 'Adult Jalabias'],
    quantityNeeded: '',
    deliveryLocation: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const productOptions = [
    'Thrift Abayas',
    'New Arrival Abayas',
    'Adult Jalabias (Clean White & Colors)',
    'Thrift Kinomo with Inner Dress Sets',
    'Kiddies Abaya & Jalabia',
    'Thrift Tops & Gowns',
    'Mixed Modest Wear Selection'
  ];

  const handleProductToggle = (option: string) => {
    if (formData.productsInterested.includes(option)) {
      setFormData({
        ...formData,
        productsInterested: formData.productsInterested.filter((item) => item !== option),
      });
    } else {
      setFormData({
        ...formData,
        productsInterested: [...formData.productsInterested, option],
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWholesaleWhatsAppUrl(formData);
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const directWholesaleUrl = getWholesaleWhatsAppUrl();

  return (
    <div id="wholesale-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Hero Wholesale Banner */}
      <div className="bg-[#1C1917] text-white rounded-3xl p-8 sm:p-12 border border-[#3A3530] shadow-xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#C5A059] text-[#1C1917] text-[10px] uppercase tracking-wider font-bold px-3.5 py-1 rounded-full">
              <Package className="w-3.5 h-3.5" />
              Wholesale & Reseller Inquiries
            </div>

            <h1 
              id="wholesale-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Build Your Collection. Stock Your Store With Modest Fashion.
            </h1>

            <p className="text-sm sm:text-base text-[#D5CEC4] leading-relaxed max-w-2xl">
              Pearls Elegance Thrift Abaya Wears supplies boutique owners, online vendors, and fashion retailers across Nigeria with hand-selected, washed, and steam-ironed thrift abayas, jalabiyas, and modest sets at accessible wholesale rates.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                id="direct-wholesale-whatsapp-btn"
                href={directWholesaleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold px-6 py-3.5 rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                id="wholesale-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-white border border-[#EAE2D7]/30 font-medium px-6 py-3.5 rounded-full transition-all text-xs uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Desk: 0811 244 4087</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="aspect-3/4 rounded-2xl overflow-hidden border border-[#3A3530] shadow-lg">
              <img
                src="/src/assets/images/hero_editorial_mannequin_1789896317613.jpg"
                alt="Wholesale Modest Collection"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Target Buyer Categories & Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#EAE2D7] shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center mb-4">
            <Store className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
            Boutique Owners
          </h3>
          <p className="text-xs text-[#5A544C] leading-relaxed">
            Expand your physical store inventory with hand-selected, pre-ironed abayas and modest dresses that your local customers will love.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#EAE2D7] shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
            Online & IG Resellers
          </h3>
          <p className="text-xs text-[#5A544C] leading-relaxed">
            Stock your online fashion boutique or status catalog with affordable modest pieces and enjoy fast inventory turnaround.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#EAE2D7] shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center mb-4">
            <Truck className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
            Delivery Across Nigeria
          </h3>
          <p className="text-xs text-[#5A544C] leading-relaxed">
            Reliable dispatch from our store in Ijebu Ode, Ogun State, delivering to customers and businesses across all states in Nigeria.
          </p>
        </div>
      </div>

      {/* Wholesale Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Form Column */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE2D7] shadow-xs">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#8C6D37] font-semibold">
              Reseller & Bulk Inquiries
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
              Wholesale Inquiry Form
            </h2>
            <p className="text-xs text-[#6B655D] mt-1">
              Complete the details below to message us directly on WhatsApp with your wholesale requirements.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CFC4] rounded-xl text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#8C6D37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Store / Brand name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CFC4] rounded-xl text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#8C6D37]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0811 244 4087"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CFC4] rounded-xl text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#8C6D37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                  Quantity Needed
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10 pieces, 20 pieces, bulk pack"
                  value={formData.quantityNeeded}
                  onChange={(e) => setFormData({ ...formData, quantityNeeded: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CFC4] rounded-xl text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#8C6D37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-2">
                Products Interested In:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productOptions.map((opt) => {
                  const isChecked = formData.productsInterested.includes(opt);
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => handleProductToggle(opt)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-colors ${
                        isChecked 
                          ? 'bg-[#FAF0DE] border-[#C5A059] text-[#8C6D37] font-semibold' 
                          : 'bg-[#FAF8F5] border-[#EAE2D7] text-[#5A544C] hover:bg-[#F2EBE1]'
                      }`}
                    >
                      <span>{opt}</span>
                      {isChecked && <CheckCircle2 className="w-4 h-4 text-[#8C6D37]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                Message / Specifications
              </label>
              <textarea
                rows={3}
                placeholder="Let us know any specific styles, sizes, or delivery destination..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D9CFC4] rounded-xl text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#8C6D37]"
              ></textarea>
            </div>

            <button
              id="submit-wholesale-inquiry-btn"
              type="submit"
              className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all text-sm text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Wholesale Inquiry</span>
            </button>

            {submitted && (
              <p className="text-xs text-[#2E7D32] text-center font-medium">
                Opening WhatsApp with your filled inquiry details...
              </p>
            )}
          </form>
        </div>

        {/* Wholesale FAQ & Trust Notes */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#F5EFE6] p-6 rounded-3xl border border-[#E2D6C5]">
            <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              How Wholesale Inquiries Work
            </h3>
            
            <ol className="space-y-3.5 text-xs text-[#5A544C]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1C1917] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong className="text-[#1C1917] block">Send Your Inquiry:</strong>
                  Select the types and quantities of modest pieces you would like to stock.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1C1917] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <strong className="text-[#1C1917] block">Review Photos & Available Pieces:</strong>
                  We send photos of current stock matching your request.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1C1917] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <strong className="text-[#1C1917] block">Clean & Neatly Packed:</strong>
                  Every item is checked, washed, pressed, and packed before dispatch.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1C1917] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <strong className="text-[#1C1917] block">Delivery / In-Store Pickup:</strong>
                  Pickup in our Ijebu Ode store or receive reliable delivery across Nigeria.
                </div>
              </li>
            </ol>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#EAE2D7] text-xs text-[#5A544C] space-y-2">
            <h4 className="font-bold text-[#1C1917]">Physical Store in Ijebu Ode</h4>
            <p>
              You or your representative in Ogun State can also visit our physical store at Ibadan Garage Side, Ijebu Ode to inspect items in person.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
