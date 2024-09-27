import { ref } from "vue"
import type { HuiTinymceSettingHooksType } from './type'

export const HuiTinymceSettingHooks: HuiTinymceSettingHooksType = (settingPayload) => {
  const { props, linkExpandAttributeStr, linkSetup } = settingPayload
  const setting = ref({
    menubar: false, // 顶部菜单栏是否开启
    license_key: 'gpl', // 使用开源模式
    height: props.height, // 编辑器高度
    language: 'zh_CN', // 中文设置
    convert_urls: false, // 禁止自动转换路径
    // 自定义工具栏
    toolbar: `code undo redo
    | image axupimgs media hua5Link unlink
    | alignleft aligncenter alignright alignjustify
    | forecolor fontsize
    | bold italic underline strikethrough fontfamily fontsizeinput blocks  
    | formatpainter backcolor
    | lineheight letterspacing 
    | table nonbreaking
    | indent outdent
    | cut copy paste
    | preview  removeformat
    | subscript superscript
    | print searchreplace emoticons
    | codesample`,
    // 需要加载的插件
    plugins: 'link image media table preview code nonbreaking codesample searchreplace emoticons axupimgs letterspacing formatpainter',
    file_picker_types: 'image media', // 文件上传可选的类型
    branding: false, // 是否显示右下角logo
    nonbreaking_force_tab: true, // 开启tab为添加空格
    extended_valid_elements: `a[href]`, // 标签可以设置的属性
    image_title: true, // 图片可以加标题
    font_size_formats: '1.25rem 1.5rem 1.75rem 1.875rem 2rem 2.5rem 2.625rem 8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 26pt 28pt 32pt 40pt', // 字体大小
    line_height_formats: '1 1.2 1.4 1.6 1.8 2 2.4 2.8 3', // 行高
    letterspacing: '0px 2px 4px 6px 8px 10px', // 字符间距
    toolbar_mode: 'sliding', // 工具栏模式
    // 顶部菜单栏配置
    // menu: {
    //   file: { title: '文件', items: '' },
    //   edit: { title: '编辑', items: 'undo redo | cut copy paste pastetext | selectall' },
    //   insert: { title: '插入', items: 'media image | hr' },
    //   view: { title: '查看', items: 'visualaid' },
    //   format: { title: '格式', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat | styleselect blocks lineheight ' },
    // },
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
