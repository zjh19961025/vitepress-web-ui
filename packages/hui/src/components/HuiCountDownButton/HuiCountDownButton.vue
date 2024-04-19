<script setup lang="ts">
import { ElButton } from 'element-plus'
import type { HuiCountDownButtonPropsType } from './type.ts'
import { onUnmounted, ref } from 'vue'

const props = withDefaults(defineProps<HuiCountDownButtonPropsType>(), {
  timeCount: 60,
  enableClass: '!bg-special !text-white',
  disableClass: '!bg-bg_normal !text-t_disabled',
})

const isDisabled = ref(false)
const leftCount = ref(0)
let countDowntimer = null

function handleClick() {
  startcountDown()
}

function startcountDown() {
  if (!countDowntimer) {
    leftCount.value = Number(props.timeCount)
    isDisabled.value = true
    countDowntimer = setInterval(() => {
      if (leftCount.value > 0 && leftCount.value <= Number(props.timeCount)) {
        leftCount.value--
      } else {
        resetState()
      }
    }, 1000)
  }
}

function resetState() {
  isDisabled.value = false
  leftCount.value = 0
  clearInterval(countDowntimer)
  countDowntimer = null
}

defineExpose({
  resetState,

})

onUnmounted(() => {
  resetState()
})
</script>

<template>
  <ElButton
    :disabled="isDisabled"
    :class="[isDisabled ? disableClass : enableClass]"
    @click="handleClick"
  >
    {{ isDisabled ? leftCount + 's' : title }}
  </ElButton>
</template>
