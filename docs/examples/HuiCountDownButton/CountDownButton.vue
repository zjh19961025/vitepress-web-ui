<script setup lang="ts">
import { HuiCountDownButton } from '@hua5/hua5-web-ui'
import { ref } from 'vue'

const countDownButton = ref<InstanceType<typeof HuiCountDownButton> | null>(null)

function onGetCodeClick() {
  console.log('开始倒计时了, 10秒钟后倒计时自动结束')
  setTimeout(() => {
    countDownButton.value?.resetState()
  }, 10000)
}
</script>

<template>
  <HuiCountDownButton
    ref="countDownButton"
    title="发送验证码"
    :time-count="30"
    base-class="w-80"
    type="button"
    @click="onGetCodeClick"
  />
</template>
