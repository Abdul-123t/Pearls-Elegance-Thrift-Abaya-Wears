import React, { useState, useEffect } from 'react';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? products.slice(0, 4) 
    : products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.sizes.some(s => s.toLowerCase().includes(q))
        );
      });

  return (
    <div 
      id="search-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Search Collection"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24"
    >
      <div 
        id="search-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D7]"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#EAE2D7] bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8C6D37] shrink-0" />
          <input
            id="modal-search-input"
            type="text"
            autoFocus
            placeholder="Search thrift abayas, jalabiyas, kinomo, tops, prices..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-[#1C1917] focus:outline-none placeholder:text-[#8A847C]"
          />
          <button
            id="close-search-modal-btn"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 rounded-full text-[#6B655D] hover:bg-[#FAF8F5] hover:text-[#1C1917]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="p-3.5 bg-[#F5EFE6] border-b border-[#EAE2D7] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#8A847C] font-semibold shrink-0">Popular:</span>
          {['Abayas', 'Jalabiyas', 'Kinomo', 'Kiddies', '₦2,000 Tops'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag.replace('₦2,000 ', ''))}
              className="px-2.5 py-1 rounded-full bg-white border border-[#D9CFC4] hover:border-[#8C6D37] text-[#4A453E] whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          <div className="text-xs text-[#8A847C] px-2 mb-2 font-medium">
            {query.trim() === '' ? 'Featured Suggestions' : `${results.length} results found`}
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-[#6B655D] text-xs">
              No products found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 bg-white hover:bg-[#F5EFE6] border border-[#EAE2D7] hover:border-[#C5A059] rounded-2xl flex items-center justify-between gap-3 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-14 object-cover rounded-xl bg-[#FAF8F5]"
                  />
                  <div>
                    <h5 className="font-serif text-sm font-bold text-[#1C1917]">
                      {product.name}
                    </h5>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-[#8C6D37]">{product.priceFormatted}</span>
                      <span className="text-[#8A847C]">• {product.category}</span>
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-[#8A847C]" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
