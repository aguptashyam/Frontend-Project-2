import React from 'react';

export default function SolutionsSection({ onWatchStory }) {
  return (
    <section className="solutions-section" id="solutions">
      <div className="container">
        <div className="solutions-grid-layout">
          <div className="solutions-left-col">
            <h2 className="solutions-headline">
              Powerful skin<br />
              solutions visible<br />
              radiance
            </h2>

            <div className="watch-stories-wrap">
              <button className="watch-stories-btn" onClick={onWatchStory}>
                <span className="play-circle-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="watch-btn-label">WATCH OUR STORIES</span>
              </button>
              <p className="stories-subtext">Clear skin doesn't mean flawless.</p>
            </div>

            <div className="science-hydration-card">
              <div className="science-card-body">
                <h4 className="science-title">
                  Science-backed<br />
                  hydration real<br />
                  results
                </h4>
                <div className="science-thumb-wrap">
                  <img 
                    src="/images/hand_holding_dropper.jpg" 
                    alt="Hand holding pipette dropper bottle" 
                    className="science-thumb"
                  />
                </div>
              </div>
              <p className="science-footer-note">
                Great skin doesn't need tons, it just a few things that work well together.
              </p>
            </div>
          </div>

          <div className="solutions-bento-grid">
            <div className="bento-card card-cream">
              <div className="bento-img-wrap">
                <img 
                  src="/images/hand_cream_jar.jpg" 
                  alt="Rapid wrinkle repair cream jar" 
                  className="bento-photo"
                />
              </div>
              <div className="bento-card-meta">
                <h4 className="bento-card-title">Rapid wrinkle repair cream</h4>
                <div className="bento-tag-row">
                  <span className="avatar-dot"></span>
                  <span className="bento-card-sub">For flawless skin</span>
                </div>
              </div>
            </div>

            <div className="bento-card card-orange">
              <div className="orange-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h4 className="orange-card-title">
                Smart care<br />
                for thirsty<br />
                skin
              </h4>
            </div>

            <div className="bento-card card-beauty">
              <div className="bento-img-wrap small-thumb">
                <img 
                  src="/images/pure_serum_bottle.jpg" 
                  alt="Amber skincare serum" 
                  className="bento-photo"
                />
              </div>
              <div className="bento-card-meta">
                <h4 className="bento-card-title small-title">Beauty begins<br />with skincare</h4>
              </div>
            </div>

            <div className="bento-card card-roller">
              <div className="bento-img-wrap">
                <img 
                  src="/images/man_face_roller.jpg" 
                  alt="Man using facial roller" 
                  className="bento-photo"
                />
              </div>
              <div className="bento-card-meta">
                <h4 className="bento-card-title">Daily Facial Moisturizer</h4>
                <div className="bento-tag-row">
                  <span className="avatar-dot green"></span>
                  <span className="bento-card-sub">For smoother skin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
