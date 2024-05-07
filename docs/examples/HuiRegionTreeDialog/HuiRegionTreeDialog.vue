<script lang="ts" setup>
const regionTreeDialogRef = ref<InstanceType<typeof HuiRegionTreeDialog> | null>(null)

const selectedRegion = ref([])
// 打开地区选择弹框
function onRegionTreeDialogClick() {
  regionTreeDialogRef.value?.open('id', {
    // 默认选中
    defaultCheckedKeys: selectedRegion.value,
    // 禁用的地区code
    disabledRegions: ['120103', '120104'],
  })
}

// 提交后触发
function onRegionsSubmit({ id, regionList }) {
  console.log('onRegionsSubmit', id, regionList)
  selectedRegion.value = regionList
  ElMessage.success('打开控制台查看选择的地区')
}
</script>

<template>
  <el-button @click="onRegionTreeDialogClick">打开地区选择弹框</el-button>
  <HuiRegionTreeDialog
    ref="regionTreeDialogRef"
    @on-submit="onRegionsSubmit"
  />
</template>
