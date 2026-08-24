import express from 'express';
import { 
  getCart, 
  addToCart, 
  updateCartItem, 
  deleteCartItem 
} from './cart.controller.js'; // Extension '.js' likhna zaroori hai

const router = express.Router();

// 1. GET User Cart
// Route: GET /api/cart/:userId
router.get('/:userId', getCart);

// 2. ADD Item to Cart
// Route: POST /api/cart/add
router.post('/add', addToCart);

// 3. UPDATE Item Quantity
// Route: PUT /api/cart/update
router.put('/update', updateCartItem);

// 4. REMOVE Item from Cart
// Route: DELETE /api/cart/remove
router.delete('/remove', deleteCartItem);

export default router;