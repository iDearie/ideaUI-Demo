# React Native 组件库计划

## 目的

- 编写符合 UI 规范的 RN 组件库，支撑 RN 项目开发，提高 RN 项目开发效率，减少代码复用率

- 使用 Typescript 语言开发，增强开发体验，增强使用组件时的智能提示，推动 Typescript 的使用

## 当前问题

- 无 npm 包，每个项目都需要复制一遍组件代码，不能保证组件库的统一
- 组件调用无属性提示，在写代码的过程中没办法实时掌握组件调用是否合规
- 部分组件扩展性不佳 eg: Checkbox，FloatLayer
- 无单元测试

## 改进方案

- 建立 cnpm 代码包， 保证每个项目的组件库体验一致
- 使用 Typescript，提供完整的 interface 来保证在组件调用时可以给出很好的提示
- 梳理组件逻辑，完善使用场景，在保证代码稳定的情况下提高扩展性
- 使用 Jest + Enzyme 进行单元测试，提高代码的可测试性，降低 bug 数

## 难点

- 之前未进行过系统的 RN 的单元测试
- 部分组件需要原生支持 eg: Icon

## 组件列表

- Theme - 已完成
- Accordion - 60%
- Button - 已完成
- Checkbox - 80%
- List - 80%
- Form - 80%
- Icon - 80%
- Pagination - 80%
- Slider - 80%
- Switch - 80%
- Tab - 80%
- Popover - TODO
- DatePickerView - TODO
- FloatLayer - TODO

## 组件详情

- **Theme 组件**

  入口组件，对被包裹在其中的组件提供默认主题样式。

  `export { WithTheme, useTheme }`

  eg:

  ```typescript
   <WithTheme theme={(theme) => StyleSheet<any>}>
     {(style) => React.ReactNode}
   </WithTheme>
  ```

- **Accordion 手风琴**

  > 可以折叠/展开的内容区域

- **Button 按钮**

  > 点击后会触发操作

- **Checkbox 单选复选组件**

  > 单选多选组件

- **List 组件**

  > 单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。
  > TODO： 将箭头的图片换成 Icon 组件

- **Form 表单**

  > 仿照 Web 端提供的依赖 List 组件的表单类组件

- **Icon 组件**

  > 采用第三方库提供的 Icon 组件，使用 svg 作为图标，提供符合标准的默认样式

- **Pagination 分页**

  > 分隔长列表，每次只加载一个页面

- **Slider 滑动选择器**

  > 允许用户在一个区间中选择特定值

- **Switch 开关**

  > 切换选择组件

- **Tab 标签页**

  > 用于让用户在不同的视图中进行切换

- **Popover 气泡**

  > 在固定位置显示提示气泡

- **DatePickerView 时间选择器**

  > 包含年、月、日、小时、分钟的日期选择器
