<script setup lang="ts">
import { HuiLineEditDialog } from "@hua5/hua5-web-ui"

const lineEditInputDialog = ref<InstanceType<typeof HuiLineEditDialog> | null>(null)
const lineEditTextareaDialog = ref<InstanceType<typeof HuiLineEditDialog> | null>(null)

const testRow = {
  name: "满十减一",
  test: "234",
}
// 打开input弹窗
function onOpenInput() {
  lineEditInputDialog.value?.open('name', testRow)
}

// 打开textarea弹窗
function onOpenTextarea() {
  lineEditTextareaDialog.value?.open('name', testRow)
}

// 输入框的内容变化了
function onValueChange(form, row) {
  console.log("onValueChange", form, row, testRow)
}

// 点击确定了
function handleRowEdit(row, prop) {
  console.log("handleRowEdit", row, prop, testRow)
  ElMessage.success("请在控制台查看输入结果")
}
</script>

<template>
  <div class="mb-10"><el-button type="primary" @click="onOpenInput">input 弹窗</el-button> 不带二次确认 </div>
  <div><el-button type="primary" @click="onOpenTextarea">textarea 弹窗</el-button> 带二次确认 </div>
  <HuiLineEditDialog
    ref="lineEditInputDialog"
    prop="name"
    title="修改优惠券名称"
    label="优惠券名称"
    type="input"
    :rules="[{ required: true, message: '请输入优惠券名称' , trigger: 'blur' }]"
    @on-value-change="onValueChange"
    @on-submit="handleRowEdit"
  />
  <HuiLineEditDialog
    ref="lineEditTextareaDialog"
    prop="name"
    title="修改优惠券名称"
    label="优惠券名称"
    type="textarea"
    :rules="[{ required: true, message: '请输入优惠券名称' , trigger: 'blur' }]"
    :is-need-double-confirm="true"
    double-confirm-tips="你确定要修改吗？"
    @on-value-change="onValueChange"
    @on-submit="handleRowEdit"
  />
</template>
