import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import "@fontsource/preahvihear/index.css";
          @import "@fontsource/plus-jakarta-sans/400.css";
        `
      }
    }
  }
});