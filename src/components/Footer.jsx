import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <span className="footer-logo">DERMIQT</span>
            <p className="footer-tagline">
              Care Beyond Boundaries. Mindful, organic formulations made for healthy, balanced, and radiant skin.
            </p>
            <div className="footer-social-row">
              <span className="social-pill">Instagram</span>
              <span className="social-pill">TikTok</span>
              <span className="social-pill">Pinterest</span>
            </div>
          </div>

          <div className="footer-col-links">
            <h4 className="footer-heading">Collection</h4>
            <ul>
              <li><a href="#products">Sun Beauty Oil</a></li>
              <li><a href="#products">Exfoliator Gel</a></li>
              <li><a href="#products">Rose Geranium</a></li>
              <li><a href="#pure-skincare">Aura Radiance Serum</a></li>
              <li><a href="#pure-skincare">Lumière Botanical Soaps</a></li>
            </ul>
          </div>

          <div className="footer-col-links">
            <h4 className="footer-heading">Philosophy</h4>
            <ul>
              <li><a href="#soul-glow">Our Clean Standards</a></li>
              <li><a href="#solutions">Science & Botanicals</a></li>
              <li><a href="#radiance">Sustainable Packaging</a></li>
              <li><a href="#hero">100% Organic Promise</a></li>
            </ul>
          </div>

          <div className="footer-col-news">
            <h4 className="footer-heading">Stay in Balance</h4>
            <p className="news-desc">Subscribe to receive exclusive botanical drops and skincare guides.</p>
            {subscribed ? (
              <div className="subscribed-msg">✓ Thank you for subscribing! Check your inbox soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="footer-form">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="footer-input"
                />
                <button type="submit" className="footer-submit-btn">JOIN</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© 2026 DERMIQT Organic Skincare. All rights reserved.</p>
          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Shipping & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
