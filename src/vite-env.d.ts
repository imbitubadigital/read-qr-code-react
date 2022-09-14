/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_PAYMENT_ENV: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
