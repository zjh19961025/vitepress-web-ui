<script setup lang="ts">
import { ref } from "vue"

const testData = ref({ address: '昆明市', count: '200', order: '100' })
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
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
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
