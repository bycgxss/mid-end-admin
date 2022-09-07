type ProxyType = 'dev' | 'test' | 'prod'

interface ViteEnv {
  VITE_APP_TITLE: string
  VITE_PORT: number
  VITE_PUBLIC_PATH: string
  VITE_USE_PROXY?: boolean
  VITE_PROXY_TYPE?: ProxyType
}
