import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { HuiLineEditDialogComboItem } from './type';
/**
 * 组件导出
 */
export declare const HuiLineEditDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    label: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
    };
    isNeedDoubleConfirm: {
        type: PropType<boolean>;
        default: boolean;
    };
    prop: {
        type: PropType<string>;
        required: true;
    };
    labelWidth: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    rules: {
        type: PropType<any>;
    };
    selectDic: {
        type: PropType< HuiLineEditDialogComboItem[]>;
        required: true;
        default: () => any[];
    };
    isSelectMuti: {
        type: PropType<boolean>;
        required: true;
        default: boolean;
    };
    doubleConfirmTips: {
        type: PropType<string>;
        default: string;
    };
    attr: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: true;
        default: () => {};
    };
    formAttr: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: true;
        default: () => {};
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (row: any, prop: string) => void;
    onValueChange: (form: any, row?: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    label: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
    };
    isNeedDoubleConfirm: {
        type: PropType<boolean>;
        default: boolean;
    };
    prop: {
        type: PropType<string>;
        required: true;
    };
    labelWidth: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    rules: {
        type: PropType<any>;
    };
    selectDic: {
        type: PropType< HuiLineEditDialogComboItem[]>;
        required: true;
        default: () => any[];
    };
    isSelectMuti: {
        type: PropType<boolean>;
        required: true;
        default: boolean;
    };
    doubleConfirmTips: {
        type: PropType<string>;
        default: string;
    };
    attr: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: true;
        default: () => {};
    };
    formAttr: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: true;
        default: () => {};
    };
}>> & Readonly<{
    onOnSubmit?: (row: any, prop: string) => any;
    onOnValueChange?: (form: any, row?: any) => any;
}>, {
    label: string;
    title: string;
    type: string;
    isNeedDoubleConfirm: boolean;
    labelWidth: string;
    selectDic: HuiLineEditDialogComboItem[];
    isSelectMuti: boolean;
    doubleConfirmTips: string;
    attr: {
        [key: string]: any;
    };
    formAttr: {
        [key: string]: any;
    };
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiLineEditDialog;
