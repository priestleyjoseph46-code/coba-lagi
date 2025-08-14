import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/<your-repository-name>/', // Replace with your GitHub repository name
  plugins: [react()],
});

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
