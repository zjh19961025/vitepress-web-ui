<script setup lang="ts">
import { ElTooltip, ElPopover, ElTag } from 'element-plus'
import HuiTags from "../HuiTags/HuiTags.vue"
defineOptions({
  name: 'HuiTagsMore',
})
import { onMounted, ref } from 'vue'
import { testUtils } from "@hua5/hua5-utils"
export interface TagItem {
  k: string; // 标签value
  v: string; // 标签label
  color?: string;
  tip?:string;
}
const props = defineProps({
  /* 标签数组传入value组成的数组 arr:[1,2,3]*/
  tagsList: {
    type: Array,
    default: () => [],
  },
  /* 字典对象*/
  dictObj: {
    type: Object as () =>TagItem,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => {},
  },
  /* 鼠标移入是否显示tip*/
  showTips: {
    type: Boolean,
    default: false,
  },
  /* 容器宽度（超出显示省略号）*/
  width: {
    type: Number,
    default: 100,
  },
  valueKey: {
    type: String,
    default: 'k',
  },
  labelKey: {
    type: String,
    default: 'v',
  },
  isElTag: {
    type: Boolean,
    default: false,
  },
  elTagType: {
    type: String,
    default: 'primary',
  },
  elTagAttr: {
    type: Object,
    default: () => { return {} },
  },
})
const parentDiv = ref(null)
const tagsDiv = ref(null)
const showMore = ref(false)
const handleMount = () => {
  const tagsDivClientWidth = tagsDiv.value.clientWidth
  showMore.value = tagsDivClientWidth >= props.width
}
onMounted(() => {
  handleMount()
})

function dictItem(item) {
  // 兼容传递了 ['标签1','标签2','标签3'] 的情况也可以使用该组件
  if (testUtils.isEmpty(props.dictObj)) {
    return {
      [props.labelKey]: item,
      [props.valueKey]: item,
    }
  }
  return props.dictObj[item] || {}
}

</script>

<template>
  <div ref="parentDiv" class="flex items-center parentDiv">
    <div ref="tagsDiv" class="tagsDiv whitespace-nowrap" :class="showMore ? 'overflow-hidden' : ''">
      <template v-if="showTips">
        <ElTooltip
          v-for="(item,index) in tagsList"
          :key="index"
          effect="dark"
          :show-after="200"
          :content="dictItem(item).tip || dictItem(item)[labelKey]"
          placement="top"
        >
          <ElTag v-if="isElTag" class="m-b-5 m-r-5" :type="elTagType" v-bind="elTagAttr">{{ dictItem(item)[labelKey] }}</ElTag>
          <HuiTags v-else class="m-b-5" :text="dictItem(item)[labelKey]" :style="{backgroundColor:dictItem(item).color}" />
        </ElTooltip>
      </template>
      <template v-else>
        <template v-if="isElTag">
          <ElTag v-for="item in tagsList" :key="dictItem(item)[valueKey]" class="m-b-5 m-r-5" :type="elTagType" v-bind="elTagAttr">{{ dictItem(item)[labelKey] }}</ElTag>
        </template>
        <template v-else>
          <HuiTags
            v-for="item in tagsList"
            :key="dictItem(item)[valueKey]"
            class="m-b-5"
            :text="dictItem(item)[labelKey]"
            :style="{backgroundColor:dictItem(item).color}"
          />
        </template>
      </template>
    </div>
    <ElPopover
      placement="right"
      title=""
      :width="130"
      trigger="hover"
    >
      <template #reference>
        <div v-if="showMore" class="admin-link text-20">...</div>
      </template>
      <div class="overflow-y-auto max-h-300">
        <template v-if="showTips">
          <ElTooltip
            v-for="(item,index) in tagsList"
            :key="index"
            effect="dark"
            :show-after="200"
            :content="dictItem(item).tip || dictItem(item)[labelKey]"
            placement="top"
          >
            <ElTag v-if="isElTag" class="m-b-5 m-r-5" :type="elTagType" v-bind="elTagAttr">{{ dictItem(item)[labelKey] }}</ElTag>
            <HuiTags v-else class="m-b-5" :text="dictItem(item)[labelKey]" :style="{backgroundColor:dictItem(item).color}" />
          </ElTooltip>
        </template>
        <template v-else>
          <template v-if="isElTag">
            <ElTag
              v-for="item in tagsList"
              :key="dictItem(item)[valueKey]"
              class="m-b-5 m-r-5"
              :type="elTagType"
              v-bind="elTagAttr"
            >
              {{ dictItem(item)[labelKey] }}
            </ElTag>
          </template>
          <template v-else>
            <HuiTags
              v-for="item in tagsList"
              :key="dictItem(item)[valueKey]"
              class="m-b-5"
              :text="dictItem(item)[labelKey]"
              :style="{backgroundColor:dictItem(item).color}"
            />
          </template>
        </template>
      </div>
    </ElPopover>
  </div>
</template>

<style scoped lang="scss">

</style>
