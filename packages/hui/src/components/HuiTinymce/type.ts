import { ComputedRef } from "vue"

/**
 *  链接支持的属性
 */
export interface HuiTinymceLink {
  /** 链接标题 */
  title: string;
  /** 链接对象的key */
  value: string;
}

/**
 * HuiTinymce 需要的props参数
 */
export interface HuiTinymcePropsType {
  /** 宽度 */
  width: string;
  /** 高度 */
  height: string | number;
  /**
   * 链接属性
   * linkAttribute 接收参数的value可以是一个单词,如果是两个单词及以上组成必须用_连接（例:mp_appid）不能使用驼峰
   */
  linkAttribute: HuiTinymceLink[]
}

export interface HuiTinymcehooksPayloadBase {
  /** props参数 */
  props: HuiTinymcePropsType;
  /** 链接配置方法 */
  linkSetup(editor: any): void,
    /** 链接属性 */
  linkExpandAttributeStr: ComputedRef<string>
}

/**
 * HuiTinymceSettingHooks 函数
 */
export type HuiTinymceSettingHooksType = (settingPayload: HuiTinymcehooksPayloadBase) => {
  /** 配置项 */
  setting: { [key: string]: any; },
};

/**
 * HuiTinymceLinkHooks 函数
 */
export type HuiTinymceLinkHooksType = (linkPayload: Pick<HuiTinymcehooksPayloadBase, 'props'>) => Omit<HuiTinymcehooksPayloadBase, 'props'>;
