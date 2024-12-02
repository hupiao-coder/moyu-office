export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "摸鱼办",
  description: "你好, 摸鱼人！工作再忙, 一定不要忘记摸鱼哦！",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "关于",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/LouisLiu00",
    twitter: "https://x.com/LouisLiuOneself",
    docs: "https://liuxin.online",
  },
};
