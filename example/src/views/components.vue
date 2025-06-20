<script setup lang="ts">
</script>

<template>
  <div class="bg-normal p-5">HuiTip</div>
  <div>
    <div class="flex items-center">
      <div>图标插槽</div>
      <HuiTip content="1212" rclass="!ml-20">
        <template #icon>
          <i class="icon-com i-com-wenhao" />
        </template>
      </HuiTip>
    </div>

    <div class="flex items-center">
      <div>内容插槽</div>
      <HuiTip icon-class="!c-red">
        <div class="c-red">23131</div>
      </HuiTip>
    </div>

    <div class="flex items-center">
      <div>图标插槽和内容插槽</div>
      <HuiTip content="1212">
        <template #icon>
          <i class="icon-com i-com-gantanhao" />
        </template>
        <div class="c-red">我是插槽</div>
      </HuiTip>
    </div>

    <div class="flex items-center">
      <div>普通文本content</div>
      <HuiTip content="我是普通文本" />
    </div>

    <div class="flex items-center">
      <div>富文本content</div>
      <HuiTip content-class="c-blue flex flex-center" content="<div class='c-yellow bg-red'>我是富文本</div><div>内容。。。</div>" />
    </div>

    <div class="flex items-center">
      <div>透传attr</div>
      <HuiTip content-class="c-blue" content="点击触发" :tip-attr="{trigger:'click',placement:'bottom'}" />
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>
