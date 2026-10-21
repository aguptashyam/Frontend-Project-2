import React from 'react';

export default function RadianceSection({ onSelectEssence }) {
  return (
    <section className="radiance-section" id="radiance">
      <div className="container">
        <div className="radiance-layout">
          <div className="radiance-col-left">
            <span className="radiance-sub-label">Original Skincare Lotion</span>
            <h3 className="radiance-title-left">
              For Healthy, Glowing Skin
            </h3>

            <div className="optional-tag-wrap">
              <span className="optional-text">Skincare is Not Optional</span>
              <svg className="cursor-pointer-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.428z" />
              </svg>
            </div>

            <div className="growth-stat-card">
              <span className="growth-card-title">Healthy Glowing Skin</span>
              <div className="growth-number-row">
                <span className="growth-value">75%</span>
                <span className="growth-unit">Growth</span>
                <span className="growth-arrow">↗</span>
              </div>
            </div>
          </div>

          <div className="radiance-col-center">
            <div className="mask-portrait-wrapper">
              <img 
                src="/images/man_mask_smile.jpg" 
                alt="Smiling man enjoying green clay facial mask" 
                className="mask-portrait-img"
              />

              <div className="wellness-floating-card">
                <div className="wellness-content">
                  <span className="wellness-priority-tag">Your skin our priority</span>
                  <h4 className="wellness-card-title">
                    Wellness in Mind<br />
                    and Body
                  </h4>
                  <div className="wellness-actions">
                    <span className="skin-pill">Fills & protects skin</span>
                  </div>
                </div>
                <div className="wellness-jar-wrap">
                  <img 
                    src="/images/hand_cream_jar.jpg" 
                    alt="Facial moisturizer jar" 
                    className="wellness-jar-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="radiance-col-right">
            <div className="radiance-shine-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              <span>Shine the natural way</span>
            </div>

            <h3 className="radiance-title-right">
              Routine is<br />
              the root of<br />
              radiance
            </h3>

            <div className="natural-essence-card" onClick={onSelectEssence}>
              <div className="essence-meta">
                <span className="essence-title">Natural Essence</span>
              </div>
              <div className="essence-bottle-wrap">
                <img 
                  src="/images/pure_serum_bottle.jpg" 
                  alt="Natural Essence Dropper Bottle" 
                  className="essence-bottle-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
