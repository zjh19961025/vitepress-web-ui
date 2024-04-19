/**
 * 定义参数类型
 */
export type HuiLineEditDialogComboItem ={
    label: string,
    value: string | number
}

export interface HuiLineEditDialogPropsType {
    /**
     * 弹框标题
     */
    title?: string,
    /**
     * 输入类型 input, textarea, select
     */
    type?: string
    /**
     * 输入标签
     */
    label?: string
    /**
     * row 中的属性
     */
    prop: string,
    /**
     * 占位说明
     */
    placeholder?: string
    /**
     * 输入规则, input 类有效
     */
    rules?: any,
    /**
     * select 列表，label value形式
     */
    selectDic: HuiLineEditDialogComboItem[],
    /**
     * select 是否多选
     */
    isSelectMuti: boolean
    /**
     * 提交是否需要二次确认
     */
    isNeedDoubleConfirm?: boolean,
    /**
     * 二次确认说明
     */
    doubleConfirmTips?: string,
  }

/**
 * 定义emit类型
 */
export type HuiLineEditDialogEmitType = {
  /**
   * 输入修改触发
   */
  "onValueChange": [form: any, row?: any],
  /**
   * 提交触发
   */
  "onSubmit": [row: any, prop: string]
}
