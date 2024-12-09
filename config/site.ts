export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "摸鱼办",
	description: "你好, 摸鱼人！工作再忙, 一定不要忘记摸鱼哦！",
	keywords: ["摸鱼办", "摸鱼办公室", "摸鱼", "摸鱼人", "摸鱼办官网", "一个正经的程序员", "散淡样子", "刘欣", "Louis Liu", "LouisLiuOneself", "LouisLiu00"],
	creator: "Louis Liu (@LouisLiuOneself)",
	authors: [{ name: "Louis Liu (@LouisLiuOneself)", url: "https://liuxin.online" }],
	publisher: "Louis Liu (@LouisLiuOneself)",
	metadataBase: new URL("https://moyu.liuxin.online"),
	since: "2024-12-01",
	openGraph: {
		siteName: "摸鱼办",
		title: "摸鱼办",
		description: "你好, 摸鱼人！工作再忙, 一定不要忘记摸鱼哦！",
		type: "website"
	},
	navItems: [
		{ label: "首页", href: "/" },
		{ label: "每日一句", href: "/daily" },
		{ label: "游戏中心", href: "/games" },
		{ label: "关于", href: "/about" },
	],
	navMenuItems: [
		{ label: "首页", href: "/" },
		{ label: "每日一句", href: "/daily" },
		{ label: "游戏中心", href: "/games" },
		{ label: "关于", href: "/about" },
	],
	links: {
		github: "https://github.com/hupiao-coder/moyu-office",
		twitter: "https://x.com/LouisLiuOneself",
		docs: "https://liuxin.online",
	},
};
