import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

// configures and exports a database connection instance using drizzle-orm with a database provider called Neon.

// 1. create connection with the database
const sql = neon(process.env.DATABASE_URL!);

// 2. Create an connection instance
// @ts-ignore
const db = drizzle(sql, { schema });

// 3. Exports instance allowing the app to import the connection and interact with the database
export default db;
