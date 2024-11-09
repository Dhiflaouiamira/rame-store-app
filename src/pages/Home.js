import React, { useState } from 'react';
import './home.css'; // Make sure this file is imported for styling
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon from React Icons

function Home() {
  const [email, setEmail] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Handle email input change and enable the button if any input exists
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsButtonEnabled(emailValue.length > 0); // Enable button if there is input
  };

  const handleSubscribe = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/emails', { // Update the URL if hosted elsewhere
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Thank you for subscribing! Check your email for a confirmation.');
      } else {
        alert('There was an error. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div>
      {/* Navigation */}
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Gear</a></li>
              <li><a href="#">Records</a></li>
              <li><a href="#">Merch</a></li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Logo Section */}
      <div className="logo-container">
        <img src="images/ramelogo.jpg" alt="Rame Store Logo" className="logo-img" />
      </div>

      {/* Main Content */}
      <main className="content-layout">
        {/* Tagline Section */}
        <div className="intro">
          <p className="tagline">
            For those <span className="highlight">lost in the rhythm</span>,<br />
            for those who <span className="highlight">find themselves between beats</span>.
          </p>
          <p className="subtext">We are just getting started ...</p>
        </div>

        {/* Coming Soon Sections */}
        <section className="coming-soon">
          <div className="grid-item">Records<br /><span>Coming soon...</span></div>
          <div className="grid-item">Digital<br /><span>Coming soon...</span></div>
          <div className="grid-item">Gear<br /><span>Coming soon...</span></div>
          <div className="grid-item">Merch<br /><span>Coming soon...</span></div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="subscribe-box">
            <p>Subscribe & grab a SWEET DISCOUNT before we go live!</p>
            <div className="subscribe-input">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email address"
                required
              />
              <button
                onClick={handleSubscribe}
                className={isButtonEnabled ? '' : 'hint'} // Optional styling for disabled button
                disabled={!isButtonEnabled}
              >
                GET DISCOUNT
              </button>
            </div>
          </div>
          <div className="instagram-box">
      {/* Link to Instagram */}
      <a href="https://www.instagram.com/rame.store" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="instagram-icon" />
      </a>
      <p className="instagram-name">rame.store</p>
      <button className="follow-button">Follow</button>
    </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
