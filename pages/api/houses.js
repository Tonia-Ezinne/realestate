import House from "@/models/House";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  // Handle POST request to create a new house
  if (req.method === "POST") {
    try {
      const {
        title,
        price,
        location,
        image,
        popular,
        bedrooms,
        bathrooms,
        status,
      } = req.body;

      // Validate required fields
      if (
        !title ||
        !price ||
        !location ||
        !image ||
        !bedrooms ||
        !bathrooms ||
        !status
      ) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newHouse = new House({
        title,
        price,
        location,
        image,
        popular: popular || false,
        bedrooms,
        bathrooms,
        status,
      });

      await newHouse.save();
      return res
        .status(201)
        .json({ message: "House created successfully", house: newHouse });
    } catch (error) {
      console.error("Error creating house:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Handle GET request to fetch houses
  else if (req.method === "GET") {
    try {
      const {
        page = 1,
        sort,
        status,
        location,
        title, // Added title to query parameters
        bedrooms,
      } = req.query;
      const pageSize = 9;
      const skip = (page - 1) * pageSize;

      let query = {};

      if (status) {
        query.status = status;
      }
      if (location) {
        query.location = { $regex: location, $options: "i" };
      }
      if (title) {
        query.title = { $regex: title, $options: "i" }; // Search by title
      }
      if (bedrooms) {
        query.bedrooms = parseInt(bedrooms, 10);
      }

      const sortOptions = {};
      if (sort === "price-asc") sortOptions.price = 1;
      if (sort === "price-desc") sortOptions.price = -1;

      const houses = await House.find(query)
        .skip(skip)
        .limit(pageSize)
        .sort(sortOptions);

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
