<script setup lang="ts">
import { ElInput, ElTree, ElPopover, ClickOutside as vClickOutside } from 'element-plus'
import { ref, watch, nextTick, onMounted } from 'vue'
import type { HuiRegionTreePopoverPropsType, HuiRegionTreePopoverEmitType } from './type'
import { testUtils } from '@hua5/hua5-utils'
import { getRegionNameByCode } from '@hua5/hua5-web-lib'

defineOptions({
  name: 'HuiRegionTreePopover',
})

// 接收的参数
const props = withDefaults(defineProps<HuiRegionTreePopoverPropsType>(), {
  accordion: true,
  onlySelectLeaf: false,
  treeLabelKey: 'title',
  isReadonly: true,
  disabled: false,
  width: '400',
})

// 双向绑定的值
const region = defineModel<string>('region')

const emit = defineEmits<HuiRegionTreePopoverEmitType>()

const filterText = ref('')
const regionText = ref('')
const isShowTree = ref(false)
const regionTree = ref<any[]>([])
const filterTextInput = ref(null)

onMounted(async() => {
  regionTree.value = props.treeData ? props.treeData : await window.huiDelegate.getRegionTree()
})

// 组件实例
const treeRef = ref<InstanceType<typeof ElTree> | null>(null)

watch(filterText, (val) => {
  treeRef.value.filter(val)
})

watch(region, async(val) => {
  if (testUtils.isEmpty(val)) {
    regionText.value = ''
  } else {
    regionText.value = await getRegionNameByCode(region.value)
  }
}, { immediate: true })

watch(isShowTree, (val) => {
  // 打开tree并且有region值，滚动到当前节点
  if (val && region.value) {
    nextTick(() => {
      const activeTreeDom = document.getElementById(`tree${region.value}`)
      if (activeTreeDom) {
        activeTreeDom.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    })
  }
})

async function handleNodeClick(data) {
  if ((props.onlySelectLeaf && data.id.length == 6) || !props.onlySelectLeaf) {
    regionText.value = await getRegionNameByCode(data.id)
    region.value = data.id
    emit('onRegionChange', data.id)
  }
  data.id.length == 6 && (isShowTree.value = false)
}

function handleBackspace() {
  regionText.value = ''
  region.value = ''
  emit('onRegionChange', '')
}

function handleOutSide() {
  filterText.value = ''
  isShowTree.value = false
}

function onRegionInputClick() {
  isShowTree.value = true
  setTimeout(() => {
    props.isReadonly && filterTextInput.value.focus()
  }, 0)
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
</script>

<template>
  <div v-click-outside="handleOutSide">
    <ElPopover :visible="isShowTree" :width="width" :teleported="false">
      <template #reference>
        <ElInput
          v-model="regionText"
          placeholder="请选择地区"
          clearable
          :readonly="isReadonly"
          :disabled="disabled"
          @clear="handleBackspace"
          @click="onRegionInputClick"
        />
      </template>
      <template #default>
        <div class="rel h-300 overflow-y-scroll">
          <ElInput
            ref="filterTextInput"
            v-model="filterText"
            class="sticky top-0 left-0 z-10"
            :placeholder="`输入关键字进行过滤${onlySelectLeaf ? '，只允许选择地区' : ''}`"
          />
          <ElTree
            v-if="isShowTree"
            ref="treeRef"
            :accordion="accordion"
            node-key="id" :data="regionTree"
            :props="{label: treeLabelKey}"
            :default-expanded-keys="[region]"
            :filter-node-method="filterNode"
            @node-click="handleNodeClick"
          >
            <template #default="{ node, data }">
              <span>
                <span :id="'tree'+ data.id" :class="{'text-primary': region == data.id}">{{ node.label }}</span>
              </span>
            </template>
          </ElTree>
        </div>
      </template>
    </ElPopover>
  </div>
</template>
