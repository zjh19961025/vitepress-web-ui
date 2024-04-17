import { ComputedRef } from "vue"

/**
 *  链接支持的属性
 */
export interface HuiTinymceDialogLink {
  /** 链接标题 */
  title: string;
  /** 链接对象的key */
  value: string;
}

/**
 * HuiTinymceDialogPropsType 需要的props参数
 */
export interface HuiTinymceDialogPropsType {
  /** 弹窗高度 */
  width: string | number;
  /** 弹窗宽度 */
  height: string | number;
  /**
   * 链接属性
   * linkAttribute 接收参数的value可以是一个单词,如果是两个单词及以上组成必须用_连接（例:mp_appid）不能使用驼峰
   */
  linkAttribute: HuiTinymceDialogLink[]
}

/**
 * HuiTinymceDialog emit事件
 */
export type HuiTinymceDialogEmitType = {
  onSubmit: [tinymceContent: string, row: any, field: string]
}

export interface HuiTinymceDialoghooksPayloadBase {
  /** props参数 */
  props: HuiTinymceDialogPropsType;
  /** 链接配置方法 */
  linkSetup(editor: any): void,
    /** 链接属性 */
  linkExpandAttributeStr: ComputedRef<string>
}

/**
 * HuiTinymceDialogSettingHooks 函数
 */
export type HuiTinymceDialogSettingHooksType = (settingPayload: HuiTinymceDialoghooksPayloadBase) => {
  /** 配置项 */
  setting: { [key: string]: any; },
};

/**
 * HuiTinymceDialogLinkHooks 函数
 */
export type HuiTinymceDialogLinkHooksType = (linkPayload: Pick<HuiTinymceDialoghooksPayloadBase, 'props'>) => Omit<HuiTinymceDialoghooksPayloadBase, 'props'>;
