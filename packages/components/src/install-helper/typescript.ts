import type { HuiDelegate } from "../delegate"
import type { AppContext, Plugin } from 'vue'

/**
 * option选项
 */
export type HuiOptions = {
  isInstallComponents: boolean,
  delegate?: HuiDelegate,
}

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

