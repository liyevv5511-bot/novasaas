import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is '/' for local dev and root hosts (Vercel/Netlify);
// the GitHub Pages workflow sets VITE_BASE to '/novasaas/'.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
