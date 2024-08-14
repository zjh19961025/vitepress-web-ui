import { toEscapedSelector as e } from 'unocss'

/**
 * margin 支持 m[lrtb]-size
 */
const marginRules = [/^m(?:([tblr]+))?-(.+)$/, ([, directions = 'all', size], { rawSelector }) => {
  const styles = {
    t: 'margin-top',
    b: 'margin-bottom',
    l: 'margin-left',
    r: 'margin-right',
  }
  let marginInfo = ""
  if (directions === 'all') {
    marginInfo = `margin: ${size}px;`
  } else {
    directions.split('').forEach(dir => {
      marginInfo += `${styles[dir]}: ${size}px;`
    })
  }

  const selector = e(rawSelector)
  return `
    ${selector}{
      ${marginInfo}
    }
    `
}]

/**
   * padding 支持 p[lrtb]-size
   */
const paddingRules = [/^p(?:([tblr]+))?-(.+)$/, ([, directions = 'all', size], { rawSelector }) => {
  const styles = {
    t: 'padding-top',
    b: 'padding-bottom',
    l: 'padding-left',
    r: 'padding-right',
  }
  let paddingInfo = ""
  if (directions === 'all') {
    paddingInfo = `padding: ${size}px;`
  } else {
    directions.split('').forEach(dir => {
      paddingInfo += `${styles[dir]}: ${size}px;`
    })
  }

  const selector = e(rawSelector)
  return `
    ${selector}{
      ${paddingInfo}
    }
    `
}]

export default [
  marginRules,
  paddingRules,
]
