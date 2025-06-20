// GlobalComponents for Volar
// 指定了模块名为 'vue'，表示对 Vue.js 模块进行扩展。
declare module 'vue' {
  /**
   * 声明全局组件，便于 volar 识别
   * 用于声明 Vue.js 中的全局组件，以便 Volar 插件可以正确识别这些组件并提供相应的智能提示和类型检查
   */
  export interface GlobalComponents {
    HuiLineEditDialog: typeof import("@hua5/hua5-web-ui")["HuiLineEditDialog"]
    HuiPreviewRichTextDialog: typeof import("@hua5/hua5-web-ui")["HuiPreviewRichTextDialog"]
    HuiShowUrlDialog: typeof import("@hua5/hua5-web-ui")["HuiShowUrlDialog"]
    HuiStringArrayInputDialog: typeof import("@hua5/hua5-web-ui")["HuiStringArrayInputDialog"]
    HuiCountDownButton: typeof import("@hua5/hua5-web-ui")["HuiCountDownButton"]
    HuiRegionTreeDialog: typeof import("@hua5/hua5-web-ui")["HuiRegionTreeDialog"]
    HuiTinymceDialog: typeof import("@hua5/hua5-web-ui")["HuiTinymceDialog"]
    HuiTinymce: typeof import("@hua5/hua5-web-ui")["HuiTinymce"]
    HuiSelectLoadStatus: typeof import("@hua5/hua5-web-ui")["HuiSelectLoadStatus"]
    HuiLineEditPopover: typeof import("@hua5/hua5-web-ui")["HuiLineEditPopover"]
    HuiAMapSelectAddress:typeof import("@hua5/hua5-web-ui")["HuiAMapSelectAddress"]
    HuiAMapSelectAddressDialog:typeof import("@hua5/hua5-web-ui")["HuiAMapSelectAddressDialog"]
    HuiAMapSearchAddress:typeof import("@hua5/hua5-web-ui")["HuiAMapSearchAddress"]
    HuiAMapSearchAddressDialog:typeof import("@hua5/hua5-web-ui")["HuiAMapSearchAddressDialog"]
    HuiGridForm:typeof import("@hua5/hua5-web-ui")["HuiGridForm"]
    HuiDataView:typeof import("@hua5/hua5-web-ui")["HuiDataView"]
    HuiRegionTreeSelect:typeof import("@hua5/hua5-web-ui")["HuiRegionTreeSelect"]
    HuiAMapMassMarkers:typeof import("@hua5/hua5-web-ui")["HuiAMapMassMarkers"]
    HuiTags:typeof import("@hua5/hua5-web-ui")["HuiTags"]
    HuiTagsMore:typeof import("@hua5/hua5-web-ui")["HuiTagsMore"]
    HuiTip:typeof import("@hua5/hua5-web-ui")["HuiTip"]
  }

  /**
   * 已添加到原型上的
   */
  interface ComponentCustomProperties {

  }
}

export {}
