import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "../env.ts";
import { schema } from "./schema/index.ts";

// Vai permitir eu fazer as queries para o meu db
export const sql = postgres(env.DATABASE_URL);

// Passo a minha conexão (sql), e no segundo parâmetro eu passo o meu schema
export const db = drizzle(sql, {
  schema,
  casing: "snake_case", // formato das tabelas
});
