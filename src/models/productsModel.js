import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  ratingAmt: {
    type: String,
    required: true,
  },
  options: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  }
});

const Product = mongoose.model("Product", productSchema);

export { Product };
