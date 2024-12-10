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

const onMsgBoxRichTitle = async() => {
  const [, res] = window.hua5WebUI.HuiTool.msgBox('<div class="c-red "><i>我是富文本</i></div>', { type: 'danger', tip: 'tip不是富文本' })
  console.info("🚀 ~ file:msgBox method:onMsgBoxQuesClick line:12 -----", res)
}
const onMsgBoxRichTip = async() => {
  const [, res] = window.hua5WebUI.HuiTool.msgBox('title不是富文本', { type: 'danger', tip: '<div class="c-red "><i>我是富文本</i></div>' })
  console.info("🚀 ~ file:msgBox method:onMsgBoxQuesClick line:12 -----", res)
}

const onMsgBoxRichTipAndTitle = async() => {
  const [, res] = window.hua5WebUI.HuiTool.msgBox('<div class="c-red "><i>我是富文本title</i></div>', { type: 'danger', tip: '<div class="c-blue "><i>我是富文本tip</i></div>' })
  console.info("🚀 ~ file:msgBox method:onMsgBoxQuesClick line:12 -----", res)
}
</script>

<template>
  <div class="flex">
    <el-button @click="onMessageBoxClick">图标为叹号</el-button>
    <el-button @click="onMsgBoxSuccessClick">图标为钩</el-button>
    <el-button @click="onMsgBoxQuesClick">图标为问号</el-button>
  </div>
  <div class="flex m-t-20">
    <el-button @click="onMsgBoxRichTitle">title为富文本</el-button>
    <el-button @click="onMsgBoxRichTip">tip为富文本</el-button>
    <el-button @click="onMsgBoxRichTipAndTitle">tip和title为富文本</el-button>
  </div>
</template>

<style scoped lang="scss">

</style>
