# 显示链接弹框

### 用法
:::demo
HuiShowUrlDialog/HuiShowUrlDialog
:::



### 属性（props）

| 属性名 | 说明       | 类型   | 默认值 |
| ------ | ---------- | ------ | ------ |
| title  | 弹窗的标题 | string | -      |
| width  | 宽度       | string | 920px  |
| height | 高度       | string | 600px  |

### 方法（defineExpose）

| 方法名 | 描述     | 参数                                           |
| ------ | -------- | ---------------------------------------------- |
| open   | 打开弹窗 | ('',payload)，payload={<br />url\: 链接<br />} |
| close  | 关闭弹窗 | -                                              |