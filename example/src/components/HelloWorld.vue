<script setup lang="ts">
import { ref } from "vue"
import { HuaTest } from "hua5-web-ui"

defineProps<
{
  msg: string,
}>()

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
  <HuaTest :user="user" :labels="labels" msg="hello" @user-click="onUserClick" />

  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
