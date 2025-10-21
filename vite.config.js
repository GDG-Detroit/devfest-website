import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            { name: 'removeTitle', active: false },
            { name: 'removeDesc', active: false },
            { name: 'prefixIds', params: { prefix: 'svg-' } },
          ],
        },
      },
    }),
    react(),
  ],
  build: {
    sourcemap: true,
  },
  base: './',
})
