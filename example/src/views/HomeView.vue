<script setup lang="ts">
import { useHuiTest, HuiTool } from "@hua5/hua5-web-ui"

const testStyle = ref(`width: ${HuiTool.addUnit(200)}`)
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
  HuiTool.ok("123")
}
</script>

<template>
  <div class="flex">
    <div class="text-yellowColor bg-mainColor" :style="[testStyle, addStyle({height: addUnit(200)}, 'string')]">uno test</div>
    <HuiTest :user="user" :labels="labels" msg="hello" @user-click="onUserClick" />
    <ElButton />
  </div>
</template>
