<script setup lang="ts">
import { ElDialog, ElButton, ElInput, ElForm, ElFormItem, ElMessage } from 'element-plus'
import { useHuiDialog } from "../../hooks/index"
import { stringUtils, testUtils } from '@hua5/hua5-utils'
import { reactive, ref, toValue } from 'vue'
import type { HuiStringArrayInputDialogForm, HuiStringArrayInputDialogPropsType, HuiStringArrayInputDialogRules, HuiStringArrayInputDialogEmitType } from './type'
const { id, show, payload, confirmLoading, open, close } = useHuiDialog()

// form 实例
const formRef = ref<InstanceType<typeof ElForm> | null>(null)

// 事件通知
const emits = defineEmits<HuiStringArrayInputDialogEmitType>()
// 参数默认值
const props = withDefaults(defineProps<HuiStringArrayInputDialogPropsType>(), {
  title: '请输入',
  label: '内容',
  placeholder: '请输入',
  tips: true,
})
// 表单
const form = reactive<HuiStringArrayInputDialogForm>({
  inputInfo: '',
})

const inputInfoRules = reactive<HuiStringArrayInputDialogRules>({
  inputInfo: props.rules || [],
})

function beforeOpen() {
  if (testUtils.isEmpty(toValue(payload))) {
    close()
    return
  }
  form.inputInfo = Array.isArray((toValue(payload) as any).inputInfo) ? (toValue(payload) as any).inputInfo.join(',') : (toValue(payload) as any).inputInfo
}

// 抛出数据
function handleSubmit() {
  formRef.value.validate(async(valid) => {
    if (valid) {
      confirmLoading.value = true
      let info = form.inputInfo
      info = stringUtils.trimChar(info.replaceAll('，', ','), ',', 'both')
      emits('onSubmit', toValue(id), info)
      close()
    } else {
      ElMessage.error('验证未通过')
      return false
    }
  })
}

// 清空数据
function beforeClose() {
  form.inputInfo = ''
  payload.value = {}
  confirmLoading.value = false
  formRef.value.resetFields()
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <ElDialog
    v-model="show"
    :title="title"
    width="520px"
    top="35vh"
    :modal-append-to-body="false"
    append-to-body
    @open="beforeOpen"
    @close="beforeClose"
  >
    <ElForm
      ref="formRef"
      :model="form"
      :rules="inputInfoRules"
      size="small"
      class="mt-30 font-bold w-100%"
    >
      <ElFormItem :label="label" prop="inputInfo" class="flex w-100%">
        <ElInput v-model.trim="form.inputInfo" :placeholder="placeholder" @keyup.enter="handleSubmit" />
      </ElFormItem>
      <div v-if="tips" class="text-danger ml-50">{{ placeholder }}</div>
    </ElForm>

    <template #footer>
      <div>
        <ElButton @click="close">取 消</ElButton>
        <ElButton type="primary" class="w-100" :loading="confirmLoading" @click="handleSubmit">确 定</ElButton>
      </div>
    </template>
  </ElDialog>
</template>
