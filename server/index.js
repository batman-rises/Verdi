import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Move this right after the dotenv import

import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.route.js";
// dotenv.config();   dotenv should be imported before using any env variables
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend port
    credentials: true, // allow cookies
  })
);
app.use(express.json());
app.use(cookieParser()); // if using cookies

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

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
