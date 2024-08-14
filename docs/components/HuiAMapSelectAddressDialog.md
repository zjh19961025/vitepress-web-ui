# 地图信息显示组件

### 用法
:::demo
HuiAMapSelectAddressDialog/HuiAMapSelectAddressDialog
:::

### 属性（props）

| 属性名 | 说明     | 类型   | 默认值   |
| ------ | -------- | ------ | -------- |
| width  | 弹窗宽度 | string | 80%      |
| title  | 弹窗标题 | string | 选择位置 |

### 方法（defineExpose）

| 方法名 | 描述     | 参数                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| open   | 打开弹窗 | (id,payload)，payload={<br />latitude\: 经纬度<br />longitude\: 经纬度<br />formattedAddress\:地理位置信息<br />} |
| close  | 关闭弹窗 | -                                                            |

### 方法（defineEmits）

| 方法名   | 描述           | 参数                                 |
| -------- | -------------- | ------------------------------------ |
| onSubmit | 点击提交后触发 | (data)，data: 高德地图返回的地址信息 |
