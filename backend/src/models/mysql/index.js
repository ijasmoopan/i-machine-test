import { Product } from "./Product.js";

export const initMySQLModels = () => {
  Product.sync(); // Sync the MySQL models with the database
};

export { Product };
