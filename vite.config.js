import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': process.env },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()]
})
