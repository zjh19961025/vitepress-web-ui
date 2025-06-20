<script setup lang="ts">
import { ElTooltip } from 'element-plus'
import type { HuiTipProp } from './type.ts'
// 默认props
const {
  rclass,
  content,
  iconClass,
  contentClass,
  placement = 'top',
  effect = "light",
  tipAttr = {},
} = defineProps<HuiTipProp>()
/**
 * 判断是否是html标签的方法
 */
function isHtmlTag(str) {
  if (!str) return false
  str = str.trim()
  // 正则表达式匹配 HTML 标签
  const regex = /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/i
  return regex.test(str)
}
</script>

<template>
  <ElTooltip :effect="effect" :placement="placement" v-bind="tipAttr">
    <div class="ml-3" :class="rclass">
      <slot name="icon">
        <i class="icon-com i-com-wenhao-plain c-info" :class="iconClass" />
      </slot>
    </div>
    <template #content>
      <slot>
        <div v-if="isHtmlTag(content)" :class="contentClass" v-html="content" />
        <div v-else :class="contentClass">{{ content }}</div>
      </slot>
    </template>
  </ElTooltip>
</template>

<style scoped lang="scss">

</style>
