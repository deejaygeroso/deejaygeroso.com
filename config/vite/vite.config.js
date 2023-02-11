import react from '@vitejs/plugin-react'

import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    base: '/',
    build: {
      // Relative to the root
      outDir: '../dist',
    },
    define: {
      'process.env': {},
    },
    plugins: [
      react({
        // Use React plugin in all *.jsx and *.tsx files
        include: '**/*.{jsx,tsx}',
      }),
    ],
    preview: {
      port: 4000,
    },
    publicDir: '../../public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      },
    },
    root: '../../src',
    server: {
      port: 3000,
    },
  }
})
