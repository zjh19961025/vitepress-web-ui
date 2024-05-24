<script setup lang="ts">
const previewRichTextDialog = ref<any>(null)

function onOpen() {
  previewRichTextDialog.value?.open('id', {
    content: "<h1>Hello <strong style='color:red;'>World</strong></h1>",
  })
}
</script>

<template>
  <el-button @click="onOpen">预览富文本</el-button>
  <HuiPreviewRichTextDialog ref="previewRichTextDialog" />
</template>
