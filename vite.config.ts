import { defineConfig } from 'vite'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'

export default defineConfig({
  plugins: [
    unocss({
      include: ['App.ts'],
      presets: [
        presetWind(),
      ],
    }),
  ],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
})