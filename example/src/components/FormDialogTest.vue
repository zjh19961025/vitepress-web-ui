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
        <el-input v-model="form.testProp" placeholder="请输入测试" />
      </el-form-item>
      <el-form-item label="json" prop="jsonProp" class="flex w-100%">
        <el-input v-model="form.jsonProp" placeholder="请输入json" />
      </el-form-item>
      <el-form-item label="正整数" prop="intNum" class="flex w-100%">
        <el-input v-model="form.intNum" placeholder="请输入正整数" />
      </el-form-item>
      <el-form-item label="指定最大小数位数字" prop="digitNum" class="flex w-100%">
        <el-input v-model="form.digitNum" placeholder="请输入数字" />
      </el-form-item>
      <el-form-item label="非负数" prop="posIntNum" class="flex w-100%">
        <el-input v-model="form.posIntNum" placeholder="请输入非负数" />
      </el-form-item>
      <el-form-item label="最大两位小数金额" prop="money" class="flex w-100%">
        <el-input v-model="form.money" placeholder="请输入金额" />
      </el-form-item>
      <el-form-item label="非负的整数" prop="allNum" class="flex w-100%">
        <el-input v-model="form.allNum" placeholder="请输入非负的整数" />
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
  jsonProp: '{"test": 1}',
  intNum: 1,
  digitNum: 1.22,
  posIntNum: 5.9999,
  money: 3.22,
  allNum: 5,
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
  jsonProp: [HuiRules.jsonRule()],
  intNum: HuiRules.intNumRule(),
  digitNum: HuiRules.digitNumRule(2),
  posIntNum: HuiRules.isPosIntRule(),
  money: [HuiRules.isPosIntRule(), HuiRules.digitNumRule(2)],
  allNum: HuiRules.allNumRule(),
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
