import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  Sparkles, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Check,
  ShoppingBag,
  Grid
} from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/products';

interface ShopViewProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
  inquiryListIds: string[];
  onToggleInquiryList: (product: Product) => void;
  onNavigateToWholesale: () => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  inquiryListIds,
  onToggleInquiryList,
  onNavigateToWholesale,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [newArrivalsOnly, setNewArrivalsOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(20000);
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categoriesList: ProductCategory[] = [
    'All',
    'Abayas',
    'Jalabiyas',
    'Kinomo',
    'Kiddies Wear',
    'Thrift Tops & Gowns',
    'New Arrivals',
    'Wholesale / Bulk',
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category check
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'New Arrivals' && !product.isNewArrival) {
          return false;
        } else if (selectedCategory === 'Wholesale / Bulk' && !product.wholesaleAvailable) {
          return false;
        } else if (
          selectedCategory !== 'New Arrivals' && 
          selectedCategory !== 'Wholesale / Bulk' && 
          product.category !== selectedCategory
        ) {
          return false;
        }
      }

      // New arrivals toggle
      if (newArrivalsOnly && !product.isNewArrival) {
        return false;
      }

      // Max price
      if (product.price > maxPrice) {
        return false;
      }

      // Availability
      if (availabilityFilter !== 'all' && product.availability !== availabilityFilter) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        const matchesSizes = product.sizes.some(s => s.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesCat && !matchesSizes) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // featured default order
    });
  }, [products, selectedCategory, newArrivalsOnly, maxPrice, availabilityFilter, searchQuery, sortBy]);

  const resetFilters = () => {
    onSelectCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setNewArrivalsOnly(false);
    setMaxPrice(20000);
    setAvailabilityFilter('all');
  };

  const hasActiveFilters = 
    selectedCategory !== 'All' || 
    searchQuery !== '' || 
    newArrivalsOnly || 
    maxPrice < 20000 || 
    availabilityFilter !== 'all';

  return (
    <div id="shop-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-[#F5EFE6] rounded-3xl p-6 sm:p-10 border border-[#EAE2D7]">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#8C6D37] font-semibold">
            Modest Collection Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-1 mb-3">
            Shop Thrift Abayas & Modest Wears
          </h1>
          <p className="text-sm text-[#5A544C] leading-relaxed">
            Browse our hand-selected, washed, and steam-ironed modest pieces. Each piece has clear pricing in Nigerian Naira. Tap &ldquo;Order on WhatsApp&rdquo; for instant availability confirmation.
          </p>
        </div>
      </div>

      {/* Search & Filter Controls Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#EAE2D7] shadow-2xs space-y-4">
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8A847C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="shop-search-input"
              type="text"
              placeholder="Search abayas, jalabiyas, gowns, sizes (e.g. 54, 56)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-[#FAF8F5] border border-[#D9CFC4] rounded-xl text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#8C6D37] placeholder:text-[#9C9488]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A847C] hover:text-[#1C1917]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort & Mobile Filter Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Sort dropdown */}
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] border border-[#D9CFC4] px-3 py-2 rounded-xl text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#8C6D37]" />
              <select
                id="shop-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-semibold text-[#1C1917] focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              id="mobile-filter-toggle-btn"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden flex items-center gap-1.5 bg-[#1C1917] text-white px-3.5 py-2.5 rounded-xl text-xs font-semibold"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters && '•'}</span>
            </button>

            {hasActiveFilters && (
              <button
                id="reset-filters-btn"
                onClick={resetFilters}
                className="text-xs text-[#C62828] hover:underline font-semibold px-2 py-1"
              >
                Clear
              </button>
            )}

          </div>

        </div>

        {/* Category Pills (Desktop & Tablet) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          {categoriesList.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-pill-${cat.toLowerCase().replace(/[\s\/]+/g, '-')}`}
                onClick={() => {
                  if (cat === 'Wholesale / Bulk') {
                    onNavigateToWholesale();
                  } else {
                    onSelectCategory(cat);
                  }
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#5A544C] border border-[#EAE2D7] hover:bg-[#F2EBE1]'
                }`}
              >
                {cat === 'New Arrivals' && <Sparkles className="w-3 h-3 text-[#C5A059]" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Filter Drawer for Mobile or Collapsible options */}
      {mobileFilterOpen && (
        <div className="md:hidden bg-white p-5 rounded-2xl border border-[#EAE2D7] space-y-4 shadow-md">
          <div className="flex items-center justify-between">
            <h4 className="font-serif text-base font-bold text-[#1C1917]">Filters</h4>
            <button onClick={() => setMobileFilterOpen(false)} className="text-[#8A847C]">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#6B655D] block mb-2">Max Price (₦{maxPrice.toLocaleString()})</label>
            <input
              type="range"
              min="2000"
              max="20000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#8C6D37]"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="mobile-new-arrivals"
              checked={newArrivalsOnly}
              onChange={(e) => setNewArrivalsOnly(e.target.checked)}
              className="accent-[#8C6D37] w-4 h-4 rounded"
            />
            <label htmlFor="mobile-new-arrivals" className="text-xs font-medium text-[#1C1917]">
              New Arrivals only
            </label>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-2.5 bg-[#1C1917] text-white text-xs font-semibold rounded-xl"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Product Results Grid */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1 text-xs text-[#6B655D]">
          <span>
            Showing <strong className="text-[#1C1917]">{filteredProducts.length}</strong> available items
          </span>
          <span className="text-[#8C6D37] font-medium">Ijebu Ode Store Stock</span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#EAE2D7] max-w-lg mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#8C6D37]">
              <Search className="w-8 h-8 opacity-60" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">
              No matching items found
            </h3>
            <p className="text-xs text-[#5A544C] mb-6 leading-relaxed">
              We update our thrift abaya inventory weekly. Try clearing your search filter or message us directly on WhatsApp to ask for pieces not yet listed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button
                id="empty-reset-btn"
                onClick={resetFilters}
                className="py-2.5 px-5 bg-[#1C1917] text-white text-xs font-semibold rounded-xl"
              >
                Reset Filters
              </button>
              <a
                href="https://wa.me/2348112444087?text=Hello%20Pearls%20Elegance%2C%20do%20you%20have%20any%20abayas%20or%20jalabiyas%20matching%20my%20style%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 bg-[#25D366] text-white text-xs font-semibold rounded-xl text-center"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                isInInquiryList={inquiryListIds.includes(product.id)}
                onToggleInquiryList={onToggleInquiryList}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
