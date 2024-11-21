import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: true,
      },
      optipng: {
        optimizationLevel: 7,
      },
      svgo: {
        plugins: [
          { removeViewBox: false }, // Keep viewBox in SVGs
          { removeEmptyAttrs: false }, // Keep empty attributes
        ],
      },
      jpegtran: {
        progressive: true,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // More chunking if needed
        }
      }
    },
    chunkSizeWarningLimit: 2000,
  },
});
