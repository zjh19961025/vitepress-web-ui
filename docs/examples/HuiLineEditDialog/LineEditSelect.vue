<script setup lang="ts">
import { HuiRules, HuiLineEditDialog } from "@hua5/hua5-web-ui"

const lineEditDialog = ref<InstanceType<typeof HuiLineEditDialog> | null>(null)

const selectDic = ref([
  {
    label: '链接1',
    value: "http://127.0.0.1:5173/",
  },
  {
    label: '链接2',
    value: "http://127.0.0.1:5174/",
  },
])

const testRow = {
  name: "http://127.0.0.1:5174/",
  test: "234",
  test2: {
    temp: 1,
  },
}
// 打开弹窗
function onOpen() {
  lineEditDialog.value?.open('name', testRow)
}

// 输入框的内容变化了
function onValueChange(form, row) {
  console.log("onValueChange", form, row, testRow)
}

// 点击确定了
function handleRowEdit(row, prop) {
  console.log("handleRowEdit", row, prop, testRow)
  ElMessage.success("请在控制台查看选择结果")
}
</script>

<template>
  <el-button type="primary" @click="onOpen">选择弹窗</el-button>
  <HuiLineEditDialog
    ref="lineEditDialog"
    prop="name"
    title="修改链接"
    label="链接"
    type="select"
    :rules="HuiRules.urlRule()"
    :select-dic="selectDic"
    :is-need-double-confirm="true"
    double-confirm-tips="测试二次确认"
    @on-value-change="onValueChange"
    @on-submit="handleRowEdit"
  />
</template>
