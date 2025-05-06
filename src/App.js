import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faAmazon } from '@fortawesome/free-brands-svg-icons';
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
            src="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/364982426_669023181747586_6668186056420918104_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2QGEOaVPrv2S1V1mTzaSBzgzFsXWKNyoan_o-qzjb8AHIRC4KM8JJ4s4KTgg6ejxQJ-ZbXNkRpoWs2IKmtDUDo5j&_nc_ohc=5v_-AQd3Rn0Q7kNvwGj9OCc&_nc_gid=-8B4ihG2tXcaIaHSTu4hAQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfIyRM5ABfqoeyp90zZBIYq-VGLliS8prhVcAMhu2wUKFQ&oe=681F7F0C&_nc_sid=8b3546"
            alt="Profile"
            className="profile-picture"
          />
          <h1 className="name creator-name">Video Creator</h1>
          <p className="description">Support my social media Journey!</p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>

        {/* Affiliate Link */}
        <div className="links">
          <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="link">
            <FontAwesomeIcon icon={faAmazon} className="social-icon" />
            Storefront: Tech gear recommended by my coworker!
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;