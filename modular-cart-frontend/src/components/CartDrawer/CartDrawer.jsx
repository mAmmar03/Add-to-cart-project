import React from 'react';
import './CartDrawer.css';

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  totalBill, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  if (!isOpen) return null; // Agar cart open nahi hai, to screen par kuch render na ho

  return (
    // Black transparent overlay jis par click karne se sidebar close ho sake
    <div className="cart-overlay" onClick={onClose}>
      
      {/* "e.stopPropagation()" is liye lagaya taake jab user sidebar ke andar click kare, to sidebar close na ho */}
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.productId}>
                  <div className="cart-item-info">
                    {/* Agar product ka naam backend se nahi bhi aaraha, to default text show ho */}
                    <span className="cart-item-name">{item.name || 'Product'}</span>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="cart-item-actions">
                    {/* Quantity update karne ke liye minus (-) aur plus (+) buttons */}
                    <div className="quantity-controls">
                      <button 
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button 
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    {/* Delete button jo item ko bilkul nikal de ga */}
                    <button 
                      className="remove-item-btn" 
                      onClick={() => onRemoveItem(item.productId)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${totalBill.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" disabled={cartItems.length === 0}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;