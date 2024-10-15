<template>
  <el-tree-select
    v-model="selectedRegions"
    :data="regionData"
    :filter-node-method="filterNodeMethod"
    filterable
  >
    <template #label="{ value }">
      <span>{{ setLabel(value) }}</span>
    </template>
  </el-tree-select>
</template>

<script lang="ts" setup>
import { ref, watch, toValue, onMounted, nextTick } from 'vue'
import { getRegionNameByCodeWithTree } from '@hua5/hua5-web-lib'
import type { treeSelectProps } from './type'

// 接收的参数
const { disabledRegions, treeData } = withDefaults(defineProps<treeSelectProps>(), {
  disabledRegions: () => [],
  selectedRegions: () => [],
})

const selectedRegions = defineModel<string | string[]>('selectedRegions')

const regionData = ref<any[]>([])

onMounted(async() => {
  regionData.value = treeData || await window.huiDelegate.getRegionTree()

  // 设置禁用
  nextTick(() => {
    if (disabledRegions.length > 0 && regionData.value.length > 0) {
      setDisAbledRegion(regionData.value)
    }
  })
})

// 设置label 拼接父级label
function setLabel(value:string) {
  return getRegionNameByCodeWithTree(value, regionData.value)
}

// 设置禁用节点
watch(disabledRegions, () => {
  if (disabledRegions.length > 0 && regionData.value.length > 0) {
    setDisAbledRegion(regionData.value)
  }
}, {
  deep: true,
  immediate: true,
})

function setDisAbledRegion(regions:any) {
  toValue(regions).forEach((item:any) => {
    if (item.hasChildren) {
      setDisAbledRegion(item.children)
    } else {
      item.disabled = disabledRegions?.includes(item.id)
    }
  })
}

// 自定义搜索
const filterNodeMethod = (value:string, item:any) => item.fullName.includes(value)

defineExpose({
  selectedRegions,
})
</script>

<style scoped lang='scss'>
::v-deep(.el-select__selection) {
  flex-wrap: wrap !important;
}

::v-deep(.el-select__wrapper) {
  height: auto !important;
}

</style>
