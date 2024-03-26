import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;

/**
 * 定义emit类型
 */
export declare type EmitType = {
    "userClick": [user: TestUserType, msg: string];
};

export declare interface PropsType {
    user: TestUserType;
    msg?: string;
    labels?: string[];
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

export declare const useWuiTest: (info: any) => {
    testVlaue: Ref<string>;
};

export declare const WuiTest: SFCWithInstall<DefineComponent<{
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
        default: () => any[];
    };
}>> & {
    onUserClick?: (user: TestUserType, msg: string) => any;
}, {
    user: TestUserType;
    msg: string;
    labels: string[];
}, {}>> & Record<string, any>;

export { }
