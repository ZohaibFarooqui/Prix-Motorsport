// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';
import TaglineBar from './components/taglineBar.jsx'; // Import the TaglineBar component
import SplashScreen from './components/splashScreen.jsx'; // Import the SplashScreen component
import FindUs from './components/findus.jsx'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen /> // Show SplashScreen while loading
      ) : (
        <Router>
          <TaglineBar /> {/* Add the TaglineBar component here */}
          <Header />
          <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/find-us" element={<FindUs />} /> {/* Add this route */}
        </Routes>
      </main>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
