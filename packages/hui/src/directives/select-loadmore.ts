
import { nextTick, Directive, type DirectiveBinding, App } from 'vue'

export const selectLoadmore: Directive = {
  mounted(el: any, binding: DirectiveBinding) {
    const selectDom = document.querySelector(".loadmore .el-select-dropdown .el-select-dropdown__wrap")
    el.selectDomInfo = selectDom
    el.userLoadMore = loadMores
    function loadMores() {
      // this.scrollTop 存在小数，导致加减存在1的误差
      const condition = Math.abs(this.scrollHeight - this.scrollTop - this.clientHeight) <= 1
      if (condition) binding?.value()
    }
    nextTick(() => {
      selectDom?.addEventListener('scroll', loadMores)
    })
  },
  beforeUnmount(el: any) {
    if (el.userLoadMore) {
      el.selectDomInfo.removeEventListener('scroll', el.userLoadMore)
      delete el.selectDomInfo
      delete el.userLoadMore
    }
  },
}

export default {
  install(app: App) {
    app.directive('select-loadmore', selectLoadmore)
  },
}
