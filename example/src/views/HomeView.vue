<script setup>
import { HuiTool, HuiRules, HuiCountDownButton, selectLoadmore as vSelectLoadmore } from "@hua5/hua5-web-ui"
import NormalDialogTest from "@/components/NormalDialogTest.vue"
import FormDialogTest from "@/components/FormDialogTest.vue"
import { addUnit, getRegionNameByCode } from "@hua5/hua5-web-lib"
import { ref } from "vue"

const normalDialogTest = ref(null)
const formDialogTest = ref(null)
const lineEditDialog = ref(null)
const previewRichTextDialog = ref(null)
const showUrlDialog = ref(null)
const stringArrayInputDialog = ref(null)
const countDownButton = ref(null)
const region = ref('110102')
const regionTreeDialogRef = ref(null)
const tinymceDialogRef = ref(null)
const AMapSelectAddressDialogRef = ref(null)
const selectedRegions = ref(null)
const disabledRegions = ref(['110101', '110102'])

const popoverRow = ref({
  sort: 9,
})
const options = ref(new Array(20).fill({
  value: 'Option1',
  label: 'Option1',
}))
const selectValue = ref('')
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
const listData = ref([

])
setTimeout(() => {
  listData.value = [{ test: 1, test1: 2, test2: 2, test13: '1', ss: '' }, { test: 1, test1: 2, test2: 2, test13: '1', ss: '' }]
}, 3000)
const HuiGridFormRef = ref(null)
const config = ref(
  [{
    prop: 'test',
    title: 'title1',
    append: '扎',
    placeholder: '请选择',
    type: 'select',
    dataType: 'text',
    dict: [
      { label: 'ceshi', value: 1 },
      { label: 'ceshi2', value: 2 },
    ],
    style: 'color:#409EFF;font-weight: 700;',
    errMsg: '请输入今日鲜花数量',
    width: '20%',
  },
  {
    prop: 'test1',
    title: 'title3',
    append: '扎111',
    value: 1,
    // errMsg: '请输入今日鲜花数量',
    width: '30%',
  },
  {
    prop: 'test13',
    title: 'title3',
    append: '扎',
    value: 1,
    placeholder: '请选择',
    // errMsg: '请输入今日鲜花数量',
    width: '20%',
  },
  {
    prop: 'test2',
    title: 'title2',
    append: '扎',
    placeholder: '请选择',
    type: 'select',
    dataType: 'text',
    dict: [
      { label: 'ceshi', value: 1 },
      { label: 'ceshi2', value: 2 },
    ],
    style: 'color:#409EFF;font-weight: 700;',
    errMsg: '请输入今日鲜花数量',
    width: '20%',
  }],
)
const testStyle = ref(`width: ${addUnit(200)}`)

function onDialogBtnClick() {
  normalDialogTest.value?.open('', { rigthCode: '1111' })
}

function onNormalDialogOpen() {
  console.log("onNormalDialogOpen", new Date().getTime())
}
function onNormalDialogClose() {
  HuiTool.ok("close")
  console.log("onNormalDialogClose", new Date().getTime())
}

function onFormDialogBtnClick() {
  formDialogTest.value?.open('', { rigthCode: '1111' })
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
  lineEditDialog.value.open()
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

function onTinymceSubmit(tinymceContent, row, field) {
  console.log('onTinymceSubmit', tinymceContent, row, field)
  content.value = tinymceContent
}

const richTextContent = ref('')
watch(richTextContent, (val) => {
  console.log('富文本内容', val)
})

function lineEditPopoverConfirm(row) {
  console.log('row', row.sort)
}

const poi = ref({
  latitude: '25.05329348090535',
  longitude: '102.74809961646793',
  formattedAddress: '云南省昆明市盘龙区青云街道昙华路',
})

function onAMapSelectAddressClick() {
  const poi = {
    latitude: '25.05396249981161',
    longitude: '102.6680535596609',
    formattedAddress: '云南省昆明市五华区黑林铺街道康宏小区(西门)',
  }
  AMapSelectAddressDialogRef.value.open('', poi)
}
const HuiAMapSelectAddressRef = ref(null)
function onSubmit(data) {
  poi.value = data
  HuiAMapSelectAddressRef.value.setupMap()
}

async function onMessageBox() {
  // const [, res] = await HuiTool.msgBox('要删除所有历史记录吗？', { type: "danger" })
  const [, res] = await HuiTool.msgBoxQues('要删除所有历史记录吗？', { type: 'danger', width: 500 })
  console.info("🚀 ~ file:HomeView method:onMessageBox line:204 -----", res)
}

function getData() {
  const res = HuiGridFormRef.value.getData()
  console.info("🚀 ~ file:HomeView method:getData line:258 -----", res)
}
const testData = ref({ name: 'zs', address: '', count: '200', order: '' })
setTimeout(() => {
  testData.value = { name: 'zs', address: '大理', count: '700', order: ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'] }
}, 3000)
const tableData2 = ref([
  {
    title: '订单数',
    value: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
      'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
      'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
    ],
    prop: 'order',
    class: 'c-disabled font-bold',
    handler: (item) => funTest,
    type: 'img',
    // rightText: '触达记录',
  },
  {
    title: '性别',
    value: '1',
    prop: 'sex',
    class: 'c-success font-bold',
    handler: funTest,
    rightText: '触达记录',
  },
  {
    title: '数量',
    value: '1',
    prop: 'count',
    class: 'c-disabled font-bold',
    handler: funTest,
    rightText: '触达记录',
  },
  {
    title: '姓名',
    value: '1',
    prop: 'name',
    class: 'c-disabled font-bold',
    handler: funTest,
    rightText: '触达记录',
  },
  {
    title: '地址',
    value: '',
    prop: 'address',
    class: 'c-disabled font-bold',
    handler: funTest,
    rightText: '触达记录',
  },
])

function funTest() {
  console.info("🚀 ~ file:HomeView method:funTest line:305 -----", 222)
}
</script>

<template>
  <div class="">
    <div class=" flex-y mlr-10">
      <div class="admin-remark">admin-remark</div>
      <div class="admin-link">admin-link</div>
      <div class=" text-regular bg-normal b-(dark solid 1) line-1 w-130">unocss color test 123</div>
    </div>
    <div class="text-danger bg-success" :style="[testStyle, addStyle({height: addUnit(200)}, 'string')]">uno
      test
    </div>
    <div :style="{color: theme.colors.primary}">
      覆盖颜色
    </div>
    <div class="m-y-10">
      <HuiGridForm
        ref="HuiGridFormRef"
        hand-sort
        is-can-append
        hand-delete
        grid-from-class="mt-0 test c-error"
        :config="config" :list-data="listData"
      />
      <el-button class="mt-10" @click="getData">获取组件数据</el-button>
    </div>
    <div class="m-y-10">
      <HuiDataView title-width="100" class="mt-20" :data="testData" :config="tableData2" :line-count="1">
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
    </div>
    <div class="flex ml-10px">
      <div class="flex-y">
        <div>
          <ElButton @click="onDialogBtnClick">普通弹框测试1</ElButton>
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
          <HuiCountDownButton
            ref="countDownButton"
            title="发送验证码" :time-count="30"
            base-class="w-80"
            enable-class="text-primary"
            disable-class="text-gray-400"
            @click="onGetCodeClick"
          />
        </div>
        <div class="mt-10px">
          {{ selectedRegions }}
          <HuiRegionTreeSelect v-model="selectedRegions" :remote-show-suffix="false" multiple show-checkbox :disabled-regions="disabledRegions" clearable />
        </div>
        <div class="mt-10px">
          <ElButton @click="onRegionTreeDialogClick">地区树弹框</ElButton>
        </div>
        <div class="mt-10px">
          <ElButton @click="onTniymceClick">富文本编辑弹框</ElButton>
        </div>
        <div class="mt-10px">
          <ElButton @click="onAMapSelectAddressClick">地图选择</ElButton>
        </div>
        <div class="mt-10px">
          <ElButton @click="onMessageBox">命令式弹窗组件</ElButton>
        </div>
        <div class="mt-10px">
          <HuiLineEditPopover :row="popoverRow" field="sort" @confirm="lineEditPopoverConfirm" />
        </div>
      </div>
      <div class="flex flex-col ml-10">
        <el-select v-model="selectValue" v-select-loadmore="loadmore" placeholder="Select" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
          <HuiSelectLoadStatus :loading="loading" :length="options.length" :leave="leave" />
        </el-select>

        <div class="mt-10">
          <HuiTinymce v-model:tinymceContent="richTextContent" :link-attribute="[{ title: '小程序AppId', value: 'mp_appid' }]" width="500px" height="500px" />
        </div>
      </div>
      <div class="mt-10">
        <HuiAMapSelectAddress ref="HuiAMapSelectAddressRef" v-model:poi="poi" />
      </div>
    </div>

    <NormalDialogTest
      ref="normalDialogTest" top="40vh" width="60vw" @open="onNormalDialogOpen"
      @close="onNormalDialogClose"
    />
    <FormDialogTest ref="formDialogTest" top="20vh" width="40vw" @open="onFormDialogOpen" @close="onFormDialogClose" />
    <HuiLineEditDialog
      ref="lineEditDialog" prop="name" title="修改优惠券名称" label="优惠券名称"
      type="select" :rules="[{ required: true, message: '请选择批量下次跟进时间' , trigger: 'blur' }]"
      :select-dic="selectDic"
      :attr="{tagType:'error'}"
      :is-select-muti="true"
      :form-attr="{hideRequiredAsterisk:true}"
      :is-need-double-confirm="true" double-confirm-tips="测试二次确认"
      @on-value-change="onValueChange"
      @on-submit="handleRowEdit"
    />
    <HuiPreviewRichTextDialog ref="previewRichTextDialog" />
    <HuiAMapSelectAddressDialog ref="AMapSelectAddressDialogRef" @on-submit="onSubmit" />
    <HuiShowUrlDialog ref="showUrlDialog" title="查看链接" @close="showUrlDialogClose" />
    <HuiStringArrayInputDialog
      ref="stringArrayInputDialog"
      title="编辑字符串数组"
      label="标签" placeholder="请输入标签，使用' , '分隔"
      :rules="[{ required: true, message: '请输入标签', trigger: 'blur' }]"
      @on-submit="handleStringArrayInputSubmit"
    />
    <HuiRegionTreeDialog ref="regionTreeDialogRef" tree-label-key="label" :is-confirm-close="false" @on-submit="onRegionsSubmit" />
    <HuiTinymceDialog ref="tinymceDialogRef" :link-attribute="[{ title: '小程序AppId', value: 'mp_appid' }]" @on-submit="onTinymceSubmit" />
  </div>
</template>

