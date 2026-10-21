import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PureSkincareSection from './components/PureSkincareSection';
import ProductsSection from './components/ProductsSection';
import SoulGlowSection from './components/SoulGlowSection';
import SolutionsSection from './components/SolutionsSection';
import RadianceSection from './components/RadianceSection';
import CartDrawer from './components/CartDrawer';
import StoryModal from './components/StoryModal';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'sun-beauty-oil',
      name: 'Sun Beauty Oil',
      price: 24.00,
      image: '/images/product_sun_oil.jpg',
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('story');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to your bag!`);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="app-root">
      {toastMessage && (
        <div className="toast-notification">
          <span className="toast-check">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <Header 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        <HeroSection onShopClick={() => setIsCartOpen(true)} />
        <PureSkincareSection onProductSelect={() => setIsCartOpen(true)} />
        <ProductsSection onAddToCart={handleAddToCart} />
        <SoulGlowSection 
          onGetGlowing={() => { setModalMode('quiz'); setModalOpen(true); }}
          onLearnMore={() => { setModalMode('story'); setModalOpen(true); }}
        />
        <SolutionsSection 
          onWatchStory={() => { setModalMode('story'); setModalOpen(true); }} 
        />
        <RadianceSection 
          onSelectEssence={() => handleAddToCart({
            id: 'pure-skincare-serum',
            name: 'Aura Radiance Serum',
            price: 38.00,
            image: '/images/pure_serum_bottle.jpg'
          })}
        />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      <StoryModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
      />
    </div>
  );
}
