import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // This is a built-in Node.js module for handling file paths

export default defineConfig({
  // This tells Vite to use React
  plugins: [react()],
  
  // This sets up path resolution
  resolve: {
    alias: {
      // '@' will now point to the 'src' directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})