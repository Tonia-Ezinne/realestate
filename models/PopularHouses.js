import mongoose from "mongoose";

const PopularSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  bed: { type: Number, required: true },
  bath: { type: Number, required: true },
  image: { type: String, required: true },
  sqFt: { type: Number, required: true },
  popular: { type: Boolean, default: true }, // Assuming you need this field
});

export default mongoose.models.PopularHouses ||
  mongoose.model("PopularHouses", PopularSchema);
