<script setup>
import { HuiTool, HuiRules } from "@hua5/hua5-web-ui"
import NormalDialogTest from "@/components/NormalDialogTest.vue"
import FormDialogTest from "@/components/FormDialogTest.vue"
const normalDialogTest = ref(null)
const formDialogTest = ref(null)
const lineEditDialog = ref(null)
const selectDic = ref([
  {
    label: 1,
    value: "http://127.0.0.1:5173/",
  },
  {
    label: 2,
    value: "http://127.0.0.1:5174/",
  },
])

const testStyle = ref(`width: ${HuiTool.addUnit(200)}`)

function onDialogBtnClick() {
  normalDialogTest.value?.open()
}

function onNormalDialogOpen() {
  console.log("onNormalDialogOpen", new Date().getTime())
}
function onNormalDialogClose() {
  console.log("onNormalDialogClose", new Date().getTime())
}

function onFormDialogBtnClick() {
  formDialogTest.value?.open()
}
function onFormDialogOpen() {
  console.log("onFormDialogOpen", new Date().getTime())
}
function onFormDialogClose() {
  console.log("onFormDialogClose", new Date().getTime())
}

const testRow = {
  name: "http://127.0.0.1:5174/",
  test: "234",
  test2: {
    temp: 1,
  },
}
function onLineEditDialogBtnClick() {
  lineEditDialog.value.open('name', testRow)
}
function handleRowEdit(row, prop) {
  console.log("handleRowEdit", row, prop, testRow)
}
function onValueChange(form, row) {
  console.log("onValueChange", form, row, testRow)
}

</script>

<template>
  <div class="flex">
    <div class="test-color-1">123</div>
    <div class="text-yellowColor bg-mainColor" :style="[testStyle, addStyle({height: addUnit(200)}, 'string')]">uno test</div>
    <div class="flex flex-col ml-10px">
      <div><ElButton @click="onDialogBtnClick">普通弹框测试</ElButton></div>
      <div class=" mt-10px">
        <ElButton @click="onFormDialogBtnClick">表单弹框测试</ElButton>
      </div>
      <div class=" mt-10px">
        <ElButton @click="onLineEditDialogBtnClick">lineEditDialog</ElButton>
      </div>
    </div>

    <NormalDialogTest ref="normalDialogTest" top="40vh" width="60vw" @open="onNormalDialogOpen" @close="onNormalDialogClose" />
    <FormDialogTest ref="formDialogTest" top="20vh" width="40vw" @open="onFormDialogOpen" @close="onFormDialogClose" />
    <HuiLineEditDialog
      ref="lineEditDialog" prop="name" title="修改优惠券名称" label="优惠券名称"
      type="select" :rules="HuiRules.urlRule()"
      :select-dic="selectDic"
      :is-need-double-confirm="true" double-confirm-tips="测试二次确认"
      @on-value-change="onValueChange"
      @on-submit="handleRowEdit"
    />
    <!-- <HuiLineEditDialog
      ref="lineEditDialog" prop="name" title="修改优惠券名称" label="优惠券名称"
      type="input" :rules="HuiRules.urlRule()"
      :is-need-double-confirm="true" double-confirm-tips="测试二次确认"
      @on-value-change="onValueChange"
      @on-submit="handleRowEdit"
    /> -->
  </div>
</template>

<style scoped lang="scss">
</style>
