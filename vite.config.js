import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'next/navigation': path.resolve(__dirname, './src/stubs/next-navigation.js'),
    },
  },
  optimizeDeps: {
    include: ['@vercel/analytics'],
  },
})
