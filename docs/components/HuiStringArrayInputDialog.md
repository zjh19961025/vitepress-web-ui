# 字符串数组编辑弹窗

### 用法
:::demo
HuiStringArrayInputDialog/HuiStringArrayInputDialog
:::

### 属性（props）

| 属性名      | 说明           | 类型    | 默认值 |
| ----------- | -------------- | ------- | ------ |
| title       | 弹窗标题       | string  | 请输入 |
| label       | 输入框标题     | string  | 内容   |
| placeholder | 输入框提示语   | string  | 请输入 |
| rules       | 输入框验证规则 | Array   | -      |
| tips        | 是否显示提示语 | boolean | true   |

### 方法（defineExpose）

| 方法名 | 描述     | 参数                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| open   | 打开弹窗 | (id,payload)，payload={<br />inputInfo\: 输入框的内容<br />} |
| close  | 关闭弹窗 | -                                                            |

### 事件（defineEmits）

| 事件名   | 说明           | 回调参数                                 |
| -------- | -------------- | ---------------------------------------- |
| onSubmit | 点击确定后触发 | (id,inputInfo)，inputInfo\: 输入框的内容 |