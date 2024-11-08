<template>
  <ElTag :type="tagType" :class="tagClass">{{ text }}</ElTag>
</template>

<script setup lang="ts">
import { ElTag } from 'element-plus'
defineOptions({
  name: 'HuiTags',
})
interface TagProps {
  /** 标签的文本内容 */
  text: string;
  /** 标签的类型  必须传这几个 */
  tagType?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** 当类型的颜色不满足的时候可以传入标签的背景颜色 */
  tagClass?: string;
}

const prop = withDefaults(defineProps<TagProps>(), {
  text: '',
  tagType: 'primary',
})

const validateTagType = (tagType: string): boolean => {
  const arr = ['primary', 'success', 'warning', 'danger', 'info']
  return arr.includes(tagType)
}

if (!validateTagType(prop.tagType)) {
  throw new Error(`Invalid tagType: ${prop.tagType}`)
}
</script>

<style lang="scss" scoped>
.el-tag {
  padding: 0 2px;
  margin-right: 4px;
  border: none;
}
.el-table__body tr .el-table__cell .cell .el-tag {
  height: 17px;
  line-height: 17px;
  border-radius: 2px;
}
.el-tag.el-tag--primary {
  color: theme('colors.white');
  background: theme('colors.primary');
}
.el-tag.el-tag--success {
  color: theme('colors.white');
  background: theme('colors.success');
}
.el-tag.el-tag--warning {
  color: theme('colors.white');
  background: theme('colors.warning');
}
.el-tag.el-tag--danger {
  color: theme('colors.white');
  background: theme('colors.danger');
}
.el-tag.el-tag--info {
  color: theme('textColor.secondary');
  background: theme('borderColor.lighter');
}
</style>
