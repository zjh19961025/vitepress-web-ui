import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export function presetHui() {
  return {
    name: 'preset-Wui',
    // 规则
    rules: [],
    // 快捷方式
    shortcuts: [],
    // 主题
    theme: {
      colors: {
        // 1. 基本颜色
        whiteColor: '#FFFFFF',
        blackColor: '#000000',
        cColor: '#cccccc',
        dColor: '#dddddd',
        eColor: '#eeeeee',
        themeColor: '#FFD939', // 基础颜色
        // 2. 文本颜色
        mainColor: '#333333', // 主要文字颜色一般用于内容的标题等，如新闻列表的标题
        mainColorLight: '#1B1B1B', // 主要文字颜色高亮，比如需要突出显示的时候
        contentColor: '#666666', // 常规文字颜色一般用于内容的主体，如新闻列表的概要
        tipsColor: '#999999', // 次要文字颜色一般用于内容的提示部分，如新闻列表底部的时间，评论数量的提示文字
        lightColor: '#cccccc', // 占位文字颜色属于更浅的灰色，看场景选择使用
        placeholderColor: '#909399', // 颜色更深的占位符
        // 3. 背景 边框颜色
        // 背景
        bgColor: '#f4f4f4', // 背景颜色
        titleBgColor: '#304156', // 标题
        // 边框颜色
        borderColor: '#dddddd', // 边框颜色
        borderEColor: '#eeeeee',
        disabledColor: '#cccccc', // 不可用颜色
        // 4. 主题颜色：
        // 使用这些 主题色 分别对应各个类型：primary, warning, success, error
        // 颜色 可以有多个，但是类型只有这四个，可以定义更多颜色，然后对对应相应的类型，覆盖uview中的各个类型
        // 蓝(基本色)，黄(警告色)，绿(成功色), 红(错误色).....
        // 状态：
        // 1. 普通：正常显示的颜色
        // 2. dark: 按钮被按下时，使用的是primary的加深颜色，也即dark状态
        // 3. disabled: 按钮处于禁止状态时，使用的是primary的稍浅颜色，也即disabled状态
        // 4. light: 按钮设置为镂空状态(plain为true)时，背景色为primary的变浅颜色，也即light状态。
        infoColor: '#999999',
        infoDarkColor: '#82848a',
        infoDisabledColor: '#cccccc',
        infoLightColor: '#f4f4f5',

        blueColor: '#007EFF',
        blueDarkColor: '#0074e9',
        blueDisabledColor: '#7ab9f9',
        blueLightColor: '#ecf5ff',

        yellowColor: '#FFD939',
        yellowDarkColor: '#f0ca32',
        yellowDisabledColor: '#f9e696',
        yellowLightColor: '#fdf6ec',

        greenColor: '#22652C',
        greenDarkColor: '#1f5f25',
        greenDisabledColor: '#8bac90',
        greenLightColor: '#CCEBD0',

        redColor: '#C60C0C',
        redDarkColor: '#ba0505',
        redDisabledColor: '#dd8080',
        redLightColor: '#fef0f0',
      },
    },
    // 变体
    variants: [],
    // 提取器
    extractors: [],
    // 转换器
    transformers: [
      // 指令转换器
      transformerDirectives(),
      // 变体组转换器
      transformerVariantGroup(),
    ],
    // 预飞行
    preflights: [],
    // 分层
    layers: {
      // 基础层
      base: 1,
      // 组件层
      components: 2,
      // 工具层
      utilities: 3,
      // 默认层
      default: 4,
    },
    // 预设
    presets: [
      presetUno(),
    ],
  }
}
