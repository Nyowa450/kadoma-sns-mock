import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  build:{
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
})
