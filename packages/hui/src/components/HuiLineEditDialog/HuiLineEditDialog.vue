<template>
  <ElDialog
    v-model="show"
    :title="title"
    :width="width"
    top="35vh"
    :modal-append-to-body="false"
    append-to-body
    @open="beforeOpen"
    @close="beforeClose"
  >
    <ElForm
      ref="formRef"
      :model="form"
      :rules="inputRules"
      size="small"
      require-asterisk-position="right"
      class="mt-30 fw-bold w-100%"
      :label-width="labelWidth"
    >
      <ElFormItem :label="label" prop="inputData" class="flex w-100%">
        <!-- input 输入栏 -->
        <el-input v-if="isInputType" v-bind="attr" ref="inputRef" v-model.trim="form.inputData" :type="type" :placeholder="inputPlaceHolder" clearable autosize @input="valueChange" @focus="valueChange" />

        <!-- select 选择栏 -->
        <ElSelect
          v-if="isSelectType"
          v-bind="attr"
          v-model="form.inputData"
          class="w-100%"
          filterable
          :multiple="isSelectMuti"
          :placeholder="inputPlaceHolder"
        >
          <ElOption
            v-for="(item) in selectDic"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>

      </ElFormItem>
    </ElForm>

    <template #footer>
      <div>
        <ElButton size="default" class="!text-[theme(colors.primary)] !border !border-1 !border-[theme(colors.primary)] !px-16 !text-14" @click="handleCancel">取 消</ElButton>
        <ElButton type="primary" size="default" :loading="confirmLoading" class="w-120 !ml-20" @click="handleSubmit">确 定</ElButton>
      </div>
    </template>
  </ElDialog>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, reactive } from 'vue'
import { ElForm, ElInput, ElButton, ElMessage, ElFormItem, ElSelect, ElOption, ElDialog } from 'element-plus'
import { useHuiDialog } from "../../hooks/index"
import type { HuiLineEditDialogPropsType, HuiLineEditDialogEmitType } from "./type"
import { HuiTool } from "../../utils/hui-tool/index"
// 组件名
defineOptions({
  name: 'HuiLineEditDialog',
})
// 默认props
const props = withDefaults(defineProps<HuiLineEditDialogPropsType>(), {
  isNeedDoubleConfirm: false,
  doubleConfirmTips: "确定要执行该操作吗？",
  title: '请输入内容',
  label: "内容",
  type: "input",
  selectDic: () => [],
  isSelectMuti: false,
  width: '450px',
  labelWidth: '94',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  attr: () => ({
  }),
})
// 事件通知
const emits = defineEmits<HuiLineEditDialogEmitType>()

// useHuiDialog
const { show, open, close, payload, confirmLoading } = useHuiDialog()

const formRef = ref<any>()
const inputRef = ref<any>()
const row = ref(null)
const form = reactive({
  inputData: '',
})

const isInputType = computed(() => props.type === 'input' || props.type === 'textarea')
const isSelectType = computed(() => props.type === 'select')
const inputPlaceHolder = computed(() => props.placeholder || `请输入${props.label}`)
const inputRules = computed(() => ({ 'inputData': props.rules }))

const valueChange = () => {
  emits('onValueChange', form, row.value)
}

const handleSubmit = async() => {
  formRef.value.validate(async(valid) => {
    if (valid) {
      row.value[props.prop] = form.inputData
      if (props.isNeedDoubleConfirm) {
        const [, res] = await HuiTool.msgBox(props.doubleConfirmTips)
        if (res) {
          emits('onSubmit', row.value, props.prop)
          close()
        } else {
          ElMessage({
            type: 'info',
            message: '操作已取消',
          })
        }
      } else {
        emits('onSubmit', row.value, props.prop)
        close()
      }
    } else {
      ElMessage.error('验证未通过')
      return false
    }
  })
}

const beforeOpen = () => {
  if (!payload) {
    close()
    return
  }
  row.value = payload.value
  form.inputData = (row.value[props.prop] >= 0 || row.value[props.prop]) ? row.value[props.prop] : ''
  nextTick(() => {
    if (isInputType.value) inputRef.value.focus()
  })
}

const beforeClose = () => {
  formRef.value.resetFields()
  row.value = null
  form.inputData = ''
  payload.value = {}
}

// 取消按钮
const handleCancel = () => {
  close()
}

defineExpose({
  open,
  close,
})
</script>

<style scoped lang="scss">
:deep(.el-form-item__content){
  flex: 1;
}
:deep(.el-form-item__label){
  display: flex;
}
</style>
