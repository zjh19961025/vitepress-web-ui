<script setup lang="ts">
import { HuiRegionTreePopover } from '@hua5/hua5-web-ui'

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
