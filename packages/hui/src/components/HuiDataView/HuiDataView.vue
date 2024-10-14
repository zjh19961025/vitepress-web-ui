<script setup lang="ts">
import type { HuiDataViewProp } from './type'
import { watch, computed } from "vue"
import { webUtils } from '@hua5/hua5-web-lib'
// 定义组件名字，全局安装的时候会用到
defineOptions({
  name: 'HuiDataView',
})
// 接收父组件传递的数据
const { config, lineCount, data } = withDefaults(defineProps<HuiDataViewProp>(), {
  lineCount: 1,
  titleWidth: '100',
  data: () => { return {} },
})
/* 根据listData重新渲染value值*/
watch(
  data,
  (newValue, oldValue) => {
    const dataObj = newValue || {}
    for (const item of config) {
      const value = dataObj[item.prop]
      if (!value) continue
      item.value = value
    }
  },
  { immediate: true },
)
// 手机端只能展示一行
const getWidth = computed(() => 100 / (webUtils.isMobile() ? 1 : lineCount) + '%')
</script>

<template>
  <div class="flex flex-wrap">
    <div v-for="(item,index) in config" :key="item.prop" class="flex" :style="{ width: getWidth}">
      <!--标题-->
      <div
        class="text-center bg-normal flex-center flex-shrink-0 text-14 b-1px b-solid b-lighter lh-32 text-regular !c-info noBorderTop"
        :class="[
          (index+1) <= lineCount ? '!b-t-1px !b-t-solid !b-t-lighter' :'',
          (index % lineCount != 0 ? 'noBorderLeft': '' )
        ]"
        :style="{width: addUnit(titleWidth)}"
      >
        <slot :name="item.prop + '-title'" v-bind="item">
          <div>{{ item.title }}</div>
        </slot>
      </div>
      <!--  内容部分    -->
      <div
        class="flex-1 b-1px b-solid b-lighter noBorderLeft text-regular"
        :class="(index+1) > lineCount ? 'noBorderTop' :''"
      >
        <div class="flex justify-between lh-32 p-x-10">
          <!--  value部分    -->
          <slot :name="item.prop + '-left'" v-bind="item">
            <div :class="item.class">{{ item.value }}</div>
          </slot>
          <!--  rightText部分    -->
          <div class="flex-shrink-0">
            <slot :name="item.prop + '-right'" v-bind="item">
              <div class="c-primary hand" @click="item.handler?.(item)">{{ item.rightText }}</div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
*{
  font-size: 14px;
}
.noBorderTop{
  border-top: none;
}
.noBorderLeft{
  border-left: none;
}
</style>
