<script setup lang="ts">
import { addAMap } from './config'
import { testUtils } from "@hua5/hua5-utils"
import { HuiTool } from "../../utils/hui-tool/index"
import { onMounted, Ref, ref, watch, nextTick } from 'vue'
import type { HuiAMapSelectAddressPropsType } from './type.ts'

// 定义组件名字，全局安装的时候会用到
defineOptions({
  name: 'HuiAMapSelectAddress',
})

const props = withDefaults(defineProps<HuiAMapSelectAddressPropsType>(), {
  disabled: false,
  showInput: false,
  width: '1000px',
  height: '500px',
})

/** 选择的地址位置 */
const address: Ref<string> = ref('')
/** 高德地图配置 */
const marker: Ref<any> = ref(null)
/** 高德地图配置 */
const map: Ref<any> = ref(null)
/** 地理位置的详细信息 */
const poi = defineModel<any>('poi')

watch(poi, (val) => {
  address.value = val.formattedAddress
}, { deep: true })

function setupMap() {
  nextTick(() => {
    init(() => {
      if (poi.value?.longitude && poi.value?.latitude) {
        addMarker(poi.value.longitude, poi.value.latitude)
        getAddress(poi.value.longitude, poi.value.latitude)
      }
      if (poi.value?.location) {
        addMarker(poi.value.location.lng, poi.value.location.lat)
        getAddress(poi.value.location.lng, poi.value.location.lat)
      }
    })
  })
}

function handleInput() {
  updateSearchResults()
}

function updateSearchResults() {
  if (!props.showInput) return
  const resultDiv = document.getElementById('map__result')
  setTimeout(() => {
    const searchDiv = document.querySelector('.amap_lib_placeSearch')
    resultDiv.innerHTML = searchDiv ? '' : `<h3 class="w-full text-center text-12">暂无搜索结果</h3>`
  }, 200)
}

function submitInfo() {
  if (testUtils.isNotEmpty(poi.value)) {
    return true
  } else {
    HuiTool.err('请选择地址')
    return false
  }
}

function addMarker(longitude: number, latitude: number) {
  clearMarker()
  marker.value = new window.AMap.Marker({
    position: [longitude, latitude],
    map: map.value,
  })
  marker.value.setMap(map.value)
}

function clearMarker() {
  if (marker.value) {
    marker.value.setMap(null)
    marker.value = null
  }
}

function getAddress(longitude: number, latitude: number) {
  new window.AMap.service('AMap.Geocoder', () => {
    const geocoder = new window.AMap.Geocoder({})
    geocoder.getAddress([longitude, latitude], (status:string, result:any) => {
      if (status === 'complete' && result.info === 'OK') {
        const regeocode = result.regeocode
        poi.value = Object.assign(regeocode, {
          longitude,
          latitude,
        })
        // 自定义点标记内容
        const markerContent = document.createElement('div')
        // 点标记中的图标
        const markerImg = document.createElement('img')
        markerImg.style.width = '19px'
        markerImg.style.height = '34px'
        markerImg.src =
            '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
        markerContent.appendChild(markerImg)
        // 点标记中的文本
        const markerSpan = document.createElement('span')
        markerSpan.className = 'AMap__marker'
        nextTick(() => {
          markerSpan.innerHTML = poi.value.formattedAddress
          markerContent.appendChild(markerSpan)
          marker.value.setContent(markerContent) // 更新点标记内容
        })
      }
    })
  })
}
function addClick() {
  map.value.on('click', (e:any) => {
    const lnglat = e.lnglat
    const P = lnglat.P || lnglat.Q
    const R = lnglat.R
    addMarker(R, P)
    getAddress(R, P)
  })
}
function init(callback: () => void) {
  map.value = new window.AMap.Map(map__container.value, {
    zoom: testUtils.isNotEmpty(poi.value) ? 23 : 13,
    center: (() => {
      if (poi.value?.longitude && poi.value?.latitude) {
        return [poi.value.longitude, poi.value.latitude]
      }
      if (poi.value?.location) {
        return [poi.value.location.lng, poi.value.location.lat]
      }
    })(),
  })
  initPoip()
  addClick()
  callback()
}

function initPoip() {
  if (!props.showInput) return
  window.AMapUI.loadUI(['misc/PoiPicker'], (PoiPicker:any) => {
    window.poiPicker = new PoiPicker({
      input: 'map__input',
      placeSearchOptions: {
        map: map.value,
        pageSize: 10,
      },
      searchResultsContainer: 'map__result',
    })
    window.poiPicker.on('poiPicked', handlePoiPicked)
  })
}

function handlePoiPicked(poiResult: any) {
  clearMarker()
  const source = poiResult.source
  const poiItem = poiResult.item
  poi.value = Object.assign(poiItem, {
    formattedAddress: poiItem.name,
    longitude: poiItem.location.R,
    latitude: poiItem.location.P,
  })
  if (source !== 'search') {
    window.poiPicker.searchByKeyword(poiItem.name)
  }
}
function loadMap() {
  addAMap().then(() => {
    setupMap()
  })
}
onMounted(() => {
  loadMap()
})

function getRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return 'map__container' + result
}

const map__container = ref(getRandomString(2))
defineExpose({ loadMap, setupMap, poi, submitInfo })
</script>

<template>
  <div class="AMap" :style="{width:width,height:height}">
    <el-input
      v-if="showInput"
      id="map__input"
      v-model="address"
      class="AMap__content-input"
      :readonly="props.disabled"
      clearable
      placeholder="输入关键字选取地点"
      @input="handleInput"
    />
    <div class="AMap__content-box" :class="showInput ? '' :'noEvents'">
      <div :id="map__container" class="AMap__content-container" tabindex="0" />
      <div v-if="showInput" id="map__result" class="AMap__content-result">
        <h3 class="w-full text-center text-12">暂无搜索结果</h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.noEvents{
  pointer-events:none
}
::v-deep(.AMap__marker){
  position: absolute;
  top: -20px;
  right: -118px;
  color: #fff;
  padding: 4px 10px;
  box-shadow: 1px 1px 1px rgba(10, 10, 10, 0.2);
  white-space: nowrap;
  font-size: 12px;
  background-color: #25a5f7;
  border-radius: 3px;
}
.AMap {
  &__content {
    &-input {
      margin-bottom: 10px;
      z-index: 999;
    }
    &-box {
      display: flex;
    }
    &-container {
      width: 100%;
      height: 450px;
    }
    &-result {
      display: block !important;
      width: 350px;
      height: 450px;
      overflow-y: auto;
    }
  }
}
::v-deep .amap-ui-poi-picker-sugg-container{
  left: 0 !important;
  right: 0 !important;
}
</style>
