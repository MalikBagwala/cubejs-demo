import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";
export default defineConfig({
  server: {
    https: true,
    port: 3000,
    host: true,
  },
  plugins: [react(), tsconfigPaths(), svgr(), mkcert()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
