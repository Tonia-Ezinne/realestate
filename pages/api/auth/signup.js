"user controller"
import dbConnect from "@/utils/dbConnect"; // Ensure this is the correct path to your MongoDB connection utility
import User from "../../../../models/users"; // Adjust path as needed
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, password } = req.body;

    try {
      console.log("Connecting to database...");
      await dbConnect(); // Ensure this is the correct function to connect to your database
      console.log("MongoDB connected successfully");

      // Check if user exists in the database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Creating new user...");

      // Create new user
      const newUser = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });
      console.log("New user created", newUser);

      res.status(201).json({
        message: "User registered successfully",
        data: { newUser },
      });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message, // Optional: include the error message for debugging
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
