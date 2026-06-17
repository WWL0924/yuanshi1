# Work Order Dashboard

一个基于 React + Vite 的前端测试项目，用于展示登录权限控制、工单表格和项目工时图表联动。

## 技术栈

- React
- Vite
- Less
- Ant Design
- ECharts

## 功能说明

- 登录页模拟权限控制
- 用户名为 `admin` 时进入管理员视图
- 其他用户名进入普通用户视图
- 管理员可查看、删除工单并查看图表
- 普通用户只能查看工单与图表，不能删除
- 图表按项目汇总工时，删除工单后会自动联动更新

## 本地启动

```bash
npm install
npm run dev
```

如果 PowerShell 执行策略拦截 `npm`，可改用：

```bash
npm.cmd install
npm.cmd run dev
```

## 构建命令

```bash
npm run build
```

## 部署说明

项目当前可部署到：

- Vercel
- Netlify
- GitHub Pages

### GitHub Pages

仓库已经补充自动部署工作流。

你只需要：

1. 把项目推送到 GitHub 仓库的 `main` 分支
2. 打开仓库 `Settings -> Pages`
3. 在 `Build and deployment` 里把 `Source` 设为 `GitHub Actions`
4. 等待 Actions 里的 `Deploy to GitHub Pages` 工作流执行完成

完成后会得到公开访问地址。

## 说明文档

需求文档要求的一页说明文档已整理到：

- [项目说明文档](./PROJECT_REPORT.md)
