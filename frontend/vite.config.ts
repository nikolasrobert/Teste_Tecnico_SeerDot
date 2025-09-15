import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//importando ferramenta para lidar com caminhos de arquivos
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/static/",     // caminho que o Django vai servir
  build: {
    outDir: "dist",
    manifest: true,     // opcional, mas futuro-proof
  },

  // --- CORREÇÃO APLICADA ---
  //seção de configuração de atalhos
  resolve: {
    alias: {
      //atalho @ aponta para a pasta "./src"
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

