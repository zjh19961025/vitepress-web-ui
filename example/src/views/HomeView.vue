<script setup lang="ts">
import { ref } from "vue"
import { HuaTest } from "@hua5/hua5-web-ui"

const user = ref({
  name: "测试组件",
  sex: "男",
  age: 999,
})
const labels = ref(["测试", "第一个"])

function onUserClick(user: any, msg: string) {
  console.log("onUserClick", user, msg)
  alert(user.name + msg)
}

</script>

<template>
  <div class="flex">
    <HuaTest :user="user" :labels="labels" msg="hello" @user-click="onUserClick" />
  </div>
</template>
