import { DataTypes, Model } from "sequelize";
import { mysqlSequelize } from "../../config/database.js";

export class Product extends Model {}

Product.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchasePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    salesPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize: mysqlSequelize,
    modelName: "Product",
  }
);
