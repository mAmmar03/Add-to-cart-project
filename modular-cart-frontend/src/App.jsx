import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import CartDrawer from './components/CartDrawer/CartDrawer.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

// Extended detailed products grid matching the new futuristic layout
const PRODUCTS = [
  { 
    _id: "64f1a2b3c4d5e6f7a8b9c0a2", 
    name: "Smart Watch", 
    price: 250, 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    accentColor: "#00d2ff", // Neon Blue
    glowColor: "rgba(0, 210, 255, 0.45)",
    rating: 4,
    desc: "Lorem ipsum dolor sit amet, ederereli consectetuer adipis.",
    features: [
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." },
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." },
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." }
    ]
  },
  { 
    _id: "64f1a2b3c4d5e6f7a8b9c0a1", 
    name: "Headphones", 
    price: 375, 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    accentColor: "#d946ef", // Neon Pink/Purple
    glowColor: "rgba(217, 70, 239, 0.45)",
    rating: 4,
    desc: "Lorem ipsum dolor sit amet, ederereli consectetuer adipis.",
    features: [
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." },
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." },
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." }
    ]
  },
  { 
    _id: "64f1a2b3c4d5e6f7a8b9c0a4", 
    name: "Gamepad", 
    price: 180, 
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    accentColor: "#f97316", // Neon Orange
    glowColor: "rgba(249, 115, 22, 0.45)",
    rating: 4,
    desc: "Lorem ipsum dolor sit amet, ederereli consectetuer adipis.",
    features: [
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." },
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." },
      { title: "YOUR TITLE", value: "Lorem ipsum dolor sit amet, consectetuer." }
    ]
  }
];

const DUMMY_USER_ID = "64f1a2b3c4d5e6f7a8b9c0d1";
const API_BASE_URL = "http://localhost:5000/api/cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchCartData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${DUMMY_USER_ID}`);
      const backendItems = response.data.items || [];
      
      const mappedItems = backendItems.map(item => {
        const localProd = PRODUCTS.find(p => p._id === item.productId);
        return {
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          name: localProd ? localProd.name : "Product",
        };
      });

      setCartItems(mappedItems);
      setTotalBill(response.data.bill || 0);
    } catch (error) {
      console.error("Error fetching cart from database:", error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      await axios.post(`${API_BASE_URL}/add`, {
        userId: DUMMY_USER_ID,
        productId: product._id,
        quantity: 1,
        price: product.price
      });
      fetchCartData();
      setIsCartOpen(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      await axios.put(`${API_BASE_URL}/update`, {
        userId: DUMMY_USER_ID,
        productId,
        quantity: newQuantity
      });
      fetchCartData();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      await axios.delete(`${API_BASE_URL}/remove`, {
        data: { userId: DUMMY_USER_ID, productId }
      });
      fetchCartData();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (

    
    <div className="App">

      <Header 
        cartCount={totalCartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      <main className="main-content">
        <h1 className="section-title">Futuristic Gaming Gear</h1>
        
        <div className="products-grid">
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product._id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </main>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        totalBill={totalBill}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <Footer />
    </div>
  );
}

export default App;