<script setup lang="ts">
const region = ref('')

function onRegionChange(value) {
  console.log('onRegionChange', value)
}
</script>

<template>
  <HuiRegionTreePopover
    v-model:region="region"
    @on-region-change="onRegionChange"
  />
</template>
