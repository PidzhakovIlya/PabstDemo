import { defineConfig } from "vite";
import { resolve } from "path";
import { copy } from "vite-plugin-copy";
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  return {
    mode: mode || "development",
    build: {
      outDir: resolve(__dirname, "./dist"),
      assetsDir: "./",
      rollupOptions: {
        output: {
          entryFileNames: "index.bundle.js",
          assetFileNames: "[name][extname]",
        },
      },
    },
    plugins: [
      vue(),
      copy({
        patterns: [
          {
            from: "node_modules/@idscan/idvc2/dist/networks/*",
            to: "faces/networks/[name][ext]",
            toType: "template",
          },
        ],
      }),
      createHtmlPlugin({
        minify: false,
        entry: "src/main.js",
        template: "index.html",
        inject: {
          data: {
            title: "Demo Pages",
          },
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `style.scss`,
        },
      },
    },
  };
});