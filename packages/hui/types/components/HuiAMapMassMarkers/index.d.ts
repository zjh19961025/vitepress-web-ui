import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { IPointItem, IPointTextStyle } from './type';
/**
 * 组件导出
 */
export declare const HuiAMapMassMarkers: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    modelValue: PropType<any>;
    iconPath: {
        type: PropType<string>;
        default: string;
    };
    value: {
        type: PropType<IPointItem>;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    height: {
        type: PropType<string>;
        default: string;
    };
    showLabel: {
        type: PropType<boolean>;
        default: boolean;
    };
    direction: {
        type: PropType<"top" | "right" | "bottom" | "left" | "center">;
        default: string;
    };
    textStyle: {
        type: PropType<IPointTextStyle>;
        default: () => {
            fontSize: number;
            fillColor: any;
            backgroundColor: any;
            borderRadius: number;
        };
    };
    iconSize: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
    mapCenter: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
}>, {
    handleLabelMarkerClick: (event: any, point: any) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    pointClick: (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: PropType<any>;
    iconPath: {
        type: PropType<string>;
        default: string;
    };
    value: {
        type: PropType<IPointItem>;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    height: {
        type: PropType<string>;
        default: string;
    };
    showLabel: {
        type: PropType<boolean>;
        default: boolean;
    };
    direction: {
        type: PropType<"top" | "right" | "bottom" | "left" | "center">;
        default: string;
    };
    textStyle: {
        type: PropType<IPointTextStyle>;
        default: () => {
            fontSize: number;
            fillColor: any;
            backgroundColor: any;
            borderRadius: number;
        };
    };
    iconSize: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
    mapCenter: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
}>> & Readonly<{
    onPointClick?: (...args: any[]) => any;
}>, {
    iconPath: string;
    width: string;
    height: string;
    showLabel: boolean;
    direction: "top" | "right" | "bottom" | "left" | "center";
    textStyle: IPointTextStyle;
    iconSize: [number, number];
    mapCenter: [number, number];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiAMapMassMarkers;
