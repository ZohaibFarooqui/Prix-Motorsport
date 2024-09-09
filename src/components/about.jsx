import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGreaterThan, FaHome } from 'react-icons/fa';

const About = () => {
  const [carsRepaired, setCarsRepaired] = useState(0);
  const [tiresReplaced, setTiresReplaced] = useState(0);

  useEffect(() => {
    const carsTarget = 500;
    const customersTarget = 1000;

    // Initialize interval
    const interval = setInterval(() => {
      setCarsRepaired((prev) => (prev < carsTarget ? prev + 10 : carsTarget));
      setTiresReplaced((prev) => (prev < customersTarget ? prev + 20 : customersTarget));
    }, 50);

    // Clear interval on component unmount
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="about">
      <div className="about-header">
        <div className="about-header-content">
          <h2>Auto Repair Since 1967</h2>
          <h1>About Us</h1>
        </div>
        <div className="breadcrumbs">
          <div className="breadcrumb-content">
            <Link to="/"><FaHome /> Home </Link>
            <FaGreaterThan />
            <span>About Us</span>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-stats">
          <div className="stat">
            <h2>{carsRepaired}+</h2>
            <p>Cars Repaired this Year</p>
          </div>
          <div className="stat">
            <h2>{tiresReplaced}+</h2>
            <p>Satisfied Customers</p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <h2>Our Mission</h2>
            <p>Phasellus lacinia odio ac ligula scelerisque...</p>
          </div>
          <div className="about-image">
            <img src="images/vecteezy_mechanic-using-car-battery-performance-meter_6104705.jpg" alt="About Us" />
          </div>
        </div>

        <div className="additional-content">
          <h2>Our Vision</h2>
          <p>Our vision is to be the most trusted and respected auto repair service provider in the region.</p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced Technicians</li>
            <li>High-Quality Parts</li>
            <li>Competitive Pricing</li>
            <li>Exceptional Customer Service</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
