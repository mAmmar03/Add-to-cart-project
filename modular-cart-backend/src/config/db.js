import mongoose from "mongoose";

const connetDB = async () => {
  try {
    // process.env se hum database ka link (.env file as) utha raha hain.
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Agar database connect na ho, to server ko band kar dan
  }
};

export default connetDB;
