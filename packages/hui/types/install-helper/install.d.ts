import { App, Plugin } from 'vue';
import { SFCWithInstall, HuiOptions } from './typescript';

/**
 * hua5-web-ui install
 * @param components
 * @returns
 */
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App, opt?: HuiOptions) => void;
};
/**
 * 来源于 element-plus 中, 给每个组件添加 install 方法
 * @param main
 * @param extra
 * @returns
 */
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E) => SFCWithInstall<T> & E;
