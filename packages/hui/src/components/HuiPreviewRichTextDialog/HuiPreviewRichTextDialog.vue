<script setup lang="ts">
import { ElDialog, ElButton } from 'element-plus'
import { useHuiDialog } from "../../hooks/index"
import { ref, toValue } from 'vue'
import { testUtils } from 'zjh-utils'
import type { HuiPreviewRichTextDialogPropsType } from './type'

defineOptions({
  name: 'HuiPreviewRichTextDialog',
})

withDefaults(defineProps<HuiPreviewRichTextDialogPropsType>(), {
  title: '内容预览',
})

const { show, payload, open, close } = useHuiDialog()

const content = ref('')

function beforeOpen() {
  if (testUtils.isEmpty(toValue(payload))) {
    close()
    return
  }
  content.value = (toValue(payload) as any).content
}

function beforeClose() {
  content.value = ''
  payload.value = {}
}

// 取消按钮
const handleCancel = () => {
  close()
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <ElDialog
    v-model="show"
    :title="title"
    width="80%"
    top="5vh"
    modal-append-to-body
    append-to-body
    @open="beforeOpen"
    @close="beforeClose"
  >
    <div class="rd-5 px-10 b b-solid b-ddd overflow-y-auto h-80vh" v-html="content" />
    <template #footer>
      <ElButton type="primary" size="large" @click="handleCancel">关 闭</ElButton>
    </template>
  </ElDialog>
</template>

