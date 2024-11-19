# 行编辑弹框

### 下拉框选择用法

:::demo
HuiLineEditDialog/LineEditSelect
:::

### 输入框用法

:::demo
HuiLineEditDialog/LineEditInputOrTextarea
:::

### 权限校验
:::demo
HuiLineEditDialog/LineEditPermission
:::

### 属性（props）

| 属性名              | 说明                         | 类型                         | 默认值               |
| ------------------- | ---------------------------- | ---------------------------- | -------------------- |
| title               | 弹框标题                     | string                       | 请输入内容           |
| type                | 输入类型                     | input \|  textarea \| select | input                |
| label               | 输入标签                     | string                       | 内容                 |
| prop                | row 中的属性                 | string                       | -                    |
| placeholder         | 占位说明                     | string                       | -                    |
| rules               | 输入规则                     | any                          | -                    |
| selectDic           | select 列表，label value形式 | Array                        | -                    |
| isSelectMuti        | select 是否多选              | boolean                      | false                |
| isNeedDoubleConfirm | 提交是否需要二次确认         | boolean                      | false                |
| doubleConfirmTips   | 二次确认说明                 | string                       | 确定要执行该操作吗？ |
| attr                | 表单中select以及input的属性  | obj                          | -                    |
| formAttr            | el-form的其他属性            | obj                          | -                    |
| permission          | 表单权限配置对象，见下方说明  | object                      | -                     |


permission对象参数说明

| 属性        | 说明                             | 类型     | 默认值 |
| ----------- | -------------------------------- | -------- | ------ |
| code    | 需要的权限code           | string   | -      |
| tip | 没有权限的时候提示的文字 | string   | -      |
| checkRight  | 权限处理方法                     | （）=> boolean | -      |

### 方法（defineExpose）

| 方法名 | 描述     | 参数                                    |
| ------ | -------- | --------------------------------------- |
| open   | 打开弹窗 | (prop,row)，prop要修改字段名，row行数据 |
| close  | 关闭弹窗 | -                                       |

### 事件（defineEmits）

| 事件名        | 说明         | 回调参数                                      |
| ------------- | ------------ | --------------------------------------------- |
| onValueChange | 输入修改触发 | (form,row)，form修改字段组成的对象，row行数据 |
| onSubmit      | 确定后触发     | (row,prop)，row行数据，prop要修改字段名       |

