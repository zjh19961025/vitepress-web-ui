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
      text: '颜色',
      items: [
        { text: '颜色', link: '/components/HuiColor' },
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
        // { text: 'select下拉状态', link: '/components/HuiSelectLoadStatus' },
        { text: '显示链接弹框', link: '/components/HuiShowUrlDialog' }
      ],
    },
  ],
}