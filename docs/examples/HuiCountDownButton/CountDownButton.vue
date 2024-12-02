<script setup lang="ts">
const countDownButton = ref<any>(null)

function onGetCodeClick(done) {
  console.log('开始倒计时了, 3秒钟后倒计时自动结束')
  setTimeout(() => {
    done()
  }, 3000)
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
