<script setup lang="ts">
import { testUtils } from "@hua5/hua5-utils"
import { nextTick, onMounted, Ref, ref } from 'vue'
import { loadMapScript } from './config.ts'
const emit = defineEmits(['pointClick'])
import type { HuiAMapMassMarkersPropsType } from './type.ts'

// 定义组件名字，全局安装的时候会用到
defineOptions({
  name: 'HuiAMapMassMarkers',
})

const props = withDefaults(defineProps<HuiAMapMassMarkersPropsType>(), {
  width: '40vw',
  height: '60vh',
  direction: 'top',
  showLabel: true,
  anchor: 'bottom-center',
  mapCenter: () => {
    return [102.832891, 24.880095]
  },
  textStyle: () => {
    return {
      fontSize: 12,
      fillColor: '#2445f4',
      backgroundColor: '#ccc',
      borderRadius: 2,
    }
  },
  iconType: 'iamge',
  iconPath: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
  iconSize: () => {
    return [19, 32]
  },
})

/** 高德地图配置 */
const map: Ref<any> = ref(null)
/** 地理位置的详细信息 */
const poi = defineModel<any>()

/** 定义一个外部函数来处理点击事件 */
function handleLabelMarkerClick(event, point) {
  emit('pointClick', point)
}

function loadMap() {
  nextTick(() => {
    map.value = new window.AMap.Map('mapContainer', {
      zoom: 10,
      viewMode: '3D',
      center: poi.value.length ? poi.value[0].position : props.mapCenter,
      showLabel: props.showLabel,
    })
    // 标记图层
    const labelsLayer = new window.AMap.LabelsLayer({
      zooms: [3, 20], // 缩放范围
      zIndex: 1000, // 图层层级
      collision: false, // 该层内标注是否避让
    })
    map.value.add(labelsLayer)

    // 创建标记并添加到标记图层
    if (testUtils.isArray(poi.value) && testUtils.isNotEmpty(poi.value)) {
      poi.value.forEach(point => {
        const labelMarker = new window.AMap.LabelMarker({
          position: point.position,
          text: {
            content: point.name,
            direction: props.direction,
            style: {
              ...props.textStyle,
            },
          },
          icon: {
            type: props.iconType,
            image: point.iconPath || props.iconPath,
            size: props.iconSize,
            anchor: props.anchor,
          },
        })
        labelsLayer.add(labelMarker)
        labelMarker.on('click', (e) => handleLabelMarkerClick(e, point))
      })
    }
  })
}

onMounted(async() => {
  try {
    await loadMapScript()
    loadMap()
  } catch (error) {
    console.error('Error loading map:', error)
  }
})

defineExpose({ handleLabelMarkerClick })

</script>

<template>
  <div id="mapContainer" :style="{height:height, width: width}" />
</template>
<style lang="scss" scoped>
</style>
