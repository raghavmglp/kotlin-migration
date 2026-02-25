// vite.config.ts
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, "app/styles")],
        additionalData: `@import "vars-bridge";`,
      },
    },
  },
  ssr: {
    // This tells Vite to bundle @rescui packages instead of trying to require them
    noExternal: [/^@rescui\//],
  },
});