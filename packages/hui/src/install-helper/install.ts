import type { App, Plugin } from 'vue'
import type { SFCWithInstall, HuiOptions } from './typescript'
import { defaultDelegate } from "../delegate"
import { installDirective } from '../directives/install-loadmore'

/**
 * 默认选项
 */
const defaultOptions: HuiOptions = {
  isInstallComponents: false,
  delegate: defaultDelegate,
}
/**
 * 是否已经安装
 */
let isInstalledHu5WebUI = false

/**
 * hua5-web-ui install
 * @param components
 * @returns
 */
export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, opt: HuiOptions = defaultOptions) => {
    if (isInstalledHu5WebUI) return
    const options = { ...defaultOptions, ...opt }

    if (options.isInstallComponents) {
      components.forEach((c) => app.use(c))
    }
    installDirective(app)
    provideGlobalConfig(app, options)
    isInstalledHu5WebUI = true
    window.huiDelegate = { ...defaultOptions.delegate, ...options.delegate }
  }

  return {
    install,
  }
}

/**
 * 全局配置相关
 * 添加到vue 原型上的属性
 * @param options
 * @param app
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function provideGlobalConfig(app: App, options: HuiOptions) {
  // 添加到vue 原型上的属性

}

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
