import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/static/",     // caminho que o Django vai servir
  build: {
    outDir: "dist",
    manifest: true,     // opcional, mas futuro-proof
  },
});
