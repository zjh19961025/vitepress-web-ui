# 地区下拉选择

### 地区下拉选择用法

:::demo
HuiRegionTreeSelect/HuiRegionTreeSelect
:::

### 属性

| 属性名            | 说明             | 类型                | 默认值 |
| -----------------| ---------------- | ------------------- | ------ |
| v-model  | 双向绑定的地区编码  | 单选：string, 多选：[] | -      |
| disabledRegions  | 禁用地区编码，目前只能禁用叶子节点     | []    | -    |
| treeData     | 自定义树的渲染数据[{title: '',value: '',children: [], ...}]，非必传，不传则为全部数据 | Tree | regionData |

HuiRegionTreeSelect说明
[文档参考element-ui,兼容el-tree-select 和 el-select 属性](https://element-plus.org/zh-CN/component/tree-select.html)
