export interface HuiDelegate {
  /**
   * 地区的所有数据
   * @returns
   */
  getRegionTree?: () => any[] | Promise<any[]>;
  /**
   * 上传oss
   * @param file 文件信息
   * @returns {Promise<[any, any]>} 上传后的结果
   */
  putOss?: (file: File | Blob | any) => Promise<[any, any]>;
  /**
   * 地图相关配置
   */
  amapConfig?: {
    key: string,
    serviceHost: string,
  },
  /**
   * 权限列表
   */
  permission?:{
    [key:string]:boolean,
  }
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
  getRegionTree: () => {
    return []
  },
  putOss: async() => {
    return [{ msg: "delegate未实现上传接口" }, null]
  },
  amapConfig: {
    key: '',
    serviceHost: "",
  },
  permission: {
    addUserCode: true,
    editUserCode: true,
  },
}
export const defaultDelegate = window.huiDelegate
