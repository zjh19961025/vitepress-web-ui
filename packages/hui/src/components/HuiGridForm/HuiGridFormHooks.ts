// eslint-disable-next-line import/no-unresolved
import { HuiTool } from "../../utils/index.ts"

export const useDynamicList = () => {
  /**
     * 移动数组中的某一项
     * @param {Array} arr - 要操作的数组
     * @param {number} index - 要移动的项的索引
     * @param {string} direction - 移动方向，'up' 为上移，'down' 为下移
     * @returns {Array} - 返回修改后的数组
     */
  function moveItem(arr:any, index:number, direction:string) {
    const changeIndex = direction === 'up' ? index - 1 : index + 1
    if (changeIndex < 0 || changeIndex > arr.length) return
    const temp = arr[index]
    arr[index] = arr[changeIndex]
    arr[changeIndex] = temp
    return arr
  }

  async function removeItem(arr:any, idx:number) {
    const [, res] = await HuiTool.msgBox('确定删除吗？')
    if (res) {
      arr.splice(idx, 1)
    }
  }

  return {
    moveItem,
    removeItem,
  }
}
