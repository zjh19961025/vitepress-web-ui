import TestVue from './hua-test.vue'

/**
 * 定义instance类型
 */
export type InputInstance = InstanceType<typeof TestVue>

/**
 * 定义props类型
 */
export interface TestUserType{
  name: string,
  sex?: string,
  age?: number,
}
export interface PropsType {
  user: TestUserType,
  msg?: string,
  labels?: string[],
  disabled?: boolean,
}
/**
 * 定义emit类型
 */
export type EmitType = {
  "update:user": [user: TestUserType, msg: string],
  "test": [info: string]
}

