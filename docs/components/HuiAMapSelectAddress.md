# 地图信息显示组件

### 用法
:::demo
HuiAMapSelectAddress/HuiAMapSelectAddress
:::

### 属性（props）

| 属性名            | 说明     | 类型                                                                                             | 默认值 |
| ----------------- | -------- |------------------------------------------------------------------------------------------------| ------ |
| v-model:poi="poi" | 地址信息 | {<br />    latitude:string;<br />    longitude:string;<br />    formattedAddress:string<br />} | -      |
| width             | 组件宽度 | string                                                                                         | 1000px |
| height            | 组件高度 | string                                                                                         | 500px  |

### 方法（defineExpose）

| 方法名   | 描述                      | 参数 |
| -------- | ------------------------- | ---- |
| setupMap | 用于poi变化后调用重置地图 | -    |
