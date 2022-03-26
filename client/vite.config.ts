import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const path_src = resolve(__dirname, 'src', 'app')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(path_src, 'assets'),
      "@modules": resolve(path_src, 'modules'),
      "@router": resolve(path_src, 'router'),
      "@utils": resolve(path_src, 'utils'),
      "@helpers": resolve(path_src, 'helpers'),
      "@redux": resolve(path_src, 'redux'),
      "@context": resolve(path_src, 'context')
    }
  }
})
