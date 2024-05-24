<script setup lang="ts">
import { ElButton } from 'element-plus'
import type { HuiCountDownButtonPropsType, HuiCountDownButtonEmitType } from './type.ts'
import { onUnmounted, ref } from 'vue'

// 定义组件名字，全局安装的时候会用到
defineOptions({
  name: 'HuiCountDownButton',
})

const props = withDefaults(defineProps<HuiCountDownButtonPropsType>(), {
  timeCount: 60,
  enableClass: '!bg-special !text-white',
  disableClass: '!bg-normal !text-disabled',
  type: 'text',
})

const emit = defineEmits<HuiCountDownButtonEmitType>()

const isDisabled = ref(false)
const leftCount = ref(0)
let countDowntimer = null

function handleClick() {
  startcountDown()
  emit('click')
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
  <!-- cursor-not-allowed 和 pointer-events-none 存在冲突, 所以必须分开在不同的节点上是使用 -->
  <div class="inline-block" :class="{'cursor-not-allowed': isDisabled}">
    <div class="inline-block" :class="isDisabled ? 'pointer-events-none' : 'cursor-pointer'" @click="handleClick">
      <div
        v-if="type === 'text'"
        :class="[isDisabled ? disableClass : enableClass, baseClass]"
      >
        {{ isDisabled ? leftCount + 's' : title }}
      </div>
      <ElButton
        v-if="type === 'button'"
        :disabled="isDisabled"
        :class="[isDisabled ? disableClass : enableClass, baseClass]"
      >
        {{ isDisabled ? leftCount + 's' : title }}
      </ElButton>
    </div>
  </div>

</template>
