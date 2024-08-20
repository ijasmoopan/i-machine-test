import { Product } from "../models/mysql/Product.js";
import { ProfitRecord } from "../models/postgres/ProfitRecord.js";

export const addProduct = async (req, res) => {
  const { name, purchasePrice, salesPrice } = req.body;

  try {
    const newProduct = await Product.create({
      name,
      purchasePrice,
      salesPrice,
    });

    console.log({ newProduct });

    const profit = salesPrice - purchasePrice;

    const newProfitRecord = await ProfitRecord.create({
      productId: newProduct.dataValues.productId,
      profit,
    });

    res.status(201).json({
      message: "Product created successfully",
      product: {
        ...newProduct.dataValues,
        profit: {
          ...newProfitRecord.dataValues,
        },
      },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with id ${id} not found` });
    }

    const profitRecord = await ProfitRecord.findOne({
      where: {
        productId: id,
      },
    });

    if (!profitRecord) {
      return res
        .status(404)
        .json({ message: `ProfitRecord with id ${id} not found` });
    }

    res.status(200).json({
      product: {
        ...product.dataValues,
        profit: {
          ...profitRecord.dataValues,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
};
