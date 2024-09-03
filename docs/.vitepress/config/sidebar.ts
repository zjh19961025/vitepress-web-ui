import {msgBox} from "@hua5/hua5-web-ui/src/utils/hui-tool/message-box";

export const sidebar = {
  '/unocssPreset/': [
    {
      text: '快速开始', link: "/unocssPreset/"
    },
    {
      text: '颜色',
      items: [
        { text: '默认颜色', link: '/unocssPreset/color' },
        { text: '颜色使用', link: '/unocssPreset/colorUse' },
        { text: '颜色定义', link: '/unocssPreset/colorDefine' },

      ],
    },
    {
      text: 'unocss',
      items: [
        { text: 'tips', link: '/unocssPreset/unocssTips' },
      ],
    },
  ],
  '/components/': [
    {
      text: '指南',
      items: [
        { text: '安装', link: '/components/guide/' },
        { text: '快速开始', link: '/components/guide/start' },
        { text: '开发指南', link: '/components/guide/develop' },
      ],
    },
    {
      text: '自定义指令',
      items: [
        { text: 'select触底', link: '/components/directives/selectLoadMore' },
      ],
    },
    {
      text: '组件',
      items: [
        { text: '倒计时', link: '/components/HuiCountDownButton' },
        { text: '行编辑弹窗', link: '/components/HuiLineEditDialog' },
        { text: '表格排序修改悬浮组件', link: '/components/HuiLineEditPopover' },
        { text: '富文本预览弹窗', link: '/components/HuiPreviewRichTextDialog' },
        { text: '地区选择弹窗', link: '/components/HuiRegionTreeDialog' },
        { text: '地区选择输入框', link: '/components/HuiRegionTreePopover' },
        { text: 'select下拉状态', link: '/components/HuiSelectLoadStatus' },
        { text: '显示链接弹框', link: '/components/HuiShowUrlDialog' },
        { text: '字符串数组编辑弹窗', link: '/components/HuiStringArrayInputDialog' },
        { text: '富文本编辑', link: '/components/HuiTinymce' },
        { text: '富文本编辑弹窗', link: '/components/HuiTinymceDialog' },
        { text: '地址信息显示组件', link: '/components/HuiAMapSelectAddress' },
        { text: '地图地址选择弹窗', link: '/components/HuiAMapSelectAddressDialog' },
        { text: '命令式弹窗组件', link: '/components/msgBox' }
      ],
    },
    {
      text: '验证规则',
      items: [
        { text: 'rules', link: '/components/rules/HuiRule'}
      ]
    },
    {
      text: 'hooks',
      items: [
        { text: 'useHuiDialog', link: '/components/hooks/useHuiDialog' },
        { text: 'useHuiFormDialog', link: '/components/hooks/useHuiFormDialog' },
      ]
    }
  ],
}
