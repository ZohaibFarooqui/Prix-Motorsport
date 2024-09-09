import React from 'react';


const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section about">
        <h3>About Autolane</h3>
        <p>
          Autolane is built for Auto Repair and Car Maintenance shops but is suitable for all companies with related services. Novice or experienced in WordPress, this theme will fit your needs to build a website that will stand out.
        </p>
      </div>
      <div className="footer-section services">
        <h3>Services Menu</h3>
        <ul>
          <li><span className="arrow"></span>All Services</li>
          <li><span className="arrow"></span>A/C Services</li>
          <li><span className="arrow"></span>Brake Repair</li>
          <li><span className="arrow"></span>Engine Repair</li>
          <li><span className="arrow"></span>Oil Change</li>
          <li><span className="arrow"></span>Tire Change</li>
          <li><span className="arrow"></span>Performance</li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>Contact Details</h3>
        <ul>
          <li><i className="fas fa-map-marker-alt"></i> Block 7 Gulistan-e-Johar, Karachi</li>
          <li><i className="fas fa-phone-alt"></i> +21 347 678 901</li>
          <li>Mon till Fri: 8:00 till 6:00</li>
          <li><i className="fas fa-envelope"></i> info@autolane.com</li>
          <li>We reply within 1 day</li>
        </ul>
      </div>
      <div className="footer-section hours">
        <h3>Opening Hours</h3>
        <ul>
          <li>Monday: <span>08:00 - 18:00</span></li>
          <li>Tuesday: <span>08:00 - 18:00</span></li>
          <li>Wednesday: <span>08:00 - 18:00</span></li>
          <li>Thursday: <span>08:00 - 19:30</span></li>
          <li>Friday: <span>08:00 - 18:00</span></li>
          <li>Saturday: <span>09:00 - 15:30</span></li>
          <li>Sunday: <span className="closed">We're Closed</span></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© Copyright 2024 Prix Motorsports </p>
      <p>For emergency services call <i className="fas fa-phone-alt"></i> <strong>123 556 7890</strong></p>
    </div>
  </footer>
);

export default Footer;
