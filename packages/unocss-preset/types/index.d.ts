import { App } from 'vue';

declare const _default: {
    install: typeof install;
};
export default _default;

declare function install(app: App, options?: any): void;

export declare type UITheme = typeof uiTheme & {
    [key: string]: any;
};

export declare const uiTheme: {
    colors: {
        white: string;
        black: string;
        ccc: string;
        ddd: string;
        eee: string;
        primary: string;
        success: string;
        warning: string;
        danger: string;
        error: string;
        info: string;
        disabled: string;
        special: string;
    };
    textColor: {
        normal: string;
        regular: string;
        secondary: string;
        placeholder: string;
    };
    backgroundColor: {
        normal: string;
        page: string;
        overlay: string;
    };
    borderColor: {
        normal: string;
        light: string;
        lighter: string;
        extra_light: string;
        dark: string;
        darker: string;
    };
};

export { }


/**
 * Window 全局变量声明
 */
declare global {
    interface Window {
        /** 主题颜色 */
        theme: UITheme;
    }
}

