<script setup lang="ts">
const sellerTagSelectorObj = ref({
  1: {
    k: '1',
    v: '圆通',
    tip: '圆通圆通通圆通',
    color: '#CA2020',
  },
  2: {
    k: '1',
    v: '顺丰',
    tip: '顺丰',
    color: '#ca20b3',
  },
  3: {
    k: '1',
    v: '邮政',
    tip: '邮政',
    color: '#0b5662',
  },
  4: {
    k: '1',
    v: '菜鸟',
    tip: '菜鸟',
    color: '#c2eeff',
  },
})
</script>

<template>
  <div class="w-100 p-t-10">
    <HuiTagsMore show-tips :tags-list="[1,2,3,4]" :dict-obj="sellerTagSelectorObj" />
  </div>
</template>

<style scoped lang="scss">

</style>
