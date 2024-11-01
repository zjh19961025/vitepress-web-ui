<template>
  <el-dialog
    v-model="show"
    title="表单弹框测试"
    width="520px"
    top="35vh"
    :modal-append-to-body="false"
    append-to-body
    @close="beforeClose"
  >
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="form"
      :rules="rules"
      size="small"
      class="mt-10px fw-bold w-100%"
      @submit.native.prevent="handleSubmit"
    >
      <el-form-item label="测试" prop="testProp" class="flex w-100%">
        <el-input v-model="form.testProp" placeholder="请输入测试" />
      </el-form-item>
      <el-form-item label="json" prop="jsonProp" class="flex w-100%">
        <el-input v-model="form.jsonProp" placeholder="请输入json" />
      </el-form-item>
      <el-form-item label="整数" prop="intNum" class="flex w-100%">
        <el-input v-model="form.intNum" placeholder="请输入整数" />
      </el-form-item>
      <el-form-item label="指定最大小数位数字" prop="digitNum" class="flex w-100%">
        <el-input v-model="form.digitNum" placeholder="请输入数字" />
      </el-form-item>
      <el-form-item label="验证码" prop="code" class="flex w-100%">
        <el-input v-model="form.code" placeholder="请输入验证码" />
      </el-form-item>
      <el-form-item label="电话号码" prop="phone" class="flex w-100%">
        <el-input v-model="form.phone" placeholder="请输入电话" />
      </el-form-item>
      <el-form-item label="数字范围" prop="numRange" class="flex w-100%">
        <el-input v-model="form.numRange" placeholder="请输入数字" />
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
import { ElMessageBox } from 'element-plus'
const formModel = {
  testProp: "http://127.0.0.1:5173/",
  jsonProp: '{"test": 1}',
  intNum: 1,
  id: '2222',
  digitNum: 1.22,
  code: 56963,
  phone: 12345678901,
  numRange: 5,
}
const {
  show, open, close, form, formRef,
  formLoading, confirmLoading,
  handleCancel, handleSubmit,
} = useHuiFormDialog({ formModel,
  isNeedDoubleConfirm: false,
  beforeSubmit, submitCheck, afterSubmit,
  // doubleConfirmAction,
  put, post, permissionConfig: { postCode: 'addUserCode1', putCode: 'addUserCode1', postCodeTip: '无新增权限', putCodeTip: '无编辑权限' },
})
function checkRight(type) {
  console.info("🚀 ~ file:FormDialogTest method:checkRight line:76 -----", type)
  ElMessage.info('外部执行逻辑')
  return false
}
const rules = {
  testProp: HuiRules.urlRule(),
  jsonProp: [HuiRules.jsonRule()],
  intNum: HuiRules.intNumRule(false, true),
  digitNum: HuiRules.digitNumRule(3, true, false),
  code: HuiRules.codeRule('请输入5位数字验证码', 5),
  phone: HuiRules.phoneNumRule(),
  numRange: HuiRules.numRangeRule(1, 10, '请输入1-10之间的数字'),
}

function beforeClose() {
  formLoading.value = true
  confirmLoading.value = true
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
