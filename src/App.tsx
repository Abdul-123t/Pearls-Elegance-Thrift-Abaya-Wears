import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { SearchModal } from './components/SearchModal';
import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { NewArrivalsView } from './views/NewArrivalsView';
import { WholesaleView } from './views/WholesaleView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, InquiryItem } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState<boolean>(false);

  // Inquiry List (Local Basket for batch WhatsApp orders)
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('pearls_elegance_inquiry');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pearls_elegance_inquiry', JSON.stringify(inquiryItems));
    } catch (e) {
      console.error('Failed to save inquiry list:', e);
    }
  }, [inquiryItems]);

  const handleToggleInquiryList = (product: Product) => {
    setInquiryItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.filter((item) => item.product.id !== product.id);
      } else {
        return [
          ...prev,
          {
            product,
            quantity: 1,
            selectedSize: product.sizes[0],
            selectedColor: product.colors[0],
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setInquiryItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as InquiryItem[]
    );
  };

  const handleRemoveInquiryItem = (productId: string) => {
    setInquiryItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearInquiryList = () => {
    setInquiryItems([]);
  };

  const inquiryListIds = inquiryItems.map((item) => item.product.id);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917]">
      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        inquiryCount={inquiryItems.length}
        onOpenInquiryDrawer={() => setIsInquiryDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView
            products={PRODUCTS}
            onSelectProduct={setSelectedProduct}
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
            inquiryListIds={inquiryListIds}
            onToggleInquiryList={handleToggleInquiryList}
          />
        )}

        {currentView === 'shop' && (
          <ShopView
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={setSelectedProduct}
            inquiryListIds={inquiryListIds}
            onToggleInquiryList={handleToggleInquiryList}
            onNavigateToWholesale={() => handleNavigate('wholesale')}
          />
        )}

        {currentView === 'new-arrivals' && (
          <NewArrivalsView
            products={PRODUCTS}
            onSelectProduct={setSelectedProduct}
            inquiryListIds={inquiryListIds}
            onToggleInquiryList={handleToggleInquiryList}
            onNavigateToShop={() => handleNavigate('shop')}
          />
        )}

        {currentView === 'wholesale' && <WholesaleView />}

        {currentView === 'about' && (
          <AboutView
            onNavigateToShop={() => handleNavigate('shop')}
            onNavigateToWholesale={() => handleNavigate('wholesale')}
          />
        )}

        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Sticky Mobile Bottom CTA Bar */}
      <StickyMobileBar
        currentView={currentView}
        onNavigate={handleNavigate}
        inquiryCount={inquiryItems.length}
        onOpenInquiryDrawer={() => setIsInquiryDrawerOpen(true)}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onNavigateToWholesale={() => {
            setSelectedProduct(null);
            handleNavigate('wholesale');
          }}
          isInInquiryList={inquiryListIds.includes(selectedProduct.id)}
          onToggleInquiryList={handleToggleInquiryList}
        />
      )}

      {/* Inquiry List Drawer */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        items={inquiryItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveInquiryItem}
        onClearAll={handleClearInquiryList}
        onSelectProduct={setSelectedProduct}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={setSelectedProduct}
      />
    </div>
  );
}
