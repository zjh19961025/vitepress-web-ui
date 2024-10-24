# 表单弹框通用逻辑

## 使用注意
* el-dialog 作为 根节点，使支持透传：props，事件监听，样式
* **组件实例化的时候，hooks 就会被调用，而数据获取需要在弹框打开的时候，所以数据获取全部在  @open 事件中处理**
* dialog 中的数据不会销毁，**注意数据的重置**

## 弹框调用
:::demo
UseFormDialog/UseFormDialogTest
:::

## 弹框实现
:::demo
UseFormDialog/UseFormDialogDemo
:::

### 传入参数说明

| 属性                | 说明                                                         | 类型     | 默认值                                                       |
| ------------------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| formModel           | 需要提交的表单格式，【form】中不在 【formModel】  中的属性会被删除   | object   | {}                                                           |
| showSuccessTip      | 提交成功时是否显示提示                                       | boolean  | true                                                         |
| isNeedDoubleConfirm | 表单提交时是否需要二次确认                                   | boolean  | false                                                        |
| doubleConfirmConfig | 表单二次确认时放入提示配置                                   | object   | {<br />message: "是否确认提交",<br />payload: { iconType: 'success'},<br />payload配置参考msgBox传参} |
| doubleConfirmAction | 自定义二次确认，接收三个参数，`submitForm`表单数据，`submit`确认提交，`cancelSubmit`取消提交 | function | -                                                            |
| beforeSubmit        | 提交前的前置处理，接收一个`submitForm`的表单参数，方便对表单的重写 | function | -                                                            |
| submitCheck         | 用于验证是否能提交表单，接收一个`submitForm`的表单参数，方便对表单的校验 | function | -                                                            |
| afterSubmit         | 表单提交成功后的处理，接收一个提交成功后服务端返回的结果     | function | -                                                            |
| put                 | 表单**修改**时的`api`方法                                    | function | -                                                            |
| post                | 表单**新增**时的`api`方法                                    | function | -                                                            |

### 返回值说明

| 属性名         | 说明                                                  | 类型     | 默认值 |
| -------------- | ----------------------------------------------------- | -------- | ------ |
| show           | 弹框的显隐状态                                        | boolean  | false  |
| form           | 表单的数据                                            | object   | {}     |
| formRef        | 表单的组件实例                                        | object   | null   |
| formLoading    | 表单加载时的`loading`                                 | boolean  | false  |
| confirmLoading | 表单提交时的`loading `                                | boolean  | false  |
| open           | 打开弹窗，接受两个参数`id`和`payload`，一般供外部使用 | function | -      |
| close          | 关闭弹窗，一般供外部使用                              | function | -      |
| handleSubmit   | 表单提交时调用的方法                                  | function | -      |
| handleCancel   | 取消表单提交时调用的方法                              | function | -      |
| submitOk       | 事件，表单提交成功后触发                                    | 事件event | -      |
| resetLoading   | 消除 formLoading 和 confirmLoading                           | function | -      |
| resetFormFields   | 重置表单和表单校验                              | function | -      |


