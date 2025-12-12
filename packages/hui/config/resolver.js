
function getHuiResolved(name) {
  return {
    name,
    from: 'zjh-web-ui',
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
