# Project Rules

## 图片与 SVG 资源

- **禁止内联使用图片或 SVG**：不得使用 `data:image/...` base64 编码、SVG 直接内联。
- **建议使用 `<img src="...">` 引用**：所有图片和 SVG 文件建议通过外部文件路径引用，放置于 `public/` 目录下，使用 `<img src="/images/...">` 形式。
- **图片存放位置**：所有静态图片资源统一放在 `public/images/` 目录下。
- **路径定义**：在 `.tsx/.ts` 文件中使用常量定义图片路径，例如：
  ```tsx
  const HERO_IMAGE = '/images/hero.jpg'
  // 然后在 JSX 中使用
  <img src={HERO_IMAGE} alt="..." />
  ```
- **可以在 CSS 中引用图片**：可以在 CSS 文件中使用 `background-image: url(".../images/...")` 引用图片。

## 开发规范
- 使用 React + TypeScript + Vite 构建项目。
- 组件放置在 `src/components/` 目录下。
- 页面组件放置在 `src/pages/` 目录下。
- 全局样式与组件样式分离管理。
- 可复用的 CSS 样式放置在 `src/components/css/` 目录下（如 `markdown.css`、`parameter-card.css`）。

## 数据命名规范
- 数据库主键字段统一使用 `name`。
- 相关接口和 props 中的机型名称字段统一使用 `name`。
- 路由参数使用机型名称：`/aircraft/:name`。