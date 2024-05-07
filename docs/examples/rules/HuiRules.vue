<script setup lang="ts">
// CSR 模式下正常使用es导入
// import { HuiRules } from "@hua5/hua5-web-ui"
import type { FormInstance, FormRules } from 'element-plus'

const rules = ref<FormRules>()
// SSR || SSG 模式下，请使用这种导入方式
onMounted(async() => {
  const res = await import("@hua5/hua5-web-ui")
  type THuiRules = typeof res.HuiRules
  const HuiRules: THuiRules = res.HuiRules

  rules.value = {
    url: HuiRules.urlRule?.(),
    version: [{ required: true, message: '请输入版本号', trigger: 'blur' }, HuiRules.versionRule()],
    json: [{ required: true, message: '请输入json字符串', trigger: 'blur' }, HuiRules.jsonRule()],
    intNum: [{ required: true, message: '请输入整数', trigger: 'blur' }, HuiRules.intNumRule(false, true)],
    digitNum: [{ required: true, message: '请输入小数', trigger: 'blur' }, HuiRules.digitNumRule(3, true, false)],
    code: [{ required: true, message: '请输入验证码', trigger: 'blur' }, HuiRules.codeRule('请输入5位数字验证码', 5)],
    phone: [{ required: true, message: '请输入电话号码', trigger: 'blur' }, HuiRules.phoneNumRule()],
    numRange: [{ required: true, message: '请输入数字', trigger: 'blur' }, HuiRules.numRangeRule(0, 10, '请输入0-10之间的数字')],
  }
})

const formRef = ref<FormInstance>()

const form = reactive({
  url: "http://127.0.0.1:5173/",
  version: '1.0.0',
  json: '{"test": 1}',
  intNum: 1,
  digitNum: 1.22,
  code: 56963,
  phone: 12345678901,
  numRange: 5,
})

async function handleSubmit() {
  await formRef.value?.validate((valid) => {
    if (valid) {
      ElMessage.success('验证通过')
    } else {
      ElMessage.error('验证不通过！')
    }
  })
}

</script>

<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    size="small"
    class="mt-10 fw-bold w-100%"
  >
    <el-form-item label="url" prop="url" class="flex w-100%">
      <el-input v-model="form.url" placeholder="请输入url" />
    </el-form-item>
    <el-form-item label="版本号" prop="version" class="flex w-100%">
      <el-input v-model="form.version" placeholder="请输入版本号" />
    </el-form-item>
    <el-form-item label="json" prop="json" class="flex w-100%">
      <el-input v-model="form.json" placeholder="请输入json" />
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
    <el-form-item label="数字区间" prop="numRange" class="flex w-100%">
      <el-input v-model="form.numRange" placeholder="请输入0-10之间的数字" />
    </el-form-item>
  </el-form>

  <div class="mt-10 flex justify-end">
    <el-button type="primary" size="small" @click="handleSubmit">确 定</el-button>
  </div>
</template>
