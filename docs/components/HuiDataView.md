# 详情表格

### 详情表格用法

:::demo
HuiDataView/HuiDataView
:::

### 属性

| 属性名     | 说明             | 类型                | 默认值 |
| ---------- | ---------------- | ------------------- | ------ |
| lineCount  | 一行显示几个     | number              | 1      |
| titleWidth | 标题列的宽度     | string \| number    | 100    |
| config     | 组件的配置       | HuiDataViewConfig[] | -      |
| data       | 组件设置回显的值 | obj                 | -      |

HuiDataViewConfig说明

| 属性名    | 说明                    | 类型           | 默认值 |
| --------- | ----------------------- | -------------- | ------ |
| prop      | 表格项主键              | string         | -      |
| value     | 表格项的值              | string \| null | -      |
| title     | 表格每一项的标题        | string         | -      |
| rightText | 列表项右侧文字          | string         | -      |
| class     | value项的动态class      | string         | -      |
| handler   | rightText的点击触发事件 | function       | -      |

### 插槽使用

标题 ：prop + '-title'  

value: prop + '-left' 

右侧文字：prop + '-right'
