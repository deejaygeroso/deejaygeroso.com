import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../../src'),
		},
	},
  plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: path.resolve(__dirname, '../../config/vite/setup.js'),
	}
})