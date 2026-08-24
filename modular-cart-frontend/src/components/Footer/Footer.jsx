import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Made  by <span className="highlight">Muhammad Ammar</span>
        </p>
        
        <div className="footer-links">
          {/* Yahan "href" ke andar apni asli GitHub ID ka link paste kar dein */}
          <a 
            href="https://github.com/mAmmar03" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            GitHub
          </a>
          <span className="separator">|</span>
          {/* Yahan "href" ke andar apne Portfolio ka link paste kar dein */}
          <a 
            href="https://ammar-portfolio-mocha.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            Portfolio
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ModularStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;