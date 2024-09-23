/**
 * HuiRegionTreePopover 需要的props参数
 */
export interface HuiRegionTreePopoverPropsType {
  /** 是否每次只打开一个同级树节点展开 */
  accordion?: boolean,
  /** 只能选择到地区 */
  onlySelectLeaf?: boolean,
  /** 树label对应的key */
  treeLabelKey?: string,
  /** 输入框只读 不可编辑 */
  isReadonly?: boolean,
}

/**
 * HuiRegionTreePopover emit事件
 */
export type HuiRegionTreePopoverEmitType = {
  onRegionChange: [region: string]
}
