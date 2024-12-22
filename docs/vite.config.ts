import { resolve } from 'node:path'
import { defineConfig } from 'vite'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: /\/@\//,
      replacement: `${pathResolve('src')}/`,
    }],
  },
})