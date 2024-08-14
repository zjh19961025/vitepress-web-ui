<script lang="ts" setup>
import { ref } from "vue"
const popoverRow = ref({
  sort: 9,
})

function lineEditPopoverConfirm(row) {
  console.log('row', row.sort)
}

</script>

<template>
  <HuiLineEditPopover :row="popoverRow" field="sort" @confirm="lineEditPopoverConfirm" />
</template>
