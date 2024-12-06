<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
import { ElButton, ElDialog } from 'element-plus'
export interface HuiMsgBoxProp {
  /** 控制图标展示类型 info:叹号 success:钩 question:问号 */
  iconType:'info' | 'success' | 'question',
  /** 控制图标展示的颜色 */
  type:'info' | 'warning' | 'success' | 'danger',
  /** 弹窗显示的内容 */
  content:string,
  /** 取消按钮的文本 */
  cancelText:string,
  /** 确定按钮的文本 */
  confirmText:string,
  /** 弹窗宽度 */
  width:number,
  /** 弹窗样式类名 */
  className: string,
  /** 关闭事件 */
  closeBox: ()=> void,
  /** 确定事件事件 */
  confirmHandler:()=> void,
  /** 取消事件 */
  cancelHandler:()=> void,
}
const {
  iconType = 'info',
  type = 'info',
  cancelText = '取消',
  confirmText = '确定',
  width = 320,
  content, closeBox, confirmHandler, cancelHandler,
} = defineProps<HuiMsgBoxProp>()

const iconTypeClass = computed<string>(() => {
  const iconTypeClassList = {
    info: 'text-disabled',
    warning: 'text-warning',
    success: 'text-success',
    danger: 'text-danger',
  }
  return iconTypeClassList[type]
})

const iconColorClass = computed<string>(() => {
  const iconColorClassList = {
    info: 'i-com-gantanhao',
    success: 'i-com-gou1',
    question: 'i-com-wenhao',
  }
  return iconColorClassList[iconType]
})

// 控制显示处理
const isVisible = ref(false)
/**
 * 组件展示
 */
const show = () => {
  isVisible.value = true
}

/**
 * 处理动画 (render 函数的渲染，会直接进行)
 */
onMounted(() => {
  show()
})

/**
 * 取消事件
 */
const onCancelClick = () => {
  if (cancelHandler) {
    cancelHandler()
  }
  close()
}

/**
 * 确定事件
 */
const onConfirmClick = () => {
  if (confirmHandler) {
    confirmHandler()
  }
  closeBox()
}

/**
 * 关闭事件
 */
const close = () => {
  isVisible.value = false
  if (closeBox) {
    closeBox()
  }
}
</script>

<template>
  <div class="hua5-message-box">
    <ElDialog
      v-model="isVisible"
      :width="width"
      align-center
      @closed="close"
    >
      <div class="flex justify-center flex-center h-110 text-center" :class="[className]">
        <div>
          <i :class="[iconTypeClass,iconColorClass,'icon-com !text-27']" />
        </div>
        <div class="text-14  font-bold text-normal ml-11 break-all">{{ content }}</div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <ElButton class="!text-primary !border !border-1 !border-primary" @click="onCancelClick">{{ cancelText }}</ElButton>
          <ElButton type="primary" class="w-100px" @click="onConfirmClick">{{ confirmText }}</ElButton>
        </div>
      </template>
    </ElDialog>
  </div>
</template>

<style lang="scss">
.hua5-message-box{
  .el-dialog{
    border-radius: 8px !important;
  }
  .el-dialog .el-dialog__header{
    background-color: #fff !important;
  }
  .el-dialog .el-dialog__footer{
    background-color: #fff !important;
  }
}
</style>
