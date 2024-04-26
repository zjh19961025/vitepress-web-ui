<script setup lang="ts">
import { HuiShowUrlDialog } from '@hua5/hua5-web-ui'

const showUrlDialog = ref<InstanceType<typeof HuiShowUrlDialog> | null>(null)

function onShowUrlDialogClick() {
  showUrlDialog.value?.open('', {
    url: "http://localhost:5001/",
  })
}

</script>

<template>
  <el-button @click="onShowUrlDialogClick">查看链接</el-button>
  <HuiShowUrlDialog ref="showUrlDialog" title="查看链接" />
</template>
