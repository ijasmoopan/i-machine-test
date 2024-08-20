import { DataTypes, Model } from "sequelize";
import { pgSequelize } from "../../config/database.js";

export class ProfitRecord extends Model {}

ProfitRecord.init(
  {
    recordId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize: pgSequelize,
    modelName: "ProfitRecord",
  }
);
