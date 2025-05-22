<script setup lang="ts">
const sellerTagSelectorObj = ref({
  1: {
    value: '1',
    label: '圆通',
    tip: '圆通圆通通圆通',
    color: '#CA2020',
  },
  2: {
    value: '2',
    label: '顺丰',
    tip: '顺丰',
    color: '#ca20b3',
  },
  3: {
    value: '3',
    label: '邮政',
    tip: '邮政',
    color: '#0b5662',
  },
  4: {
    value: '4',
    label: '菜鸟',
    tip: '菜鸟',
    color: '#c2eeff',
  },
})

const sellerTagSelectorObj2 = ref({
  1: {
    k: '1',
    v: '圆通',
    tip: '圆通圆通通圆通',
    color: '#CA2020',
  },
  2: {
    k: '2',
    v: '顺丰',
    tip: '顺丰',
    color: '#ca20b3',
  },
  3: {
    k: '3',
    v: '邮政',
    tip: '邮政',
    color: '#0b5662',
  },
  4: {
    k: '4',
    v: '菜鸟',
    tip: '菜鸟',
    color: '#c2eeff',
  },
})
</script>

<template>
  <div class="w-100 p-t-10">
    <HuiTagsMore show-tips :tags-list="[1,2,3,4]" :dict-obj="sellerTagSelectorObj" label-key="label" value-key="value" />
    <HuiTagsMore show-tips :tags-list="[1,2,3,4]" :dict-obj="sellerTagSelectorObj2" />
    <HuiTagsMore show-tips :tags-list="['非常好吃','人间美味啊','外酥里嫩','香甜可口','好吃到爆炸','妈妈的味道']" />
    <HuiTagsMore is-el-tag show-tips :tags-list="['非常好吃','人间美味啊','外酥里嫩','香甜可口','好吃到爆炸','妈妈的味道']" />
  </div>
</template>

<style scoped lang="scss">

</style>
