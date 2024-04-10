export interface HuiDelegate {
  /** 地区的所有数据 */
  getRegion: () => any[],
  /**
   * 上传oss
   * @param file 文件信息
   * @returns {Promise<[Error | null, any]>} 上传后的结果
   */
  putOss?: (file: File | Blob | any) => Promise<[Error | null, any]>,
  [key: string]: any
}

/**
 * option选项
 */
export type HuiOptions = {
  isInstallComponents: boolean,
  delegate: HuiDelegate,
}

/**
 * window 全局变量声明
 */
declare global {
  interface Window {
    /** 依赖外部传入的delegate */
    huiDelegate: HuiDelegate
  }
}
