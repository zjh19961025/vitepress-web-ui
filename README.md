* packages/hui: Hui 库工程
* packages/eslint: eslint 基础工程
* example 示例工程
* docs 说明文档

# 启动
node版本：18.20.2 以上
```
    pnpm i
    pnpm dev // 启动测试工程
    pnpm build:ui // 打包 Hui 库
    pnpm publish:ui // 发布 Hui 库
```

# package/hui
1. 分支说明
```
    master: 用于发布
    dev: 用于开发，开发完毕，需要合并到 master
```
**特别说明：**
* 所有修改在dev上进行，不允许 将 master 合并到 dev。仅允许将 dev 合并到master

2. **只允许在master上进行发布操作**

3. [逐渐编写说明](./packages/hui/README.md)