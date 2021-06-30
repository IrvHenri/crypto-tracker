import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-row">
        <h1>Coin Tracker</h1>
        <div className="footer-links-container">
          <div>
            <h3>Products</h3>
            <ul>
              <li>Blockchain Explorer</li>
              <li>Crypto API</li>
              <li>Crypto Indices</li>
              <li>Interest</li>
              <li>Jobs Board</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Methodology</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>
            <ul>
              <li>Request Form</li>
              <li>Contact Support</li>
              <li>FAQ</li>
              <li>Glossary</li>
            </ul>
          </div>
          <div>
            <h3>Socials</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Telegram</li>
              <li>Instagram</li>
              <li>Interactive Chat</li>
            </ul>
          </div>
        </div>
      </div>

      <p> © 2021 Coin Tracker All rights Reserved</p>
    </footer>
  );
};

export default Footer;
