# AiTool

一个基于 Vue 3 + TypeScript + Vite 构建的现代化前端项目模板。

## ✨ 特性

- 🚀 **Vue 3** - 使用最新的 Vue 3 Composition API
- 📘 **TypeScript** - 完整的 TypeScript 支持
- ⚡ **Vite** - 极速的开发构建工具
- 🎨 **SCSS** - 强大的 CSS 预处理器
- 🌈 **Tailwind CSS** - 实用优先的 CSS 框架
- 🗂️ **Pinia** - 现代化的状态管理
- 🛣️ **Vue Router** - 官方路由解决方案
- 🔧 **ESLint** - 代码质量检查
- 💅 **Prettier** - 代码格式化
- 📱 **响应式设计** - 适配各种设备

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 7.0.0 (推荐) 或 npm >= 8.0.0

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev

# 或使用 npm
npm run dev
```

### 构建

```bash
# 构建生产版本
pnpm build

# 或使用 npm
npm run build
```

### 预览

```bash
# 预览生产构建
pnpm preview

# 或使用 npm
npm run preview
```

## 🛠️ 开发工具

### 代码质量

项目已配置 ESLint 和 Prettier，确保代码质量和一致性：

```bash
# 检查代码质量
pnpm lint:check

# 自动修复代码问题
pnpm lint

# 检查代码格式
pnpm format:check

# 格式化代码
pnpm format

# 构建 Tailwind CSS
pnpm tailwind:build

# 检查 Tailwind CSS 构建
pnpm tailwind:check
```

### VS Code 配置

项目包含 VS Code 配置文件，提供以下功能：

- 保存时自动格式化代码
- 保存时自动修复 ESLint 错误
- Vue 文件语法高亮和智能提示
- TypeScript 类型检查

推荐安装以下 VS Code 扩展：

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense

## 📁 项目结构

```
src/
├── assets/          # 静态资源
├── components/     # 可复用组件
├── layout/         # 布局组件
├── router/         # 路由配置
├── store/          # 状态管理
├── styles/         # 全局样式
├── views/          # 页面组件
├── App.vue         # 根组件
└── main.ts         # 入口文件
```

## 🎯 技术栈

- **前端框架**: Vue 3.5+
- **开发语言**: TypeScript 5.8+
- **构建工具**: Vite 7.1+
- **状态管理**: Pinia 3.0+
- **路由管理**: Vue Router 4.5+
- **样式预处理**: Sass 1.93+
- **CSS 框架**: Tailwind CSS 3.4+
- **代码规范**: ESLint + Prettier

## 🎨 Tailwind CSS 使用

项目已配置 Tailwind CSS，你可以直接在 Vue 组件中使用 Tailwind 的实用类：

```vue
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-5xl font-bold text-gray-900 mb-4">Welcome to AiTool</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 class="text-xl font-semibold text-gray-900 mb-2">特性</h3>
          <p class="text-gray-600">使用 Tailwind CSS 快速构建现代化界面</p>
        </div>
      </div>
    </div>
  </div>
</template>
```

### 自定义组件类

项目已预定义了一些常用的组件类：

- `.btn` - 基础按钮样式
- `.btn-primary` - 主要按钮
- `.btn-secondary` - 次要按钮
- `.btn-outline` - 轮廓按钮
- `.card` - 卡片样式
- `.input` - 输入框样式
- `.label` - 标签样式

### 自定义主题

你可以在 `tailwind.config.js` 中自定义主题：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6',
          600: '#2563eb'
          // ... 更多颜色
        }
      }
    }
  }
}
```

## 📝 开发规范

### 代码风格

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码
- 组件名使用 PascalCase
- 文件名使用 kebab-case

### Git 提交规范

建议使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
feat: 新功能
fix: 修复问题
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建过程或辅助工具的变动
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [Vue 3 官方文档](https://vuejs.org/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [Tailwind CSS 官方文档](https://tailwindcss.com/)
- [Pinia 官方文档](https://pinia.vuejs.org/)
- [Vue Router 官方文档](https://router.vuejs.org/)
