import { ElMessage } from 'element-plus'

// 成功消息提示
const ok = (msg) => {
  ElMessage({
    message: msg,
    type: 'success',
  })
}

// 失败消息提示
const err = (msg) => {
  ElMessage({
    message: msg,
    type: 'error',
  })
}

export default {
  ok,
  err,
}
