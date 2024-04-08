import type { App, Plugin } from 'vue'
import type { SFCWithInstall } from './typescript'
import { addUnit, addStyle } from '../hui-tool'

/**
 * option选项
 */
type Hua5WebUIOptions = {
  isInstallComponents: boolean
}

/**
 * 默认选项
 */
const defaultOptions:Hua5WebUIOptions = {
  isInstallComponents: false,
}
/**
 * 是否已经安装
 */
let isInstalledHu5WebUI = false

/**
 * 来源于 element-plus 中, 给每个组件添加 install 方法
 * @param main
 * @param extra
 * @returns
 */
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, opt: Hua5WebUIOptions = defaultOptions) => {
    if (isInstalledHu5WebUI) return
    const options = { ...defaultOptions, ...opt }

    if (options.isInstallComponents) {
      components.forEach((c) => app.use(c))
    }

    if (options) provideGlobalConfig(options, app)
    isInstalledHu5WebUI = true
  }

  return {
    // version,
    install,
  }
}

/**
 * 全局配置相关
 * @param options
 * @param app
 */
function provideGlobalConfig(options: object, app: App) {
  app.config.globalProperties.addUnit = addUnit
  app.config.globalProperties.addStyle = addStyle
}
