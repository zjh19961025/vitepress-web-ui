# 普通弹框通用逻辑

### 用法

在dialog组件中引入即可
```ts
import { useHuiDialog } from '@hua5/hua5-web-ui'

const {
  // 属性
  id,
  show,
  payload,
  dialogLoading,
  confirmLoading,
  // 方法
  open,
  close,
} = useHuiDialog()

defineExpose({
  open,
  close,
})

```

### 返回值说明

| 属性名         | 说明                                                         | 类型     | 默认值 |
| -------------- | ------------------------------------------------------------ | -------- | ------ |
| id             | 通过`open`传入的第一个参数                                   | string   | ''     |
| show           | `dialog`是否显示                                             | boolean  | false  |
| payload        | 通过`open`传入的第二个参数                                   | object   | {}     |
| dialogLoading  | `dialog`的`loading`状态                                      | boolean  | false  |
| confirmLoading | `dialog`中表单的提交状态                                     | boolean  | false  |
| open           | 调用即打开弹窗，并支持`id`和`show`两个参数的传入，一般供外部使用 | function | -      |
| close          | 调用即关闭弹窗，一般供外部使用                               | function | -      |

