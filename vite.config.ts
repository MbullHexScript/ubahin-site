
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  root: "src",

  input: {
    main: fileURLToPath(
      new URL("./src/index.html", import.meta.url)
    ),
    notFound: fileURLToPath(
      new URL("./src/404.html", import.meta.url)
    ),
  },

  server: {
    port: 5173,
    strictPort: true,
  },

  build: {
    outDir: "../dist-site",
    emptyOutDir: true,
  },
});
