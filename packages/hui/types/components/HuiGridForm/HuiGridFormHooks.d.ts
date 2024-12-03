export declare const useDynamicList: () => {
    moveItem: (arr: any, index: number, direction: string) => any;
    removeItem: (arr: any, idx: number) => Promise<boolean>;
};
