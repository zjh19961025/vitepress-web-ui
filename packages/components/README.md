## 组件添加
1. src 编写组件
```
component-name
  - component-name.vue // 组件实现
  - component-name.ts  // 组件相关事项，类型，hooks等
  - index.ts // 导出
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

## 工具方法添加： utils 中进行添加


## 全局属性添加：
1. 在 utils/install-helper/install.ts 中进行添加
2. 在 global.d.ts 中 的 ComponentCustomProperties 进行全局说明

