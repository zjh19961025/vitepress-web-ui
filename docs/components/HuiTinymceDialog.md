# 富文本编弹窗

### 用法
:::demo
HuiTinymceDialog/HuiTinymceDialog
:::

### 属性（props）

| 属性名        | 说明                                                         | 类型                             | 默认值                                                       |
| ------------- | ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| width         | 宽度                                                         | string \| number                 | 100%                                                         |
| height        | 高度                                                         |                                  | 80vh                                                         |
| linkAttribute | linkAttribute 接收参数的value可以是一个单词,如果是两个单词及以上组成必须用_连接（例:mp_appid）不能使用驼峰 | {title: string;value: string;}[] | [{<br /> title: '小程序AppId', value: 'mp_appid' <br />},   {<br /> title: '小程序原始AppId',<br /> value: 'mp_original_id' }, ] |
| permission    | 弹窗权限配置对象，见下方说明                                 | object                           | -                                                            |

permission对象参数说明

| 属性       | 说明                     | 类型           | 默认值 |
| ---------- | ------------------------ | -------------- | ------ |
| code       | 需要的权限code           | string         | -      |
| tip        | 没有权限的时候提示的文字 | string         | -      |
| checkRight | 权限处理方法             | （）=> boolean | -      |

### 方法（defineExpose）

| 方法名 | 描述     | 参数                                                         |
| ------ | -------- | ------------------------------------------------------------ |
| open   | 打开弹窗 | (id,payload)，payload={<br />content\: 富文本内容<br />row\: 行数据<br />field\:富文本在行数据中key<br />} |
| close  | 关闭弹窗 | -                                                            |

### 事件（defineEmits）

| 事件名   | 说明           | 回调参数                                                     |
| -------- | -------------- | ------------------------------------------------------------ |
| onSubmit | 点击提交后触发 | (tinymceContent,row,field)，tinymceContent\: 富文本内容,row\:行数据,field\:字段名 |