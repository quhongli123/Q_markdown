import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
const pathSrc = resolve(__dirname, "src");

export default defineConfig({
  base:"./",
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      // 定义全局 SCSS 变量
      scss: {
        javascriptEnabled: true,
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `,
      },
    },
  },
  plugins: [vue()],
  
})
