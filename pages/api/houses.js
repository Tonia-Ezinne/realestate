import House from "@/models/House";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { page = 1, location, status, bedrooms } = req.query; // Updated to include status
      const pageSize = 9;
      const skip = (page - 1) * pageSize;

      let query = {};
      if (location) {
        query.location = { $regex: location, $options: "i" }; // Case-insensitive search
      }
      if (status) {
        query.status = status; // Filter by property status
      }
      if (bedrooms) {
        query.bedrooms = parseInt(bedrooms, 10); // Filter by number of bedrooms
      }

      const houses = await House.find(query)
        .skip(skip)
        .limit(pageSize);

      const totalHouses = await House.countDocuments(query);
      const totalPages = Math.ceil(totalHouses / pageSize);

      return res.status(200).json({
        houses,
        currentPage: page,
        totalPages,
        totalHouses,
      });
    } catch (error) {
      console.error("Error fetching houses:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
