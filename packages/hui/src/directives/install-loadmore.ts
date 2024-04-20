import type { App } from 'vue'
import selectLoadmoreInstaller from './select-loadmore'

/**
 * 需全局挂载的指令
 * @param app
 */
export function installDirective(app: App) {
  selectLoadmoreInstaller.install(app)
}
