<script setup lang="ts">
const stringArrayInputDialog = ref<InstanceType<typeof HuiStringArrayInputDialog>| null >(null)

// 打开弹窗
function onStringArrayInputClick() {
  stringArrayInputDialog.value?.open('id', {
    inputInfo: ['a', 'b', 'c'],
  })
}

// 提交
function handleStringArrayInputSubmit(id, inputInfo) {
  console.log("handleStringArrayInputSubmit", id, inputInfo)
}
</script>

<template>
  <el-button @click="onStringArrayInputClick">字符串数组编辑弹窗</el-button>
  <HuiStringArrayInputDialog
    ref="stringArrayInputDialog"
    title="编辑字符串数组"
    label="标签" placeholder="请输入标签，使用' , '分隔"
    :rules="[{ required: true, message: '请输入标签', trigger: 'blur' }]"
    @on-submit="handleStringArrayInputSubmit"
  />
</template>
