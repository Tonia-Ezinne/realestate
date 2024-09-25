import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, password } = req.body;

    try {
      await dbConnect();

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      // Create new user
      const newUser = await User.create({
        firstname,
        lastname,
        email,
        password, // Storing plain password (not recommended)
      });

      res.status(201).json({
        message: "User registered successfully",
        data: { newUser },
      });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).json({ message: "Internal server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
