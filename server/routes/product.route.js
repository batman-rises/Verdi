import express from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/product.controller.js";
import { verifyToken } from "../utils/verifyToken.js";
import upload from "../middleware/Upload.js";

const router = express.Router();

router.post(
  "/createProduct",
  verifyToken,
  upload.single("image"),
  createProduct
);
router.get("/getProducts", getProducts);

export default router;
