export const addAMap = function() {
  removeAMap()
  window._AMapSecurityConfig = {
      securityJsCode: window.huiDelegate.amapConfig.securityJsCode,
  }
  const key = window.huiDelegate.amapConfig.key
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${key}&plugin=AMap.PlaceSearch`
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

export const removeAMap = function(str = 'webapi') {
  const scriptTags = document.querySelectorAll('script')
  scriptTags.forEach((scriptTag) => {
    if (scriptTag.src.includes(str)) {
      scriptTag.parentNode.removeChild(scriptTag)
    }
  })
}

