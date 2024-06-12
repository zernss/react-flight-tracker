import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  resolve: {
    dedupe: [
      "@daniel.neuweiler/ts-lib-module",
      "@emotion/react",
      "@emotion/styled",
      "@mui/material",
      "@mui/icons-material",
      "react",
      "react-dom",
      "react-window"
    ]
  },
  build: {
    outDir: './build',
    // sourcemap: true,
    minify: false,
  },
  assetsInclude: ['png', 'jpg'],
  server: {
    proxy: {
      '/api': {
        target: 'https://opensky-network.org',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});
