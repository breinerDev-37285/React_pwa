import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const src = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(src, 'app/components'),
      "@modules": resolve(src, 'app/modules'),
      "@router": resolve(src, 'app/router'),
      "@assets": resolve(src, 'app/assets'),
      "@hooks": resolve(src, 'app/hooks'),
      "@pages": resolve(src, 'app/pages'),
      "@interfaces": resolve(src, 'app/interfaces'),
      "@helpers": resolve(src, 'app/helpers'),
    }
  }
})
