import {
 int,
 mysqlEnum,
 mysqlTable,
 serial,
 uniqueIndex,
 varchar,
} from "drizzle-orm/mysql-core";

export const books = mysqlTable(
 "books",
 {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
 },
 (books) => ({
  nameIndex: uniqueIndex("name_idx").on(books.name),
 })
);
