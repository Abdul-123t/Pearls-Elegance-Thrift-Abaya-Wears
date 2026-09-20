import React, { useEffect } from 'react';
import { X, Trash2, MessageCircle, ArrowRight, ShoppingBag, Plus, Minus, ShieldCheck } from 'lucide-react';
import { InquiryItem, Product } from '../types';
import { getCombinedInquiryWhatsAppUrl } from '../utils/whatsapp';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onSelectProduct: (product: Product) => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onSelectProduct,
}) => {
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

  const totalEstimated = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );

  const whatsappCombinedUrl = getCombinedInquiryWhatsAppUrl(items);

  return (
    <div 
      id="inquiry-drawer-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Your Order Inquiry List"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end"
    >
      <div 
        id="inquiry-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#EAE2D7]"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#EAE2D7] bg-[#F5EFE6] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white text-[#8C6D37] shadow-xs">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Your Order Inquiry List
              </h3>
              <p className="text-xs text-[#6B655D]">
                {items.length} {items.length === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            id="close-inquiry-drawer-btn"
            onClick={onClose}
            aria-label="Close inquiry drawer"
            className="p-2 rounded-full text-[#4A453E] hover:bg-white hover:text-[#1C1917] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="py-16 text-center px-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#8C6D37]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1C1917] mb-1">
                Your inquiry list is empty
              </h4>
              <p className="text-xs text-[#6B655D] max-w-xs mx-auto mb-6">
                Browse our thrift abayas, jalabiyas, and modest gowns to create a single WhatsApp inquiry.
              </p>
              <button
                id="empty-drawer-shop-btn"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-[#1C1917] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#8C6D37] transition-colors uppercase tracking-wider"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center px-1 text-xs text-[#8A847C]">
                <span>Selected Items</span>
                <button
                  id="clear-all-inquiry-btn"
                  onClick={onClearAll}
                  className="text-[#C62828] hover:underline flex items-center gap-1 font-medium"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              </div>

              {items.map((item) => (
                <div 
                  key={item.product.id}
                  className="bg-white p-3.5 rounded-2xl border border-[#EAE2D7] shadow-xs flex gap-3 items-center justify-between"
                >
                  <div 
                    onClick={() => {
                      onClose();
                      onSelectProduct(item.product);
                    }}
                    className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-18 object-cover rounded-xl bg-[#F5EFE6] shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h5 className="font-serif text-sm font-bold text-[#1C1917] truncate">
                        {item.product.name}
                      </h5>
                      <p className="text-xs font-bold text-[#8C6D37] mt-0.5">
                        {item.product.priceFormatted}
                      </p>
                      <span className="text-[10px] text-[#8A847C] block truncate">
                        {item.product.category}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Delete Controls */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      id={`remove-inquiry-item-${item.product.id}`}
                      onClick={() => onRemoveItem(item.product.id)}
                      aria-label="Remove item"
                      className="text-[#A8A29E] hover:text-[#C62828] transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1 bg-[#FAF8F5] border border-[#D9CFC4] rounded-lg p-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 text-[#6B655D] hover:text-[#1C1917]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-1.5 min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 text-[#6B655D] hover:text-[#1C1917]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#EAE2D7] bg-[#F5EFE6] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6B655D] font-medium">Estimated Total:</span>
              <span className="font-serif text-xl font-bold text-[#1C1917]">
                ₦{totalEstimated.toLocaleString()}
              </span>
            </div>

            <p className="text-[11px] text-[#8A847C] leading-tight text-center">
              Clicking below sends this compiled list to Pearls Elegance on WhatsApp to verify live piece availability and delivery cost.
            </p>

            <a
              id="send-combined-whatsapp-btn"
              href={whatsappCombinedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Inquiry on WhatsApp ({items.length} {items.length === 1 ? 'item' : 'items'})</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
