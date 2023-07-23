import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/period': {
        target: 'http://www.culture.go.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/period/, ''),
      },
    },
  },
});
