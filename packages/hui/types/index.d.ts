import { App } from 'vue';
import { HuiOptions } from './install-helper/typescript';

export * from './utils/index';
export * from './hooks';
export * from './components';
export * from './directives';
export type { HuiDelegate } from './delegate';
export type { HuiOptions } from './install-helper/typescript';
declare const _default: {
    install: (app: App<any>, opt?: HuiOptions) => void;
};
export default _default;
