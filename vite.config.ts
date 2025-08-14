import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: 'priestleyjoseph46-code/di-coba', // Replace with your actual repository name
  plugins: [react()],
});
export default defineConfig({
  base: 'priestleyjoseph46-code/di-coba', // Replace with your actual repository name
  build: {
    outDir: 'dist', // Ensure the build output directory is correct
  },
  plugins: [react()],
});

    react(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
