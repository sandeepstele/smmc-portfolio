import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BASE_PATH } from "./src/site.js";

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: ["e2e/**", "node_modules/**"],
    globals: true,
  },
});
