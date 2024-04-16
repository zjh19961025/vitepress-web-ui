<script setup lang="ts">
import { ref, watch, nextTick, toValue } from 'vue'
import { ElDialog, ElInput, ElTree, ElButton } from 'element-plus'
import { useHuiDialog } from "../../hooks/index"
import type { HuiRegionTreeDialogPropsType, HuiRegionTreePopoverEmitType } from './type'
// useHuiDialog
const { id, show, open, close, payload, confirmLoading } = useHuiDialog()

// 接收的参数
const props = withDefaults(defineProps<HuiRegionTreeDialogPropsType>(), {
  accordion: false,
  nodeKey: 'id',
  treeLabelKey: 'title',
  isConfirmClose: true,
  showCheckbox: true,
})

// 自定义事件
const emit = defineEmits<HuiRegionTreePopoverEmitType>()

const filterText = ref('')
const regionTree = ref(window.huiDelegate.getRegionTree())
const treeRef = ref<InstanceType<typeof ElTree> | null>(null)

watch(filterText, (val) => {
  treeRef.value?.filter(val)
})

function beforeOpen() {
  // 设置禁用
  const setDisAbledRegion = (regions) => {
    toValue(regions).forEach(item => {
      if (item.hasChildren) {
        setDisAbledRegion(item.children)
      } else {
        item.disabled = (toValue(payload) as any)?.disabledRegions?.includes(item.id)
      }
    })
  }
  nextTick(() => {
    setDisAbledRegion(regionTree)
  })
}

function beforeClose() {
  payload.value = {}
  confirmLoading.value = false
}

function handleSubmit() {
  confirmLoading.value = true
  const regionList = treeRef.value.getCheckedKeys(true) || []
  emit('onSubmit', { id: toValue(id), regionList })
  if (props.isConfirmClose) close()
}

function filterNode(value: string, data: any, node: any) {
  if (!value) return true
  // 解决搜索后无法点击下级展开问题
  const one = data?.[props.treeLabelKey]?.includes(value)
  const two = node?.parent?.data?.[props.treeLabelKey]?.includes(value)
  const three = node?.parent?.parent?.data?.[props.treeLabelKey]?.includes(value)
  let result_one = false
  let result_two = false
  let result_three = false
  if (node.level === 1) {
    result_one = one
  } else if (node.level === 2) {
    result_two = one || two
  } else if (node.level === 3) {
    result_three = one || two || three
  }
  return result_one || result_two || result_three
}

defineExpose({
  open,
  close,
  confirmLoading,
})
</script>

<template>
  <ElDialog
    v-model="show"
    title="地区选择"
    width="500px"
    top="5vh"
    :modal-append-to-body="false"
    append-to-body
    destroy-on-close
    @open="beforeOpen"
    @close="beforeClose"
  >
    <ElInput
      v-model="filterText"
      placeholder="输入关键字进行过滤"
      class="my-10"
    />

    <div class="h-70vh overflow-y-scroll">
      <ElTree
        ref="treeRef"
        :data="regionTree" :show-checkbox="showCheckbox" :node-key="nodeKey"
        :props="{label: props.treeLabelKey}"
        :default-checked-keys="(payload as any).defaultCheckedKeys"
        :default-expanded-keys="(payload as any).defaultCheckedKeys"
        :filter-node-method="filterNode"
      />
    </div>
    <template #footer>
      <div class="mt-20">
        <ElButton size="large" @click="close">取 消</ElButton>
        <ElButton type="primary" size="large" class="w-100" :loading="confirmLoading" @click="handleSubmit">提 交</ElButton>
      </div>
    </template>
  </ElDialog>
</template>
