import { defineConfig } from 'unocss'
import { presetWui } from "./config/uno-preset"

export default defineConfig({
  // 预设
  presets: [
    presetWui(),
  ],
})
