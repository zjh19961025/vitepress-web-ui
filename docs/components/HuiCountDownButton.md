# 倒计时组件

### 文本类型用法
使用`type`来确定类型，默认为`text`

:::demo
HuiCountDownButton/CountDownText
:::

### 按钮类型用法
:::demo
HuiCountDownButton/CountDownButton
:::

### 属性（props）

| 属性名       | 说明               | 类型             | 默认值                         |
| ------------ | ------------------ | ---------------- | ------------------------------ |
| title        | 显示的文本         | string           | -                              |
| baseClass    | 基础的样式         | string           | -                              |
| timeCount    | 倒计时时长         | number \| string | 60                             |
| enableClass  | **未**禁用时的样式 | string           | !bg-special !text-white        |
| disableClass | 禁用时的样式       | string           | !bg-normal !text-disabled |
| type         | 倒计时显示的类型   | text \| button   | text                           |

### 方法（defineExpose）

| 方法名     | 描述       | 参数 |
| ---------- | ---------- | ---- |
| resetState | 结束倒计时 | -    |

### 事件（defineEmits）

| 事件名 | 说明       | 回调参数 |
| ------ | ---------- | -------- |
| click  | 点击时触发 | -        |

