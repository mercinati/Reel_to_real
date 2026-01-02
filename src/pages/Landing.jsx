
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Landing.css';
// ...existing code...

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing-container" style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div className="landing-glass">
        <h1 className="landing-hero">Turn travel reels into real trips</h1>
        <p className="landing-desc">
          Discover, plan, and experience your dream destinations by transforming Instagram reels into actionable travel itineraries. AI-powered, safe, and budget-friendly.
        </p>
        <div className="landing-section">
          <h3>How it works</h3>
          <ol>
            <li>Paste a travel reel link</li>
            <li>AI detects the place & enriches info</li>
            <li>Plan your trip with real details</li>
          </ol>
        </div>
        <div className="landing-section">
          <h3>Features</h3>
          <ul>
            <li>AI itinerary generation</li>
            <li>Safety & scam alerts</li>
            <li>Budget reality check</li>
          </ul>
        </div>
        <button className="landing-cta" onClick={() => navigate('/login')}>Login to Get Started</button>
      </div>
    </div>
  );
}

export default Landing;
