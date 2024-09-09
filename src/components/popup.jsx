import React, { useState } from 'react';


const PopupButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => setIsVisible(!isVisible);
  const closePopup = () => setIsVisible(false);

  return (
    <>
      <button className="popup-button" onClick={togglePopup}>
        Contact Us
      </button>
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
            <h2>Contact Us</h2>
            <p>For inquiries, please email us at <a href="mailto:info@prixmotorsport.com">info@prixmotorsport.com</a></p>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupButton;
