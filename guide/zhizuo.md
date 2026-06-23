# 开发奉献列表

> 感谢以下玩家和开源项目对本修仙插件的贡献与支持。

---

## 👤 插件作者

| 头像 | 作者 | QQ | GitHub |
|:----:|------|:----:|:------:|
| <img src="http://q1.qlogo.cn/g?b=qq&nk=2154355737&s=100" width="60" height="60" alt="avatar" style="border-radius:50%"> | **ki** | **2154355737** | [https://github.com/2154355737](https://github.com/2154355737) |

---

## 👥 开发贡献者

<div class="contributors">

| 头像 | QQ |
|:----:|-----|
| <img src="http://q1.qlogo.cn/g?b=qq&nk=1776842793&s=100" width="60" height="60" alt="avatar" style="border-radius:50%"> | **1776842793** |
| <img src="http://q1.qlogo.cn/g?b=qq&nk=3302517955&s=100" width="60" height="60" alt="avatar" style="border-radius:50%"> | **3302517955** |
| <img src="http://q1.qlogo.cn/g?b=qq&nk=1011324870&s=100" width="60" height="60" alt="avatar" style="border-radius:50%"> | **1011324870** |
| <img src="http://q1.qlogo.cn/g?b=qq&nk=2740116439&s=100" width="60" height="60" alt="avatar" style="border-radius:50%"> | **2740116439** |
| <img src="http://q1.qlogo.cn/g?b=qq&nk=2674913457&s=100" width="60" height="60" alt="avatar" style="border-radius:50%"> | **2674913457** |

</div>

---

## 📦 依赖库

| 库 | 版本 | 说明 |
|----|------|------|
| [TShock](https://github.com/Pryaxis/TShock) | 6.1.0 | Terraria 服务端插件框架，提供命令、权限、玩家管理等 API |
| [TerrariaServerAPI](https://github.com/Pryaxis/TerrariaAPI-Server) | — | Terraria 服务端底层 API，由 TShock 内部引用 |
| [Newtonsoft.Json](https://www.newtonsoft.com/json) | — | 高性能 JSON 序列化/反序列化库，用于配置和数据存储 |
| [.NET](https://dotnet.microsoft.com/) | 9.0 | 目标运行时框架 |

---

## 🖥️ 框架

本插件基于 **[TShock](https://github.com/Pryaxis/TShock)** 框架开发。

### 插件入口

```csharp
[ApiVersion(2, 1)]
public class CultivationPlugin : TerrariaPlugin
{
    // 初始化 14+ 子系统：
    // QiSystem、BreakthroughSystem、TribulationSystem、
    // SkillSystem、PillSystem、BossScalingSystem、
    // BossTauntSystem、BossProjectileSystem 等
}
```

### 开发技术栈

| 技术 | 说明 |
|------|------|
| **语言** | C# (.NET 9.0) |
| **游戏引擎** | Terraria 1.4+ |
| **服务端框架** | TShock (Terraria TSAPI 插件框架) |
| **序列化** | Newtonsoft.Json |
| **文档生成** | VitePress (本文档站) |

---

## 📝 参考 & 致谢

- **原作者**：感谢插件原作者对修仙玩法系统的设计与实现
- **TShock 社区**：[https://github.com/Pryaxis/TShock](https://github.com/Pryaxis/TShock)
- **TShock 中文社区**：提供插件开发文档和技术支持
- **所有测试玩家**：参与功能验证，协助发现 Bug

---

## 🔗 相关页面

- [Bug修复报告](/guide/lishibug) — 已修复和待修复的Bug清单
- [功能验证页面](/guide/gongnengyanzheng) — 各功能模块验证状态追踪
- [算法公开](/guide/suanfa) — 各系统底层算法说明