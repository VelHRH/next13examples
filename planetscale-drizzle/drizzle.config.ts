import type { Config } from "drizzle-kit";
import "dotenv/config";

const config: Config = {
 schema: "./src/db/schema.ts",
 connectionString: process.env.DATABASE_URL,
};

export default config;
