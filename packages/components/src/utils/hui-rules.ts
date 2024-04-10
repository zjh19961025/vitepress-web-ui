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
   * 是否正整数
   * @param tips 错误提示
   */
  intNumRule: (tips = '请输入一个正整数') => {
    return {
      validator: (rule, value, callback) => {
        if (testUtils.isEmptyNoZero(value) || !Number.isInteger(Number(value)) || (value <= 0)) {
          callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 指定最大小数位验证
   * @param digit 小数位数
   */
  digitNumRule: (digit = 2) => {
    return {
      validator: (rule, value, callback) => {
        if (isNaN(Number(value))) {
          callback(new Error('请输入有效的数字'))
        }
        if ((value?.toString()?.split('.')?.[1]?.length > digit)) {
          callback(new Error(`最多只能有${digit}位小数`))
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 是否非负数
   * @param tips 错误提示
   */
  isPosIntRule: (tips = '请输入一个大于等于0的数字') => {
    return {
      validator: (rule, value, callback) => {
        if (isNaN(Number(value)) || (value < 0)) {
          callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },

  /**
   * 是否非负的整数
   * @param tips 错误提示
   */
  allNumRule: (tips = '请输入一个大于等于0的整数') => {
    return {
      validator: (rule, value, callback) => {
        if (!testUtils.isNonNegInt(value)) {
          callback(new Error(tips))
        }
        callback()
      },
      trigger: 'blur',
    }
  },
}
