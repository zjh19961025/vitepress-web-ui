<script setup lang="ts">
import { ref, toValue } from 'vue'
import { useHuiDialog } from "../../hooks/index"
import { ElButton, ElDialog } from 'element-plus'
import HuiTinymce from '../HuiTinymce/HuiTinymce.vue'
import type { HuiTinymceDialogPropsType, HuiTinymceDialogEmitType } from './type'

defineOptions({
  name: 'HuiTinymceDialog',
})

// 接收的参数
withDefaults(defineProps<HuiTinymceDialogPropsType>(), {
  width: '80%',
  height: '80vh',
  linkAttribute: () => {
    return [
      { title: '小程序AppId', value: 'mp_appid' },
      { title: '小程序原始AppId', value: 'mp_original_id' },
    ]
  },
})

const emit = defineEmits<HuiTinymceDialogEmitType>()
// useHuiDialog
const { show, open, close, payload, confirmLoading } = useHuiDialog()

const tinymceContent = ref('')
const submitBtnText = ref('提交')

function beforeOpen() {
  tinymceContent.value = toValue(payload as any)?.content || ''
  // 如果是直接在表格上编辑的，那么是提交，否则是 保存
  submitBtnText.value = toValue(payload as any)?.row ? '提交' : '保存'
}

function beforeClose() {
  tinymceContent.value = ''
  payload.value = {}
  confirmLoading.value = false
}

// 提交富文本
function handleSubmit() {
  confirmLoading.value = true
  emit('onSubmit', tinymceContent.value, toValue(payload as any)?.row, toValue(payload as any)?.field)
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
    title="内容编辑"
    :width="width"
    top="5vh"
    :modal-append-to-body="false"
    append-to-body
    @open="beforeOpen"
    @close="beforeClose"
  >
    <HuiTinymce v-model="tinymceContent" :height="height" :link-attribute="linkAttribute" />
    <template #footer>
      <div>
        <ElButton @click="close">取 消</ElButton>
        <ElButton type="primary" class="w-100" :loading="confirmLoading" @click="handleSubmit">{{ submitBtnText }}</ElButton>
      </div>
    </template>
  </ElDialog>
</template>
