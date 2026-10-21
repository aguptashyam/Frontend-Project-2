import React from 'react';

export default function SoulGlowSection({ onGetGlowing, onLearnMore }) {
  return (
    <section className="soul-glow-section" id="soul-glow">
      <div className="container">
        <div className="soul-glow-split">
          <div className="soul-photo-col">
            <img 
              src="/images/man_glowing_smile.jpg" 
              alt="Radiant smiling man applying skincare moisturizer" 
              className="soul-main-img"
            />
          </div>

          <div className="soul-content-col">
            <div className="soul-subtitle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="4" r="2.5" />
                <circle cx="12" cy="20" r="2.5" />
                <circle cx="4" cy="12" r="2.5" />
                <circle cx="20" cy="12" r="2.5" />
                <circle cx="6.34" cy="6.34" r="2.5" />
                <circle cx="17.66" cy="17.66" r="2.5" />
                <circle cx="6.34" cy="17.66" r="2.5" />
                <circle cx="17.66" cy="6.34" r="2.5" />
              </svg>
              <span>Make your skin beauty</span>
            </div>

            <h2 className="soul-headline">
              Skin glows when<br />
              the soul does
            </h2>

            <p className="soul-description">
              Great skin doesn't come from many products, just the right ones that work together.
            </p>

            <div className="soul-stats-row">
              <div className="royal-product-badge">
                <div className="royal-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="royal-text">
                  <span className="royal-title">Royal Product</span>
                  <span className="royal-sub">Case Study</span>
                </div>
              </div>

              <div className="discount-badge">
                <span className="discount-number">29%</span>
                <span className="discount-label">NET DISCOUNTS</span>
              </div>
            </div>

            <div className="soul-actions-row">
              <button className="get-glowing-btn" onClick={onGetGlowing}>
                GET GLOWING
              </button>
              <button className="learn-more-link" onClick={onLearnMore}>
                LEARN MORE
              </button>
            </div>

            <div className="sunflower-decoration">
              <svg width="76" height="54" viewBox="0 0 100 70" fill="none">
                <g transform="translate(15, 20)">
                  {[...Array(12)].map((_, i) => (
                    <ellipse
                      key={i}
                      cx="25"
                      cy="25"
                      rx="4"
                      ry="18"
                      fill="#F6B828"
                      transform={`rotate(${i * 30} 25 25)`}
                    />
                  ))}
                  <circle cx="25" cy="25" r="9" fill="#5A3A1F" />
                  <circle cx="25" cy="25" r="7" fill="#3D2513" />
                </g>

                <g transform="translate(48, 28) scale(0.85)">
                  {[...Array(12)].map((_, i) => (
                    <ellipse
                      key={i}
                      cx="25"
                      cy="25"
                      rx="4"
                      ry="18"
                      fill="#F6B828"
                      transform={`rotate(${i * 30} 25 25)`}
                    />
                  ))}
                  <circle cx="25" cy="25" r="9" fill="#5A3A1F" />
                  <circle cx="25" cy="25" r="7" fill="#3D2513" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
