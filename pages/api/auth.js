// pages/api/auth.js
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken"; // For token generation

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      await dbConnect();

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Here, we assume the password is valid for demonstration purposes
      // In a real scenario, you'd want to validate the password securely
      if (password !== user.password) {
        // Replace this with your actual password check
        return res.status(401).json({ error: "Invalid password" });
      }

      // Generate a token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({ token });
    } catch (error) {
      console.error("Error during sign-in:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
