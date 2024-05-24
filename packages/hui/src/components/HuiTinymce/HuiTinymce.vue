<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import type { HuiTinymcePropsType } from './type'
import { HuiTinymceLinkHooks } from './HuiTinymceLinkHooks'
import { HuiTinymceSettingHooks } from './HuiTinymceSettingHooks'

defineOptions({
  name: 'HuiTinymce',
})

// 接收的参数
const props = withDefaults(defineProps<HuiTinymcePropsType>(), {
  width: '100%',
  height: '80vh',
  linkAttribute: () => {
    return [
      { title: '小程序AppId', value: 'mp_appid' },
      { title: '小程序原始AppId', value: 'mp_original_id' },
    ]
  },
})

const { linkExpandAttributeStr, linkSetup } = HuiTinymceLinkHooks({ props })
const { setting } = HuiTinymceSettingHooks({ props, linkSetup, linkExpandAttributeStr })

const tinymceContent = defineModel<string>('tinymceContent')

</script>

<template>
  <div :style="{ width: width }">
    <Editor
      v-model="tinymceContent"
      :init="setting"
      api-key="no-api-key"
    />
  </div>

</template>

<style lang="scss">
.tox-promotion{
  .tox-promotion-link{
    display: none !important;
  }
}
.tox-tinymce-aux {
  z-index: 9999 !important;
}
.tox .tox-collection--list .tox-collection__item--active{
  background-color: theme('backgroundColor.normal') !important;
  color: theme('textColor.normal') !important;
}
</style>
