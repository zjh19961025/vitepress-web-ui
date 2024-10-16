<script setup lang="ts">
const region = ref('')

function onRegionChange(value) {
  console.log('onRegionChange', value)
}
</script>

<template>
  <HuiRegionTreePopover
    v-model:region="region"
    tree-label-key="label"
    @on-region-change="onRegionChange"
  />
</template>
