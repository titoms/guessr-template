import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GuessrCore',
      fileName: (format) => `guessr-core.${format === 'es' ? 'js' : 'umd.js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', 'lucide-react', 'i18next', 'react-i18next'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          'lucide-react': 'LucideReact',
          'i18next': 'i18next',
          'react-i18next': 'reactI18next',
        },
      },
    },
  },
});
