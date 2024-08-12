export const addAMap = function() {
  const result = isHaveAmapScript()
  if (!result) return new Promise((resolve) => resolve(''))
  window._AMapSecurityConfig = {
    // securityJsCode: 'f1eef966d465d88b7de5a1941f7fd7e3',
    serviceHost: window.huiDelegate.amapConfig.serviceHost,
    // serviceHost: 'http://192.168.31.5/_AMapService',
  }
  const key = window.huiDelegate.amapConfig.key
  // const key = '0510ba1445c11816c9d45d45c10c23fe'
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&plugin=AMap.PlaceSearch`
    script.onload = function() {
      const scriptMain = document.createElement('script')
      scriptMain.type = 'text/javascript'
      scriptMain.src = `https://webapi.amap.com/ui/1.1/main.js`
      document.head.appendChild(scriptMain)
      scriptMain.onload = function() {
        resolve('')
      }
    }
    document.head.appendChild(script)
  })
}

function isHaveAmapScript() {
  const scriptTags = document.querySelectorAll('script')
  let flag = true
  scriptTags.forEach((scriptTag) => {
    if (scriptTag.src.includes('webapi')) {
      flag = false
    }
  })
  return flag
}

export const removeAMap = function(str = 'webapi') {
  // const scriptTags = document.querySelectorAll('script')
  // scriptTags.forEach((scriptTag) => {
  //   if (scriptTag.src.includes(str)) {
  //     scriptTag.parentNode.removeChild(scriptTag)
  //   }
  // })
}

