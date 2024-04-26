# 富文本编辑

### 用法
:::demo
HuiTinymce/HuiTinymce
:::



### 属性（props）

| 属性名                  | 说明                                                         | 类型                             | 默认值                                                       |
| ----------------------- | ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| v-model\:tinymceContent | 富文本内容                                                   | string                           | -                                                            |
| width                   | 宽度                                                         | string \| number                 | 100%                                                         |
| height                  | 高度                                                         |                                  | 80vh                                                         |
| linkAttribute           | linkAttribute 接收参数的value可以是一个单词,如果是两个单词及以上组成必须用_连接（例:mp_appid）不能使用驼峰 | {title: string;value: string;}[] | [{<br /> title: '小程序AppId', value: 'mp_appid' <br />},   {<br /> title: '小程序原始AppId',<br /> value: 'mp_original_id' }, ] |

