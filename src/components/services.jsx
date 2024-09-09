import React from 'react';
import { Link } from 'react-router-dom';
import { FaGreaterThan, FaHome } from 'react-icons/fa';

const Services = () => (
  <section id="services">
    <div className="about-header">
      <div className="about-header-content">
        <h2>Car Repair & Maintenance</h2>
        <h1>Our Services</h1>
      </div>

      <div className="breadcrumbs">
        <div className="breadcrumb-content">
          <Link to="/"><FaHome /> Home </Link> 
          <FaGreaterThan />
          <span>Services</span>
        </div>
      </div>
    </div>

    <div className="container">
      <h2>Our Services</h2>
      <div className="services-intro">
        <p>We provide a wide range of auto repair and maintenance services to keep your vehicle running smoothly. Our expert technicians use the latest technology and equipment to ensure top-notch service every time.</p>
      </div>
      <div className="services-grid">
        <div className="service-item">
          <i className="fas fa-car-crash service-icon"></i>
          <h3>Auto Repair</h3>
          <p>We offer comprehensive auto repair services to keep your vehicle in top condition.</p>
        </div>
        <div className="service-item">
          <i className="fas fa-tools service-icon"></i>
          <h3>Maintenance</h3>
          <p>Regular maintenance to ensure the longevity and performance of your vehicle.</p>
        </div>
        <div className="service-item">
          <i className="fas fa-diagnoses service-icon"></i>
          <h3>Diagnostics</h3>
          <p>Advanced diagnostics to identify and fix any issues with your vehicle.</p>
        </div>
        <div className="service-item">
          <i className="fas fa-tachometer-alt service-icon"></i>
          <h3>Custom Tuning</h3>
          <p>Custom tuning services to enhance your vehicle's performance and efficiency.</p>
        </div>
        <div className="service-item">
          <i className="fas fa-oil-can service-icon"></i>
          <h3>Oil Change</h3>
          <p>Quick and efficient oil change services to keep your engine running smoothly.</p>
        </div>
        <div className="service-item">
          <i className="fas fa-battery-three-quarters service-icon"></i>
          <h3>Battery Service</h3>
          <p>Reliable battery testing and replacement services to keep your vehicle powered up.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
