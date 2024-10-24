<script setup>
import UseDialogDemo from "./UseDialogDemo.vue"
/**
 * 调用
 */
const dialogRef = ref(null)
const dialogRefBodyAndDestory = ref(null)

function onOpenClick() {
  dialogRef?.value?.open("id", { name: "赵四", phone: "888888", test: "234" })
}

function onOpenClickBodyAndDestory() {
  dialogRefBodyAndDestory?.value?.open("id", { name: "赵四", phone: "888888", test: "234" })
}

</script>

<template>
  <!-- 测试按钮 -->
  <el-button @click="onOpenClick">打开弹框</el-button>
  <el-button @click="onOpenClickBodyAndDestory">打开弹框BodyAndDestory</el-button>

  <UseDialogDemo ref="dialogRef" @submit-ok="onSubmitOk" />

  <!-- destroy-on-close append-to-body 仅为测试-->
  <UseDialogDemo ref="dialogRefBodyAndDestory" destroy-on-close append-to-body />

</template>
