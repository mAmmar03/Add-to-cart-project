import Cart from "./cart.model.js";

// 1. GET CART (User ka cart dekhne ke liye)
export const getCart = async (req, res) => {
  const { userId } = req.params; // URL se userId uthayein ge

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      return res.status(200).json(cart);
    } else {
      // Agar database mein cart nahi mila, to khali cart response mein bhejein ge
      return res.status(200).json({ items: [], bill: 0 });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 2. ADD TO CART (Cart mein product dakhil karne ke liye)
export const addToCart = async (req, res) => {
  const { userId, productId, quantity, price } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // (Condition A) Agar cart pehle se bana hua hai:

      // Check karein ke kya product pehle se cart array mein maujood hai?
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId,
      );

      if (itemIndex > -1) {
        // Agar product pehle se hai, to naya row banane ke bajaye sirf quantity badha dein
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Agar product pehle se nahi hai, to array mein push kar dein
        cart.items.push({ productId, quantity, price });
      }

      // Total bill recalculate karein
      cart.bill = cart.items.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0,
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      // (Condition B) Agar user ka cart pehle se nahi bana hua, to naya cart create karein:
      const newCart = await Cart.create({
        userId,
        items: [{ productId, quantity, price }],
        bill: quantity * price,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 3. UPDATE QUANTITY (Cart mein maujood item ki tadad badhane/kam karne ke liye)
export const updateCartItem = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found for this user" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );

    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Agar quantity 0 ya minus mein ho jaye, to product ko cart se nikal dein
        cart.items.splice(itemIndex, 1);
      } else {
        // Warna jo naye quantity frontend se aayi hai, use set kar dein
        cart.items[itemIndex].quantity = quantity;
      }

      // Bill recalculate karein
      cart.bill = cart.items.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0,
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 4. DELETE ITEM (Product ko bilkul cart se nikalne ke liye)
export const deleteCartItem = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId,
    );

    if (itemIndex > -1) {
      // Splice function ke zariye array se item ko remove kar dein
      cart.items.splice(itemIndex, 1);

      // Bill recalculate karein
      cart.bill = cart.items.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0,
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
