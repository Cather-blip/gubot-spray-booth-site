# GitHub 自动部署到 SiteGround

这个网站建议使用 GitHub Actions 自动部署到 SiteGround。以后每次修改网站后，只要推送到 GitHub 的 `main` 分支，GitHub 会自动把文件同步到 SiteGround 的 `public_html`。

## 1. 在 GitHub 创建仓库

建议仓库名：

```text
gubot-spray-booth-site
```

创建时选择：

- Private 或 Public 都可以
- 不要勾选初始化 README
- 不要添加 .gitignore
- 不要添加 license

## 2. 上传本地网站到 GitHub

创建仓库后，GitHub 会显示一段命令。进入本网站文件夹后执行类似下面的命令：

```bash
git remote add origin https://github.com/YOUR_ACCOUNT/gubot-spray-booth-site.git
git push -u origin main
```

把 `YOUR_ACCOUNT` 换成你的 GitHub 用户名或组织名。

## 3. 在 GitHub 添加 SiteGround 密钥

进入 GitHub 仓库：

`Settings` → `Secrets and variables` → `Actions` → `New repository secret`

添加下面 5 个 secret：

```text
SITEGROUND_HOST
SITEGROUND_USER
SITEGROUND_PORT
SITEGROUND_PATH
SITEGROUND_SSH_KEY
```

说明：

- `SITEGROUND_HOST`：SiteGround 的 SSH/SFTP 主机地址
- `SITEGROUND_USER`：SiteGround 的 SSH/SFTP 用户名
- `SITEGROUND_PORT`：SiteGround 的 SSH 端口，通常可在 SiteGround 后台 SSH/SFTP 信息里看到
- `SITEGROUND_PATH`：网站目录，一般类似 `/home/customer/www/yourdomain.com/public_html/`
- `SITEGROUND_SSH_KEY`：私钥内容，必须包含完整的 `-----BEGIN ... PRIVATE KEY-----` 到 `-----END ... PRIVATE KEY-----`

## 4. 部署方式

以后每次推送到 `main` 分支，GitHub 会自动部署。

也可以手动部署：

`Actions` → `Deploy website to SiteGround` → `Run workflow`

## 5. 注意

`index.html` 必须部署到 SiteGround 的 `public_html` 根目录，不能放在子文件夹里。

