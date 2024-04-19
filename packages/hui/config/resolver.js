
function getHuiResolved(name) {
  return {
    name,
    from: '@hua5/hua5-web-ui',
  }
}

export const HuiResolver = () => {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Hui')) {
        return getHuiResolved(name)
      }
      if (name.startsWith('useHui')) {
        return getHuiResolved(name)
      }
    },
  }
}
