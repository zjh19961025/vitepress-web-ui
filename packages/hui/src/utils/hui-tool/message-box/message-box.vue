<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
import { ElButton, ElDialog } from 'element-plus'
import { testUtils } from "zjh-utils"
export interface HuiMsgBoxProp {
  /** 控制图标展示类型 info:叹号 success:钩 question:问号 */
  iconType:'info' | 'success' | 'question',
  /** 控制图标展示的颜色 */
  type:'info' | 'warning' | 'success' | 'danger',
  /** 弹窗显示的标题 */
  title:string,
  /** 弹窗显示的提示文本 */
  tip:'',
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
  title, tip, closeBox, confirmHandler, cancelHandler,
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
/**
 * 判断是否是html标签的方法
 */
function isHtmlTag(str) {
  // 去掉前后的空格
  str = str.trim()
  // 正则表达式匹配 HTML 标签
  const regex = /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/i
  return regex.test(str)
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
      <div class="flex flex-center h-110 text-center" :class="[className]">
        <div>
          <i :class="[iconTypeClass,iconColorClass,'icon-com !text-27']" />
        </div>
        <div class="flex-y text-left">
          <div v-if="isHtmlTag(title)" class="ml-11" v-html="title" />
          <div v-else class="text-16  font-bold text-normal ml-11 break-all ">{{ title }}</div>
          <div v-if="testUtils.isNotEmpty(tip) && isHtmlTag(tip)" class="m-t-5 ml-11 break-all" v-html="tip" />
          <div v-else class="text-12 m-t-5 text-secondary ml-11 break-all">{{ tip }}</div>
        </div>
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
