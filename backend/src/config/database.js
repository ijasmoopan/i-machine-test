import { Sequelize } from "sequelize";
import { config } from "./config.js";

// MySQL Connection
export const mysqlSequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: "mysql",
  }
);

// PostgreSQL Connection
export const pgSequelize = new Sequelize(
  config.postgres.database,
  config.postgres.username,
  config.postgres.password,
  {
    host: config.postgres.host,
    dialect: "postgres",
  }
);
