<script setup lang="ts">
import { ref, toValue } from "vue"
import { useHuiDialog } from "../../hooks/index"
import { HuiShowUrlDialogPropsType } from './type'
import { testUtils } from "@hua5/hua5-utils"
import { ElDialog } from 'element-plus'

const { show, payload, open, close } = useHuiDialog()

withDefaults(defineProps<HuiShowUrlDialogPropsType>(), {
  title: '',
  width: '920px',
  height: '600px',
})

const showUrl = ref('')

function handleOpen() {
  if (testUtils.isEmpty(toValue(payload))) {
    close()
    return
  }
  showUrl.value = (payload.value as any).url
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
    :close-on-click-modal="false"
    :modal-append-to-body="false"
    append-to-body
    @open="handleOpen"
  >
    <iframe
      :src="showUrl"
      frameborder="0"
      width="100%"
      :style="{ height: height }"
    />
  </ElDialog>
</template>
