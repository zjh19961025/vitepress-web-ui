<script setup lang="ts">
import { ElIcon, ElOption } from 'element-plus'
import { Loading } from '@element-plus/icons-vue'
import { HuiSelectLoadStatusPropsType } from './type'
defineProps<HuiSelectLoadStatusPropsType>()

defineOptions({
  name: 'HuiSelectLoadStatus',
})
</script>

<template>
  <ElOption disabled value="" class="flex flex-center !h-25">
    <div v-show="loading" class="flex flex-center">
      <ElIcon class="mr-10 is-loading" size="14"><Loading /></ElIcon>
      <span>正在加载更多...</span>
    </div>

    <div v-show="length <= 0 && !loading">无匹配数据</div>

    <div v-if="length > 0 && leave <= 0">没有更多了</div>
  </ElOption>
</template>
