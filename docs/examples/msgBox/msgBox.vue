<script setup lang="ts">
/* 项目中直接 HuiTool.msgBox("是否确定要删除？")*/
const onMessageBoxClick = async() => {
  const [, res] = await window.hua5WebUI.HuiTool.msgBox("是否确定要删除？")
  console.info("🚀 ~ file:msgBox method:onMessageBoxClick line:4 -----", res)
}

const onMsgBoxSuccessClick = async() => {
  const [, res] = await window.hua5WebUI.HuiTool.msgBoxSuccess("图标为钩", { type: 'success' })
  console.info("🚀 ~ file:msgBox method:onMsgBoxSuccessClick line:9 -----", res)
}

const onMsgBoxQuesClick = async() => {
  const [, res] = window.hua5WebUI.HuiTool.msgBoxQues("图标为问号", { type: 'danger' })
  console.info("🚀 ~ file:msgBox method:onMsgBoxQuesClick line:12 -----", res)
}
</script>

<template>
  <div class="flex">
    <el-button @click="onMessageBoxClick">图标为叹号</el-button>
    <el-button @click="onMsgBoxSuccessClick">图标为钩</el-button>
    <el-button @click="onMsgBoxQuesClick">图标为问号</el-button>
  </div>
</template>

<style scoped lang="scss">

</style>
