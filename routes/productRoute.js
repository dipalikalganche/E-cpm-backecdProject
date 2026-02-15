import express from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// CREATE PRODUCT
router.post("/create", upload.single("image"), createProduct);

// GET ALL PRODUCTS
router.get("/", getAllProducts);

// GET SINGLE PRODUCT
router.get("/:id", getSingleProduct);

// UPDATE PRODUCT
router.put("/:id", updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;
