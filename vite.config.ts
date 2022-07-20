import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
const { resolve } = require('path');

function pathResolve(dir) {
  return resolve(__dirname, dir);
}
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '/@/': pathResolve('./src')
    },
  },
});
