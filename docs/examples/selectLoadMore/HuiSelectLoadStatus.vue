<script setup lang="ts">
defineProps<{
  /** loading状态 */
  loading: boolean;
  /** 显示options数据的length */
  length: number;
  /** 剩余的条数 */
  leave: number;
}>()
</script>

<template>
  <div class="flex flex-center !h-25">
    <div v-show="loading" class="flex flex-center">
      <ElIcon class="mr-10 is-loading" size="14"><Loading /></ElIcon>
      <span>正在加载更多...</span>
    </div>
    <div v-show="length <= 0 && !loading">无匹配数据</div>
    <div v-if="length > 0 && leave <= 0">没有更多了</div>
  </div>
</template>
