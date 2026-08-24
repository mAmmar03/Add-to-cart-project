import mongoose from 'mongoose';

// Pehle hum single Cart Item ka design (sub-schema) banayein ge
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product' // Agar aap ke paas product collection hai, to yeh us se link ho jaye ga
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity cannot be less than 1.'],
    default: 1
  },
  price: {
    type: Number,
    required: true
  }
}, { _id: false }); // Is se har single item ki apni alag ID nahi banegi, jo ke sahi practice hai

// Ab main Cart ka design banayein ge
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Jo login user ki ID se link hoga
  },
  items: [cartItemSchema], // Ek cart mein multiple items (array) ho sakti hain
  bill: {
    type: Number,
    required: true,
    default: 0 // Cart ka total bill hum yahan save rakhein ge taake calculation asan ho
  }
}, {
  timestamps: true // Is se createdAt aur updatedAt khud-ba-khud save ho jayein ge
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;