# 标签详情

### 标签详情用法

:::demo
HuiTagsMore/HuiTagsMore
:::

### 属性

| 属性名   | 说明                                       | 类型    | 默认值 |
| -------- | ------------------------------------------ | ------- | ------ |
| tagsList | 标签数组传入value组成的数组 eg:arr:[1,2,3] | []      | []     |
| dictObj  | 字典对象                                   | TagItem | {}     |
| showTips | 鼠标移入是否显示tip                        | bool    | false  |
| width    | 容器宽度（超出显示省略号）                 | number  | 100    |

TagItem类型说明

| 属性名 | 说明               | 类型    | 默认值 |
| ------ | ------------------ | ------- | ------ |
| k      | 标签value          | string- | -      |
| v      | 标签文本           | string  | -      |
| color  | 标签的背景颜色     | string  | -      |
| tip    | 鼠标移入显示的文本 | string  | -      |

