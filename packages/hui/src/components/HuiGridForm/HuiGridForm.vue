<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { ElInput, ElButton, ElSelect, ElOption } from 'element-plus'
import type { HuiGridFormProp, HuiGridFormEmitType } from './type.ts'
import { objectUtils, testUtils } from "zjh-utils"
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
const dataTemplate: Record<string, any> = {}

/* ---- 唯一 ID 生成（用于 v-for key，提升 DOM 复用） ---- */
let rowIdCounter = 0

function assignRowIds(rows: any[]) {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i]._uid === undefined) rows[i]._uid = ++rowIdCounter
  }
}

/** 使用deepClone防止直接修改prop传递进来的数据，作为组件的输出 */
const deepCloneListData = ref<any[]>([])
/** config, 选择的过程中，需要修改配置中的部分数据，但，原数据需要保留使用, 因此，使用 深拷贝 和 数据监听 */
const columnConfig = ref(objectUtils.deepClone(props.config))

/* ---- 计算属性：每列已选中的值集合（替代 refresSelectDict 全量遍历方案） ---- */
const usedValuesByProp = computed(() => {
  const configMap: Record<string, boolean> = {}
  for (const item of columnConfig.value) {
    configMap[item.prop] = !!item.reselected
  }
  const map: Record<string, Set<any>> = {}
  for (const item of deepCloneListData.value) {
    for (const key of Object.keys(item)) {
      if (key === '_uid') continue // 跳过内部 ID
      if (configMap[key]) continue // reselected 列允许重复，不追踪
      const val = item[key]
      if (testUtils.isEmpty(val)) continue
      if (!map[key]) map[key] = new Set()
      map[key].add(val)
    }
  }
  return map
})

/**
 * 判断某个 select 列是否还有可用选项。
 * 与原 isShowSelectNoData 语义一致：
 *   - 存在 disabled 选项 → 永远有展示内容，不显示"暂无数据"
 *   - 没有 disabled 选项 → 所有非禁用选项都被选中时才显示"暂无数据"
 */
function hasAvailableOptions(prop: string, dict: any[] | undefined): boolean {
  if (!dict || dict.length === 0) return false
  const configItem = columnConfig.value.find(c => c.prop === prop)
  if (configItem?.reselected) return true
  // 有 disabled 选项时 dropdown 始终有展示内容（置灰不可选）
  if (dict.some(d => d.disabled)) return true
  const usedValues = usedValuesByProp.value[prop]
  if (!usedValues || usedValues.size === 0) return true
  return dict.some(d => !usedValues.has(d.value))
}

/**
 * 监听 listData prop 变化，替换内部数据。
 * 使用 deepClone 避免误改父组件数据。
 * 与原始行为一致：父组件传新 listData 时完全替换内部状态。
 */
watch(() => props.listData,
  (newValue) => {
    const cloned: any[] = objectUtils.deepClone(newValue || [])
    assignRowIds(cloned)
    deepCloneListData.value = cloned
  },
  { immediate: true },
)

watch(() => props.config,
  (newValue) => {
    columnConfig.value = objectUtils.deepClone(newValue)
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
  const newRow: any = objectUtils.deepClone(dataTemplate)
  newRow._uid = ++rowIdCounter
  deepCloneListData.value.push(newRow)
}

function onHandleMoveItem(index: number, type: string, isCanSort: boolean) {
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
}

function getData(isCheck = true) {
  const resData = deepCloneListData.value
    .filter(item => !isItemAllEmpty(item))
    .map(({ _uid, ...rest }) => rest) // 剥离内部 _uid，避免泄漏给父组件
  if (!isCheck) {
    return resData
  }
  isCheckProp.value = true
  return checkDataLegal(resData) ? resData : null
}

function checkDataLegal(resData: any[]) {
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

// 校验是否每一项都为空（排除 _uid）
function isItemAllEmpty(item: any) {
  return Object.entries(item)
    .filter(([key]) => key !== '_uid')
    .every(([_, value]) => testUtils.isEmpty(value))
}

function isShowErrorTips(configItem: any, dataItem: any) {
  if (!isCheckProp.value) return false
  if (!testUtils.isEmpty(dataItem[configItem.prop])) return false
  if (isItemAllEmpty(dataItem)) return false
  return configItem.required ?? true
}

defineExpose({ getData })
</script>
<template>
  <!-- 标题 -->
  <div class="flex w-100% hui-grid-form-title" :class="gridFromClass" style=" width: 100% ">
    <div
      v-for="(item, index) in columnConfig" :key="`header-${index}`" class="font-bold pr-10"
      :style="{ width: item.width }"
    >
      {{ item.title }}
    </div>
  </div>
  <!-- 主体 -->
  <div v-for="(item, idx) in deepCloneListData" :key="item._uid" class="flex mt-10 w-100% hui-grid-form-content">
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
          >
            <ElOption
              v-for="option in el.dict"
              v-show="el.reselected || option.disabled || !usedValuesByProp[el.prop]?.has(option.value)"
              :key="option.value"
              :label="option.label" :value="option.value" :disabled="option.disabled"
            >
              <slot :name="`${el.prop}-option`" :option="option" :prop="el.prop" :prop-config="el" />
            </ElOption>
            <div v-if="!hasAvailableOptions(el.prop, el.dict)" class="h-25 flex items-center justify-center c-disabled">
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
