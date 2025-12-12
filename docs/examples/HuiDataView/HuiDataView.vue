<script setup lang="ts">
import { ref } from "vue"

const testData = ref({ address: '昆明市', count: '200', order: '1010',name:[
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

  ] })
const tableData = ref([
  {
    title: '订单数',
    value: '',
    prop: 'order',
    class: 'c-disabled font-bold',
    handler: (item) => funTest(item),
    rightText: '触达记录',
  },
  {
    title: '性别',
    value: '1',
    prop: 'sex',
    class: 'c-success font-bold',
    handler: (item) => funTest(item),
    rightText: '触达记录',
  },
  {
    title: '数量',
    value: '1',
    prop: 'count',
    class: 'c-disabled font-bold',
    handler: (item) => funTest(item),
    rightText: '触达记录',
  },
  {
    title: '姓名',
    value: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    ],
    type: 'img',
    prop: 'name',
    class: 'c-disabled font-bold',
    handler: (item) => funTest(item),
    rightText: '触达记录',
  },
  {
    title: '地址',
    value: '',
    prop: 'address',
    class: 'c-disabled font-bold',
    handler: (item) => funTest(item),
    rightText: '触达记录',
  },
])
function funTest(item) {
  console.info("🚀 ~ file:HomeView method:funTest line:305 -----", item)
}
</script>

<template>
  <HuiDataView title-width="100" class="mt-20" :data="testData" :config="tableData" :line-count="1">
    <template #sex-right="scope">
      <div class="c-danger">右侧插槽</div>
    </template>
    <template #sex-left="scope">
      <div class="c-danger">左侧插槽</div>
    </template>
    <template #sex-title="scope">
      <div class="c-danger">标题插槽</div>
    </template>
  </HuiDataView>
</template>

<style scoped lang="scss">

</style>
