export const sidebar = {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '安装', link: '/guide/' },
        { text: '快速开始', link: '/guide/start' },
      ],
    },
  ],
  '/components/': [
    { 
      text: '开发',
      items: [
        { text: '开发说明', link: '/components/readme-develop' },
      ] 
    },
    {
      text: '颜色',
      items: [
        { text: '颜色', link: '/components/HuiColor' },
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
        { text: '富文本预览弹窗', link: '/components/HuiPreviewRichTextDialog' },
        { text: '地区选择弹窗', link: '/components/HuiRegionTreeDialog' },
        { text: '地区选择输入框', link: '/components/HuiRegionTreePopover' },
        { text: 'select下拉状态', link: '/components/HuiSelectLoadStatus' },
        { text: '显示链接弹框', link: '/components/HuiShowUrlDialog' },
        { text: '字符串数组编辑弹窗', link: '/components/HuiStringArrayInputDialog' },
        { text: '富文本编辑', link: '/components/HuiTinymce' },
        { text: '富文本编辑弹窗', link: '/components/HuiTinymceDialog' }
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