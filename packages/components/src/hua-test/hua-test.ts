import { ref, watch, toRaw} from "vue"

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
}
/**
 * 定义emit类型
 */
export type EmitType = {
  "userClick": [user: TestUserType, msg: string]
}


export const useHuaTest = function(info: TestUserType) {
  const testVlaue = ref("")
  watch(() => toRaw(info), (newVal) => {
    testVlaue.value + newVal.name
  })
  return {
    testVlaue,
  }
}

