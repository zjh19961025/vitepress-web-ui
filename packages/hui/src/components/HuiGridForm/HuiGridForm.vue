<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElInput, ElButton, ElSelect, ElOption } from 'element-plus'
import type { HuiGridFormProp } from './type.ts'
import { objectUtils, testUtils } from "@hua5/hua5-utils"
import { useDynamicList } from './HuiGridFormHooks.ts'
// 定义组件名字，全局安装的时候会用到
defineOptions({
  name: 'HuiGridForm',
})

const { moveItem, removeItem } = useDynamicList()

const { handSort, isCanAppend, handDelete, config, listData } = withDefaults(defineProps<HuiGridFormProp>(), {
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
})
/** 外部调用getData的时候进行校验设置为true用来显示报错信息 */
const isCheckProp = ref(false)
/** addRow()方法 添加进listData的模板 */
const dataTemplate:any = {}
/** 使用deepClone防止直接修改prop传递进来的数据，作为组件的输出 */
const deepCloneListData = ref(objectUtils.deepClone(listData))

onMounted(() => {
  for (const key in config) {
    const item = config[key]
    dataTemplate[item.prop] = ""
  }
  if (testUtils.isEmpty(listData)) {
    addRow()
  }
})
function addRow() {
  deepCloneListData.value.push(objectUtils.deepClone(dataTemplate))
}
function onHandleMoveItem(index: number, type: string) {
  moveItem(deepCloneListData.value, index, type)
}

function onHandleDelete(index:number) {
  removeItem(deepCloneListData.value, index)
}

function getData() {
  isCheckProp.value = true
  return checkDataLegal() ? deepCloneListData.value : null
}
function checkDataLegal() {
  // 遍历每一个对象
  for (const item of deepCloneListData.value) {
    for (const key in item) {
      if (testUtils.isEmpty(item[key])) {
        return false
      }
    }
  }
  return true
}

defineExpose({ getData })
</script>
<template>
  <!-- 标题 -->
  <div class="flex w-100%" :class="gridFromClass" style=" width: 100% ">
    <div
      v-for="(item, index) in config" :key="index" class="font-bold pr-10"
      :style="{ width: item.width }"
    >
      {{ item.title }}
    </div>
  </div>
  <!-- 主体 -->
  <div v-for="(item, idx) in deepCloneListData" :key="idx" class="flex mt-10 w-100%">
    <template v-for="el in config" :key="el.prop">
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
            :placeholder="el.placeholder || '请选择'"
          >
            <ElOption
              v-for="option in el.dict" :key="option.value"
              :label="option.label" :value="option.value"
            />
          </ElSelect>

          <el-input
            v-else
            v-bind="el.attr"
            v-model="item[el.prop]"
            :type="el.dataType ? el.dataType : 'number'"
            :readonly="el.readonly"
            :placeholder="el.placeholder || '请输入'"
            class="inputFund"
          >
            <template v-if="testUtils.isNotEmpty(el.append)" #append>{{ el.append }}</template>
          </el-input>
        </div>
        <div v-if="isCheckProp && testUtils.isEmpty(item[el.prop])" class="c-danger lh-20">{{ el.errMsg || `请输入${el.title}` }}</div>
      </div>
    </template>
    <div v-if="handSort || handDelete" class="w-58 flex-shrink-0 h-32 lh-32 hand">
      <i
        v-if="handSort"
        :class="idx === deepCloneListData.length - 1 ? '!text-[theme(backgroundColor.normal)]' : ''"
        class="icon-com i-com-jiantou-xia-shixin text-disabled ml-5 !text-13"
        @click="onHandleMoveItem(idx, 'down')"
      />
      <i
        v-if="handSort"
        :class="idx === 0 ? '!text-[theme(backgroundColor.normal)]' : ''"
        class="icon-com i-com-jiantou-shang-shixin text-disabled ml-5 !text-13"
        @click="onHandleMoveItem(idx, 'up')"
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
    添加
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
