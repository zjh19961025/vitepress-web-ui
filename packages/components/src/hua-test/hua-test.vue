<template>
  <div class="">
    <div class="flex flex-col bg-gray" @click="onUserClick">
      <div>user</div>
      <div class="">
        <span>姓名</span>
        <span class=" text-red ml-8px">{{ user.name }}</span>
      </div>
      <div class="">
        <span>性别</span>
        <span class=" text-blue text-20px ml-8px">{{ user.sex }}</span>
      </div>
      <div class="">
        <span>年龄</span>
        <span class="text-yellow text-20px ml-8px">{{ user.age }}</span>
      </div>
      <!-- <div class="">
        <span>其他</span>
        <span class="text-blue text-32">{{ user.extra }}</span>
      </div> -->
      <div class="">
        <span>标签</span>
        <span
          v-for="(item, index) in labels" :key="index"
          class=" text-pink text-20px ml-8px"
        >
          {{ item }}
        </span>
      </div>
    </div>
    <div>
      <ElButton size="small" type="success" @click="onUserClick">按钮测试</ElButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus'
import type { PropsType, EmitType } from "./hua-test"
defineOptions({
  name: 'HuaTest',
})

const props = withDefaults(defineProps<PropsType>(), {
  user: () => {
    return {
      name: "1234",
      extra: "extra",
    }
  },
  msg: "hello",
  labels: () => [],
})
const emits = defineEmits<EmitType>()
function onUserClick() {
  emits("userClick", props.user, `${props.user.name} click msg = ${props.msg}`)
}
</script>
