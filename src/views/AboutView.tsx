import React from 'react';
import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Truck, 
  Store, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Award
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface AboutViewProps {
  onNavigateToShop: () => void;
  onNavigateToWholesale: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateToShop,
  onNavigateToWholesale,
}) => {
  return (
    <div id="about-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="bg-[#F5EFE6] rounded-3xl p-8 sm:p-14 border border-[#EAE2D7]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E2D6C5] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8C6D37]">
            <Sparkles className="w-3.5 h-3.5" />
            Our Story & Values
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
            Modest Elegance, Affordable For Everyone.
          </h1>

          <p className="text-base sm:text-lg text-[#5A544C] leading-relaxed">
            Welcome to Pearls Elegance Thrift Abaya Wears. We are a dedicated modest fashion store based in Ijebu Ode, Ogun State, making graceful abayas, jalabiyas, and modest clothing accessible across Nigeria.
          </p>
        </div>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#8C6D37] font-semibold">
            The Pearls Elegance Journey
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
            Making Modest Luxury Accessible Without the High Price Tag
          </h2>

          <div className="space-y-4 text-sm text-[#5A544C] leading-relaxed">
            <p>
              Modest fashion is about dignity, elegance, and beauty. However, quality abayas and jalabiyas in today&apos;s market are often priced beyond reach for many women, students, and everyday families.
            </p>
            <p>
              At <strong>Pearls Elegance Thrift Abaya Wears</strong>, we bridge this gap by handpicking high-grade thrift abayas, jalabiyas, kimono sets, and modest gowns. We source pieces with rich fabric textures, delicate embroidery, and timeless silhouettes.
            </p>
            <p>
              To ensure our customers feel pampered and confident, every thrift piece is thoroughly inspected, washed, steam-ironed, and neatly packaged before it reaches you. When you unbox your Pearls Elegance package, it is ready to wear immediately.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onNavigateToShop}
              className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#8C6D37] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Message Us Directly</span>
            </a>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#EAE2D7] bg-[#F5EFE6]">
            <img
              src="/assets/images/kinomo_set_mannequin_1789896343549.jpg"
              alt="Pearls Elegance Modest Wear on Mannequin"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center aspect-4/3"
            />
            <div className="p-5 bg-white border-t border-[#EAE2D7]">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1C1917]">
                    Hand-Selected & Washed Quality
                  </h4>
                  <p className="text-xs text-[#6B655D]">
                    Ijebu Ode Store • Nationwide Delivery Across Nigeria
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF0DE] text-[#8C6D37] text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Grade-A Thrift</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Core Commitments */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE2D7] shadow-xs">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#8C6D37] font-semibold">
            What Defines Us
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1C1917] mt-1">
            Our Modest Fashion Commitments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE2D7]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center mb-4 font-bold">
              1
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              Affordability Without Compromise
            </h3>
            <p className="text-xs text-[#5A544C] leading-relaxed">
              We offer thrift tops and gowns from ₦2,000, kiddies sets and adult jalabias from ₦6,000, and elegant abayas from ₦9,000–₦12,000.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE2D7]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center mb-4 font-bold">
              2
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              Ready-to-Wear Cleanliness
            </h3>
            <p className="text-xs text-[#5A544C] leading-relaxed">
              No need to stress over washing first. Our thrift pieces are washed, steam-ironed, and neatly packaged before dispatch.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE2D7]">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center mb-4 font-bold">
              3
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
              Supporting Small Businesses
            </h3>
            <p className="text-xs text-[#5A544C] leading-relaxed">
              We supply retail boutique owners and online vendors across Nigeria with wholesale bales to help them start and scale profitable businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Digital Platform & Engineering Note */}
      <div className="text-center pt-2 pb-4 text-xs text-[#8A847C]">
        <p>
          Pearls Elegance Thrift Abaya Wears • Designed & Engineered by <span className="text-[#1C1917] font-medium">Namaco Technology Nigeria Limited</span>
        </p>
      </div>

    </div>
  );
};
