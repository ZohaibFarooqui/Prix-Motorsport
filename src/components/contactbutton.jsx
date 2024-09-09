import React, { useState } from 'react';


const PopupButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <>
      <button className="popup-button" onClick={togglePopup}>
        Contact Us
      </button>
      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={togglePopup}>&times;</button>
            <h2>Contact Us</h2>
            <form action="mailto:your-email@example.com" method="post" encType="text/plain">
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupButton;
