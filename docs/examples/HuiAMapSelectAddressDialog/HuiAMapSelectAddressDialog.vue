<script lang="ts" setup>
import { ref } from "vue"
const HuiAMapSelectAddressDialogRef = ref<any>(null)
const HuiAMapSelectAddressRef = ref<any>(null)
const poi = ref({
  latitude: '25.05329348090535',
  longitude: '102.74809961646793',
  formattedAddress: '云南省昆明市盘龙区青云街道昙华路',
})

const onAMapSelectAddressClick = () => {
  /* 打开地图的时候如果需要传递位置参数*/
  HuiAMapSelectAddressDialogRef.value.open('', poi.value)
}
function onSubmit(data) {
  poi.value = data
  HuiAMapSelectAddressRef.value.setupMap()
  console.info("🚀 ~ file:HuiAMapSelectAddressDialog method:onSubmit line:21 -----", data)
}

</script>

<template>
  <el-button @click="onAMapSelectAddressClick">地图选择弹窗</el-button>
  <HuiAMapSelectAddress ref="HuiAMapSelectAddressRef" v-model:poi="poi" width="100%" />
  <HuiAMapSelectAddressDialog ref="HuiAMapSelectAddressDialogRef" @on-submit="onSubmit" />
</template>
