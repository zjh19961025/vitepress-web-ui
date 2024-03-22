// 可以直接在script标签上定义name。 如：<script lang="ts" setup name="firstPage">
import setupExtend from 'vite-plugin-vue-setup-extend'

export default function createSetupExtend() {
  return setupExtend()
}
