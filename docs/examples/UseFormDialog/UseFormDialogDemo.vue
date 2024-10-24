<script setup lang="ts">
// 项目中 直接使用，会自动导入，此处doc中的引入方式
const useHuiFormDialog = window.hua5WebUI.useHuiFormDialog
// 模拟接口
function put() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([null, "put hello world"])
    }, 3000)
  })
}
function post() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([null, "post hello world"])
    }, 3000)
  })
}

/**
 * 弹框实现
 */

// 定义要提交的数据格式
const formModel = {
  name: "",
  phone: "",
}

// useHuiFormDialog
const {
  show, open, close, form, formRef,
  formLoading, confirmLoading,
  handleCancel, handleSubmit,
} = useHuiFormDialog({
  formModel,
  beforeSubmit, submitCheck, afterSubmit,
  put, post,
  // 是否需要二次确认
  isNeedDoubleConfirm: true,
})

// 打开时的处理，如数据获取等
function onOpen() {
  console.log("onOpen")
  formLoading.value = true
  setTimeout(() => {
    formLoading.value = false
  }, 1000)
}

// 关闭时的处理：如 数据重置
function onClose() {
  console.log("onClose")
}

// 提交前数据处理
// 可在对数据机型处理，最后只有 formModel 中的数据会被提交
function beforeSubmit(submitForm: any) {
  console.log("beforeSubmit", submitForm)
  submitForm.name = "beforeSubmit-set"
  submitForm.other = "其他"
  return submitForm
}

// 接口调用前的数据校验
function submitCheck(submitForm: any) {
  console.log("submitCheck", submitForm)
  return true
}

// 提交完毕的数据处理
function afterSubmit(res: any) {
  console.log("afterSubmit", res)
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <!-- 弹框组件 -->
  <el-dialog
    v-model="show"
    title="表单弹框测试"
    width="520px"
    top="35vh"
    @open="onOpen"
    @close="onClose"
  >
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="form"
      size="small"
      class="mt-10px fw-bold w-100%"
      @submit.native.prevent="handleSubmit"
    >
      <el-form-item label="名字" prop="name" class="flex w-100%">
        <el-input v-model="form.name" placeholder="请输入名字" />
      </el-form-item>
      <el-form-item label="电话号码" prop="phone" class="flex w-100%">
        <el-input v-model="form.phone" placeholder="请输入phone" />
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
