import { PayLoadType } from './message-box/index.ts';

export declare const msgTool: {
    /**
     * 成功消息提示
     * @param msg
     */
    ok: (msg: any) => void;
    /**
     * 成功消息提示
     * @param msg
     */
    err: (msg: any) => void;
    /**
     * 二次确定弹窗
     */
    msgBox: (content: string, payLoad?: PayLoadType) => Promise<any>;
    /**
     * 图标为钩的二次确定弹窗
     */
    msgBoxSuccess: (content: string, payload?: PayLoadType) => Promise<any>;
    /**
     * 图标为问号的二次确定弹窗
     */
    msgBoxQues: (content: string, payload?: PayLoadType) => Promise<any>;
};
