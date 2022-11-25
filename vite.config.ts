import { defineConfig, UserConfigExport } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/data-table.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  test: { globals: true, environment: "jsdom" },
} as UserConfigExport);
