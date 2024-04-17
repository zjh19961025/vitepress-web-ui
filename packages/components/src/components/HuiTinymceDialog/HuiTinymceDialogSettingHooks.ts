import { ref } from "vue"
import type { HuiTinymceDialogSettingHooksType } from './type'

export const HuiTinymceDialogSettingHooks: HuiTinymceDialogSettingHooksType = (settingPayload) => {
  const { props, linkExpandAttributeStr, linkSetup } = settingPayload
  const setting = ref({
    menubar: true, // 顶部菜单栏是否开启
    license_key: 'gpl', // 使用开源模式
    height: props.height, // 编辑器高度
    language: 'zh_CN', // 中文设置
    convert_urls: false, // 禁止自动转换路径
    // 自定义工具栏
    toolbar: `code nonbreaking | undo redo forecolor backcolor | alignleft aligncenter alignright alignjustify | hua5Link unlink | image axupimgs media 
        | bold italic underline strikethrough | indent outdent | table | preview  removeformat | cut copy paste| subscript superscript| 
        codesample | searchreplace emoticons| blocks fontfamily fontsize |`,
    // 需要加载的插件
    plugins: 'link image media table preview code nonbreaking codesample searchreplace emoticons axupimgs',
    file_picker_types: 'image media', // 文件上传可选的类型
    branding: false, // 是否显示右下角logo
    nonbreaking_force_tab: true, // 开启tab为添加空格
    extended_valid_elements: `a[href]`, // 标签可以设置的属性
    image_title: true, // 图片可以加标题
    // 顶部菜单栏配置
    menu: {
      file: { title: '文件', items: '' },
      edit: { title: '编辑', items: 'undo redo | cut copy paste pastetext | selectall' },
      insert: { title: '插入', items: 'media image | hr' },
      view: { title: '查看', items: 'visualaid' },
      format: { title: '格式', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat | styleselect blocks lineheight ' },
    },
    // resize_img_proportional: false, // 是否可以自由调整图片，视频大小，false为可以
    // 图片上传
    images_upload_handler: (blobInfo) => {
      return imgUpload(blobInfo)
    },
    // 文件上传
    file_picker_callback: (callback, value, meta) => {
      return fileUpload(callback, value, meta)
    },
    setup: linkSetup,
    contextmenu: 'image unlink', // 重写右键功能
  })
  setting.value.extended_valid_elements = linkExpandAttributeStr.value

  // 图片上传
  async function imgUpload(blobInfo) {
    return new Promise(async(resolve, reject) => {
      const data = new FormData()
      data.append('file', blobInfo.blob(), blobInfo?.filename?.())
      const [err, res] = await window.huiDelegate.putOss(data)
      if (err) return reject(err)
      else resolve(res.link)
    })
  }

  // 文件上传
  async function fileUpload(callback, value, meta) {
    // 上传图片
    if (meta.filetype == 'image') {
      const res = await createInputUpload('image/*')
      // 将地址填上去
      callback(res.link, { title: res.name })
    }
    // 上传视频
    if (meta.filetype == 'media') {
      const res = await createInputUpload('video/*')
      // 将地址填上去
      callback(res.link, { title: res.name })
    }
  }

  // 上传文件实现
  async function createInputUpload(fileType): Promise<any> {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', fileType)
      input.addEventListener('change', async(e) => {
        const file = (e.target as HTMLInputElement).files[0]
        const data = new FormData()
        data.append('file', file)
        const [err, res] = await window.huiDelegate.putOss(data)
        if (err) reject(err)
        else resolve(res || {})
      })
      input.click()
    })
  }

  return {
    setting,
  }
}
