<script setup lang="ts">
import { ref, toValue } from 'vue'
import { useHuiDialog } from "../../hooks/index"
import { ElButton, ElDialog } from 'element-plus'
import HuiAMapSearchAddress from '../HuiAMapSearchAddress/HuiAMapSearchAddress.vue'
import type { HuiAMapSearchAddressDialogPropsType, HuiTinymceDialogEmitType } from './type.ts'
defineOptions({
  name: 'HuiAMapSearchAddressDialog',
})

withDefaults(defineProps<HuiAMapSearchAddressDialogPropsType>(), {
  width: '800px',
  title: '地图位置选择',
})

const emit = defineEmits<HuiTinymceDialogEmitType>()
const HuiAMapSelectAddressRef = ref(null)
// useHuiDialog
const { show, open, close, payload, confirmLoading } = useHuiDialog()

const poi = ref(null)
async function beforeOpen() {
  HuiAMapSelectAddressRef.value.loadMap()
  poi.value = toValue(payload as any) || ''
}

function beforeClose() {
  poi.value = ''
}

// 提交位置信息
function handleSubmit() {
  const res = HuiAMapSelectAddressRef.value.submitInfo()
  if (!res) return
  emit('onSubmit', poi.value)
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
    :width="width"
    top="5vh"
    :modal-append-to-body="false"
    append-to-body
    destroy-on-close
    @open="beforeOpen"
    @close="beforeClose"
  >
    <HuiAMapSearchAddress v-bind="$props" ref="HuiAMapSelectAddressRef" v-model="poi" class="m-y-20" :show-input="true" width="100%" />
    <template #footer>
      <ElButton @click="close">取 消</ElButton>
      <ElButton type="primary" class="w-100" :loading="confirmLoading" @click="handleSubmit">确定</ElButton>
    </template>
  </ElDialog>
</template>
