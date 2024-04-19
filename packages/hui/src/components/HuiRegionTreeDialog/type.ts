/**
 * HuiRegionTreeDialog 需要的props参数
 */
export interface HuiRegionTreeDialogPropsType {
  /** 是否每次只打开一个同级树节点展开 */
  accordion?: boolean,
  /** 只能选择到地区 */
  nodeKey?: string,
  /** 树label对应的key */
  treeLabelKey?: string,
  /** 提交时是否关闭弹窗 */
  isConfirmClose?: boolean
  /** 是否显示选择框 */
  showCheckbox?: boolean
}

/**
 * HuiRegionTreeDialog emit事件
 */
export type HuiRegionTreePopoverEmitType = {
  onSubmit: [region: { id: string, regionList: any[] }]
}
