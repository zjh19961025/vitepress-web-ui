import { PayLoadType } from './message-box';
export declare const HuiTool: {
    ok: (msg: any) => void;
    err: (msg: any) => void;
    msgBox: (content: string, payLoad?: PayLoadType) => Promise<any>;
    msgBoxSuccess: (content: string, payload?: PayLoadType) => Promise<any>;
    msgBoxQues: (content: string, payload?: PayLoadType) => Promise<any>;
};
