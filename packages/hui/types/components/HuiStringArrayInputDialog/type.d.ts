import { FormItemRule, FormRules } from 'element-plus';
import { Arrayable } from 'element-plus/es/utils';

export interface HuiStringArrayInputDialogForm {
    /** 输入框内容 */
    inputInfo: string;
}
/**
 * 输入框内容校验规则
 */
export type HuiStringArrayInputDialogRules = FormRules<HuiStringArrayInputDialogForm>;
/**
 * 接受的 props
 */
export interface HuiStringArrayInputDialogPropsType {
    /** dialog标题 */
    title: string;
    /** 输入框标题 */
    label: string;
    /** 输入框提示语 */
    placeholder: string;
    /** 输入框验证规则 */
    rules?: Arrayable<FormItemRule>;
    /** 是否显示提示语 */
    tips?: boolean;
}
/**
 * 抛出的事件
 */
export type HuiStringArrayInputDialogEmitType = {
    /** 确定按钮点击 */
    onSubmit: [id: string, info: string];
};
