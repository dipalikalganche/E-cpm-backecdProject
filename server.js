import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
connectDB();

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
