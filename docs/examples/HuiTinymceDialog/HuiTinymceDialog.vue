<script lang="ts" setup>
const tinymceDialogRef = ref<InstanceType<typeof HuiTinymceDialog> | null>(null)

const content = ref('')

function onTniymceClick() {
  tinymceDialogRef.value?.open('2', {
    content: readonly(content),
    row: { name: '测试' },
    field: 'name',
  })
}

function onTinymceSubmit(tinymceContent, row, field) {
  console.log('onTinymceSubmit', tinymceContent, row, field)
  content.value = tinymceContent
}
</script>

<template>
  <el-button @click="onTniymceClick">富文本编辑弹框</el-button>
  <HuiTinymceDialog
    ref="tinymceDialogRef"
    :link-attribute="[{ title: '小程序AppId', value: 'mp_appid' }]"
    @on-submit="onTinymceSubmit"
  />
</template>
