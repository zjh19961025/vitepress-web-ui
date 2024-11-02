<script lang="ts" setup>
import { ref } from "vue"

const points = ref([
  {
    id: '1',
    name: 'point',
    position: [102.6680535596609, 25.05396249981161],
    iconPath: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
  },
])

// 点击坐标获取当前坐标的相关信息可以使用pointClick()

</script>

<template>
  <HuiAMapMassMarkers v-model="points" width="100%" />
</template>
