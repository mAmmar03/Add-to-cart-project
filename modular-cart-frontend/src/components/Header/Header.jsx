import React from 'react';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <h2>ModularStore</h2>
      </div>
      
      {/* Jab is button par click hoga, to onCartClick call hoga jo drawer ko open kare ga */}
      <button className="cart-btn" onClick={onCartClick}>
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Cart</span>
        
        {/* Agar cart khali nahi hai, to badge show hoga */}
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>
    </header>
  );
};

export default Header;