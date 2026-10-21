import React from 'react';

export default function HeroSection({ onShopClick }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-inner container">
        <div className="hero-top-tag">
          <svg className="leaf-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
          <span>Care your skin naturally</span>
        </div>

        <div className="hero-main-layout">
          <div className="hero-left-content">
            <h1 className="hero-title">
              Care Beyond<br />
              Boundaries
            </h1>

            <div className="hero-left-sub">
              <div className="avocado-badge">
                <div className="avocado-icon-wrap">
                  <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                    <path d="M32 6C20 6 12 24 12 40C12 52 21 58 32 58C43 58 52 52 52 40C52 24 44 6 32 6Z" fill="#3D6A35" />
                    <path d="M32 10C22 10 16 26 16 40C16 50 23 54 32 54C41 54 48 50 48 40C48 26 42 10 32 10Z" fill="#D3DE8E" />
                    <circle cx="32" cy="40" r="11" fill="#754823" />
                    <circle cx="29" cy="37" r="3" fill="#8E5A2D" opacity="0.6" />
                  </svg>
                </div>
                <div className="avocado-text">
                  <span>CLEAR EXTRA OIL</span>
                  <span>PRESERVE THE</span>
                  <span>YOUTH</span>
                </div>
              </div>

              <button className="hero-circle-shop-btn" onClick={onShopClick} aria-label="Shop Now">
                <span className="shop-btn-text">Shop<br />Now</span>
              </button>
            </div>
          </div>

          <div className="hero-center-visual">
            <div className="hero-oval-frame">
              <img 
                src="/images/hero_man_foam.jpg" 
                alt="Man applying cleansing foam with soft brush" 
                className="hero-oval-img"
              />
            </div>

            <div className="hero-stamp-badge" title="Skincare Quality Guarantee">
              <svg viewBox="0 0 140 140" className="stamp-svg">
                <path 
                  id="stampCirclePath" 
                  d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" 
                  fill="none" 
                />
                <text className="stamp-curved-text">
                  <textPath href="#stampCirclePath" startOffset="0%">
                    PRODUCT FOR BEAUTY SKINCARE QUALITY •
                  </textPath>
                </text>
              </svg>
              <div className="stamp-center-icon">
                <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
                  <path d="M20 34C20 34 10 28 10 16C10 9 17 6 20 6C23 6 30 9 30 16C30 28 20 34 20 34Z" fill="#3D7E3C" />
                  <path d="M20 34C20 34 16 26 16 19C16 13 18 10 20 8C22 10 24 13 24 19C24 26 20 34 20 34Z" fill="#5AA658" />
                  <path d="M20 34C20 34 18 25 18 20C18 16 19 13 20 12C21 13 22 16 22 20C22 25 20 34 20 34Z" fill="#82C780" />
                </svg>
              </div>
            </div>
          </div>

          <div className="hero-right-content">
            <span className="hero-sub-label">Natural Growth</span>
            <h2 className="hero-sub-heading">
              Bold Skin<br />
              Begins with<br />
              Balance
            </h2>
          </div>
        </div>

        <div className="hero-bottom-bar">
          <div className="bottom-bar-left">
            <span className="organic-percent">100%</span>
            <span className="organic-text">Organic</span>
            <span className="bottom-bar-desc">Let your skin glow the natural way</span>
          </div>

          <div className="bottom-bar-right">
            <svg className="bottom-leaf-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
            <span className="bottom-right-text">Natural facial skincare must be in every beauty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
