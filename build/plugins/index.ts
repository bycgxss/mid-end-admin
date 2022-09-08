import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

import { setupMockPlugin } from './mock'

export function setupVitePlugins(
  viteEnv: ViteEnv,
  isBuild: boolean
): PluginOption[] {
  const plugins = [vue()]
  if (viteEnv.VITE_USE_MOCK) {
    plugins.push(setupMockPlugin(isBuild))
  }
  return plugins
}
