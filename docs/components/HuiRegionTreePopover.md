# 地区树选择

### 选择任意省市区
:::demo
HuiRegionTreePopover/HuiRegionTreePopover
:::

### 只能选择区县
:::demo
HuiRegionTreePopover/HuiRegionTreePopoverMustLast
:::

### 属性

| 属性名         | 说明                             | 类型    | 默认值 |
| -------------- | -------------------------------- | ------- | ------ |
| v-model:region | 地区编码                         | string  | -      |
| accordion      | 是否每次只打开一个同级树节点展开 | boolean | true   |
| onlySelectLeaf | 只能选择到地区                   | boolean | false  |
| treeLabelKey   | 树label对应的key                 | string  | title  |
| isReadonly     | 输入框是否只读                   | boolean | true   |
| treeData     | 自定义树的渲染数据[{title: '',value: '',children: [], ...}]                  | Tree | -   |

### 事件（defineEmits）

| 事件名         | 说明             | 回调参数           |
| -------------- | ---------------- | ------------------ |
| onRegionChange | 选中的地区变化时 | (region)，地区编码 |

