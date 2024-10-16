<template>
  <ElTreeSelect
    v-model="selectedRegions"
    :data="regionData"
    :filter-node-method="filterNodeMethod"
    filterable
    :teleported="false"
  >
    <template #label="{ value }">
      <span>{{ setLabel(value) }}</span>
    </template>
  </ElTreeSelect>
</template>

<script lang="ts" setup>
import { ElTreeSelect } from 'element-plus'
import { ref, watch, onMounted, nextTick, computed } from 'vue'
import { getRegionNameByCodeWithTree } from '@hua5/hua5-web-lib'
import type { treeSelectProps } from './type'

defineOptions({
  name: 'HuiRegionTreeSelect',
})

// 接收的参数
const props = withDefaults(defineProps<treeSelectProps>(), {
  disabledRegions: () => [],
  selectedRegions: () => [],
})

const selectedRegions = defineModel<string | string[]>('selectedRegions')
const allRegionTree = ref([])

onMounted(async() => {
  allRegionTree.value = await window.huiDelegate.getRegionTree()

  // 设置禁用
  nextTick(() => {
    if (props.disabledRegions.length > 0 && regionData.value.length > 0) {
      setDisAbledRegion(regionData.value)
    }
  })
})

const regionData = computed(() => {
  return props.treeData || allRegionTree.value
})

// 设置label 拼接父级label
function setLabel(value:string) {
  return getRegionNameByCodeWithTree(value, allRegionTree.value)
}

// 设置禁用节点
watch(() => props.disabledRegions, () => {
  if (props.disabledRegions.length > 0 && regionData.value.length > 0) {
    setDisAbledRegion(regionData.value)
  }
}, {
  deep: true,
  immediate: true,
})

// 设置禁用的方法
function setDisAbledRegion(regions:any) {
  regions.forEach((item:any) => {
    if (item.hasChildren) {
      setDisAbledRegion(item.children)
    } else {
      item.disabled = props.disabledRegions?.includes(item.id)
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
