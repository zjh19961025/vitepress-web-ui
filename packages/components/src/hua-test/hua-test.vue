<template>
  <div class="">
    <div class="text-red bg-blue">
      <div>1</div>
      <div class="text-yellow">2</div>
      <div class=" text-red">hello</div>
    </div>
    <el-input v-model="state.name" ref="inputRef" type="text" :disabled="props.disabled" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref, defineOptions, defineExpose, defineEmits,  withDefaults, defineProps} from 'vue'
import { ElInput } from 'element-plus'
import type { TestUserType, PropsType, EmitType } from "./hua-test"

defineOptions({
  name: 'HuaTest',
})

const props = withDefaults(defineProps<PropsType>(), {
  msg:"123",
  user: () => {
      return { 
        name: "123",
        extra: "extra"
    }
  },
  disabled: false,
})
const emits = defineEmits<EmitType>()

const state = computed({
  get: () => props.user,
  set: (val: TestUserType) => {
    emits('update:user', val, "hello")
  }
})


const inputRef = ref<InstanceType<typeof ElInput>>()

function focus() {
  inputRef.value?.focus()
}

defineExpose({
  focus
})
</script>