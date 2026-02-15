import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      data: Buffer,
      contentType: String,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    size: {
      type: [String], // multiple sizes
    },

    category: {
      type: String,
      default: "clothing",
    },

    brand: {
      type: String,
      default: "",
    },

    stock: {
      type: Number,
      default: 0,
    },

    reviewsCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
