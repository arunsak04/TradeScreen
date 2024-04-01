// Footer.js

import React from 'react';
import '../styles/Footer.css'; 

const Footer = ({ companyName, currentYear }) => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-text">Created By {companyName} | © {currentYear} All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
