# 官网发布

## 已有资源

- GitHub：`https://github.com/scottfromcn/zhipu-xinglian-website`，生产分支 `main`。
- Cloudflare Pages 项目：`zhipu-xinglian`，生产分支 `main`。
- 正式域名：`https://suzhouzp.top`、`https://www.suzhouzp.top`。
- Pages 域名：`https://zhipu-xinglian.pages.dev`。
- 当前使用 Direct Upload；推送 GitHub 不会自动更新 Cloudflare。

## 发布步骤

在本仓库根目录执行：

```sh
npm ci
npm run build
npx wrangler@4.136.2 whoami
git push origin main
npx wrangler@4.136.2 pages deploy dist --project-name zhipu-xinglian --branch main
```

Wrangler 使用本机已有登录授权，不将凭据写入仓库。若网络需要代理，按本机实际配置设置代理环境变量。

## 验收

- `dist/index.html` 中 JS/CSS 使用 `/assets/` 根路径。
- `dist/_redirects` 保留 `/* /index.html 200`，支持 React Router 二级路由。
- 部署成功后检查 Cloudflare 生产部署状态、正式域名首页和以下直达页面：
  - `/industrial-platform`
  - `/solutions/industrial`
  - `/office-ai`
- 检查页面上的工业 SaaS / 私有化一体机、OfficeAI 全部私有化及三层可信表达。
- 更新 `WORKLOG.md`，记录部署 ID、应用代码提交和线上验收结果。
