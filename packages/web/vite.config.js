import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const __dirname = resolve(import.meta.url.replace('file://', ''), '..')

export default defineConfig({
  base: '',
  plugins: [tsconfigPaths()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@test/ui': resolve(__dirname, '../ui/src'),
      '@test/utils': resolve(__dirname, '../utils/src'),
    },
  },
})
