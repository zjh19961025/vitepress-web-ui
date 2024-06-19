<script lang="ts" setup>
import { Check, Close } from '@element-plus/icons-vue'
import { ElInput, ElPopover, ElButton } from 'element-plus'
import { onBeforeUnmount, onMounted, ref, toValue } from 'vue'
import type { HuiLineEditPopoverPropsType, HuiLineEditPopoverEmitType } from './type'

defineOptions({
  name: 'HuiLineEditPopover',
})

const { field } = withDefaults(defineProps<HuiLineEditPopoverPropsType>(), {
  width: 180,
  baseClass: 'text-primary px-4',
  disabled: false,
})

const row = defineModel<{[key:string]: string}>('row')

const emit = defineEmits<HuiLineEditPopoverEmitType>()

const show = ref(false)
const inputRef = ref<InstanceType<typeof ElInput> | null>(null)

onMounted(() => {
  window.addEventListener('keyup', handleKeyUp)
})

function editShow() {
  setTimeout(() => {
    inputRef.value?.focus()
  }, 10)
}

function onFocus(event) {
  event.currentTarget.select()
}

function confirm() {
  emit('confirm', toValue(row))
  close()
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
    @show="editShow"
  >
    <div v-if="show" class="flex">
      <el-input
        ref="inputRef" v-model="row[field]" class="!m-2" size="small" :style="{'max-width': width+'px'}"
        @keyup.enter.prevent="confirm" @focus="onFocus($event)"
      />
      <el-button class="button-icon-mini !m-2 !w-32" type="primary" :icon="Check" @click="confirm" />
      <el-button class="button-icon-mini !m-2 !w-32" :icon="Close" @click="close()" />
    </div>
    <template #reference>
      <span :class="[baseClass, disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
        <slot>{{ row[field] }}</slot>
      </span>
    </template>
  </el-popover>
</template>
