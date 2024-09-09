import React, { useState } from 'react';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSend = (e) => {
    e.preventDefault();
    // Implement email sending logic here
    alert(`Email: ${email}\nMessage: ${message}\nThis would be sent to your email server.`);
    setEmail('');
    setMessage('');
    handleClose();
  };

  return (
    <>
      <button className="popup-button" onClick={handleOpen}>
        Contact Us
      </button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={handleClose}>×</button>
            <h2>Contact Us</h2>
            <form onSubmit={handleSend}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
