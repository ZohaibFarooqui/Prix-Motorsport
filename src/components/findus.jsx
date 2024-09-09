// src/components/findUs.jsx
import React from 'react';
import Contact from './contact';

const FindUs = () => (
  <main className='main'>
    <section className="map-section">
      <div className="container">
        <h2>Our Location</h2>
        <div className="map-embed">
          {/* Embed Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.828648475877!2d67.1654367!3d24.9250117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3390012e6f017%3A0xbfb1610fc4252bb8!2sPRIX%20Motorsports!5e0!3m2!1sen!2s!4v1724487710587!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
       
      </div>
    </section>
    <Contact></Contact>
  </main>
);

export default FindUs;
