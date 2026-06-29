# 功能验证页面

> <i class="fa-solid fa-triangle-exclamation"></i> **早期开发阶段** — 以下所有功能均处于早期开发阶段，需逐一验证确认。本页面用于追踪各功能模块的验证状态。

---

## <i class="fa-solid fa-person-digging"></i> 开发状态总览

| 状态 | 说明 |
|:----:|------|
| ⬜ | 待验证 — 功能尚未测试 |
| <i class="fa-solid fa-circle" style="color:#eab308"></i> | 验证中 — 发现部分问题 |
| <i class="fa-solid fa-circle" style="color:#22c55e"></i> | 已验证 — 功能正常运行 |
| <i class="fa-solid fa-circle" style="color:#ef4444"></i> | 有缺陷 — 确认存在Bug |

---

## 一、核心系统功能验证

### 1.1 灵根系统

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 灵根觉醒 | 玩家首次进入服务器自动检测并分配灵根 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 金灵根 | 攻击力加成、突破+10%、同灵根功法×1.5 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 木灵根 | 灵气恢复×1.5、生命恢复+5 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 水灵根 | 灵气恢复×1.3、魔力上限×1.2 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 火灵根 | 伤害×1.1、暴击率+10% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 土灵根 | 防御×1.15 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 天灵根 | 全属性优秀、突破+20%、灵气×2.0、全功法×1.2 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 灵根权重分布 | 金木水火土各19%、天灵根5% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 灵根不可更改 | 灵根一旦确定无法修改 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 无灵根判定 | 验证是否所有玩家均可修炼（0%无灵根） | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 同灵根功法契合 | 灵根与功法一致时威力×1.5 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 跨灵根功法 | 灵根不契合法只获基础威力 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

### 1.2 修仙境界系统

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 凡人初始状态 | 新玩家处于凡人境界 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 练气期（9阶） | 基础灵气200、每小阶+30、小阶成功率75% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 筑基期（9阶） | 基础灵气400、需击杀克苏鲁之眼 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 金丹期（9阶） | 基础灵气800、需击杀骷髅王、渡劫3道天雷 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 元婴期（9阶） | 基础灵气1600、需击杀双子魔眼、渡劫6道 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 化神期（9阶） | 基础灵气3200、需击杀世纪之花、渡劫9道 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 渡劫期（9阶） | 基础灵气6400、需击杀拜月教徒、渡劫12道 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 大乘期（9阶） | 基础灵气12800、需击杀月亮领主、渡劫15道 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 飞升期（9阶） | 基础灵气25600、需击杀月总加强、渡劫18道 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 大境界Boss锁 | 未击杀对应Boss无法突破大境界 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 小阶突破 | 灵气消耗比例正确（练气70%→飞升95%） | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 突破冷却 | 全局突破冷却5秒 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 连续失败保护 | 连续3次失败触发保护、+10功德 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 渡劫定身 | 突破期间定身3秒 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 渡劫天雷间隔 | 金丹2.5秒→大乘后1.5秒 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 渡劫失败扣血 | 渡劫失败扣血150 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 境界聊天前缀 | 聊天显示 `[境界]玩家名: 消息` | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 死亡惩罚 | 死亡扣除当前灵气25% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 永久Buff | 各境界Buff正确分配 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 属性成长 | 每次小阶突破HP+10、防御+1、魔力+1 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

### 1.3 修炼系统

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| `/xiulian` 指令 | 开始修炼，每秒消耗灵气转化为修为 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 修炼中断 | 移动/受伤时是否正确中断修炼 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 灵气消耗与修为转化 | 验证转化比例是否正确 | ⬜ | |
| 修炼丹效果 | 修炼丹90秒持续时间 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 灵气自动恢复 | 验证各灵根灵气恢复速率 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

### 1.4 突破系统

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| `/tupo` 指令 | 尝试突破到下一个小阶或大境界 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 成功率计算 | 全局基础0.5×境界配置概率+各项加成 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 灵根加成 | 金+10%、木/水/火/土+5%、天+20% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 突破丹加成 | 下阶+20%、中等+30%、高级+45%、极品+65% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 天道加成 | 有德+2%→天人合一+10% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 全局基础突破丹加成 | +25%保底 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 突破消耗显示 | 正确显示所需灵气和成功率 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

---

## 二、功法系统功能验证

### 2.1 练气期功法

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 灵气弹 (#1) | 火系攻击、20灵气、8秒冷却、基础伤害50 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 灵刃斩 (#2) | 金系攻击、25灵气、10秒冷却、×1.1 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 护体罡气 (#3) | 土系防御、30灵气、30秒冷却、+15防10秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 水镜盾 (#4) | 水系防御、25灵气、25秒冷却、+10防8秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 缠绕术 (#5) | 木系辅助、20灵气、20秒冷却、减速6秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

### 2.2 筑基期功法

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 御剑术 (#6) | 金系攻击、40灵气、10秒冷却、×1.5 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 回春术 (#10) | 木系辅助、35灵气、35秒冷却、+5HP/秒×10秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 缩地成寸 (#7) | 水系身法、25灵气、15秒冷却、瞬移20格 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 火蛇术 (#8) | 火系攻击、45灵气、12秒冷却、×1.6 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 岩铠术 (#9) | 土系防御、50灵气、50秒冷却、+25防12秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

### 2.3 金丹期功法

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 丹火焚天 (#11) | 火系攻击、60灵气、12秒冷却、×2.0 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 生生不息 (#12) | 木系辅助、50灵气、60秒冷却、+8HP/秒×15秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 金钟罩 (#13) | 金系防御、70灵气、45秒冷却、+30防12秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 冰封术 (#14) | 水系攻击、65灵气、16秒冷却、×1.8 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 山岳镇压 (#15) | 土系攻击、80灵气、20秒冷却、×2.2 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 金丹化神 (#16) | 天系辅助、100灵气、180秒冷却、全属性+20% | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

### 2.4 元婴期功法

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 元婴出窍 (#17) | 天系辅助、80灵气、120秒冷却、隐身20秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 天雷引 (#18) | 金系攻击、90灵气、18秒冷却、×2.5 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 焚天劫火 (#19) | 火系攻击、120灵气、22秒冷却、×2.8 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 万象森罗 (#20) | 木系辅助、100灵气、90秒冷却、+10HP/秒×15秒 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

### 2.5 化神期功法

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 化神领域 (#21) | 天系辅助、120灵气、180秒冷却、全属性大幅提升 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 万剑归宗 (#22) | 金系攻击、150灵气、25秒冷却、×3.0 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 沧海横流 (#23) | 水系攻击、140灵气、20秒冷却、×2.8 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 不动明王 (#24) | 土系防御、160灵气、90秒冷却、+40防+免击退 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

### 2.6 渡劫期功法

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 万雷归一 (#25) | 火系攻击、150灵气、25秒冷却、×3.0 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 天劫护体 (#26) | 土系防御、200灵气、120秒冷却、+60防+反弹50% | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

### 2.7 大乘期功法

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 大罗天斩 (#27) | 金系攻击、280灵气、30秒冷却、×4.5 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

### 2.8 飞升期功法

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 飞升羽化 (#28) | 天系辅助、500灵气、300秒冷却、30秒免疫伤害 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

### 2.9 功法通用机制

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 全局冷却5秒 | 释放任意功法后所有功法进入5秒冷却 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| `/gongfa <功法名>` | 指令正确释放对应功法 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 境界解锁 | 未达到功法要求境界时无法释放 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 灵气不足提示 | 灵气不足时正确提示 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| 弹幕生成 | 攻击功法弹幕正确生成（ID/速度/伤害） | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |
| Buff效果 | 防御/辅助功法Buff正确生效 | <i class="fa-solid fa-circle" style="color:#ef4444"></i> | |

---

## 三、丹药系统功能验证

### 3.1 突破丹

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 下阶突破丹 | 灵气300、成功率70%、+20%突破、耗时10秒 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 中等突破丹 | 灵气600、成功率60%、+30%突破、耗时15秒 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 高级突破丹 | 灵气1200、成功率45%、+45%突破、耗时30秒 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 极品突破丹 | 灵气2500、成功率25%、+65%突破、耗时60秒 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 突破丹失败伤害 | 高级30、极品80 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 突破丹修为消耗 | 中等20、高级80、极品200 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

### 3.2 渡劫丹

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 下阶渡劫丹 | 灵气400、成功率65%、+15%、耗时10秒 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 中等渡劫丹 | 灵气800、成功率55%、+25%、耗时15秒 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 高级渡劫丹 | 灵气1600、成功率40%、+40%、耗时30秒 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 极品渡劫丹 | 灵气3000、成功率20%、+60%、耗时60秒 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 渡劫丹失败伤害 | 高级35、极品100 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |

### 3.3 治疗丹

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 下阶治疗丹 | 灵气200、成功率75%、耗时10秒、失败伤害0 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 中等治疗丹 | 灵气400、成功率65%、耗时15秒、失败伤害0 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 高级治疗丹 | 灵气800、成功率50%、耗时30秒、失败伤害25 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 极品治疗丹 | 灵气1800、成功率30%、耗时60秒、失败伤害60 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |

### 3.4 恢复丹

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 下阶恢复丹 | 灵气250、成功率70%、恢复200灵气 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 中等恢复丹 | 灵气500、成功率60%、恢复500灵气 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 高级恢复丹 | 灵气1000、成功率45%、恢复1200灵气 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 极品恢复丹 | 灵气2200、成功率25%、恢复3000灵气 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 恢复丹失败伤害 | 高级28、极品70 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |

### 3.5 炼丹通用机制

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 修仙等级加成 | 每级+1%成功率 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 炼丹冷却 | 全局炼丹冷却60秒 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 高级/极品全服广播 | 炼制高级或极品丹药时全服广播 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 高级/极品雷电特效 | 高级或极品丹药炼制触发雷电特效 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| `/liandan <丹药名> <品质>` | 炼丹指令正确执行 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 成功率公式 | 品质基础+修仙等级×1% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

---

## 四、天道系统功能验证

### 4.1 天道境界

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 普通人 | 功德0、无加成 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 有德 | 功德100、突破+2% | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 积善 | 功德300、突破+4%、渡劫减伤10%、灵气×1.1、折扣5% | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 天道眷顾 | 功德600、突破+6%、渡劫减伤20%、灵气×1.2、功法×1.1 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 代天行道 | 功德1000、突破+8%、渡劫减伤30%、灵气×1.3、功法×1.15 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 天人合一 | 功德1500、突破+10%、渡劫减伤40%、灵气×1.5、功法×1.2 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |

### 4.2 功德获取

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| Boss服务器首杀 | +100功德 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| Boss个人首杀 | +50功德 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 大境界突破 | +30功德 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 飞升 | +200功德 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 渡劫成功 | +50功德 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 带新人打Boss | +20/人（境界差≥2） | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 连续失败保护 | +10功德 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 决斗胜利 | +5功德 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 炼丹极品 | +15功德 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 恶意击杀惩罚 | -200功德（境界差≥2） | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |

### 4.3 天道商店

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 突破丹（中等） | 30功德、每日限5个 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 渡劫丹（中等） | 50功德、每日限3个 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 天道灵石 | 100功德、每日限1个 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 功德护符 | 200功德、每周限1个 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 天劫令 | 500功德、每月限1个 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 功德宝箱 | 300功德、每周限3个 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 天道境界折扣 | 各境界折扣正确生效 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |

### 4.4 天道事件

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 灵气潮汐 | 权重30、30分钟、灵气×2.0、修炼×1.5 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 天道试炼 | 权重20、30分钟、突破+15%、冷却减半、渡劫减伤20% | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 事件随机触发 | 120~360分钟随机间隔 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 事件全服广播 | 开场与结束广播正常 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 功德衰减 | 7天不活跃后每日衰减5% | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| 天道晋升广播 | 晋升时全服广播 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |
| `/tiandao` 指令 | 查看天道功德和境界 | <i class="fa-solid fa-circle" style="color:#eab308"></i> | |

---

## 五、Boss战斗系统功能验证

### 5.1 Boss动态缩放

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 缩放启用 | 所有Boss受修仙等级动态缩放 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| HP缩放 | 实际HP = 基础HP×(1+等级×0.05) | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 伤害缩放 | 实际伤害=基础伤害×(1+等级×0.05) | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 克苏鲁之眼 | 弹幕15秒间隔、8弹幕、速度6.0 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 世界吞噬者 | 弹幕12秒间隔、6弹幕、速度4.0 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 骷髅王 | 弹幕14秒间隔、6弹幕、速度7.0 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 双子魔眼 | 弹幕10秒间隔、10弹幕、速度8.0 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 世纪之花 | 弹幕10秒间隔、6弹幕、速度9.0 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 月亮领主 | 弹幕7秒间隔、10弹幕、速度11.0 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 月总加强 | 弹幕6秒间隔、14弹幕、速度12.0 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

### 5.2 Boss魔改技能

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 克眼-追踪灵气 | ≤100%HP、8秒冷却 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 克眼-灵气弹幕 | ≤55%HP、12秒冷却 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 史莱姆王-流星坠落 | ≤80%HP、10秒冷却 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 史莱姆王-召唤小怪 | ≤45%HP、召唤3个史莱姆 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 史莱姆王-着火Debuff | 25%概率4秒着火 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 骷髅王-螺旋剑阵 | ≤100%HP、9秒冷却 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 骷髅王-雷暴 | ≤50%HP、14秒冷却 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 双子魔眼-暗影领域 | ≤90%HP、10秒冷却 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 双子魔眼-流星坠落 | ≤50%HP、8秒冷却 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 双子魔眼-困惑Debuff | 20%概率5秒困惑 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 月总加强全技能 | 100%/70%/40%三阶段 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 月总加强-霜火Debuff | 18%概率4秒霜火 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

### 5.3 怪物吸血机制

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 普通怪物吸血 | 伤害20%转化为生命 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| Boss吸血 | 伤害35%转化为生命 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 吸血上限 | ≤基础生命×1.5 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

### 5.4 小Boss列表

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 16个小Boss缩放 | 受修仙等级动态缩放 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| Boss ID 540-544 | 史莱姆系列 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| Boss ID 325-329 | 万圣树妖系列 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 其他小Boss | 422、493、507、517、521、534 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

---

## 六、决斗系统功能验证

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| `/juedou <玩家名>` | 发起决斗指令 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 决斗冷却 | 120秒冷却时间 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 最低境界限制 | 凡人无法参与决斗 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 决斗超时 | 300秒（5分钟）超时自动结束 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 逃跑距离 | 超出120格视为逃跑 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 挑战响应超时 | 被挑战者30秒内回应 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 决斗赌注 | 最多10个物品 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 决斗胜利奖励 | 胜者+5功德 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 决斗失败惩罚 | 扣除当前灵气20% | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 境界差恶意击杀 | 低2境界以上-200功德 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 功法在决斗中使用 | 各功法在决斗中正确生效 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

---

## 七、常用指令验证

| 指令 | 功能 | 状态 | 备注 |
|------|------|:----:|------|
| `/xiulian` | 开始修炼 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| `/tupo` | 尝试突破 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| `/gongfa <功法名>` | 释放功法 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| `/liandan <丹药名> <品质>` | 炼制丹药 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| `/chakan` | 查看自身修仙状态 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| `/tiandao` | 查看天道功德和境界 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| `/juedou <玩家名>` | 发起决斗 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

---

## 八、其他功能验证

| 验证项 | 描述 | 状态 | 备注 |
|--------|------|:----:|------|
| 数据持久化 | 玩家数据在退出/重启后正确保存恢复 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 多玩家并发 | 多个玩家同时在线各项功能正常 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 聊天前缀 | 境界前缀正确显示 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 管理员指令 | 管理员功能正常（如有） | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |
| 性能影响 | 插件对服务器TPS的影响 | <i class="fa-solid fa-circle" style="color:#22c55e"></i> | |

---

## <i class="fa-solid fa-chart-bar"></i> 验证进度统计

| 分类 | 总数 | 已验证 | 验证中 | 有缺陷 | 待验证 | 进度 |
|------|:----:|:------:|:------:|:------:|:------:|:----:|
| 灵根系统 | 12 | 12 | 0 | 0 | 0 | 100% |
| 修仙境界 | 20 | 20 | 0 | 0 | 0 | 100% |
| 修炼系统 | 5 | 3 | 1 | 0 | 1 | 60% |
| 突破系统 | 7 | 7 | 0 | 0 | 0 | 100% |
| 功法系统 | 37 | 0 | 0 | 37 | 0 | 0% |
| 丹药-突破丹 | 6 | 6 | 0 | 0 | 0 | 100% |
| 丹药-渡劫丹 | 5 | 0 | 5 | 0 | 0 | 0% |
| 丹药-治疗丹 | 4 | 0 | 4 | 0 | 0 | 0% |
| 丹药-恢复丹 | 5 | 0 | 5 | 0 | 0 | 0% |
| 炼丹通用机制 | 6 | 6 | 0 | 0 | 0 | 100% |
| 天道境界 | 6 | 0 | 6 | 0 | 0 | 0% |
| 功德获取 | 10 | 0 | 10 | 0 | 0 | 0% |
| 天道商店 | 7 | 0 | 7 | 0 | 0 | 0% |
| 天道事件 | 7 | 0 | 7 | 0 | 0 | 0% |
| Boss战斗 | 28 | 28 | 0 | 0 | 0 | 100% |
| 决斗系统 | 11 | 11 | 0 | 0 | 0 | 100% |
| 常用指令 | 7 | 7 | 0 | 0 | 0 | 100% |
| 其他 | 5 | 5 | 0 | 0 | 0 | 100% |
| **总计** | **188** | **105** | **45** | **37** | **1** | **55.9%** |

---

## <i class="fa-solid fa-pen-to-square"></i> 验证说明

### 状态标记规则

- **⬜ 待验证**：功能尚未在游戏中进行实际测试
- **<i class="fa-solid fa-circle" style="color:#eab308"></i> 验证中**：已进行初步测试，发现部分问题需要进一步确认
- **<i class="fa-solid fa-circle" style="color:#22c55e"></i> 已验证**：功能经过完整测试，运行正常无异常
- **<i class="fa-solid fa-circle" style="color:#ef4444"></i> 有缺陷**：确认存在Bug，需要在 [Bug修复报告](/guide/lishibug) 中记录

### 验证流程

1. 在游戏中执行对应操作
2. 观察实际效果与预期是否一致
3. 记录验证结果和发现的问题
4. 更新本页面对应状态

> <i class="fa-solid fa-triangle-exclamation"></i> **早期开发阶段声明**：本插件目前处于早期开发阶段，所有功能均可能存在未发现的Bug或与文档描述不一致的情况。验证过程中发现的问题请及时反馈给开发者。

---

## <i class="fa-solid fa-link"></i> 相关页面

- [Bug修复报告](/guide/lishibug) — 已修复和待修复的Bug清单
- [指令教程](/guide/jiaocheng) — 新手指南
- [算法公开](/guide/suanfa) — 各系统底层算法说明