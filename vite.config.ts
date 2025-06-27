import { defineConfig } from "vite"; // ✅ Use 'vite' instead of 'vitest/config' unless ONLY testing
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext", // ✅ Ensure Vite builds for modern JS (matches tsconfig)
    outDir: "dist",   // ✅ Explicit output directory
  }
});
