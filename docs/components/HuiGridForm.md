# 动态网格表单

### 动态网格表单用法

:::demo
HuiGridForm/HuiGridForm
:::

### 属性

| 属性名      | 说明             | 类型                  | 默认值 |
| ----------- | ---------------- |---------------------| ------ |
| isCanAppend | 是否可以进行添加 | boolean             | false  |
| handSort    | 是否可以排序     | boolean             | false  |
| handDelete  | 是否可以删除     | boolean             | false  |
| config      | 组件的配置项     | hua5DynamicConfig[] | -      |
| listData    | 组件的数据源     | obj[]               | []     |

**hua5DynamicConfig说明**

| 属性名      | 说明                          | 类型                              | 默认值           |
| ----------- | ----------------------------- |---------------------------------| ---------------- |
| prop        | 列表项的key                   | string                          | -                |
| append      | 输入框append插槽显示的内容    | string                          | -                |
| placeholder | 提示内容                      | string                          | -                |
| type        | 显示输入框还是下拉选择        | 'input' \| 'select'             | 请选择 \| 请输入 |
| dataType    | 输入框数据类型 默认为number   | string                          | number           |
| style       | 输入框的style主要用来设置颜色 | string                          | -                |
| dict        | 下拉选择的数据字典            | label、value对象数组                 | -                |
| readonly    | 是否只读                      | boolean                         | false            |
| title       | 标题                          | string                          | -                |
| errMsg      | 错误提示信息                  | string                          | -                |
| width       | 标题宽度                      | string                          | -                |
| attr        | v-bind其他属性值              | input 和 select 属性，如：input-style | -                |

### 方法（defineExpose）

| 方法名  | 描述             | 参数 |
| ------- | ---------------- | ---- |
| getData | 获取组件最终数据 | -    |

