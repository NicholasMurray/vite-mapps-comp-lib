import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
      lib: {
          entry: path.resolve(__dirname, 'src/lib/index.js'),
          name: 'vite-mapps-comp-lib',
          formats: ['es', 'umd'],
          fileName: (format) => `vite-mapps-comp-lib.${format}.js`,
      },
      rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
              globals: {
                  react: 'React',
                  'react-dom': 'ReactDOM'
              },
          },
      },
  },
})
