import type { Config } from "drizzle-kit";
import "dotenv/config";

const config: Config = {
 schema: "./src/lib/db/schema.ts",
 out: "./src/lib/db/migrations",
 connectionString: process.env.DATABASE_URL,
 breakpoints: true,
};

export default config;
