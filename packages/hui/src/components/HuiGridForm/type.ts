export type HuiGridFormProp = {
    /** 是否可以进行添加 */
    isCanAppend?:boolean,
    /** 是否可以排序 */
    handSort?:boolean,
    /** 是否可以删除 */
    handDelete?:boolean,
    /** 组件的配置项 */
    config: hua5DynamicConfig[]
    /** 组件的数据源 */
    listData?:{[key:string]:any}[]
    /** 组件透传的class */
    gridFromClass:string
}

export interface hua5DynamicConfig {
    /** 列表项的key */
    prop: string,
    /** 输入框append插槽显示的内容 */
    append?: string,
    /** 提示内容 */
    placeholder?:string,
    /** 显示输入框还是下拉选择 */
    type?:'input' | 'select',
    /** 输入框数据类型 默认为number */
    dataType?:string,
    /** 输入框的style主要用来设置颜色 */
    style?:string,
    /** 下拉选择的数据字典 */
    dict?:{[key:string]:any}[],
    /** 是否只读 */
    readonly?:boolean,
    /** 标题 */
    title:string,
    /** 错误提示信息 */
    errMsg?:string,
    /** 标题宽度 */
    width:string,
    /** v-bind其他属性值 */
    attr?:{[key:string]:any}
}

