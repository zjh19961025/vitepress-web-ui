import { testUtils } from "@hua5/hua5-utils"

export const HuiRules = {
  /**
   * 是否url
   * @param isCanEmpty 是否可以为空，默认不能为空
   * @param tips 错误提示
   */
  urlRule: (isCanEmpty = false, tips = '请输入正确的链接') => {
    return {
      validator: (rule, value, callback) => {
        if (isCanEmpty && testUtils.isEmpty(value)) callback()
        if (testUtils.isNotEmpty(value) && testUtils.isUrl(value)) callback()
        else {
          callback(
            new Error(tips),
          )
        }
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
        if (testUtils.isNotEmpty(value) && testUtils.isVersion(value)) callback()
        else {
          callback(
            new Error(tips),
          )
        }
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
          callback(new Error(tips))
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
        const numVal = Number(value)
        // 如果不是整数，则返回错误
        if (!Number.isInteger(numVal) || testUtils.isEmpty(value)) {
          return callback(new Error('输入的值不能为空且必须是整数'))
        }
        // 如果不允许输入 0，且输入的值是 0，则返回错误
        if (!isCanZero && numVal === 0) {
          return callback(new Error('输入的值不能为 0'))
        }
        // 如果不允许输入负数，且输入的值是负数，则返回错误
        if (!isCanNegative && numVal < 0) {
          return callback(new Error('输入的值不能为负数'))
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
        const numVal = Number(value)
        // 如果不是数字，则返回错误
        if (isNaN(numVal) || testUtils.isEmpty(value)) {
          return callback(new Error('输入的值不能为空且必须是数字'))
        }
        // 如果不满足小数位数要求，则返回错误
        if (value?.toString()?.split('.')?.[1]?.length > digit) {
          return callback(new Error(`输入的值最多只能有 ${digit} 位小数`))
        }
        // 如果不允许输入 0，且输入的值是 0，则返回错误
        if (!isCanZero && numVal === 0) {
          return callback(new Error('输入的值不能为 0'))
        }
        // 如果不允许输入负数，且输入的值是负数，则返回错误
        if (!isCanNegative && numVal < 0) {
          return callback(new Error('输入的值不能为负数'))
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
        if (testUtils.isEmpty(value) || !testUtils.isCode(value, codeLength)) {
          callback(new Error(tips))
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
        if (testUtils.isEmpty(value) || !testUtils.isMobile(value)) {
          callback(new Error(tips))
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
  numRangeRule: (min: number | string, max: number | string, tips: string) => {
    return {
      validator: (rule, value, callback) => {
        if (isNaN(Number(value))) {
          callback(new Error('请输入数字'))
        }
        if (Number(value) < Number(min) || Number(value) > Number(max)) {
          callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },
}
