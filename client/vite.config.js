import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: './',
  // MEMO:この記述は<root>ディレクトリが省略されているので、すなわちsrc/publicを指す
  publicDir: 'public',
  server:{
    port:3000,
    open: true,
  },
  resolve:{
    // pathをプロジェクトルートからaliasで指定
    alias:{
     '@': path.resolve(__dirname, './src/')
    },
  },
  build:{
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
})
