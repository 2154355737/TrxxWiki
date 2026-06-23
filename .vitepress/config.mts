import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/TrxxWiki/',
  title: '修仙 Wiki',
  description: '修仙服务器玩法机制与指令大全',
  lang: 'zh-CN',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '玩法指南', link: '/guide/jingjie' },
    ],

    sidebar: [
      {
        text: '🚀 新手指南',
        collapsed: false,
        items: [
          { text: '首页', link: '/' },
          { text: '📖 指令教程', link: '/guide/jiaocheng' },
          { text: '修炼系统', link: '/guide/xiulian' },
          { text: '常用指令', link: '/guide/zhiling' },
        ]
      },
      {
        text: '⚙️ 核心系统',
        collapsed: false,
        items: [
          { text: '修仙境界', link: '/guide/jingjie' },
          { text: '灵根系统', link: '/guide/linggen' },
          { text: '功法大全', link: '/guide/gongfa' },
          { text: '丹药炼制', link: '/guide/danyao' },
          { text: '境界突破与装备', link: '/guide/tupo' },
        ]
      },
      {
        text: '🔮 进阶机制',
        collapsed: false,
        items: [
          { text: '天道系统', link: '/guide/tiandao' },
          { text: '决斗系统', link: '/guide/juedou' },
          { text: 'Boss战斗', link: '/guide/boss' },
          { text: '修仙语录', link: '/guide/yulu' },
        ]
      },
      {
        text: '📐 参考资料',
        collapsed: false,
        items: [
          { text: '算法公开', link: '/guide/suanfa' },
        ]
      },
      {
        text: '📋 历史版本',
        collapsed: false,
        items: [
          { text: 'Bug修复报告 (2026-06-23)', link: '/guide/lishibug' },
        ]
      }
    ],

    socialLinks: [],

    footer: {
      message: '修仙服务器 · 玩法Wiki · 基于配置文件自动生成',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档' },
          modal: { noResultsText: '未找到相关结果', resetButtonTitle: '清除查询条件', footer: { selectText: '选择', navigateText: '切换' } }
        }
      }
    },

    outline: { level: [2, 3], label: '目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新' },
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
  },

  markdown: {
    lineNumbers: true,
  }
})