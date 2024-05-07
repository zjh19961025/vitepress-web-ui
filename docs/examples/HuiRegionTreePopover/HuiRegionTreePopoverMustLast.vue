<script setup lang="ts">
const region = ref('')

function onRegionChange(value) {
  console.log('onRegionChange', value)
}
</script>

<template>
  <HuiRegionTreePopover
    v-model:region="region"
    only-select-leaf
    @on-region-change="onRegionChange"
  />
</template>
