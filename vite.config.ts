import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { convertEnv, getRootPath, getSrcPath } from './build/utils'
import { createViteProxy } from './build/config'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()

  const viteEnv = convertEnv(loadEnv(configEnv.mode, process.cwd()))
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_USE_PROXY, VITE_PROXY_TYPE } =
    viteEnv
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      open: false,
      proxy: createViteProxy(VITE_USE_PROXY, VITE_PROXY_TYPE),
    },
  }
})
