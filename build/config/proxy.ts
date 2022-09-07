import type { ProxyOptions } from 'vite'

const proxyConfigMap: Record<ProxyType, ProxyConfig> = {
  dev: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
  test: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
  prod: {
    prefix: '/api',
    target: 'http://localhost:8080',
  },
}

export function createViteProxy(isUseProxy = true, proxyType: ProxyType) {
  if (!isUseProxy) {
    return undefined
  }

  const proxyConfig = proxyConfigMap[proxyType]
  const proxy: Record<string, string | ProxyOptions> = {
    [proxyConfig.prefix]: {
      target: proxyConfig.target,
      changeOrigin: true,
      rewrite: (path: string) =>
        path.replace(new RegExp(`^${proxyConfig.prefix}`), ''),
    },
  }
  return proxy
}
