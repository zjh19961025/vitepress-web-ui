<script setup lang="ts">
// 项目中 直接使用，会自动导入，此处doc中的引入方式
const useHuiDialog = window.hua5WebUI.useHuiDialog

const { id, payload, show, open, close, dialogLoading, confirmLoading } = useHuiDialog()

// 打开时的处理，如数据获取等
function onOpen() {
  console.log("onOpen", id.value, payload.value)

  dialogLoading.value = true
  setTimeout(() => {
    dialogLoading.value = false
  }, 2000)
}

// 关闭时的处理：如 数据重置
function onClose() {
  console.log("onClose")
}

function onConfirmClick() {
  confirmLoading.value = true
  setTimeout(() => {
    close()
  }, 2000)
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <el-dialog
    v-model="show" title="普通弹框" top="40vh"
    @open="onOpen"
    @close="onClose"
  >
    <!-- v-loading加在dialog上，无效 -->
    <div v-loading="dialogLoading" class="mt-20 mb-20">
      弹框内部实现
    </div>

    <template #footer>
      <div>
        <el-button size="small" @click="close">取 消</el-button>
        <el-button :loading="confirmLoading" type="primary" size="small" class="width-100" @click="onConfirmClick">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

