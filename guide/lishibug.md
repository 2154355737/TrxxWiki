---
title: 历史版本 - Bug修复报告
description: 修仙插件 Bug 修复报告（2026-06-23）
outline: [2,3]
---

# 修仙插件 Bug 修复报告

> 基于暂存更改 (`git diff --cached`) 分析，共涉及 12 个文件（含 1 个新增文件）。
> 生成时间：2026-06-23 01:46 UTC+8

---

## 一、变更概览

| 文件 | 变更类型 | 风险等级 |
|------|----------|----------|
| Commands/PlayerCommands.cs | 功能增强 + 代码重构 | 低 |
| Models/RealmEquipmentConfig.cs | 物品ID常量化重构 | **中** |
| Models/Technique.cs | Bug修复 + ID常量化 | 低 |
| Systems/BossProjectileSystem.cs | 代码清理 | 低 |
| Systems/BreakthroughSystem.cs | Bug修复 | 低 |
| Systems/Collect.cs | 数据模型重构 | 低 |
| Systems/CultNotify.cs | 功能增强 | 低 |
| Systems/CultivationManager.cs | **核心重构** | **高** |
| Systems/PillSystem.cs | Bug修复 | 低 |
| Systems/SkillSystem.cs | 代码重构 | 低 |
| Systems/TribulationSystem.cs | Bug修复 | 低 |
| Utils/CombatIntegration.cs | 功能调整 | 低 |

---

## 二、已修复的 Bug（正面变更）

### Bug #1 ✅ 境界突破后属性不刷新

**文件**: `Systems/BreakthroughSystem.cs`

**问题**: 突破成功/失败导致境界变化后，玩家的 HP/魔力上限没有立即刷新，需要等到下一次 OnGameUpdate 周期（1秒间隔）。玩家在这 1 秒内可能以旧的血量上限被击杀。

**修复**: 在三处突破逻辑中（失败倒退回退、小境界晋升、大境界晋升）添加了 `_mgr.ApplyCultivationStats(player, data)`，立即同步属性到 Terraria 客户端。

### Bug #2 ✅ 渡劫死亡检测不完善

**文件**: `Systems/TribulationSystem.cs`

**问题**: 渡劫期间仅通过 `statLife <= 0` 判断死亡，但 Terraria 存在帧延迟：死亡动画播放时 `statLife` 可能尚未归零，但 `player.TPlayer.dead` 已为 `true`。导致天雷击杀判定延迟 1-2 帧，玩家可能多挨一雷。

**修复**: 死亡检测改为 `player.TPlayer.statLife <= 0 || player.TPlayer.dead`。

### Bug #3 ✅ 渡劫失败后"死后复活"

**文件**: `Systems/TribulationSystem.cs`

**问题**: 渡劫失败时 `FailTribulation` 强制将生命设为 `Math.Max(1, ...)` 。如果玩家已被天雷击杀（`statLife <= 0`），此操作会将死去的玩家生命设回正数，造成"死了又活了"的异常状态。

**修复**: 添加守卫条件 `if (player.TPlayer.statLife > 0 && !player.TPlayer.dead)`，只在玩家存活时扣血惩罚。

### Bug #4 ✅ 每 Tick 覆写 statLifeMax/statManaMax 导致原版生命成长被清零

**文件**: `Systems/CultivationManager.cs`（核心重构）

**问题**: 旧逻辑 `ApplyCachedStats` 每 tick 写入 `tPlayer.statLifeMax = cp.CachedMaxLife`（修仙后的绝对值，如 100+500=600）。但 Terraria 的 `Player.Update()` 会在每 tick 开始前将 `statLifeMax2` 同步到 `statLifeMax`。这意味着玩家原版生命水晶(+20×15=300)、生命果(+5×20=100) 提供的上限会被每 tick 覆盖为固定值 600，原版成长完全失效。

旧代码流：
```
每 tick: statLifeMax = 600 (修仙绝对值)
         statLifeMax2 = 600
下一 tick: Player.Update() 把 statLifeMax2 写回 statLifeMax
           再被写成 600  → 生命水晶加成永久丢失
```

**修复**: 重构为"加成追踪"模式：
- `CachedLifeBonus` / `CachedManaBonus` 只存修仙提供的**增量**
- `AppliedLifeBonus` / `AppliedManaBonus` 记录上次已写入的数值
- `ApplyMaxStatBonuses()` 通过 `vanilla = 当前 statLifeMax - 上次写入的加成` 反推原版基础值，再加新加成
- 只在登录、突破、重载配置时写入 `statLifeMax`/`statManaMax`
- 每 tick 只写 `statDefense` 和 `moveSpeed`（动态属性）

### Bug #5 ✅ 丹药回血/回蓝上限使用错误的字段

**文件**: `Systems/PillSystem.cs`

**问题**: 丹药回血使用 `statLifeMax` 作为上限，但在修仙加成场景下，`statLifeMax2` 可能比 `statLifeMax` 更大（用于 UI 显示）。使用较小值导致丹药无法回满。

**修复**: 使用 `Math.Max(statLifeMax, statLifeMax2)` 和 `Math.Max(statManaMax, statManaMax2)`。

### Bug #6 ✅ 生命恢复上限使用错误字段

**文件**: `Systems/CultivationManager.cs`

**问题**: 生命恢复回血使用 `statLifeMax` 作为上限，导致带修仙加成的玩家回血被过早截断。

**修复**: 改为 `tPlayer.statLifeMax2`。

### Bug #7 ✅ 非渡劫死亡后 JustFailedTribulation 标志未清除

**文件**: `Systems/CultivationManager.cs`

**问题**: 渡劫失败时设置 `JustFailedTribulation = true`，但如果玩家在非渡劫状态下死亡，该标志不会被重置，导致下次突破判定异常。

**修复**: 玩家死亡时，若非渡劫状态，设置 `data.JustFailedTribulation = false`。

### Bug #8 ✅ 凡人境界功法学习判定问题

**文件**: `Models/Technique.cs` + `Systems/SkillSystem.cs`

**问题**: 旧的 `GetLearnable` 判定 `t.RequiredSubLevel <= subLevel` 在 `tier == RealmTier.Mortal` 和 `t.RequiredRealm == RealmTier.Mortal` 且 `subLevel == 0` 时意外通过（0 <= 0），但逻辑不够清晰。

**修复**: 抽取 `MeetsRequirement()` 方法，明确处理凡人境界（`tier > Mortal ? Math.Max(1, subLevel) : subLevel`），统一供 `GetLearnable` 和 `SkillSystem` 使用。

### Bug #9 ✅ Buff/Projectile 硬编码 ID 迁移为命名常量

**文件**: `Models/Technique.cs` + `Systems/BossProjectileSystem.cs` + `Models/RealmEquipmentConfig.cs`

**问题**: 大量魔法数字（如 `BuffId = 36`、`ProjectileId = 272`、`R(65, desc: "星怒")`）难以阅读和维护。

**修复**: 添加 `MigrateKnownBuffIds()` 和 `MigrateKnownProjectileIds()` 进行存量数据迁移，新配置统一使用 `BuffID.XXX` / `ProjectileID.XXX` / `ItemID.XXX` 命名常量。

---

## 三、潜在风险与需验证项

### 风险 #1 ⚠️ "渡劫"境界 Metal 奖励物品可能变更

**文件**: `Models/RealmEquipmentConfig.cs`
**位置**: "渡劫" (Tribulation) → rewards → metal

**变更**:
```
原: R(3013, desc: "勇士徽章")
新: R(ItemID.WarriorEmblem, desc: "勇士徽章")
```

**分析**: 在"金丹"配置中，ID 3013 对应 `ItemID.AvengerEmblem`（复仇者徽章），ID 2998 对应 `ItemID.WarriorEmblem`（战士徽章）。原"渡劫" metal 使用了 ID 3013 但描述为"勇士徽章"（即战士徽章），存在 ID 与描述不匹配的原始 Bug。本次重构根据描述匹配到了 `ItemID.WarriorEmblem`，可能导致实际发放物品从复仇者徽章变为战士徽章。

**建议**: 确认设计意图——"渡劫" metal 应该发放战士徽章还是复仇者徽章？如果是战士徽章，则本次修复了原 Bug；如果是复仇者徽章，则需改为 `R(ItemID.AvengerEmblem, desc: "复仇者徽章")`。

### 风险 #2 ⚠️ "炼气"境界 Heavenly 奖励物品ID修复

**文件**: `Models/RealmEquipmentConfig.cs`
**位置**: "炼气" (QiCondensation) → rewards → heavenly

**变更**:
```
原: R(50, desc: "云瓶")
新: R(ItemID.CloudinaBottle, desc: "云瓶")
```

**分析**: 原代码中 ID 50 是 `MagicMissile`（魔法导弹），描述"云瓶"（Cloud in a Bottle）应为 ID 53。`ItemID.CloudinaBottle` 正确映射到 Cloud in a Bottle。这是原始 Bug 的修复，但需确认 `ItemID.CloudinaBottle` 在目标 Terraria 版本中是否确实存在且指向正确 ID。

### 风险 #3 ⚠️ "大乘"境界 Common 奖励碎片数量变更

**文件**: `Models/RealmEquipmentConfig.cs`
**位置**: "大乘" (GreatVehicle) → common

**变更**:
```
原: R(3601, 10, desc: "天界柱碎片")           → 总计 10 个碎片
新: R(ItemID.FragmentSolar, 10, ...)            → 日耀碎片 ×10
    R(ItemID.FragmentVortex, 10, ...)           → 星旋碎片 ×10
    R(ItemID.FragmentNebula, 10, ...)           → 星云碎片 ×10
    R(ItemID.FragmentStardust, 10, ...)         → 星尘碎片 ×10
                                                总计 40 个碎片（4 种各 10 个）
```

**分析**: 原代码仅发放 10 个 ID 3601 的物品（单一类型），新代码发放 4 种碎片各 10 个共 40 个。如果原 ID 3601 是某种通用碎片或等价物，这可能是重大平衡变更。

**建议**: 确认 ID 3601 对应什么物品，以及 4 种碎片各 10 个是否为设计意图。

### 风险 #4 ⚠️ 功法"灵气弹"所需小境界从 1 改为 0

**文件**: `Models/Technique.cs`

**变更**:
```
原: Id = 1, Name = "灵气弹", RequiredRealm = RealmTier.QiCondensation, RequiredSubLevel = 1
新: Id = 1, Name = "灵气弹", RequiredRealm = RealmTier.QiCondensation, RequiredSubLevel = 0
```

**分析**: 新玩家初始 `SubLevel = 0`，旧逻辑到 `SubLevel = 1` 才能学习第一个技能，现在变为 SubLevel ≥ 0 即可。这是否为设计意图？配合新的 `MeetsRequirement` 逻辑（凡人境界下 `subLevel` 不作 `Max(1, ...)` 处理），可能改变了新手引导流程。

### 风险 #5 ⚠️ 聊天颜色全部变为白色

**文件**: `Utils/CombatIntegration.cs`

**变更**:
```
原: var color = GetRealmChatColor(data.RealmTier);
    TShock.Utils.Broadcast(final, color.R, color.G, color.B);
新: TShock.Utils.Broadcast(final, 255, 255, 255);
```

**分析**: 删除了 `GetRealmChatColor()` 方法，聊天消息不再按境界着色，改为全服白色广播。境界颜色信息已移入 `{Realm}` 占位符内（通过 `CultNotify.GetSpiritRootColor` 上色），这意味着消息本身的颜色失去了层次感。

**建议**: 确认是否为设计意图——可能为了避免 Chat Tag 和 Broadcast Color 双重着色导致的颜色叠加问题。

### 风险 #6 ⚠️ `ApplyMaxStatBonuses` 中 `statLifeMax2` 仅上调不下调

**文件**: `Systems/CultivationManager.cs`

**代码**:
```csharp
if (tPlayer.statLifeMax2 < desiredLifeMax)
    tPlayer.statLifeMax2 = desiredLifeMax;
```

**分析**: 当修仙加成减少时（如突破失败降阶），`desiredLifeMax` 可能小于当前 `statLifeMax2`，但此逻辑不会下调 `statLifeMax2`。这可能导致 UI 显示的血量上限大于实际最大值 `statLifeMax`。不过 `statLifeMax2` 的语义是"历史最大生命值"，不下调可能符合 Terraria 原版行为。

### 风险 #7 ⚠️ `Healing` 丹药使用 `Math.Max(statLifeMax, statLifeMax2)` 可能在边界情况下出错

**文件**: `Systems/PillSystem.cs`

**代码**:
```csharp
var effectiveMaxLife = Math.Max(player.TPlayer.statLifeMax, player.TPlayer.statLifeMax2);
```

**分析**: 如果 `statLifeMax2` 由于某种原因包含了过期的高值（见风险#6），丹药可能回血超过实际允许的上限，然后被 Terraria 自身的 `statLife > statLifeMax2` 检查截断。这在当前逻辑下可能正确，但如果有其他插件修改这些字段，行为不可预测。

---

## 四、架构变更说明

### 4.1 属性系统重构（本次变更核心）

```
旧架构:
┌─────────────────────────────────────────────┐
│ 每 Tick: statLifeMax = 100 + 修仙加成       │
│          statManaMax = 20 + 修仙加成         │
│          → 原版生命水晶/魔力水晶加成每 tick 被覆写 │
└─────────────────────────────────────────────┘

新架构:
┌─────────────────────────────────────────────┐
│ 事件触发(登录/突破/重载):                    │
│   ① vanillaLife = statLifeMax - 上次修仙加成  │
│   ② statLifeMax = vanillaLife + 本次修仙加成  │
│   ③ 记录 AppliedLifeBonus                     │
│                                              │
│ 每 Tick: statDefense += 修仙防御              │
│          moveSpeed *= 修仙速度倍率             │
│          → statLifeMax/statManaMax 不被覆写   │
└─────────────────────────────────────────────┘
```

### 4.2 境界显示渐变增强

- 新增 `CultNotify.FormatRealmGradient()` 系列方法
- 渐变色从灵根颜色过渡到境界颜色
- 聊天占位符 `{Realm}` / `[{Realm}]` 也使用灵根颜色上色
- `GetSpiritRootColor()` 定义了 6 种灵根对应的颜色

---

## 五、测试建议

| 优先级 | 测试场景 | 关注点 |
|--------|----------|--------|
| P0 | 新玩家使用生命水晶/生命果后突破境界 | 生命上限是否正确叠加（水晶+修仙），不应被覆盖 |
| P0 | 渡劫期间被天雷击杀 | 不应出现"死了又复活"的异常 |
| P0 | 连续突破失败 2 次触发降阶 | 属性是否立即更新 |
| P1 | 服用回血丹药 | 是否能回到正确的满血值 |
| P1 | 学习"灵气弹"（SubLevel=0） | 新玩家是否能立即学习 |
| P1 | "渡劫" metal 奖励物品确认 | 发放的是战士徽章还是复仇者徽章 |
| P2 | 聊天消息显示效果 | 境界颜色是否正确，消息可读性 |
| P2 | 配置热重载 (`/reload`) | 所有在线玩家属性是否刷新 |
| P2 | 非渡劫状态死亡 | `JustFailedTribulation` 是否被正确清除 |

---

## 六、总结

本次暂存更改包含 **9 个明确的 Bug 修复**（其中属性系统重构是最核心的修复，解决了原版生命成长被清零的严重问题），以及多项代码质量改进（硬编码 ID 迁移为命名常量）。同时存在 **3 个需要确认的潜在数据变更**（奖励物品ID变化、碎片数量变化、技能门槛变化）和 **4 个需要验证的边界条件**。建议在合并前重点验证 P0 级别的测试场景。