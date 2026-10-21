import React from 'react';

export default function StoryModal({ isOpen, onClose, mode }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>

        {mode === 'story' ? (
          <div className="modal-inner">
            <span className="modal-tag">DERMIQT STORIES</span>
            <h3 className="modal-title">Clear Skin Doesn't Mean Flawless</h3>
            <p className="modal-p">
              Real skin has texture, pores, and changes with the seasons. Our philosophy centers on cellular nourishment, balanced moisture retention, and strengthening your skin's natural barrier.
            </p>

            <div className="modal-video-box">
              <img src="/images/man_glowing_smile.jpg" alt="Video cover preview" className="modal-video-thumb" />
              <div className="modal-play-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1b1614">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="video-duration">2:14 • Founder Routine</span>
            </div>

            <div className="modal-steps-row">
              <div className="step-pill">1. Cleansing Wash</div>
              <div className="step-pill">2. Aura Serum</div>
              <div className="step-pill">3. Botanical Seal</div>
            </div>
          </div>
        ) : (
          <div className="modal-inner">
            <span className="modal-tag">ROUTINE BUILDER</span>
            <h3 className="modal-title">Get Your Custom Glow</h3>
            <p className="modal-p">
              Discover the optimal minimalist skincare combination tailored to your skin type and daily environment.
            </p>
            
            <form className="modal-quiz-form" onSubmit={(e) => { e.preventDefault(); alert("Custom routine sent to your email!"); onClose(); }}>
              <label className="form-label">What is your primary skincare focus?</label>
              <select className="form-select" defaultValue="balance">
                <option value="balance">Hydration & Barrier Balance</option>
                <option value="anti-aging">Ageless & Elasticity Support</option>
                <option value="oil-control">Excess Oil Control & Clarity</option>
                <option value="sensitive">Gentle Soothing & Redness</option>
              </select>

              <label className="form-label">Your Email for your Routine Guide</label>
              <input type="email" required placeholder="name@example.com" className="form-input" />

              <button type="submit" className="quiz-submit-btn">SEND MY CUSTOM ROUTINE</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
