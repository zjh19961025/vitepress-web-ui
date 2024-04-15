## 组件添加
1. src 编写组件
```
ComponentName
  - ComponentName.vue // 组件实现
  - type.ts  // 组件相关类型，使用module形式
  - index.ts // 导出
  - ... // 其他
```
2. components.ts 中进行导出
3. components-install-list.ts 中进行添加
4. global.d.ts 中 的 GlobalComponents 进行全局说明

##### volar支持 说明
```json
// 在 主工程中添加types
// If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@hua5/hua5-web-ui/global"]
  }
}
```

## hooks添加
在hooks中参照添加

## 工具方法添加： utils 中进行添加


## Vue属性添加：
1. 在 utils/install-helper/install.ts 中进行添加
2. 在 global.d.ts 中 的 ComponentCustomProperties 进行全局说明

## 发布：
1. 添加用户
 * 在 cmd 中进行添加用户，[查看账号密码](https://packages.aliyun.com/npm/npm-registry/guide)，在页面中点看账号处的小眼睛查看
```
  // 在 cmd 中进行添加用户
  pnpm adduser
```
2. 发布: 在对应包的文件夹中
```
  pnpm publish
```

## css 相关
#### 颜色使用
1. 对 web-ui 颜色覆盖：重写 src/css/corlor 中的颜色
2. element-plus 颜色覆盖


#### 公共css
1. 使用 uno 的 shortcuts 替换 公共css。
2. 在 config/uno-preset 添加公共的 shortcuts

