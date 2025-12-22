<template>
  <div class="flex-y">
    <div v-for="(colorCat, colorCatIndex) in theme" :key="colorCatIndex" class="flex-y">
      <div class="text-20 fw-700 mtb-10">{{ colorCat.title }}</div>
      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in colorCat.list" :key="index"
          class="hand"
          :class="colorCat.itemClass"
          :style="[colorCat.getItemStyle(item.value)]"
          @click="onItemClick(colorCat, item)"
        >
          <div>{{ colorCat.textPrefix + item.label }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 为了兼容服务端渲染，不能在组件中直接 import zjhWebLib
 * 因此，挂载在 window 上供组件使用
 */
// import { webUtils } from 'zjh-web-lib'
import { uiTheme } from "@zjh/unocss-preset"
import { ElMessage } from 'element-plus'

const colorsCatKey = ["colors", "textColor", "backgroundColor", "borderColor"]
const theme = {
  colors: {
    title: "基础colors",
    textPrefix: "",
    copyFormat: "${color}",
    list: [],
    itemClass: "text-15 w-150 h-80 rd-4 mtb-8 mr-8 p-8",
    getItemStyle: getColorsItemStyle,
  },
  textColor: {
    title: "textColor",
    textPrefix: "text-",
    copyFormat: "text-${color}",
    list: [],
    itemClass: "text-15 w-150 h-80 rd-4 mtb-8 mr-8 p-8 bg-white b-(lighter solid 1)",
    getItemStyle: getTextColorItemStyle,
  },
  backgroundColor: {
    title: "backgroundColor",
    textPrefix: "bg-",
    copyFormat: "bg-${color}",
    list: [],
    itemClass: "text-15 w-150 h-80 rd-4 mtb-8 mr-8 p-8 b-(lighter solid 1)",
    getItemStyle: getBackgroundColorItemStyle,
  },
  borderColor: {
    title: "borderColor",
    textPrefix: "border-",
    copyFormat: "b-(${color} solid 1)",
    list: [],
    itemClass: "text-15 w-150 h-80 rd-4 mtb-8 mr-8 p-8 bg-white b-1 b-solid",
    getItemStyle: getBorderColorItemStyle,
  },
}

for (const colorsKey of colorsCatKey) {
  const colorsObj = uiTheme[colorsKey]
  for (const key in colorsObj) {
    const value = colorsObj[key]
    theme[colorsKey].list.push({ label: key, value })
  }
}
function getColorsItemStyle(color) {
  return {
    "background-color": color,
  }
}
function getTextColorItemStyle(color) {
  return {
    "color": color,
  }
}
function getBackgroundColorItemStyle(color) {
  return {
    "background-color": color,
  }
}
function getBorderColorItemStyle(color) {
  return {
    "border-color": color,
  }
}

function onItemClick(colorCat, item) {
  const source = colorCat.copyFormat.replace('${color}', item.label)
  console.log("source", source)

  window.zjhWebLib.webUtils.clipboard({ text: source }).then(() => ElMessage.success(`复制成功:${source}`))
}
</script>

<style lang="scss" scoped>
</style>
