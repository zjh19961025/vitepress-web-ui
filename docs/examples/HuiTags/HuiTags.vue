<script setup lang="ts">

</script>

<template>
  <div class="flex">
    <HuiTags text="红色" type="error" />
    <HuiTags text="默认" type="primary" />
    <HuiTags text="成功" type="success" />
    <HuiTags text="危险" type="warning" />
    <HuiTags text="信息" type="info" />
    <HuiTags text="自定义class" tag-class="!bg-red" />
    <HuiTags text="自定义style" style="background: #0b8235" />
  </div>
</template>

<style scoped lang="scss">

</style>
