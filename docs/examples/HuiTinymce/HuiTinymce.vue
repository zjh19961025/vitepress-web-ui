<script setup lang="ts">
import { HuiTinymce } from '@hua5/hua5-web-ui'

const richTextContent = ref('')

watch(richTextContent, (val) => {
  console.log('富文本内容', val)
})
</script>

<template>
  <HuiTinymce
    v-model:tinymceContent="richTextContent"
    :link-attribute="[{ title: '小程序AppId', value: 'mp_appid' }]"
    height="700px"
  />
</template>
