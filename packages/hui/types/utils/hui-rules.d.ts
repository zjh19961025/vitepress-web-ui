export declare const HuiRules: {
    /**
     * 校验必传
     * @param {string} tips 错误提示
     */
    required: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 是否url
     * @param {string} tips 错误提示
     */
    urlRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 是否版本号
     * @param {string} tips 错误提示
     */
    versionRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 是否json
     * @param {string} tips 错误提示
     */
    jsonRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证整数
     * @param {boolean} isCanZero 是否能输0
     * @param {boolean} isCanNegative 是否能输负数
     */
    intNumRule: (isCanZero?: boolean, isCanNegative?: boolean) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证小数
     * @param {number} digit 小数位数
     * @param {boolean} isCanZero 是否能输0
     * @param {boolean} isCanNegative 是否能输负数
     */
    digitNumRule: (digit?: number, isCanZero?: boolean, isCanNegative?: boolean) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证码验证
     * @param {string} tips 错误提示
     * @param {number} codeLength 验证码长度
     */
    codeRule: (tips?: string, codeLength?: number) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 电话号码验证
     * @param {string} tips 错误提示
     */
    phoneNumRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证数字范围
     * @param {number | string} min 最小值
     * @param {number | string} max 最大值
     * @param {string} tips 错误提示
     */
    numRangeRule: (min: any, max: any, tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
};
