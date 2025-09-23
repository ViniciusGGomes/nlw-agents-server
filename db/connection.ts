import postgres from "postgres";
import { env } from "../src/env.ts";

// Vai permitir eu fazer as queries para o meu db
export const sql = postgres(env.DATABASE_URL);

const result = await sql`SELECT 'Hello' as message`;

console.log(result);
