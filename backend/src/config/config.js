import dotenv from 'dotenv';

dotenv.config();

export const config = {
  mysql: {
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  postgres: {
    host: process.env.PG_HOST,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  port: process.env.PORT || 8000,
};
