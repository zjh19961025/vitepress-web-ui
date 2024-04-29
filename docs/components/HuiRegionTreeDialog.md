# 地区选择弹框

### 基础用法
:::demo
HuiRegionTreeDialog/HuiRegionTreeDialog
:::

### 不自动关闭
:::demo
HuiRegionTreeDialog/HuiRegionTreeDialogNotClose
:::

### 属性（props）

| 属性名         | 说明                             | 类型    | 默认值 |
| -------------- | -------------------------------- | ------- | ------ |
| accordion      | 是否每次只打开一个同级树节点展开 | boolean | false  |
| nodeKey        | 每个树节点用来作为唯一标识的属性 | string  | id     |
| treeLabelKey   | 树label对应的key                 | string  | title  |
| isConfirmClose | 提交时是否关闭弹窗               | boolean | true   |
| showCheckbox   | 是否显示选择框                   | boolean | true   |

### 方法（defineExpose）

| 方法名 | 描述     | 参数                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| open   | 打开弹窗 | (id,payload)，payload={<br />defaultCheckedKeys\: [100101] 默认选中的地区<br />disabledRegions\: [120103]   禁用的地区<br />} |
| close  | 关闭弹窗 | -                                                            |

### 事件（defineEmits）

| 事件名   | 说明           | 回调参数                                                     |
| -------- | -------------- | ------------------------------------------------------------ |
| onSubmit | 点击提交后触发 | (region)，region={<br />id<br />regionList 选中的地区code<br />} |

