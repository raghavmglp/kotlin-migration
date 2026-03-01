import { reactRouter } from "@react-router/dev/vite";
import path from "node:path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, "app/styles")],
      },
    },
  },
  ssr: {
    noExternal: [/^@rescui\//],
  },
});
