/**
 * 行数设置
 * line-1: 一行 + 省略号
 */
const line1 = ['line-1', {
  overflow: 'hidden',
  "white-space": 'nowrap',
  "text-overflow": 'ellipsis',
}]

/**
 * 行数设置
 * line-d: 多行 + 省略号
 */
const lined = [/^line-(\d+)$/, ([, d]) => ({
  display: '-webkit-box!important',
  overflow: 'hidden',
  "text-overflow": 'ellipsis',
  "word-break": 'break-all',
  "-webkit-line-clamp": d,
  "-webkit-box-orient": 'vertical!important',
})]

export default [
  line1,
  lined,
]
