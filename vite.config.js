import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      clientPort: 5173,  // Ensure client connects correctly
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("src"), // Ensure this alias is set
    },
  },
})
