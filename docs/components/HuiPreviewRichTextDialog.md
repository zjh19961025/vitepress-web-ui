# 富文本预览弹窗

### 用法

:::demo
HuiPreviewRichTextDialog/HuiPreviewRichTextDialog
:::

### 属性

| 属性名 | 说明     | 类型   | 默认值   |
| ------ | -------- | ------ | -------- |
| title  | 弹窗标题 | string | 内容预览 |

### 方法（defineExpose）

| 方法名 | 描述     | 参数                                             |
| ------ | -------- | ------------------------------------------------ |
| open   | 打开弹窗 | ('',payload),payload\: { content \:  富文本内容 } |
| close  | 关闭弹窗 | -                                                |
