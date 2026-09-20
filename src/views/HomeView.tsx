import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  ShoppingBag, 
  Truck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  PackageCheck,
  Percent
} from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from '../components/ProductCard';
import { BUSINESS_INFO } from '../data/products';

interface HomeViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigate: (view: string) => void;
  onSelectCategory: (category: ProductCategory) => void;
  inquiryListIds: string[];
  onToggleInquiryList: (product: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  onSelectProduct,
  onNavigate,
  onSelectCategory,
  inquiryListIds,
  onToggleInquiryList,
}) => {
  const newArrivals = products.filter((p) => p.isNewArrival);
  const featuredProducts = products.slice(0, 6);

  const categoryVisuals = [
    {
      name: 'Abayas',
      subtitle: 'From ₦9,000',
      tag: 'Grade-A Thrift & New Drops',
      cat: 'Abayas',
      image: '/assets/images/classic_abaya_mannequin_1789896383443.jpg'
    },
    {
      name: 'Jalabiyas',
      subtitle: 'From ₦6,000',
      tag: 'Clean Whites & Colored',
      cat: 'Jalabiyas',
      image: '/assets/images/white_jalabia_mannequin_1789896330008.jpg'
    },
    {
      name: 'Kinomo Sets',
      subtitle: '₦10,000–₦15,000',
      tag: '2-Piece with Inner Dress',
      cat: 'Kinomo',
      image: '/assets/images/kinomo_set_mannequin_1789896343549.jpg'
    },
    {
      name: 'Kiddies Wear',
      subtitle: 'From ₦6,000',
      tag: 'Modest Kids Styles',
      cat: 'Kiddies Wear',
      image: '/assets/images/kiddies_abaya_mannequin_1789896358376.jpg'
    },
    {
      name: 'Tops & Gowns',
      subtitle: 'From ₦2,000',
      tag: 'Everyday Essentials',
      cat: 'Thrift Tops & Gowns',
      image: '/assets/images/thrift_gown_mannequin_1789896370138.jpg'
    },
    {
      name: 'Wholesale & Resale',
      subtitle: 'Bulk Purchase Packages',
      tag: 'For Vendors & Boutiques',
      cat: 'Wholesale / Bulk',
      image: '/assets/images/hero_editorial_mannequin_1789896317613.jpg'
    }
  ];

  const benefits = [
    {
      icon: <Percent className="w-5 h-5 text-[#8C6D37]" />,
      title: 'Affordable Modest Fashion',
      description: 'Elegant abayas, jalabiyas, and modest gowns starting from ₦2,000, making modest elegance accessible to everyone.'
    },
    {
      icon: <PackageCheck className="w-5 h-5 text-[#8C6D37]" />,
      title: 'Hand-Selected Quality Thrift',
      description: 'Each thrift piece is individually inspected for beauty, fabric integrity, and authentic modest design.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#8C6D37]" />,
      title: 'Washed, Ironed & Neatly Packed',
      description: 'Ready-to-wear convenience. Every piece arrives clean, steam-ironed, and carefully packaged.'
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#8C6D37]" />,
      title: 'Retail & Wholesale Purchasing',
      description: 'Shop single favorite pieces or place bulk purchase orders for boutique owners and resellers.'
    },
    {
      icon: <Truck className="w-5 h-5 text-[#8C6D37]" />,
      title: 'Delivering Across Nigeria',
      description: 'Reliable delivery and waybill dispatch from our physical store in Ijebu Ode to customers across Nigeria.'
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#8C6D37]" />,
      title: 'Direct WhatsApp Ordering',
      description: 'Instant photo inquiry, fast replies, personalized sizing assistance, and direct communication.'
    },
  ];

  return (
    <div id="home-view" className="space-y-16 sm:space-y-24 pb-12">
      
      {/* 1. HERO SECTION (Editorial Fashion Campaign Layout) */}
      <section 
        id="hero-section" 
        className="relative bg-[#FAF8F5] pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-[#EAE2D7] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Editorial Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C6D37]">
                  PEARLS ELEGANCE • MODEST WEAR • IJEBU ODE
                </span>
              </div>

              {/* Exact Main Headline */}
              <h1 
                id="hero-headline"
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.12]"
              >
                Elegance, <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#8C6D37]">Within Reach.</span>
              </h1>

              {/* Exact Supporting Statement */}
              <p 
                id="hero-supporting-text"
                className="text-base sm:text-lg text-[#5A544C] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Discover affordable thrift abayas, jalabiyas and modest wear, carefully selected for everyday elegance.
              </p>

              {/* CTAs: Primary = Shop New Arrivals, Secondary = Order on WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  id="hero-primary-shop-cta"
                  onClick={() => {
                    onNavigate('new-arrivals');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#8C6D37] text-white font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-md transition-all duration-300 group"
                >
                  <span>Shop New Arrivals</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  id="hero-whatsapp-order-cta"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold text-xs tracking-wider uppercase px-7 py-4 rounded-full shadow-md transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Trust/Location line */}
              <div className="pt-6 border-t border-[#EAE2D7] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-[#6B655D]">
                <div className="flex items-center gap-1.5 font-medium text-[#1C1917]">
                  <MapPin className="w-4 h-4 text-[#8C6D37]" />
                  <span>Based in Ijebu Ode, Ogun State • Serving customers across Nigeria</span>
                </div>
                <span className="hidden sm:inline text-[#D9CFC4]">|</span>
                <div className="flex items-center gap-1.5 text-[#5A544C]">
                  <ShieldCheck className="w-4 h-4 text-[#8C6D37]" />
                  <span>Handpicked & Ready to Wear</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Editorial Mannequin Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Editorial Frame */}
                <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D7] bg-[#F5EFE6]">
                  <img
                    src="/assets/images/hero_editorial_mannequin_1789896317613.jpg"
                    alt="Pearls Elegance Editorial Modest Abaya Collection"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Clean Editorial Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-[#EAE2D7] shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C6D37] block">
                          Current Collection
                        </span>
                        <h4 className="font-serif text-base font-bold text-[#1C1917]">
                          Thrift Abayas & Kinomo Sets
                        </h4>
                        <p className="text-xs text-[#5A544C]">
                          Starting from ₦9,000 • Ready to wear
                        </p>
                      </div>
                      <button
                        onClick={() => onNavigate('shop')}
                        className="p-3 rounded-full bg-[#1C1917] text-white hover:bg-[#8C6D37] transition-colors"
                        aria-label="View collection"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative floating care pill */}
                <div className="hidden sm:flex absolute -top-4 -left-4 bg-white border border-[#EAE2D7] p-3.5 rounded-2xl shadow-lg items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF0DE] flex items-center justify-center text-[#8C6D37]">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A847C] font-semibold block">Care & Cleanliness</span>
                    <span className="text-xs font-bold text-[#1C1917]">Washed & Steam-Ironed</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HIGHLY VISIBLE NEW ARRIVALS SECTION (Directly after Hero) */}
      <section 
        id="new-arrivals-banner-section" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#F5EFE6] border border-[#E2D6C5] rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#1C1917] text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                Freshly Added
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                New Arrivals
              </h2>
              <p className="text-sm text-[#5A544C] max-w-xl mt-1">
                Explore our latest stock including clean white adult jalabias (₦6,000), new arrival abayas (₦12,000), and thrift kinomo with new inner dress sets (₦10,000–₦15,000).
              </p>
            </div>

            <button
              id="see-all-arrivals-btn"
              onClick={() => {
                onNavigate('new-arrivals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#8C6D37] text-white font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full transition-all shrink-0"
            >
              <span>View All New Arrivals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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
      </section>

      {/* 3. EDITORIAL CATEGORIES SECTION WITH MANNEQUIN IMAGERY */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D37] font-semibold">
            Explore The Range
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mt-1 mb-2">
            Shop By Category
          </h2>
          <p className="text-sm text-[#5A544C]">
            Carefully curated modest fashion for women, men, kids, and wholesale buyers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryVisuals.map((item, idx) => (
            <button
              key={idx}
              id={`cat-card-${item.name.toLowerCase().replace(/[\s\/]+/g, '-')}`}
              onClick={() => {
                if (item.cat === 'Wholesale / Bulk') {
                  onNavigate('wholesale');
                } else {
                  onSelectCategory(item.cat as ProductCategory);
                  onNavigate('shop');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative rounded-2xl overflow-hidden border border-[#EAE2D7] bg-white hover:border-[#C5A059] hover:shadow-lg transition-all text-left flex flex-col"
            >
              {/* Category Image */}
              <div className="aspect-3/4 w-full bg-[#F5EFE6] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Top subtitle badge */}
                <div className="absolute top-2.5 left-2.5 right-2.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/90 text-[#1C1917] backdrop-blur-xs">
                    {item.subtitle}
                  </span>
                </div>

                {/* Bottom title info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <h3 className="font-serif text-base font-bold leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-[10px] text-[#EAE2D7] line-clamp-1 opacity-90">
                    {item.tag}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 4. EDITORIAL BRAND STATEMENT / CRAFT & VALUE PROMISE */}
      <section id="brand-statement-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5EFE6] border border-[#EAE2D7] rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D37] font-semibold block">
                The Pearls Elegance Promise
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight">
                Dignity, Modesty & Care <br />
                <span className="italic font-normal text-[#8C6D37]">In Every Thread.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5A544C] leading-relaxed max-w-xl">
                We believe modest fashion should never be an expensive luxury. Every single piece in our collection is handpicked, washed, steam-ironed, and presented on mannequins to ensure you receive true value, authentic quality, and ready-to-wear beauty.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white/80 rounded-2xl border border-[#EAE2D7]">
                  <span className="font-serif text-2xl font-bold text-[#1C1917] block mb-1">₦2,000</span>
                  <span className="text-[#6B655D]">Starting price for everyday tops & modest gowns</span>
                </div>

                <div className="p-4 bg-white/80 rounded-2xl border border-[#EAE2D7]">
                  <span className="font-serif text-2xl font-bold text-[#1C1917] block mb-1">100%</span>
                  <span className="text-[#6B655D]">Steam-pressed & neatly packaged before dispatch</span>
                </div>

                <div className="p-4 bg-white/80 rounded-2xl border border-[#EAE2D7]">
                  <span className="font-serif text-2xl font-bold text-[#1C1917] block mb-1">Nationwide</span>
                  <span className="text-[#6B655D]">Prompt delivery to all Nigerian states</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#EAE2D7] shadow-lg bg-white">
                <img
                  src="/assets/images/kinomo_set_mannequin_1789896343549.jpg"
                  alt="Modest fashion craft"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="p-4 bg-white border-t border-[#EAE2D7] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1C1917]">Kinomo 2-Piece Sets</h4>
                    <p className="text-[11px] text-[#6B655D]">Outer robe paired with matching inner dress</p>
                  </div>
                  <span className="text-xs font-bold text-[#8C6D37]">₦10,000–₦15,000</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS SECTION */}
      <section id="featured-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D37] font-semibold">
              Available In Store
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mt-1">
              Featured Modest Wear
            </h2>
            <p className="text-sm text-[#5A544C] mt-1">
              Verified pricing in Nigerian Naira (₦). Hand-selected thrift pieces & new arrivals.
            </p>
          </div>

          <button
            id="view-all-shop-btn"
            onClick={() => {
              onNavigate('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#1C1917] hover:text-[#8C6D37] transition-colors py-2 border-b-2 border-[#1C1917] hover:border-[#8C6D37] self-start md:self-auto"
          >
            <span>View Full Catalog ({products.length} items)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              isInInquiryList={inquiryListIds.includes(product.id)}
              onToggleInquiryList={onToggleInquiryList}
            />
          ))}
        </div>
      </section>

      {/* 5. WHOLESALE & RESELLERS SECTION ("Build Your Collection") */}
      <section id="wholesale-banner-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1917] text-white rounded-3xl p-8 sm:p-12 border border-[#3A3530] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#C5A059] text-[#1C1917] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                For Resellers & Boutique Owners
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Build Your Collection. Stock Your Store With Affordable Modest Fashion.
              </h2>
              <p className="text-sm text-[#D5CEC4] max-w-xl leading-relaxed">
                Looking to stock your boutique or online store? Explore wholesale and bulk purchasing options with Pearls Elegance. Get fast-moving thrift abayas and jalabiyas for your business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#EAE2D7]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Boutique Owners</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#EAE2D7]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Online & IG Vendors</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#EAE2D7]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Delivery Across Nigeria</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                id="wholesale-banner-page-btn"
                onClick={() => {
                  onNavigate('wholesale');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3.5 px-6 bg-[#FAF8F5] hover:bg-white text-[#1C1917] font-semibold rounded-2xl text-xs sm:text-sm text-center transition-colors shadow-md uppercase tracking-wider"
              >
                Enquire About Wholesale
              </button>

              <a
                id="wholesale-banner-whatsapp-btn"
                href="https://wa.me/2348112444087?text=Hello%20Pearls%20Elegance%2C%20I%20am%20interested%20in%20wholesale%20and%20bulk%20abayas%20for%20resale."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold rounded-2xl text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Reseller Desk</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY SHOP WITH PEARLS ELEGANCE? */}
      <section id="why-shop-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D37] font-semibold">
            Quality & Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] mt-1 mb-2">
            Why Shop With Pearls Elegance?
          </h2>
          <p className="text-sm text-[#5A544C]">
            We provide affordable thrift pricing with carefully inspected modest styling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#EAE2D7] shadow-2xs hover:border-[#D5C6B1] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF0DE] flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs text-[#5A544C] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. VISIT OUR STORE & LOCATION */}
      <section id="location-and-trust-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE2D7] shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D37] font-semibold">
                Ijebu Ode Physical Location
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1 mb-3">
                Visit Our Store in Ijebu Ode
              </h3>
              <p className="text-sm text-[#5A544C] mb-6">
                Prefer to view items in person? Visit our store at Ibadan Garage Side in Ijebu Ode to inspect fabrics, choose pieces, or pick up your orders.
              </p>

              <div className="space-y-3.5 text-xs text-[#4A453E] mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8C6D37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1C1917] block">Physical Store Address:</span>
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#8C6D37] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1C1917] inline">Store Visits: </span>
                    <span>{BUSINESS_INFO.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-[#8C6D37] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1C1917] inline">Delivery Support: </span>
                    <span>Reliable dispatch to all states across Nigeria.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EBE1] flex flex-wrap gap-3">
              <a
                id="location-directions-btn"
                href="https://www.google.com/maps/search/?api=1&query=Ibadan+Garage+Side+Ijebu+Ode+Ogun+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#1C1917] hover:bg-[#8C6D37] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                id="location-phone-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-2.5 px-4 rounded-xl border border-[#D9CFC4] hover:bg-[#F5EFE6] text-[#1C1917] text-xs font-semibold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <span>Call Store: 0811 244 4087</span>
              </a>

              <a
                id="location-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Boutique Quality Standards Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#EAE2D7] flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C6D37] font-semibold">
                The Pearls Elegance Standard
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#1C1917] mt-1 mb-4">
                Authentic Quality & Transparency
              </h4>

              <div className="space-y-4 text-xs text-[#5A544C]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917] block">Washed & Steam-Ironed</span>
                    <span>Every thrift piece is thoroughly cleaned and prepared for immediate wearing.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917] block">Real Mannequin Previews</span>
                    <span>Photos on dress forms show exact fit and drapery. Video clips available on WhatsApp.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF0DE] text-[#8C6D37] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917] block">Direct WhatsApp Desk</span>
                    <span>Real-time personal response for sizing, colors, and prompt waybill tracking.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE2D7] flex items-center justify-between text-xs">
              <span className="font-bold text-[#1C1917]">Ijebu Ode, Ogun State</span>
              <span className="text-[#8C6D37] font-semibold">Serving Nigeria</span>
            </div>
          </div>

        </div>
      </section>

      {/* 9. FINAL EDITORIAL CALL TO ACTION */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1917] text-white rounded-3xl p-8 sm:p-14 text-center border border-[#3A3530] shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold">
              Ready to Upgrade Your Modest Wardrobe?
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Graceful Modesty, Affordable Luxury. <br />
              <span className="italic font-normal text-[#EAE2D7]">Delivered Directly to You.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D5CEC4] max-w-xl mx-auto leading-relaxed">
              Browse our catalog of Grade-A thrift abayas, clean jalabiyas, and elegant kimono sets. Order single pieces or request wholesale bulk packages via WhatsApp.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="final-cta-catalog-btn"
                onClick={() => {
                  onNavigate('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F5] text-[#1C1917] font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-colors shadow-md"
              >
                <span>Explore Full Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="final-cta-whatsapp-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
