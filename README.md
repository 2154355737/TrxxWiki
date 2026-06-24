# 修仙 Wiki

<p align="center">
  <strong>修仙服务器玩法百科 · 指令手册 · 机制说明 · Bug 跟踪</strong>
</p>

<p align="center">
  <a href="https://tr.wiki.knotting.asia/">在线访问</a>
  ·
  <a href="./guide/jiaocheng.md">指令教程</a>
  ·
  <a href="./guide/bug.md">Bug 记录</a>
  ·
  <a href="./guide/zhizuo.md">开发奉献列表</a>
</p>

<p align="center">
  <img alt="VitePress" src="https://img.shields.io/badge/VitePress-1.6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="语言" src="https://img.shields.io/badge/Language-中文文档-f59e0b?style=for-the-badge">
  <img alt="状态" src="https://img.shields.io/badge/Status-持续维护-22c55e?style=for-the-badge">
  <img alt="部署" src="https://img.shields.io/badge/Deploy-阿里云边缘函数-0ea5e9?style=for-the-badge">
</p>

---

## 项目简介

`TrxxWiki` 是一个面向修仙服务器玩家的玩法百科站点，使用 VitePress 构建，整理了修炼、突破、灵根、功法、丹药、Boss、天道、决斗等核心系统说明。

这个仓库同时用于记录文档维护内容、已发现 Bug 和修复进度，方便玩家、服主和开发者快速查阅。

## 内容导航

| 分类 | 页面 | 说明 |
|------|------|------|
| 新手入门 | [指令教程](./guide/jiaocheng.md) | 从第一次进入服务器到进阶修炼的完整流程 |
| 核心系统 | [修仙境界](./guide/jingjie.md) | 境界划分、阶段成长和突破路线 |
| 角色资质 | [灵根系统](./guide/linggen.md) | 金、木、水、火、土与天灵根说明 |
| 战斗能力 | [功法大全](./guide/gongfa.md) | 各阶段功法、类型和释放说明 |
| 资源成长 | [丹药炼制](./guide/danyao.md) | 丹药品质、炼制风险和使用效果 |
| 进阶机制 | [天道系统](./guide/tiandao.md) | 功德、天道境界和增益效果 |
| 战斗挑战 | [Boss 战斗](./guide/boss.md) | Boss 强化、技能和战斗机制 |
| 问题追踪 | [Bug 记录](./guide/bug.md) | 已发现 Bug、提交人和解决进度 |

## 当前关注

| 编号 | 问题 | 提交人 | 状态 | 进度 |
|------|------|--------|------|------|
| BUG-001 | Boss 血量计算异常 | ki | 已发现 | 待解决 |

更多问题请查看 [Bug 记录](./guide/bug.md)。

## 本地运行

```bash
npm install
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

预览构建结果：

```bash
npm run docs:preview
```

## 目录结构

```text
.
├── .vitepress/          # VitePress 配置与主题
├── guide/               # 玩法文档
├── index.md             # 站点首页
├── CNAME                # 自定义域名
├── package.json         # 项目脚本与依赖
└── README.md            # GitHub 仓库说明
```

## 参与维护

欢迎提交文档修正、玩法补充、Bug 反馈和页面优化建议。

提交问题时建议包含：

- 问题现象
- 复现方式
- 期望结果
- 实际结果
- 截图或日志，若有

提交文档改动前建议先运行：

```bash
npm run docs:build
```

## 相关链接

- 在线文档：[https://tr.wiki.knotting.asia/](https://tr.wiki.knotting.asia/)
- GitHub 仓库：[https://github.com/2154355737/TrxxWiki](https://github.com/2154355737/TrxxWiki)

---

<p align="center">
  修仙服务器 · 玩法 Wiki · 持续维护中
</p>
