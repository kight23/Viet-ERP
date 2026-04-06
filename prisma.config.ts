import { defineConfig, env } from "@prisma/config";
import "dotenv/config"; // Required to load .env variables

export default defineConfig({
  datasource: {
    url: env("DATABASE_URL"), // Or process.env.DATABASE_URL
  },
});
