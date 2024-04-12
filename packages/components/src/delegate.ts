export interface HuiDelegate {
  /**
   * 地区的所有数据
   * @returns
   */
  getRegion?: () => any[];
  /**
   * 上传oss
   * @param file 文件信息
   * @returns {Promise<[any, any]>} 上传后的结果
   */
  putOss?: (file: File | Blob | any) => Promise<[any, any]>;
  /**
   * 其他配置
   */
  [key: string]: any;
}

/**
 * window 全局变量声明
 */
declare global {
  interface Window {
    /** 依赖外部传入的delegate */
    huiDelegate: HuiDelegate;
  }
}

/**
 * window.hlibDelegate 默认设置
 */
window.huiDelegate = {
  getRegion: () => {
    return []
  },
  putOss: async() => {
    return [{ msg: "delegate未实现上传接口" }, null]
  },

}

export const defaultDelegate = window.huiDelegate
