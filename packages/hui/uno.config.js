import { defineConfig } from 'unocss'
import { presetHui } from "./config/uno-preset/hui-preset"

export default defineConfig({
  // 预设
  presets: [
    presetHui(),
  ],
})
