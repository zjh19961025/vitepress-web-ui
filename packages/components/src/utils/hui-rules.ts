import { testUtils } from "@hua5/hua5-utils"

export const HuiRules = {
  /**
   * 是否url
   * @param tips
   * @returns
   */
  urlRule: (tips = '请输入正确的链接') => {
    return {
      validator: (rule, value, callback) => {
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
   * @returns
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
}
