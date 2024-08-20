import { ProfitRecord } from "./ProfitRecord.js";

export const initPostgresModels = () => {
  ProfitRecord.sync(); // Sync the PostgreSQL models with the database
};

export { ProfitRecord };
