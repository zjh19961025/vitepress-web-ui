:::demo
HuiAMapMassMarkers/HuiAMapMassMarkers
:::

### 属性（props）

| 属性名        | 说明                                         | 类型                                                         | 默认值                                                       |
| ------------- | -------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| v-model="poi" | 地址信息                                     | {<br />    id:number \| string ;<br />    name:string;<br />    iconPath:string;<br />    position:array;<br />    [key: string]:any;<br /> } |                                                              |
| width         | 组件宽度                                     | string                                                       | 40vw                                                         |
| height        | 组件高度                                     | string                                                       | 60vh                                                         |
| showLabel     | 地图上的一些标注（如地名、道路名称等）的显示 | boolean                                                      | true                                                         |
| direction     | 文本相对于图标的方向                         | string                                                       | top                                                          |
| textStyle     | 文本样式的配置对象                           | {<br />    fontSize:number \| string  ;<br / >    fillColor:string;<br />    strokeColor:string;<br />    strokeWidth:string;<br />    backgroundColor:string;<br />    padding:array;<br />    borderRadius:number;<br />    borderWidth:string;<br />    borderColor:string;<br />} | {<br />    fontSize:12<br />    fillColor:window.theme.colors.white<br />    backgroundColor: window.theme.colors.ccc<br />    borderRadius:2<br /> } |
| iconSize      | 图标宽高                                     | [number, number]                                             | [19, 32]                                                     |
| iconPath      | 图标路径                                     | string                                                       | //a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png |
| mapCenter     | 地图中心位置                                 | [number, number]                                             | [102.832891, 24.880095]                                      |

### 方法（defineExpose）

| 方法名     | 描述                           | 参数 |
| ---------- | ------------------------------ | ---- |
| pointClick | 用于点击图标位置获取相关的信息 | -    |