/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
import "./css/index.css"
import 'virtual:uno.css'
// install 的时候全局加入的组件
import componentsInstallList from './components-install-list'
// 添加 install 的方法
import { makeInstaller } from './install-helper/install'

export * from "./utils/index"
export * from "./hooks"
export * from './components'
export * from './directives'
// 类型导出
export type { HuiDelegate } from "./delegate"
export type { HuiOptions } from "./install-helper/typescript"

export default makeInstaller([...componentsInstallList])
