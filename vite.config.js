const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        // article: resolve(__dirname, "./article/index.html"),
        article1: resolve(__dirname, "./article-1/index.html"),
        article2: resolve(__dirname, "./article-2/index.html"),
        article3: resolve(__dirname, "./article-3/index.html"),
        fortunes: resolve(__dirname, "./fortunes/index.html"),
        don: resolve(__dirname, "./don/index.html"),
      },
    },
  },
});
