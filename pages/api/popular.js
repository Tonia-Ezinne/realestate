import dbConnect from "@/utils/dbConnect"; // Adjust the path as necessary
import PopularHouses from "@/models/PopularHouses";

export default async function handler(req, res) {
  try {
    await dbConnect();
  } catch (error) {
    return res.status(500).json({ error: "Database connection failed" });
  }

  // Handle the GET request
  if (req.method === "GET") {
    try {
      const popularHouses = await PopularHouses.find({ popular: true }); // Fetch popular houses
      return res.status(200).json(popularHouses);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch popular houses" });
    }
  }

  // Handle the POST request
  if (req.method === "POST") {
    try {
      const { title, location, price, bed, bath, image, sqFt, popular } =
        req.body;

      // Validate the incoming data
      if (!title || !location || !price || !bed || !bath || !image || !sqFt) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const newHouse = new PopularHouses({
        title,
        location,
        price,
        bed,
        bath,
        image,
        sqFt,
        popular: popular !== undefined ? popular : true, // Default to true if not provided
      });

      await newHouse.save();
      return res.status(201).json(newHouse);
    } catch (error) {
      return res.status(500).json({ error: "Failed to add popular house" });
    }
  }

  // Handle any other HTTP method
  return res.status(405).json({ error: "Method not allowed" });
}
