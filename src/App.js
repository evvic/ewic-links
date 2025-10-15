import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faAmazon } from '@fortawesome/free-brands-svg-icons'; // faApple is no longer needed here
import Background from './background'; // Import the Background component
import Footer from './footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      {/* Animated Background */}
      <Background />

      <div className="container">
        {/* Profile Section */}
        <div className="profile">
          <img
            src="/headshot.png"
            alt="Profile_picture"
            className="profile-picture"
          />
          <h1 className="name creator-name">ewic</h1>
          <p className="description">Software and fitness 👨‍💻🔒</p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.youtube.com/@ewic.mp4" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/ewic.mp4/#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>

        {/* Affiliate Link - Amazon */}
        <div className="links">
          <a href="https://amazon.com/shop/ewic.mp4" target="_blank" rel="noopener noreferrer" className="link">
            <FontAwesomeIcon icon={faAmazon} className="social-icon" />
            Storefront: Tech gear recommended by my coworker!
          </a>
        </div>

        {/* Affiliate Link - Leetly App Store (with custom logo) */}
        <div className="links">
          <a 
            href="https://apps.apple.com/us/app/leetly-land-a-swe-job/id6752914609" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link"
          >
            {/* Custom Leetly Logo Image */}
            <img src="/leetly.jpg" alt="Leetly Logo" className="leetly-logo-icon" />
            Leetly: Land a SWE Job (App Store)
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;