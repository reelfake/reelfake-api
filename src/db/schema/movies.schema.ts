import { sql } from "drizzle-orm";
import {
  pgTable,
  customType,
  integer,
  smallint,
  varchar,
  text,
  date,
  real,
  bigint,
  numeric,
  timestamp,
  snakeCase,
} from "drizzle-orm/pg-core";

export const citext = customType<{ data: string }>({
  dataType() {
    return "citext";
  },
});

export const moviesTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  tmdbId: integer().unique().notNull(),
  imdbId: varchar({ length: 60 })
    .unique()
    .default(sql`null`),
  title: citext().notNull(),
  originalTitle: varchar({ length: 60 }).notNull(),
  overview: text(),
  runtime: integer(),
  releaseDate: date().notNull(),
  genreIds: integer().array().notNull(),
  originCountryIds: integer().array().notNull(),
  languageId: smallint().notNull(),
  movieStatus: varchar({ length: 20 }).notNull(),
  popularity: real().notNull(),
  budget: bigint({ mode: "bigint" }).notNull(),
  revenue: bigint({ mode: "bigint" }).notNull(),
  ratingAverage: real().notNull(),
  ratingCount: integer().notNull(),
  posterUrl: varchar({ length: 90 }),
  rentalRate: numeric({
    mode: "string",
    precision: 4,
    scale: 2,
  })
    .notNull()
    .default("20.00"),
  createdAt: timestamp({
    mode: "date",
    withTimezone: false,
  })
    .notNull()
    .default(sql`CURRENT_DATE`),
  updatedAt: timestamp({
    mode: "date",
    withTimezone: false,
  })
    .notNull()
    .default(sql`CURRENT_DATE`),
});
