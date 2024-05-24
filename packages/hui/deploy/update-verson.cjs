// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// 指定 package.json 文件路径
const packageJsonPath = path.join(__dirname, '../package.json')
console.log("__dirname", __dirname)

// 读取 package.json 文件内容
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err)
    return
  }

  // 解析 JSON 内容
  let packageJson
  try {
    packageJson = JSON.parse(data)
  } catch (err) {
    console.error('Error parsing package.json:', err)
    return
  }

  // 获取当前版本号
  const currentVersion = packageJson.version

  // 使用正则表达式匹配版本号并进行递增
  const versionMatch = currentVersion.match(/^(\d+)\.(\d+)\.(\d+)$/)
  if (!versionMatch) {
    console.error('Invalid version format in package.json')
    return
  }

  // eslint-disable-next-line prefer-const
  let [major, minor, patch] = versionMatch.slice(1).map(Number)

  // 递增 patch 版本号
  patch++

  // 生成新的版本号
  const newVersion = `${major}.${minor}.${patch}`

  // 更新版本号
  packageJson.version = newVersion

  // 将更新后的内容写回 package.json 文件
  fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing package.json:', err)
      return
    }

    console.log(`Version updated from ${currentVersion} to ${newVersion}`)
  })
})
