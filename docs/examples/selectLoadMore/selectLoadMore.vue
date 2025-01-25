<script setup lang="ts">
import HuiSelectLoadStatus from './HuiSelectLoadStatus.vue'

const options = ref(new Array(20).fill({
  value: 'Option1',
  label: 'Option1',
}))
const selectValue = ref('')

const loading = ref(false)
const leave = ref(60)

async function loadmore() {
  if (leave.value > 0) {
    loading.value = true
    await new Promise((resolve) => {
      setTimeout(() => {
        options.value.push(...new Array(20).fill({
          value: 'Option1',
          label: 'Option1',
        }))
        console.log(options.value)
        resolve('')
      }, 2000)
    })
    leave.value -= 20
    loading.value = false
  }
}
</script>

<template>
  <el-select
    v-model="selectValue"
    v-select-loadmore="{className:'loadmore',callback:loadmore}"
    placeholder="Select"
    class="loadmore"
    :teleported="false"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    <HuiSelectLoadStatus
      :loading="loading"
      :length="options.length"
      :leave="leave"
    />
  </el-select>
</template>
