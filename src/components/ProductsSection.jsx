import React, { useState } from 'react';

export default function ProductsSection({ onAddToCart }) {
  const [selectedTag, setSelectedTag] = useState('#RealRadiin');

  const tags = ['#RealRadiin', '#Skincare', '#RealPure', '#Beauty'];

  const products = [
    {
      id: 'sun-beauty-oil',
      name: 'Sun Beauty Oil',
      price: 24.00,
      image: '/images/product_sun_oil.jpg',
      alt: 'Sun Beauty Oil bottle resting on golden desert sand dunes',
      tag: '#RealRadiin',
      description: 'Restorative Amber & Jojoba daily nourishing oil'
    },
    {
      id: 'exfoliator-gel',
      name: 'Exfoliator Gel',
      price: 48.00,
      image: '/images/product_exfoliator.jpg',
      alt: 'Exfoliator Gel dropper on natural cliff stone',
      tag: '#Skincare',
      description: 'AHA/BHA clarifying cellular renewal treatment'
    },
    {
      id: 'rose-geranium',
      name: 'Rose Geranium',
      price: 35.00,
      image: '/images/product_rose_geranium.jpg',
      alt: 'Rose Geranium balancing serum on limestone pedestal',
      tag: '#RealPure',
      description: 'Hydrate & restore botanical balancing elixir'
    }
  ];

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="products-header">
          <h2 className="products-title">Your next favorite<br />right here</h2>
          
          <div className="beauty-care-tags">
            <span className="tags-label">BEAUTY CARE:</span>
            <div className="tags-list">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`tag-pill ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.alt} className="product-img" />
                <button 
                  className="quick-add-btn" 
                  onClick={() => onAddToCart(product)}
                  title="Add to Cart"
                >
                  <span>+ Quick Add</span>
                </button>
              </div>

              <div className="product-info-row">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
