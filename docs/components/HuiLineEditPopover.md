# 表格排序修改悬浮组件

### 用法
:::demo
HuiLineEditPopover/HuiLineEditPopover
:::

### 属性（props）

| 属性名            | 说明                           | 类型                                              | 默认值            |
| ----------------- | ------------------------------ | ------------------------------------------------- | ----------------- |
| :row="popoverRow" | 传递给组件的输入框双向绑定的值 | {<br />    [key:string]:string \| number;<br /> } | -                 |
| width             | 组件宽度                       | number                                            | 180               |
| baseClass         | 组件基础样式类                 | string                                            | text-primary px-4 |
| disabled          | 组件输入框是否禁用             | boolean                                           | false             |
| rules               | 输入规则                     | any                          | -                    |

### 方法（defineEmits）

| 方法名  | 描述                                           | 参数                         |
| ------- | ---------------------------------------------- | ---------------------------- |
| confirm | 组件确定事件（popoverRow），返回双向绑定的数据 | [key:string]:string \|number |
