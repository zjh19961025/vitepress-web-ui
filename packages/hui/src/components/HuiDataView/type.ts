export type HuiDataViewProp = {
    /** 一行显示几个 */
    lineCount?: number
    /** 标题列的宽度 */
    titleWidth?:string | number,
    /** 组件的配置 */
    config: HuiDataViewConfig[],
    /** 组件设置回显的值 */
    data?:{[key:string]:any}
}

export interface HuiDataViewConfig {
    /**
     * 表格项id
     * @type {string}
     */
    prop: string;

    /**
     * 表格项的值
     * @type {string | null}
     */
    value: string | null;

    /**
     * 表格每一项的标题
     * @type {string}
     */
    title: string;

    /**
     * 列表项右侧文字
     * @type {string}
     */
    rightText?:string

    /**
     * value项的动态class
     * @type {string | null}
     */
    class?: string;

    /**
     * rightText的点击触发事件
     * @type {function}
     */
    handler?: (item:any)=> void

}

