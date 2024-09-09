import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TaglineBar = () => {
  return (
    <div className="tagline-bar">
      <div className="tagline-content">
        <h5>We Keep Your Engine Running</h5>
        <div className="tagline-info">
          <div className="location-info">
            <FaMapMarkerAlt className="icon" />
            <span>Block 7 Gulistan-e-Johar</span>
          </div>
          {/* <div className="slash-divider">/</div> */}
          <div className="contact">
            <FaEnvelope className="icon" />
            <span className="email-wrapper">
              <a href="mailto:info@autolane.com">info@prixmotorsport.com</a>
            </span>
          </div>
        </div>
        {/* <div className="slash-divider">/</div> */}
        <div className="social-media-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default TaglineBar;
