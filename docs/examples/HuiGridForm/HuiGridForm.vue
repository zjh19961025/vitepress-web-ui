<script setup>
import { ref } from "vue"
const HuiGridFormRef = ref(null)
const HuiGridFormRefData = ref(null)
const config = ref(
  [{
    prop: 'test1',
    title: '标题1',
    append: '扎',
    placeholder: '请选择',
    type: 'select',
    dataType: 'text',
    dict: [
      { label: 'ceshi', value: 1 },
      { label: 'ceshi2', value: 2 },
    ],
    style: 'color:#409EFF;font-weight: 700;',
    width: '20%',
  },
  {
    prop: 'test2',
    title: '标题2',
    append: '扎',
    value: 1,
    placeholder: '请选择',
    width: '30%',
  },
  {
    prop: 'test3',
    title: '标题3',
    append: '元',
    value: 1,
    width: '20%',
  },
  {
    prop: 'test4',
    title: '标题4',
    append: '扎',
    placeholder: '请选择',
    type: 'select',
    dataType: 'text',
    dict: [
      { label: 'ceshi', value: 1 },
      { label: 'ceshi2', value: 2 },
    ],
    style: 'color:#409EFF;font-weight: 700;',
    errMsg: 'errMsg',
    width: '20%',
  }],
)
function getHuiGridFormData() {
  const res = HuiGridFormRef.value.getData()
  if (!res) return
  HuiGridFormRefData.value = res
}
// 渲染数据 用来设置回显
const listData = ref([
  { test1: 1, test2: 2, test3: 3, test4: 4 },
])
</script>

<template>
  <div>
    <div>组件数据：{{ HuiGridFormRefData }}</div>
    <HuiGridForm
      ref="HuiGridFormRef"
      hand-sort
      is-can-append
      hand-delete
      :is-have-operate="true" :config="config" :list-data="listData"
    >
      <!--   插槽用法   -->
      <template #test1="{dataItem,el}">
        <el-input v-model="dataItem[el.prop]" placeholder="插槽的input" />
      </template>
    </HuiGridForm>
    <el-button class="mt-10" @click="getHuiGridFormData()">获取组件数据</el-button>
  </div>
</template>
