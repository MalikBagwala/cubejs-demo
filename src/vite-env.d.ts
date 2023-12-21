/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_CUBEJS_TOKEN: string;
    readonly VITE_APP_API_URL: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  