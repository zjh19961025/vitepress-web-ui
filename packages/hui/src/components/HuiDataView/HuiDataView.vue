<script setup lang="ts">
import type {HuiDataViewProp} from './type'
import {computed, watch} from "vue"
import {webUtils} from '@hua5/hua5-web-lib'
import {ElImage} from 'element-plus'
// 定义组件名字，全局安装的时候会用到
defineOptions({
  name: 'HuiDataView',
})
// 接收父组件传递的数据
const props = withDefaults(defineProps<HuiDataViewProp>(), {
  lineCount: 1,
  titleWidth: '100',
  data: () => { return {} },
})
/* 根据listData重新渲染value值*/
watch(() =>
  props.data,
(newValue, oldValue) => {
  const dataObj = newValue || {}
  for (const item of props.config) {
    item.value = dataObj[item.prop]
  }
},
{ immediate: true },
)
// 手机端只能展示一行
const getWidth = computed(() => 100 / (webUtils.isMobile() ? 1 : props.lineCount) + '%')
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
          <div v-if="item?.type === 'img'" class="flex flex-wrap">
            <ElImage
              v-for="(el,idx) in item.value" :key="idx"
              :class="idx !== item.value.length ? 'mr-10' :''"
              class="w-43 h-43 m-y-5 "
              :src="el"
              :preview-src-list="[item.value[idx]]"
              fit="cover"
            />
          </div>
          <template v-else>
            <slot :name="item.prop + '-left'" v-bind="item">
              <div :class="item.class">{{ item.value }}</div>
            </slot>
            <!--  rightText部分    -->
            <div class="flex-shrink-0">
              <slot :name="item.prop + '-right'" v-bind="item">
                <div class="c-primary hand" @click="item.handler?.(item)">{{ item.rightText }}</div>
              </slot>
            </div>
          </template>
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
