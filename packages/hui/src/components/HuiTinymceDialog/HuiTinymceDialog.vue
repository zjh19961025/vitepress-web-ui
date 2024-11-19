<script setup lang="ts">
import { ref, toValue } from 'vue'
import { useHuiDialog } from "../../hooks/index"
import { ElButton, ElDialog, ElMessage } from 'element-plus'
import HuiTinymce from '../HuiTinymce/HuiTinymce.vue'
import type { HuiTinymceDialogPropsType, HuiTinymceDialogEmitType } from './type'

defineOptions({
  name: 'HuiTinymceDialog',
})

// 接收的参数
const { permission } = withDefaults(defineProps<HuiTinymceDialogPropsType>(), {
  width: '80%',
  height: '80vh',
  linkAttribute: () => {
    return [
      { title: '小程序AppId', value: 'mp_appid' },
      { title: '小程序原始AppId', value: 'mp_original_id' },
    ]
  },
  permission: () => { return {} },
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

function checkPermission() {
  const { code, tip, checkRight } = permission
  if (checkRight) {
    return checkRight()
  }
  if (!code) return true
  const result = window.huiDelegate.permission[code] ?? false
  if (!result) {
    ElMessage.error(tip || '暂无权限，请联系管理员！')
  }
  return result
}
// 提交富文本
function handleSubmit() {
  const isHavePermission = checkPermission()
  if (!isHavePermission) return
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
        <ElButton size="large" class="!c-primary !border !border-1 !border-[theme(colors.primary)] !px-16 !text-14" @click="close">取 消</ElButton>
        <ElButton size="large" type="primary" :loading="confirmLoading" class="w-120 !ml-20" @click="handleSubmit">{{ submitBtnText }}</ElButton>
      </div>
    </template>
  </ElDialog>
</template>
