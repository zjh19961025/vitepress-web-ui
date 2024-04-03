import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

/**
 * 样式转换, 对象转字符串，或者字符串转对象
 * @param {object | string} customStyle 需要转换的目标
 * @param {String} target 转换的目的，object-转为对象，string-转为字符串
 * @returns {object|string}
 */
export declare function addStyle(customStyle: string | object, target?: string): {};

/**
 * 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
 * @param value
 * @param unit
 * @returns
 */
export declare function addUnit(value?: string | number, unit?: string): string;

declare const _default: {
    install: (app: App<any>, opt?: {
        isInstallComponents: boolean;
    }) => void;
};
export default _default;

/**
 * 定义emit类型
 */
export declare type EmitType = {
    "userClick": [user: TestUserType, msg: string];
};

/**
 * option选项
 */
declare type Hua5WebUIOptions = {
    isInstallComponents: boolean;
};

/**
 * 组件导出
 */
export declare const HuiTest: SFCWithInstall_2<DefineComponent<{
    user: {
        type: PropType<TestUserType>;
        required: true;
        default: () => {
            name: string;
            extra: string;
        };
    };
    msg: {
        type: PropType<string>;
        default: string;
    };
    labels: {
        type: PropType<string[]>;
        default: () => any[];
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    userClick: (user: TestUserType, msg: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    user: {
        type: PropType<TestUserType>;
        required: true;
        default: () => {
            name: string;
            extra: string;
        };
    };
    msg: {
        type: PropType<string>;
        default: string;
    };
    labels: {
        type: PropType<string[]>;
        default: () => any[];
    };
}>> & {
    onUserClick?: (user: TestUserType, msg: string) => any;
}, {
    user: TestUserType;
    msg: string;
    labels: string[];
}, {}>> & Record<string, any>;

export declare const HuiTool: {
    ok: (msg: any) => void;
    err: (msg: any) => void;
    addUnit: typeof addUnit;
    addStyle: typeof addStyle;
};

export declare const makeInstaller: (components?: Plugin_2[]) => {
    install: (app: App, opt?: Hua5WebUIOptions) => void;
};

export declare interface PropsType {
    user: TestUserType;
    msg?: string;
    labels?: string[];
}

declare type SFCWithInstall<T> = T & Plugin_2;

declare type SFCWithInstall_2<T> = T & Plugin_2

/**
 * 定义props类型
 */
export declare interface TestUserType {
    name: string;
    sex?: string;
    age?: number;
}

export declare const useHuiTest: (info: any) => {
    testVlaue: Ref<string>;
};

/**
 * 来源于 element-plus 中, 给每个组件添加 install 方法
 * @param main
 * @param extra
 * @returns
 */
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E) => SFCWithInstall<T> & E;

export { }
