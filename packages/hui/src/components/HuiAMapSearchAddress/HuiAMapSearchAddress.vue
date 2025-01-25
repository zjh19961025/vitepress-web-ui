<script setup lang="ts">
import { addAMap } from '../AMapConfig'
import { testUtils } from "@hua5/hua5-utils"
import { HuiTool } from "../../utils/hui-tool/index"
import { onMounted, Ref, ref, watch, nextTick, reactive, computed } from 'vue'
import type { HuiAMapSearchAddressPropsType } from './type.ts'
import { selectLoadmore as vSelectLoadmore } from "../../directives/select-loadmore.ts"
import { ElOption, ElSelect, ElCascader } from 'element-plus'
// 定义组件名字，全局安装的时候会用到
defineOptions({
  name: 'HuiAMapSearchAddress',
})

const props = withDefaults(defineProps<HuiAMapSearchAddressPropsType>(), {
  disabled: false,
  showInput: false,
  width: '100%',
  height: '490px',
  iconPath: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
  iconClass: 'w-19 h-32 rel',
})
/** 选择的地址位置 */
const address: Ref<string> = ref('')
/** 高德地图配置 */
const marker: Ref<any> = ref(null)
/** 高德地图配置 */
const map: Ref<any> = ref(null)
/** 地理位置的详细信息 */
const poi = defineModel<any>()
/** 下拉列表选择的位置 */
const selectAddress = ref('')
/** 下拉列表数据 */
const addressList = ref([])
/** 地区树选择数据 */
const regionTree = ref<any[]>([])
/** 地区树选择 */
const regionTreeValue = ref([])
/** 地区tree转换的最终值 因为regionTree是一个数组 我们希望得到一个字符串 */
const cityCode:any = ref('')
/** 地图容器盒子 */
const map__container = ref(getRandomString(2))

onMounted(async() => {
  regionTree.value = await window.huiDelegate.getRegionTree()
  loadMap()
})

function loadMap() {
  addAMap().then(() => {
    setupMap()
  })
}

function setupMap() {
  nextTick(() => {
    init(() => {
      if (testUtils.isNotEmpty(poi.value)) {
        const { provinceName, cityName, districtName, street, streetShort } = poi.value
        addressList.value = [{ ...poi.value, pname: provinceName, cityname: cityName, adname: districtName, address: streetShort, name: street }]
        selectAddress.value = poi.value.id
        regionTreeValue.value = poi.value.regionCode
      }
      if (poi.value?.longitude && poi.value?.latitude) {
        addMarker(poi.value.longitude, poi.value.latitude)
        getAddress(poi.value.longitude, poi.value.latitude)
      }
      if (poi.value?.lon && poi.value?.lat) {
        addMarker(poi.value.lon, poi.value.lat)
        getAddress(poi.value.lon, poi.value.lat)
      }
    })
  })
}

function init(callback: () => void) {
  map.value = new window.AMap.Map(map__container.value, {
    zoom: testUtils.isNotEmpty(poi.value) ? 23 : 13,
    center: (() => {
      if (poi.value?.longitude && poi.value?.latitude) {
        return [poi.value.longitude, poi.value.latitude]
      }
      if (poi.value?.lon && poi.value?.lat) {
        return [poi.value.lon, poi.value.lat]
      }
    })(),
  })
  map.value.setMapStyle('amap://styles/f695f9484e6fb466b6680b7806a5eae6")')
  callback()
}

watch(regionTreeValue, (val) => {
  if (testUtils.isArray(val)) {
    cityCode.value = val[val.length - 1]
  } else {
    cityCode.value = val
  }
})

watch(poi, (val) => {
  address.value = val.formattedAddress
}, { deep: true })

const placeSearchOptions = reactive({
  city: computed(() => cityCode.value),
  citylimit: false,
  pageSize: 20,
  pageIndex: 1,
  extensions: 'all',
})
const count = ref(0)
const keyword = ref('')
watch(keyword, () => {
  addressList.value = []
  placeSearchOptions.pageIndex = 1
})

function addressChange(e) {
  const target = addressList.value.find(item => item.id == e) || {}
  poi.value = target
  regionTreeValue.value = target.adcode
  const P = target.location.KT || target.location.lat
  const R = target.location.KL || target.location.lng
  clearMarker()
  addMarker(R, P)
  getAddress(R, P)
  map.value.setCenter([R, P]) // 设置地图中心点
  map.value.setZoom(18) // 设置地图缩放级别
}

function handleInput(e) {
  if (testUtils.isEmpty(e)) return
  keyword.value = e
  // 异步加载 AutoComplete 插件
  window.AMap.plugin("AMap.PlaceSearch", async function() {
    await nextTick()
    // 实例化AutoComplete
    var autoComplete = new window.AMap.PlaceSearch(placeSearchOptions)
    // 根据关键字进行搜索 keyword 为搜索的关键词
    autoComplete.search(keyword.value, function(status, result) {
      // 搜索成功时，result 即是对应的匹配数据
      if (testUtils.isEmpty(result) || testUtils.isEmpty(result.poiList.pois)) return
      result.poiList.pois.forEach((item) => {
        item.provinceName = item.pname
        item.cityName = item.cityname
        item.districtName = item.adname
        item.street = item.address
        item.streetShort = item.name
        item.addressName = item.name
      })
      count.value = result.poiList.count
      addressList.value.push(...result.poiList.pois)
    })
  })
}

function loadmore() {
  if (addressList.value.length >= count.value) return
  placeSearchOptions.pageIndex++
  handleInput(keyword.value)
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
// 添加标记点
function addAddressMarker(address: string) {
  // 自定义点标记内容
  const markerContent = document.createElement('div')
  // 点标记中的图标
  const markerImg = document.createElement('img')
  // 图标样式
  markerImg.className = props.iconClass
  // 图标路径
  markerImg.src = props.iconPath
  markerContent.appendChild(markerImg)
  // 点标记中的文本
  if (!address) return
  const markerSpan = document.createElement('span')
  markerSpan.className = 'AMap__marker top-0 abs'
  markerSpan.innerHTML = address
  markerContent.appendChild(markerSpan)
  marker.value.setContent(markerContent) // 更新点标记内容
}

function getAddress(longitude: number, latitude: number) {
  // eslint-disable-next-line new-cap
  // 加载 Geocoder 插件
  window.AMap.plugin('AMap.Geocoder', function() {
    // 创建一个 Geocoder 实例
    const geocoder = new window.AMap.Geocoder()
    // 使用 Geocoder 实例获取地址
    geocoder.getAddress([longitude, latitude], (status, result) => {
      if (status === 'complete' && result.info === 'OK') {
        nextTick(() => {
          const addressName = addressList.value.find(item => item.id == selectAddress.value)?.name || ''
          addAddressMarker(addressName)
        })
      } else {
        console.error('获取地址失败', result)
      }
    })
  })
}

function getRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return 'map__container' + result
}

function submitInfo() {
  if (testUtils.isNotEmpty(poi.value)) {
    return true
  } else {
    HuiTool.err('请选择地址')
    return false
  }
}

defineExpose({ loadMap, setupMap, poi, submitInfo })
</script>

<template>
  <div class="AMap">
    <div class="flex h-32 lh-32 mb-20">
      <div class="w-100 text-center">地区</div>
      <ElCascader v-model="regionTreeValue" class="w-full" separator="-" :options="regionTree" placeholder="选择地区" />
    </div>
    <div class="flex h-32 lh-32 mb-20">
      <div class="w-100 text-center">位置名称</div>
      <ElSelect
        v-model="selectAddress"
        v-select-loadmore="loadmore"
        class="loadmore"
        filterable
        remote
        :teleported="false"
        reserve-keyword
        placeholder="小区名 / 店铺 / 写字楼 / 街道名称"
        :remote-method="handleInput"
        no-data-text="暂时查询不到数据"
        @change="addressChange"
      >
        <ElOption
          v-for="item in addressList"
          :key="item.id"
          :label="item.addressName"
          :value="item.id"
        >
          <div class="flex justify-between text-14">
            <div class="c-regular">{{ item.addressName }}</div>
            <div class="c-disabled">{{ item.pname + item.cityname + item.adname + item.address }}</div>
          </div>
        </ElOption>
      </ElSelect>
    </div>
    <div class="AMap__content-box" :style="{height:height}">
      <div :id="map__container" class="AMap__content-container" tabindex="0" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
::v-deep(.AMap__marker){
  position: absolute;
  top: -20px;
  right: -20px;
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
    }
    &-result {
      display: block !important;
      width: 350px;
      overflow-y: auto;
    }
  }
}
::v-deep .amap-ui-poi-picker-sugg-container{
  left: 0 !important;
  right: 0 !important;
}
</style>
