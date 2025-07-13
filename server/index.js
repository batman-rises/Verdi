import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.route.js";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend port
    credentials: true, // allow cookies
  })
);
app.use(express.json());
app.use(cookieParser()); // if using cookies

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
