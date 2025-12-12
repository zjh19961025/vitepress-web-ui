<template>
  <el-dialog v-model="show" top="10vh" :loading="dialogLoading">
    <div>
      文案
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { useHuiDialog } from "zjh-web-ui"
const { show, open, close, dialogLoading } = useHuiDialog()
defineExpose({
  open,
  close,
})
</script>

<style scoped lang="scss">

</style>
