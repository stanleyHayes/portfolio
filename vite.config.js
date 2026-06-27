import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

const transformJsxInJs = () => ({
  name: 'transform-jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    const filename = id.split('?')[0];
    if (!filename.endsWith('.js') || !filename.includes('/src/')) {
      return null;
    }

    return transformWithOxc(code, filename, { lang: 'jsx' });
  },
});

export default defineConfig({
  plugins: [transformJsxInJs(), react()],
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    noDiscovery: true,
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router',
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
      '@reduxjs/toolkit',
      'react-redux',
      'framer-motion',
      'react-helmet-async',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'formik',
      'yup',
    ],
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    cssMinify: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three') || id.includes('@react-three')) {
            return 'three';
          }
          if (id.includes('@mui') || id.includes('@emotion')) {
            return 'mui';
          }
          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) {
            return 'redux';
          }
        },
      },
    },
  },
});
