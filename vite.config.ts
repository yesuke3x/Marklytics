import { defineConfig } from "vite";
import path from "path";

// Multi-page static build for Marklytics (5 HTML pages).
// React skeleton kept on disk but excluded from the build entry list
// so OnSpace deploys only the static landing.
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main:        path.resolve(__dirname, "index.html"),
        analytics:   path.resolve(__dirname, "analytics.html"),
        dashboard:   path.resolve(__dirname, "dashboard.html"),
        "ai-agent":  path.resolve(__dirname, "ai-agent.html"),
        about:       path.resolve(__dirname, "about.html"),
      },
    },
  },
});
