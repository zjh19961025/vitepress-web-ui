<script lang="ts" setup>
import { ref } from "vue"
const HuiAMapSearchAddressDialogRef = ref<any>(null)
const poi = {
  "id": 85687,
  "regionCode": "110102",
  "provinceName": "北京市",
  "cityName": "北京市辖区",
  "districtName": "西城区",
  "street": "7天优品酒店(北京天安门店)",
  "streetShort": "7天优品酒店(北京天安门店)",
  addressName: '7天优品酒店(北京天安门店)',
  "lon": "116.382723",
  "lat": "39.90447",
}

const onAMapSelectAddressClick = () => {
  /* 打开地图的时候如果需要传递位置参数*/
  HuiAMapSearchAddressDialogRef.value.open('', poi)
}
function onSubmit(data) {
  console.info("🚀 ~ file:HuiAMapSelectAddressDialog method:onSubmit line:21 -----", data)
}

</script>

<template>
  <el-button @click="onAMapSelectAddressClick">地图搜索弹窗</el-button>
  <HuiAMapSearchAddressDialog ref="HuiAMapSearchAddressDialogRef" @on-submit="onSubmit" />
</template>
