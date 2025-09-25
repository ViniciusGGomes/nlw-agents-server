import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// Passo o nome("rooms") e as colunas que a minha tabela vai ter {}
export const rooms = pgTable("rooms", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(),
});
