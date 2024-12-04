<script lang="ts" setup>
import { Check, Close } from '@element-plus/icons-vue'
import { ElInput, ElPopover, ElButton, ElForm, ElFormItem } from 'element-plus'
import { nextTick, onBeforeUnmount, onMounted, ref, toValue, computed, reactive } from 'vue'
import type { HuiLineEditPopoverPropsType, HuiLineEditPopoverEmitType } from './type'

defineOptions({
  name: 'HuiLineEditPopover',
})

const props = withDefaults(defineProps<HuiLineEditPopoverPropsType>(), {
  width: 206,
  baseClass: 'text-primary px-4',
  disabled: false,
})

const row = defineModel<{[key:string]: string}>('row')

const emit = defineEmits<HuiLineEditPopoverEmitType>()

const form = reactive({ inputData: null })
const show = ref(false)
const inputRef = ref<InstanceType<typeof ElInput> | null>(null)
const formRef = ref<InstanceType<typeof ElForm> | null>(null)
const inputRules = computed(() => ({ 'inputData': props.rules }))

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp)
})

function editShow() {
  form.inputData = row.value[props.field]
  setTimeout(() => {
    inputRef.value?.focus()
  }, 10)
}

async function onFocus(event) {
  await nextTick()
  event.currentTarget?.select() && event.currentTarget?.select()
}

function confirm() {
  formRef.value?.validate((valid) => {
    if (valid) {
      row.value[props.field] = form.inputData
      emit('confirm', toValue(row))
      close()
    }
  })
}

function close() {
  show.value = false
}

function handleKeyUp(e) {
  if (e.keyCode == 27 || e.code == 'Escape') {
    close()
    e.stopPropagation()
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('keyup', handleKeyUp)
})

</script>

<template>
  <el-popover
    v-model:visible="show"
    placement="top"
    :width="width"
    trigger="click"
    :disabled="disabled"
    popper-style="height:76px;"
    @show="editShow"
  >
    <el-form ref="formRef" :model="form" :rules="inputRules">
      <div v-if="show" class="flex">
        <el-form-item prop="inputData">
          <el-input
            ref="inputRef" v-model="form.inputData" class="!m-2 p-0" size="small"
            @keyup.enter.prevent="confirm"
            @focus="onFocus($event)"
          />
        </el-form-item>
        <el-button class="!m-2 !w-32 !h-28 !text-18 !p-4 flex-shrink-0" type="primary" :icon="Check" @click="confirm" />
        <el-button class="!m-2 !w-32 !h-28 !text-18 !p-4 flex-shrink-0" :icon="Close" @click="close()" />
      </div>
    </el-form>
    <template #reference>
      <span :class="[baseClass, disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
        <slot>{{ row[field] }}</slot>
      </span>
    </template>
  </el-popover>
</template>

<style lang="scss" scoped>
:deep(.el-input--small){
  width: 102px;
  height: 28px;
}
:deep(.el-input__wrapper){
  padding: 0 15px !important;
}
</style>
