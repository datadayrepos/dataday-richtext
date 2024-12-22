import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      fileName: (format) => {
        if (format === 'es')
          return 'ddtw-vue.mjs' // Use .mjs for ES modules
        if (format === 'umd')
          return 'ddtw-vue.umd.cjs' // Use .cjs for UMD (CommonJS)
        return `ddtw-vue.${format}.js` // Fallback for other formats if added
      },
      formats: ['es', 'umd'], // Include both ES and UMD formats
      name: 'ddtw-vue',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
    target: 'esnext',
  },
  plugins: [vue()],
  resolve: {
    alias: [{
      find: /\/@\//,
      replacement: `${pathResolve('src')}/`,
    }],
    dedupe: ['vue'],
  },
  root: '.',
})