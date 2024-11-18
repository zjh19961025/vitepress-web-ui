<script setup lang="ts">
const lineEditPermissionDialog = ref<any>(null)

const testRow = {
  name: "满十减一",
  test: "234",
}

// 点击确定了
function handleRowEdit(row, prop) {
  console.log("handleRowEdit", row, prop, testRow)
  ElMessage.success("请在控制台查看输入结果")
}

function openLineEditPermissionDialog() {
  lineEditPermissionDialog.value?.open('name', testRow)
}
</script>

<template>
  <div class="mb-10"><el-button type="primary" @click="openLineEditPermissionDialog">input 弹窗</el-button></div>
  <HuiLineEditDialog
    ref="lineEditPermissionDialog"
    prop="name"
    title="修改优惠券名称"
    label="优惠券名称"
    type="input"
    :permission="{code: 'code', tip: '没有权限提示'}"
    @on-submit="handleRowEdit"
  />
</template>
