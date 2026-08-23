import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/portfolio/",
  publicDir: "site-public",
  plugins: [react()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
