<script lang="ts" setup>
import { ref } from "vue"

const HuiAMapSelectAddressRef = ref<any>(null)
const poi = ref({
  latitude: '25.05329348090535',
  longitude: '102.74809961646793',
  formattedAddress: '云南省昆明市盘龙区青云街道昙华路',
})

// 如果需要poi变化了需要调用 HuiAMapSelectAddressRef.value.setupMap()

</script>

<template>
  <HuiAMapSelectAddress ref="HuiAMapSelectAddressRef" v-model="poi" width="100%" />
</template>
