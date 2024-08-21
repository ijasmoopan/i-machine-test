import express from "express";
import {
  addProduct,
  getProductById,
  getProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/addProduct", addProduct);
router.get("/productDetails/:id", getProductById);

export default router;
