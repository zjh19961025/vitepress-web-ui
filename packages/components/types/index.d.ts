import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;

declare const _default_2: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PropsType>, {
    msg: string;
    user: () => {
        name: string;
        extra: string;
    };
    disabled: boolean;
}>, {
    focus: typeof focus_2;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:user": (user: TestUserType, msg: string) => void;
    test: (info: string) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<PropsType>, {
    msg: string;
    user: () => {
        name: string;
        extra: string;
    };
    disabled: boolean;
}>>> & {
    "onUpdate:user"?: ((user: TestUserType, msg: string) => any) | undefined;
    onTest?: ((info: string) => any) | undefined;
}, {
    user: TestUserType;
    msg: string;
    disabled: boolean;
}, {}>;

/**
 * 定义emit类型
 */
export declare type EmitType = {
    "update:user": [user: TestUserType, msg: string];
    "test": [info: string];
};

declare function focus_2(): void;

export declare const HuaTest: SFCWithInstall<DefineComponent<{
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
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:user": (user: TestUserType, msg: string) => void;
    test: (info: string) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
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
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:user"?: ((user: TestUserType, msg: string) => any) | undefined;
    onTest?: ((info: string) => any) | undefined;
}, {
    user: TestUserType;
    msg: string;
    disabled: boolean;
}, {}>> & Record<string, any>;

/**
 * 定义instance类型
 */
export declare type InputInstance = InstanceType<typeof _default_2>;

export declare interface PropsType {
    user: TestUserType;
    msg?: string;
    labels?: string[];
    disabled?: boolean;
}

declare type SFCWithInstall<T> = T & Plugin_2

/**
 * 定义props类型
 */
export declare interface TestUserType {
    name: string;
    sex?: string;
    age?: number;
}

export { }
