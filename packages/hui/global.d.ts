// GlobalComponents for Volar
// 指定了模块名为 'vue'，表示对 Vue.js 模块进行扩展。
declare module 'vue' {
  /**
   * 声明全局组件，便于 volar 识别
   * 用于声明 Vue.js 中的全局组件，以便 Volar 插件可以正确识别这些组件并提供相应的智能提示和类型检查
   */
  export interface GlobalComponents {
    HuiLineEditDialog: typeof import("zjh-web-ui")["HuiLineEditDialog"]
    HuiPreviewRichTextDialog: typeof import("zjh-web-ui")["HuiPreviewRichTextDialog"]
    HuiShowUrlDialog: typeof import("zjh-web-ui")["HuiShowUrlDialog"]
    HuiStringArrayInputDialog: typeof import("zjh-web-ui")["HuiStringArrayInputDialog"]
    HuiCountDownButton: typeof import("zjh-web-ui")["HuiCountDownButton"]
    HuiRegionTreeDialog: typeof import("zjh-web-ui")["HuiRegionTreeDialog"]
    HuiTinymceDialog: typeof import("zjh-web-ui")["HuiTinymceDialog"]
    HuiTinymce: typeof import("zjh-web-ui")["HuiTinymce"]
    HuiSelectLoadStatus: typeof import("zjh-web-ui")["HuiSelectLoadStatus"]
    HuiLineEditPopover: typeof import("zjh-web-ui")["HuiLineEditPopover"]
    HuiAMapSelectAddress:typeof import("zjh-web-ui")["HuiAMapSelectAddress"]
    HuiAMapSelectAddressDialog:typeof import("zjh-web-ui")["HuiAMapSelectAddressDialog"]
    HuiAMapSearchAddress:typeof import("zjh-web-ui")["HuiAMapSearchAddress"]
    HuiAMapSearchAddressDialog:typeof import("zjh-web-ui")["HuiAMapSearchAddressDialog"]
    HuiGridForm:typeof import("zjh-web-ui")["HuiGridForm"]
    HuiDataView:typeof import("zjh-web-ui")["HuiDataView"]
    HuiRegionTreeSelect:typeof import("zjh-web-ui")["HuiRegionTreeSelect"]
    HuiAMapMassMarkers:typeof import("zjh-web-ui")["HuiAMapMassMarkers"]
    HuiTags:typeof import("zjh-web-ui")["HuiTags"]
    HuiTagsMore:typeof import("zjh-web-ui")["HuiTagsMore"]
    HuiTip:typeof import("zjh-web-ui")["HuiTip"]
  }

  /**
   * 已添加到原型上的
   */
  interface ComponentCustomProperties {

  }
}

export {}
