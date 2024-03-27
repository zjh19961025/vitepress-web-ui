<script setup lang="ts">
import { useHuiTest } from "@hua5/hua5-web-ui"
const user = ref({
  name: "测试组件",
  sex: "男",
  age: 999,
})
const labels = ref(["测试", "第一个"])
const { testVlaue } = useHuiTest(user)

function onUserClick(user: any, msg: string) {
  console.log("onUserClick", user, msg)
  console.log("useHuaTest result", testVlaue.value)
  alert(user.name + msg)
}

</script>

<template>
  <div class="flex">
    <div class=" text-yellowColor bg-mainColor">uno test</div>
    <HuiTest :user="user" :labels="labels" msg="hello" @user-click="onUserClick" />
    <ElButton />
  </div>
</template>
