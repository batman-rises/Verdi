import express from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/product.controller.js";
import { verifyToken } from "../utils/verifyToken.js";
import upload from "../middleware/Upload.js";

const router = express.Router();

router.post("/", verifyToken, upload.single("image"), createProduct); // POST /api/products
router.get("/", getProducts); // GET /api/products

export default router;
