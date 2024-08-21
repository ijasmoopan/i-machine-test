import express from "express";
import cors from "cors";
import { initMySQLModels } from "./models/mysql/index.js";
import { initPostgresModels } from "./models/postgres/index.js";
import healthRoutes from "./routes/healthRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Initialize Models
initMySQLModels();
initPostgresModels();

// Routes
app.use("/", productRoutes);
app.use("/health", healthRoutes);

export default app;
