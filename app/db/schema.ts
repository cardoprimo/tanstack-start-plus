import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const photosSchema = sqliteTable("photos", {
  	id: int().primaryKey({ autoIncrement: true }),
  	title: text().notNull(),
  	height: int().notNull(),
  	width: int().notNull(),
    src: text().notNull().unique(),
});
