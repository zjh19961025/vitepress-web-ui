<template>
  <el-dialog
    v-model="show"
    title="表单弹框测试"
    width="520px"
    top="35vh"
    :modal-append-to-body="false"
    append-to-body
    @open="onOpen"
    @close="onClose"
  >
    <el-form
      ref="formRef"
      :loading="formLoading"
      :model="form"
      :rules="rules"
      size="small"
      class="mt-10px fw-bold w-100%"
      @open="onOpen"
      @close="onClose"
      @submit.native.prevent="handleSubmit"
    >
      <el-form-item label="测试" prop="testProp" class="flex w-100%">
        <el-input v-model.trim="form.testProp" placeholder="请输入测试" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div>
        <el-button size="small" @click="handleCancel">取 消</el-button>
        <el-button type="primary" size="small" class="width-100" :loading="confirmLoading" @click="handleSubmit">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { HuiRules, useHuiFormDialog } from '@hua5/hua5-web-ui'
// import { useHuiFormDialog } from './test2'
import { ElMessageBox } from 'element-plus'
const formModel = {
  testProp: "http://127.0.0.1:5173/",
  // testProp: "1",
}
const {
  show, open, close, form, formRef,
  formLoading, confirmLoading,
  handleCancel, handleSubmit,
  onOpen, onClose,
} = useHuiFormDialog({ formModel,
  isNeedDoubleConfirm: true,
  doubleConfirmAction,
  beforeSubmit, submitCheck, afterSubmit,
  put, post,
})

const rules = {
  testProp: HuiRules.urlRule(),
}

function beforeSubmit(submitForm: any) {
  console.log("beforeSubmit", submitForm)
  return submitForm
}
function submitCheck(submitForm: any) {
  console.log("submitCheck", submitForm)
  return true
}
function afterSubmit(res: any) {
  console.log("afterSubmit", res)
}

function doubleConfirmAction(form: any, submit: any, cancelSubmit: any) {
  ElMessageBox.confirm('自定义?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => submit(form)).catch(() => cancelSubmit())
}

function put() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([123, 123])
    }, 3000)
  })
}

function post() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([123, 123])
    }, 3000)
  })
}

defineExpose({
  open,
  close,
})
</script>

  <style scoped lang="scss">

  </style>
