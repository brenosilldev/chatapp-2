import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://chatapp-2-yco2.onrender.com',
        
      },
    },
    cors: true,
    
  },
  
  plugins: [react()],
})
