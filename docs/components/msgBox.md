# 命令式弹窗

### 用法
:::demo
msgBox/msgBox
:::

### 属性（props）

| 属性名  | 说明                                                         | 类型   | 默认值                                                       |
| ------- | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ |
| content | 弹窗组件显示的内容                                           | string | -                                                            |
| payLoad | 弹窗组件的配置对象<br />{<br />iconType: 'info' \| 'success' \| 'question',<br /> type:'info' \| 'success' \| 'danger' \| 'warning',<br />cancleText:string,<br />confirmText:string,<br />}<br />iconType:图标的类型<br />type:提示类型主要控制颜色<br />cancleText:取消按钮的文本<br />confirmText：确定按钮的文本 | object | type:'info',<br />iconType:'info'<br />cancleText：'取消'<br />confirmText: '确定' |

### 使用说明

使用的时候需要异步获取点击的返回结果，点击确定会返回true，点击取消会返回false，根据返回结果进行自定义处理
