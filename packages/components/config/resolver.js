
function getWuiResolved(name) {
  return {
    name,
    from: '@hua5/hua5-web-ui',
  }
}

export const WuiResolver = () => {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Wui')) {
        return getWuiResolved(name)
      }
      if (name.startsWith('useWui')) {
        return getWuiResolved(name)
      }
    },
  }
}
