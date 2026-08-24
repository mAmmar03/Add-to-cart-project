import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  
  // Stars system calculate karne ka helper function
  const renderStars = (rating, color) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          style={{ color: i <= rating ? color : '#374151', marginRight: '3px' }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      {/* Price Badge with custom accent color background */}
      <div className="price-badge" style={{ backgroundColor: product.accentColor }}>
        ${product.price}
      </div>

      {/* Top Image container with dynamic radial glow behind */}
      <div className="product-image-container">
        <div 
          className="neon-glow" 
          style={{ background: `radial-gradient(circle, ${product.glowColor} 0%, rgba(0,0,0,0) 70%)` }}
        ></div>
        <img src={product.image} alt={product.name} />
      </div>
      
      {/* Split Details Panel */}
      <div className="product-details-panel">
        
        {/* Left Column: Name, Description and Stars */}
        <div className="info-left-col">
          <h3 className="card-product-name">{product.name}</h3>
          <p className="card-product-desc">{product.desc}</p>
          <div className="stars-container">
            {renderStars(product.rating, product.accentColor)}
          </div>
        </div>

        {/* Dynamic Vertical Line Divider */}
        <div className="vertical-divider" style={{ backgroundColor: product.accentColor }}></div>

        {/* Right Column: Dynamic features list */}
        <div className="info-right-col">
          {product.features && product.features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <span className="feature-title" style={{ color: product.accentColor }}>
                {feature.title}
              </span>
              <span className="feature-desc">{feature.value}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Centered Pill style button */}
      <div className="btn-container">
        <button 
          className="add-to-cart-pill" 
          style={{ backgroundColor: product.accentColor }}
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;