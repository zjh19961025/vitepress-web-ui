
function getHua5Resolved(name) {
  return {
    name,
    from: '@hua5/hua5-web-ui',
  }
}

export const Hua5UIResolver = () => {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Hua')) {
        return getHua5Resolved(name)
      }
    },
  }
}
