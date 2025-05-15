<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { ElInput, ElButton, ElSelect, ElOption } from 'element-plus'
import type { HuiGridFormProp, HuiGridFormEmitType } from './type.ts'
import { objectUtils, testUtils } from "@hua5/hua5-utils"
import { useDynamicList } from './HuiGridFormHooks.ts'
// 事件通知
const emits = defineEmits<HuiGridFormEmitType>()
// 定义组件名字，全局安装的时候会用到
defineOptions({
  name: 'HuiGridForm',
})

const { moveItem, removeItem } = useDynamicList()

const props = withDefaults(defineProps<HuiGridFormProp>(), {
  /** 是否可以排序 */
  handSort: false,
  /** 是否可以删除 */
  handDelete: false,
  /** 是否可以进行添加 */
  isCanAppend: false,
  /** 组件的数据源 */
  listData: () => { return [] },
  /** 组件透传的class */
  gridFromClass: 'mt-10',
  /** 底部添加按钮文案 */
  btnText: '添加',
})
/** 外部调用getData的时候进行校验设置为true用来显示报错信息 */
const isCheckProp = ref(false)
/** addRow()方法 添加进listData的模板 */
const dataTemplate:any = {}
/** 使用deepClone防止直接修改prop传递进来的数据，作为组件的输出 */
const deepCloneListData = ref(objectUtils.deepClone(props.listData))
/** config, 选择的过程中，需要修改配置中的部分数据，但，原数据需要保留使用, 因此，使用 深拷贝 和 数据监听 */
const columnConfig = ref(objectUtils.deepClone(props.config))

/* 根据listData重新渲染value值*/
watch(() => props.listData,
  (newValue, oldValue) => {
    deepCloneListData.value = newValue
    refresSelectDict()
  },
  { immediate: true },
)

watch(() => props.config,
  (newValue) => {
    columnConfig.value = objectUtils.deepClone(newValue)
    refresSelectDict()
  },
  {
    immediate: true,
  },
)

onMounted(() => {
  for (const key in columnConfig.value) {
    const item = columnConfig.value[key]
    dataTemplate[item.prop] = ""
  }
  if (testUtils.isEmpty(props.listData) && props.isCanAppend) {
    addRow()
  }
})
function addRow() {
  deepCloneListData.value.push(objectUtils.deepClone(dataTemplate))
}
function onHandleMoveItem(index: number, type: string, isCanSort) {
  if (!isCanSort) return
  moveItem(deepCloneListData.value, index, type)
}

async function onHandleDelete(index:number) {
  const item = deepCloneListData.value[index]
  let isCanDelete = true
  if (props.isCanDeleteItem) {
    isCanDelete = await props.isCanDeleteItem(item, index)
  }
  if (!isCanDelete) return
  const res = await removeItem(deepCloneListData.value, index)
  if (!res) return
  emits('onRemoveItem', item)
  refresSelectDict()
}

function getData(isCheck = true) {
  const resData = deepCloneListData.value.filter(item => !isItemAllEmpty(item))
  if (!isCheck) {
    return resData
  }
  isCheckProp.value = true
  return checkDataLegal(resData) ? resData : null
}
function checkDataLegal(resData) {
  // 遍历每一个对象
  for (const item of resData) {
    for (const configItem of columnConfig.value) {
      const isRequired = configItem.required ?? true
      if (!isRequired) continue
      if (testUtils.isEmpty(item[configItem.prop])) {
        return false
      }
    }
  }
  return true
}
// 校验是否每一项都为空
function isItemAllEmpty(item) {
  return Object.values(item).every(value => testUtils.isEmpty(value))
}

function isShowErrorTips(configItem, dataItem) {
  return isCheckProp.value && testUtils.isEmpty(dataItem[configItem.prop]) && !isItemAllEmpty(dataItem) && (configItem.required ?? true)
}

/**
 * 更新 select dict：可用不可用
 */
function refresSelectDict() {
  // 定义要处理的 数据 和 结构
  const selectObj = {}
  for (const item of columnConfig.value) {
    if (item.type !== "select") continue
    if (item.reselected) continue
    selectObj[item.prop] = {
      configItem: item,
      valueList: [],
    }
  }
  // 数据获取
  for (const dataItem of deepCloneListData.value) {
    // 从对象中获取数据
    for (const propKey in dataItem) {
      const propValue = dataItem[propKey]
      if (testUtils.isEmpty(propValue)) continue
      const selectInfo = selectObj[propKey]
      if (!selectInfo) continue
      selectInfo.valueList.push(propValue)
    }
  }
  // dict disabled 设置
  for (const key in selectObj) {
    const selectObjItem = selectObj[key]
    const valueList = selectObjItem.valueList
    const dict = selectObjItem.configItem.dict
    // 获取 props.config 中的 dict
    const propsItem = props.config.find((item) => item.prop == key)
    const propsItemDict = propsItem?.dict || []
    // 遍历 columnConfig 中的 dict
    for (const dictItem of dict) {
      // 如果 props dict 中 不可用，那么就不可用，否则，看是否已经被选中
      const isUsed = valueList.includes(dictItem.value) // 是否已经被选择
      const propsDictItem = propsItemDict.find((item) => item.value == dictItem.value)
      dictItem.disabled = propsDictItem?.disabled
      dictItem.isUsed = isUsed && !dictItem.disabled
    }
  }
}

function isShowSelectNoData(dict) {
  return !dict.some(item => item.disabled || !item.isUsed)
}

defineExpose({ getData })
</script>
<template>
  <!-- 标题 -->
  <div class="flex w-100% hui-grid-form-title" :class="gridFromClass" style=" width: 100% ">
    <div
      v-for="(item, index) in columnConfig" :key="index" class="font-bold pr-10"
      :style="{ width: item.width }"
    >
      {{ item.title }}
    </div>
  </div>
  <!-- 主体 -->
  <div v-for="(item, idx) in deepCloneListData" :key="idx" class="flex mt-10 w-100% hui-grid-form-content">
    <template v-for="el in columnConfig" :key="el.prop">
      <div class="flex-y pr-10 " :style="{ width: el.width }">
        <div v-if="$slots[el.prop]" class="flex">
          <slot :name="el.prop" v-bind="{dataItem: item, el, prop:el.prop}" />
        </div>
        <div v-else>
          <ElSelect
            v-if="el.type === 'select'"
            v-bind="el.attr"
            v-model="item[el.prop]"
            :disabled="el.readonly"
            :clearable="el.clearable ?? true"
            :placeholder="el.placeholder || '请选择'"
            @change="refresSelectDict"
          >
            <ElOption
              v-for="option in el.dict"
              v-show="!option.isUsed" :key="option.value"
              :label="option.label" :value="option.value" :disabled="option.disabled"
            >
              <slot :name="`${el.prop}-option`" :option="option" :prop="el.prop" :prop-config="el" />
            </ElOption>
            <div v-if="isShowSelectNoData(el.dict)" class="h-25 flex items-center justify-center c-disabled">
              <div>暂无数据</div>
            </div>
          </ElSelect>

          <el-input
            v-else
            v-bind="el.attr"
            v-model="item[el.prop]"
            :type="el.dataType ? el.dataType : 'number'"
            :readonly="el.readonly"
            :placeholder="el.placeholder || '请输入'"
            class="inputFund"
            :input-style="el.style"
          >
            <template v-if="testUtils.isNotEmpty(el.append)" #append>{{ el.append }}</template>
          </el-input>
        </div>
        <div v-if="isShowErrorTips(el,item)" class="c-danger lh-20">{{ el.errMsg || `请输入${el.title}` }}</div>
      </div>
    </template>
    <div v-if="handSort || handDelete" class="w-58 flex-shrink-0 h-32 lh-32 hand">
      <i
        v-if="handSort"
        :class="idx === deepCloneListData.length - 1 ? '!text-[theme(backgroundColor.normal)]' : ''"
        class="icon-com i-com-jiantou-xia-shixin text-disabled ml-5 !text-13"
        @click="onHandleMoveItem(idx, 'down',idx !== deepCloneListData.length - 1)"
      />
      <i
        v-if="handSort"
        :class="idx === 0 ? '!text-[theme(backgroundColor.normal)]' : ''"
        class="icon-com i-com-jiantou-shang-shixin text-disabled ml-5 !text-13"
        @click="onHandleMoveItem(idx, 'up',idx !== 0)"
      />
      <i
        v-if="handDelete"
        class="icon-com i-com-lajitong text-disabled ml-5 !text-13"
        @click="onHandleDelete(idx)"
      />
    </div>
  </div>
  <!-- 添加操作 -->
  <ElButton v-if="isCanAppend" class="mt-10" @click="addRow">
    {{ props.btnText }}
    <template #icon>
      <i class="icon-com i-com-jiahao" />
    </template>
  </ElButton>
</template>

<style scoped lang="scss">
::v-deep(.el-input-group__append){
  height: 32px;
  padding: 0 10px;
}

::v-deep(.inputFund input::-webkit-inner-spin-button ){
  -webkit-appearance: none!important;
  ::v-deep(.inputFund input[type="number"]){
    -moz-appearance: textfield;
  }
}
</style>
