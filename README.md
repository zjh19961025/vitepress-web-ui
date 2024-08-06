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
### 1. 分支说明
```
    master: 用于发布
    dev: 用于开发，开发完毕，需要合并到 master
```
**特别说明：**
* 所有修改在dev上进行，不允许 将 master 合并到 dev。仅允许将 dev 合并到master
* 声明文件 .d.ts 是在打包的时候生成的，即使在开发分支，如果声明文件需要更新，那么也需要执行打包操作

### 2. 发布：
* **只允许在master上进行发布操作**
* 发布命令只做到了 patch 版本号自增，MAJOR 版本（主版本号）和 MINOR 版本（次版本号） 发布都必须手动进行发布

### 3. [组件编写说明](./packages/hui/README.md)