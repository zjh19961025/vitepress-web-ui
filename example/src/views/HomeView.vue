<script setup>
import { HuiTool, HuiRules, HuiCountDownButton } from "@hua5/hua5-web-ui"
import NormalDialogTest from "@/components/NormalDialogTest.vue"
import FormDialogTest from "@/components/FormDialogTest.vue"
import { addUnit, getRegionNameByCode } from "@hua5/hua5-web-lib"

const normalDialogTest = ref(null)
const formDialogTest = ref(null)
const lineEditDialog = ref(null)
const previewRichTextDialog = ref(null)
const showUrlDialog = ref(null)
const stringArrayInputDialog = ref(null)
const countDownButton = ref(null)
const region = ref('')
const regionTreeDialogRef = ref(null)
const tinymceDialogRef = ref(null)
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

const testStyle = ref(`width: ${addUnit(200)}`)

function onDialogBtnClick() {
  normalDialogTest.value?.open()
}

function onNormalDialogOpen() {
  console.log("onNormalDialogOpen", new Date().getTime())
}
function onNormalDialogClose() {
  HuiTool.ok("close")
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
async function onLineEditDialogBtnClick() {
  lineEditDialog.value.open('name', testRow)
  const test = await getRegionNameByCode("110101")
  console.log(test)
}
function handleRowEdit(row, prop) {
  console.log("handleRowEdit", row, prop, testRow)
}
function onValueChange(form, row) {
  console.log("onValueChange", form, row, testRow)
}

function onPreviewRichTextClick() {
  previewRichTextDialog.value.open('', {
    content: "<h1>Hello World <strong style='color:red;'>red</strong></h1>",
  })
}

function onShowUrlDialogClick() {
  showUrlDialog.value.open('', {
    url: "http://localhost:5173/#/home",
  })
}

function showUrlDialogClose() {
  console.log("showUrlDialogClose, 我被关闭了")
}

function onStringArrayInputClick() {
  stringArrayInputDialog.value.open('', { inputInfo: ['a', 'b', 'c'] })
}

function handleStringArrayInputSubmit(id, inputInfo) {
  console.log("handleStringArrayInputSubmit", id, inputInfo)
}

function onGetCodeClick() {
  console.log('开始倒计时了')
  setTimeout(() => {
    countDownButton.value.resetState()
  }, 10000)
}

function onRegionChange(value) {
  console.log('onRegionChange', value)
}

const selectedRegion = ref([])
function onRegionTreeDialogClick() {
  regionTreeDialogRef.value.open('2', {
    // 默认选中
    defaultCheckedKeys: readonly(selectedRegion.value),
    // 禁用的地区code
    disabledRegions: ['120103', '120104'],
  })
}

function onRegionsSubmit({ id, regionList }) {
  console.log('onRegionsSubmit', id, regionList)
  selectedRegion.value = regionList
  ElMessage.success('2秒后自动关闭')
  setTimeout(() => {
    regionTreeDialogRef.value.close()
  }, 2000)
}

const content = ref('')
function onTniymceClick() {
  tinymceDialogRef.value.open('2', {
    content: readonly(content),
    row: { name: '测试' },
    field: 'name',
  })
}

function onTinymceSubmit(tinymceContent, row, field) {
  console.log('onTinymceSubmit', tinymceContent, row, field)
  content.value = tinymceContent
}
</script>

<template>
  <div class="flex">
    <div class=" flex-y">
      <div class="admin-remark">admin-remark</div>
      <div class="admin-link">admin-link</div>
    </div>
    <div class="text-danger bg-success" :style="[testStyle, addStyle({height: addUnit(200)}, 'string')]">uno
      test
    </div>
    <div class="flex ml-10px">
      <div class="flex-y">
        <div>
          <ElButton @click="onDialogBtnClick">普通弹框测试</ElButton>
        </div>
        <div class=" mt-10px">
          <ElButton @click="onFormDialogBtnClick">表单弹框测试</ElButton>
        </div>
        <div class=" mt-10px">
          <ElButton @click="onLineEditDialogBtnClick">lineEditDialog</ElButton>
        </div>
        <div class=" mt-10px">
          <ElButton @click="onPreviewRichTextClick">富文本预览</ElButton>
        </div>
        <div class=" mt-10px">
          <ElButton @click="onShowUrlDialogClick">链接预览</ElButton>
        </div>
      </div>
      <div class="flex flex-col ml-10">
        <ElButton @click="onStringArrayInputClick">字符串数组编辑</ElButton>
        <div class="mt-10px">
          <HuiCountDownButton ref="countDownButton" title="获取验证码" :time-count="30" @click="onGetCodeClick" />
        </div>
        <div class="mt-10px">
          <HuiRegionTreePopover v-model:region="region" style="width: 200px;" @on-region-change="onRegionChange" />
        </div>
        <div class="mt-10px">
          <ElButton @click="onRegionTreeDialogClick">地区树弹框</ElButton>
        </div>
        <div class="mt-10px">
          <ElButton @click="onTniymceClick">富文本编辑弹框</ElButton>
        </div>
      </div>
    </div>

    <NormalDialogTest
      ref="normalDialogTest" top="40vh" width="60vw" @open="onNormalDialogOpen"
      @close="onNormalDialogClose"
    />
    <FormDialogTest ref="formDialogTest" top="20vh" width="40vw" @open="onFormDialogOpen" @close="onFormDialogClose" />
    <HuiLineEditDialog
      ref="lineEditDialog" prop="name" title="修改优惠券名称" label="优惠券名称"
      type="select" :rules="HuiRules.urlRule()"
      :select-dic="selectDic"
      :is-need-double-confirm="true" double-confirm-tips="测试二次确认"
      @on-value-change="onValueChange"
      @on-submit="handleRowEdit"
    />
    <HuiPreviewRichTextDialog ref="previewRichTextDialog" />
    <HuiShowUrlDialog ref="showUrlDialog" title="查看链接" @close="showUrlDialogClose" />
    <HuiStringArrayInputDialog
      ref="stringArrayInputDialog"
      title="编辑字符串数组"
      label="标签" placeholder="请输入标签，使用' , '分隔"
      :rules="[{ required: true, message: '请输入标签', trigger: 'blur' }]"
      @on-submit="handleStringArrayInputSubmit"
    />
    <HuiRegionTreeDialog ref="regionTreeDialogRef" :is-confirm-close="false" @on-submit="onRegionsSubmit" />
    <HuiTinymceDialog ref="tinymceDialogRef" @on-submit="onTinymceSubmit" />
    <!-- <HuiLineEditDialog
      ref="lineEditDialog" prop="name" title="修改优惠券名称" label="优惠券名称"
      type="input" :rules="HuiRules.urlRule()"
      :is-need-double-confirm="true" double-confirm-tips="测试二次确认"
      @on-value-change="onValueChange"
      @on-submit="handleRowEdit"
    /> -->
  </div>
</template>

