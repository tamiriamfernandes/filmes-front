// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({}) => {
  return defineConfig({
    server: {
      host: '0.0.0.0',
      port: 80,
    },
    preview: {
      port: 80
    },
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 1500,
    }
  });
}