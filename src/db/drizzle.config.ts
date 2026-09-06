import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./schema",
  dbCredentials: {
    host: "",
    database: "",
    port: 0,
    user: "",
    password: "",
  },
  introspect: { casing: "camel" },
  out: "./drizzle",
});
