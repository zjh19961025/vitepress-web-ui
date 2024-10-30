export const loadMapScript = function() {
  const result = isHaveAmapScript()
  if (!result) return new Promise((resolve) => resolve(''))
  window._AMapSecurityConfig = {
    serviceHost: window.huiDelegate.amapConfig.serviceHost,
  }
  const key = window.huiDelegate.amapConfig.key
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${key}`
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load AMap script'))
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
