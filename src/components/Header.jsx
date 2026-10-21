import React, { useState } from 'react';

export default function Header({ cartCount, onOpenCart }) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-left">
          <button 
            className="menu-button" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <rect x="1" y="1" width="6" height="6" rx="1.5" />
              <rect x="11" y="1" width="6" height="6" rx="1.5" />
              <rect x="1" y="11" width="6" height="6" rx="1.5" />
              <rect x="11" y="11" width="6" height="6" rx="1.5" />
            </svg>
            <span className="menu-text">MENU</span>
          </button>

          <span className="nav-divider">|</span>

          <div 
            className="dropdown-wrapper"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              PRODUCTS
              <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isProductsOpen && (
              <div className="dropdown-menu">
                <a href="#products" className="dropdown-item">All Products</a>
                <a href="#products" className="dropdown-item">Nourishing Facial Oils</a>
                <a href="#products" className="dropdown-item">Gentle Exfoliators</a>
                <a href="#products" className="dropdown-item">Hydrating Serums</a>
                <a href="#products" className="dropdown-item">Artisan Botanical Soaps</a>
              </div>
            )}
          </div>

          <a href="#solutions" className="nav-link">ABOUT</a>
        </div>

        <div className="header-center">
          <a href="#" className="brand-logo">DERMIQT</a>
        </div>

        <div className="header-right">
          <a href="#soul-glow" className="nav-link hide-mobile">REVIEWS</a>
          <a href="#stories" className="nav-link hide-mobile">BLOG</a>

          <button className="shop-now-pill" onClick={onOpenCart}>
            <span>SHOP NOW</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#pure-skincare" onClick={() => setIsMobileMenuOpen(false)}>Pure Skincare</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#soul-glow" onClick={() => setIsMobileMenuOpen(false)}>Soul Glow</a>
            <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
            <a href="#radiance" onClick={() => setIsMobileMenuOpen(false)}>Radiance Routine</a>
          </div>
        </div>
      )}
    </header>
  );
}
