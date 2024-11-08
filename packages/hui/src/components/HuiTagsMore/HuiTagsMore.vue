<script setup lang="ts">
import { ElTooltip, ElPopover } from 'element-plus'
import HuiTags from "../HuiTags/HuiTags.vue"
defineOptions({
  name: 'HuiTagsMore',
})
import { onMounted, ref } from 'vue'
export interface TagItem {
  k: string; // 标签value
  v: string; // 标签文本
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
  return props.dictObj[item] || {}
}

</script>

<template>
  <div ref="parentDiv" class="flex items-center parentDiv">
    <div ref="tagsDiv" class="overflow-hidden tagsDiv whitespace-nowrap">
      <template v-if="showTips">
        <ElTooltip
          v-for="(item,index) in tagsList"
          :key="index"
          effect="dark"
          :show-after="200"
          :content="dictItem(item).tip || dictItem(item).v"
          placement="top"
        >
          <HuiTags class="m-b-5" :text="dictItem(item).v" :style="{backgroundColor:dictItem(item).color}" />
        </ElTooltip>
      </template>
      <template v-else>
        <HuiTags v-for="item in tagsList" :key="dictItem(item).k" class="m-b-5" :text="dictItem(item).v" :style="{backgroundColor:dictItem(item).color}" />
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
            :content="dictItem(item).tip || dictItem(item).v"
            placement="top"
          >
            <HuiTags class="m-b-5" :text="dictItem(item).v" :style="{backgroundColor:dictItem(item).color}" />
          </ElTooltip>
        </template>
        <template v-else>
          <HuiTags v-for="item in tagsList" :key="dictItem(item).k" class="m-b-5" :text="dictItem(item).v" :style="{backgroundColor:dictItem(item).color}" />
        </template>
      </div>
    </ElPopover>
  </div>
</template>

<style scoped lang="scss">

</style>
