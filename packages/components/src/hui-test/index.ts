import { withInstall } from '../utils'
import TestComp from './hui-test.vue'

/**
 * 组件导出
 */
export const HuiTest = withInstall(TestComp)
export default HuiTest
/**
 * 组件相关其他导出
 */
export * from './hui-test'
