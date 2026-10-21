import React from 'react';

export default function PureSkincareSection({ onProductSelect }) {
  return (
    <section className="pure-skincare-section" id="pure-skincare">
      <div className="container">
        <div className="pure-header-row">
          <div className="pure-headline-group">
            <div className="pure-title-top-line">
              <h2 className="pure-main-title">Pure Skincare</h2>
              
              <div className="mini-preview-strip">
                <div className="strip-thumb-wrap">
                  <img src="/images/hero_man_foam.jpg" alt="Skincare routine preview" className="strip-thumb" />
                </div>
                <div className="strip-thumb-wrap teal-bg">
                  <img src="/images/pure_serum_bottle.jpg" alt="Serum preview" className="strip-thumb" />
                </div>
                <button className="see-more-link" onClick={onProductSelect}>
                  <span>SEE MORE</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <h2 className="pure-sub-title">Elevated Naturally</h2>
          </div>

          <p className="pure-description-text">
            Let your skin naturally renew itself, apply every day for a clean, youthful face everybody!
          </p>
        </div>

        <div className="pure-cards-grid">
          <div className="pure-card peach-card">
            <div className="peach-card-text">
              <h3 className="card-headline">Ageless starts<br />with care</h3>
              
              <div className="powered-by-block">
                <div className="powered-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className="powered-content">
                  <span className="powered-label">POWERED BY</span>
                  <p className="powered-desc">Daily care keeps your glow timeless</p>
                </div>
              </div>
            </div>

            <div className="peach-card-visual">
              <img 
                src="/images/pure_serum_bottle.jpg" 
                alt="Aura Radiance Serum bottle" 
                className="pure-bottle-img"
              />
              <button 
                className="pure-circle-badge" 
                onClick={onProductSelect}
                title="View Pure Skincare details"
              >
                <span>Pure<br />Skincare</span>
              </button>
            </div>
          </div>

          <div className="pure-card white-card">
            <div className="white-card-header">
              <h3 className="card-headline">
                Everyday care creates<br />
                timeless skin
              </h3>
              <span className="lumiere-signature">Lumière</span>
            </div>

            <div className="white-card-dual-photos">
              <div className="photo-item photo-left">
                <img 
                  src="/images/soap_artisan_boxes.jpg" 
                  alt="Organic lavender and rose soaps with dried flower petals" 
                />
              </div>

              <div className="photo-item photo-right">
                <img 
                  src="/images/soap_yellow_packaging.jpg" 
                  alt="Hand-made carbon captured botanical skincare" 
                />
                <div className="carbon-captured-sticker">
                  <span>Hand-made with carbon captured by Lumière</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
