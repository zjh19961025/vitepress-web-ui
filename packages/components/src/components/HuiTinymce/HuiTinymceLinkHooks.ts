import { ElMessage } from "element-plus"
import type { HuiTinymceLinkHooksType } from "./type"
import { computed } from "vue"

export const HuiTinymceLinkHooks: HuiTinymceLinkHooksType = (linkPayload) => {
  const { props } = linkPayload

  const linkExpandAttributeStr = computed<string>(() => {
    let expandAttributeStr = ''
    props.linkAttribute.forEach(item => {
      expandAttributeStr += '|' + item.value
    })
    return `a[href${expandAttributeStr}]`
  })

  function linkSetup(editor: any) {
    editor.ui.registry.addButton('hua5Link', {
      icon: 'link',
      tooltip: '添加/修改链接',
      onAction: () => {
        // 获取选中的文本
        const text = editor.selection.getContent()
        // 获取选中的节点信息
        let element = editor.selection.getNode()
        // 如果当前节点不是a标签，那么去拿他的父级, 处理图片
        // element 他的父节点是a标签,那么将element赋值给childElment保存起来
        let childElment = null
        if (element.nodeName != 'A') {
          childElment = element
          element = element.parentNode
        }

        /**
         * dialog 内容初始化
         */
        const initData: any = {}
        // 自定义属性初始化
        props.linkAttribute.forEach(item => {
          initData[item.value] = element.getAttribute(item.value) || ''
        })
        // 连接初始化
        const href = element.getAttribute('href') || ''
        initData.href = href
        // 内容初始化
        let initText = text
        if (element.nodeName == 'A') {
          initText = childElment?.outerHTML || element.innerText
        }
        initData.title = initText

        /**
         * 配置输入框
         */
        const bodyItems = [
          {
            type: 'input',
            name: 'title',
            label: '内容',
            disabled: (function() {
              // 是否被禁用
              const ele = editor.selection.getNode()
              if (ele?.getAttribute('src')) {
                return true
              }
              const child = ele.firstElementChild
              if (child?.getAttribute('src')) {
                return true
              }
            })(),
          },
          {
            type: 'input',
            name: 'href',
            label: '添加连接',
          },
        ]
        props.linkAttribute.forEach(item => {
          bodyItems.push({
            type: 'input',
            name: item.value,
            label: item.title,
          })
        })

        /**
         * dialogConfig
         */
        const dialogConfig = {
          title: '添加连接',
          //  dialog数据回显
          initialData: initData,
          body: {
            type: 'panel',
            items: bodyItems,
          },
          buttons: [
            {
              type: 'cancel',
              text: 'Close',
            },
            {
              type: 'submit',
              text: 'Save',
              primary: true,
            },
          ],
          // 数据提交
          onSubmit: (api) => {
            const data = api.getData()
            // 内容框有内容，并且拿到的节点是a标签
            if (element.nodeName == 'A') {
              editor.dom.setAttrib(element, 'href', data.href)
              props.linkAttribute.forEach(item => {
                element.setAttribute(item.value, data[item.value])
              })
              if (!childElment) {
                element.innerText = data.title
              }
            } else {
              let content = `<a href="${data.href}">${data.title}</a>`
              let Attribute = ''
              props.linkAttribute.forEach(item => {
                Attribute += `${item.value}="${data[item.value]} "`
                content = `<a href="${data.href}" ${Attribute}>${data.title}</a>`
              })
              // 数据放到页面上
              editor.insertContent(content)
            }
            api.close()
          },
        }

        // 获取选中的文本
        if (text.includes('href') && text.includes('<a')) {
          ElMessage.error('你选中的内容，其中部分已含有链接，请先删除后再添加')
        } else {
          editor.windowManager.open(dialogConfig)
        }
      },
    })
  }

  return {
    linkSetup,
    linkExpandAttributeStr,
  }
}
