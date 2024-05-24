<script setup lang="ts">
const showUrlDialog = ref<any>(null)

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
