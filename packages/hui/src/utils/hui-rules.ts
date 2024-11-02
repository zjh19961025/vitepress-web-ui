import { testUtils } from "@hua5/hua5-utils"

export const HuiRules = {
  /**
   * 是否url
   * @param tips 错误提示
   */
  urlRule: (tips = '请输入正确的链接') => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isNotEmpty(value) && !testUtils.isUrl(value)) {
          return callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 是否版本号
   * @param tips 错误提示
   */
  versionRule: (tips = '请输入正确的版本号') => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isNotEmpty(value) && !testUtils.isVersion(value)) {
          return callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 是否json
   * @param tips 错误提示
   */
  jsonRule: (tips = '请输入一个正确的JsonObject') => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isNotEmpty(value) && !testUtils.isJsonString(value)) {
          return callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 验证整数
   * @param isCanZero 是否能输0
   * @param isCanNegative 是否能输负数
   */
  intNumRule: (isCanZero = true, isCanNegative = true) => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isNotEmpty(value)) {
          const numVal = Number(value)
          if (!Number.isInteger(numVal)) {
            return callback(new Error('输入的值必须是整数'))
          }
          if (!isCanZero && numVal === 0) {
            return callback(new Error('输入的值不能为 0'))
          }
          if (!isCanNegative && numVal < 0) {
            return callback(new Error('输入的值不能为负数'))
          }
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 验证小数
   * @param digit 小数位数
   * @param isCanZero 是否能输0
   * @param isCanNegative 是否能输负数
   */
  digitNumRule: (digit = 2, isCanZero = true, isCanNegative = true) => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isNotEmpty(value)) {
          const numVal = Number(value)
          if (isNaN(numVal)) {
            return callback(new Error('输入的值必须是数字'))
          }
          if (value?.toString()?.split('.')?.[1]?.length > digit) {
            return callback(new Error(`输入的值最多只能有 ${digit} 位小数`))
          }
          if (!isCanZero && numVal === 0) {
            return callback(new Error('输入的值不能为 0'))
          }
          if (!isCanNegative && numVal < 0) {
            return callback(new Error('输入的值不能为负数'))
          }
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 验证码验证
   * @param tips 错误提示
   * @param codeLength 验证码长度
   */
  codeRule: (tips = '请输入正确的验证码', codeLength = 6) => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isNotEmpty(value) && !testUtils.isCode(value, codeLength)) {
          return callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 电话号码验证
   * @param tips 错误提示
   */
  phoneNumRule: (tips = '请输入正确的电话号码') => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isNotEmpty(value) && !testUtils.isMobile(value)) {
          return callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 验证数字范围
   * @param min 最小值
   * @param max 最大值
   * @param tips 错误提示
   */
  numRangeRule: (min, max, tips) => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isNotEmpty(value)) {
          const numVal = Number(value)
          if (isNaN(numVal)) {
            return callback(new Error('请输入数字'))
          }
          if (numVal < Number(min) || numVal > Number(max)) {
            return callback(new Error(tips))
          }
        }
        callback()
      },
      trigger: 'blur',
    }
  },
}
