<script lang="ts" setup>
const regionTreeDialogRef = ref<any>(null)

const selectedRegion = ref([])
// 打开地区选择弹框
function onRegionTreeDialogClick() {
  regionTreeDialogRef.value?.open('2', {
    // 默认选中
    defaultCheckedKeys: selectedRegion.value,
    // 禁用的地区code
    disabledRegions: ['120103', '120104'],
  })
}

// 地区选择弹框确定
function onRegionsSubmit({ id, regionList }) {
  console.log('onRegionsSubmit', id, regionList)
  selectedRegion.value = regionList
  ElMessage.success('2秒后自动关闭,打开控制台查看选择的结果')
  setTimeout(() => {
    regionTreeDialogRef.value?.close()
  }, 2000)
}
</script>

<template>
  <ElButton @click="onRegionTreeDialogClick">打开地区选择弹框</ElButton>
  <HuiRegionTreeDialog
    ref="regionTreeDialogRef"
    :is-confirm-close="false"
    tree-label-key="label"
    @on-submit="onRegionsSubmit"
  />
</template>
