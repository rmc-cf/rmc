import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/rmc' : '/',  // 根据环境设置 base 路径
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})