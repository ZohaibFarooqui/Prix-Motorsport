// src/components/header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src='favicon.ico' alt="Prix Motorsports Logo" className="logo-img" />
        </Link>
      </div>
      <Navbar />
      <Link to="/find-us">
        <button className="findus">Find Us</button>
      </Link>

    </div>
  </header>
);

export default Header;
