# 普通弹框通用逻辑

## 使用注意
* el-dialog 作为 根节点，使支持透传：props，事件监听，样式
* **组件实例化的时候，hooks 就会被调用，而数据获取需要在弹框打开的时候，所以数据获取全部在  @open 事件中处理**
* dialog 中的数据不会销毁，**注意数据的重置**

## 弹框调用
:::demo
UseDialog/UseDialogTest
:::

## 弹框实现
:::demo
UseDialog/UseDialogDemo
:::

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

