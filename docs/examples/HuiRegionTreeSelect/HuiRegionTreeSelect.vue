<script setup lang="ts">
import { ref } from "vue"
const selectedRegions = ref()
const selectedRegions1 = ref(['11'])
const treeData = ref([
  {
    "label": "北京市辖区",
    "id": "1101",
    "value": "1101",
    "hasChildren": true,
    "fullName": "北京市-北京市辖区",
    "children": [
      {
        "label": "东城区",
        "id": "110101",
        "value": "110101",
        "hasChildren": false,
        "fullName": "北京市-北京市辖区-东城区",
      },
      {
        "label": "西城区",
        "id": "110102",
        "value": "110102",
        "hasChildren": false,
        "fullName": "北京市-北京市辖区-西城区",
      },
      {
        "label": "朝阳区",
        "id": "110105",
        "value": "110105",
        "hasChildren": false,
        "fullName": "北京市-北京市辖区-朝阳区",
      },
    ],
  },
])
</script>

<template>
  <div>单选：{{ selectedRegions }}</div>
  <HuiRegionTreeSelect v-model:selectedRegions="selectedRegions" :tree-data="treeData" clearable />
  <div>多选：{{ selectedRegions1 }}</div>
  <HuiRegionTreeSelect v-model:selectedRegions="selectedRegions1" multiple show-checkbox clearable />
</template>
