import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    watch: {
      // 监控/src/components/下面的组件改变 就会触发hmr
      ignored: ['!**/src/components/**']
    }
  },
  plugins: [vue()]
})
