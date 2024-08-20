import express from "express";
import {
  addProduct,
  getProductById,
} from "../controllers/productControllers.js";

const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/productDetails/:id", getProductById);

export default router;
