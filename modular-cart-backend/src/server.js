import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cartRoutes from "./modules/cart/cart.routes.js"; // <-- Nayi Line (Import cart routes)

// .env file se variables ko load karne ke liye
dotenv.config();

// Database connection function ko call karein
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes Integration
app.use("/api/cart", cartRoutes); // <-- Nayi Line (Cart routes ko link kiya)

// Test Route
app.get("/", (req, res) => {
  res.send("API is running successfully...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
