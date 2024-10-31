export declare const HuiRules: {
    /**
     * 是否url
     * @param isCanEmpty 是否可以为空，默认不能为空
     * @param tips 错误提示
     */
    urlRule: (isCanEmpty?: boolean, tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 是否版本号
     * @param tips 错误提示
     */
    versionRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 是否json
     * @param tips 错误提示
     */
    jsonRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 验证整数
     * @param isCanZero 是否能输0
     * @param isCanNegative 是否能输负数
     */
    intNumRule: (isCanZero?: boolean, isCanNegative?: boolean) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证小数
     * @param digit 小数位数
     * @param isCanZero 是否能输0
     * @param isCanNegative 是否能输负数
     */
    digitNumRule: (digit?: number, isCanZero?: boolean, isCanNegative?: boolean) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证码验证
     * @param tips 错误提示
     * @param codeLength 验证码长度
     */
    codeRule: (tips?: string, codeLength?: number) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 电话号码验证
     * @param tips 错误提示
     */
    phoneNumRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 验证数字范围
     * @param min 最小值
     * @param max 最大值
     * @param tips 错误提示
     */
    numRangeRule: (min: number | string, max: number | string, tips: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
};
