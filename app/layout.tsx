import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { RiCommunityLine } from "react-icons/ri";
import { FaBug } from "react-icons/fa";

import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { NavbarBottom } from "@/components/navbar-bottom";

export const metadata: Metadata = {
	title: {
		default: `${siteConfig.name} | 一个正经的程序员`,
		template: `%s | ${siteConfig.name} | 一个正经的程序员`,
	},
	applicationName: siteConfig.name,
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
	keywords: siteConfig.keywords,
	creator: siteConfig.creator,
	authors: siteConfig.authors,
	publisher: siteConfig.publisher,
	metadataBase: siteConfig.metadataBase,
	openGraph: siteConfig.openGraph,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				{/* Google Tag Manager */}
				<Script strategy="afterInteractive" dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-N46WK7SG');`
				}} />
				{/* Google Analytics Script */}
				<Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-7QN4Y90X28" />
				<Script strategy="afterInteractive" dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-7QN4Y90X28');`
				}} />
				{/* 百度统计 */}
				<Script strategy="afterInteractive" dangerouslySetInnerHTML={{
					__html: `
					var _hmt = _hmt || [];
					(function() {
						var hm = document.createElement("script");
						hm.src = "https://hm.baidu.com/hm.js?131c6aaad011ea6c97e2542e178b98ad";
						var s = document.getElementsByTagName("script")[0]; 
						s.parentNode.insertBefore(hm, s);
					})();`,
				}} />
			</head>
			<body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable,)} >
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N46WK7SG" height="0" width="0" style={{ display: 'none',visibility: 'hidden' }}></iframe>
				</noscript>
				
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col h-screen">
						{/* PC 导航栏 */}
						<Navbar />
						{/* 网页主体 */}
						<main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
							{/* 主体子元素 */}
							{children}
							{/* Enable Web Analytics in Vercel */}
							<Analytics />
							{/* Enable Speed Insights in Vercel */}
							<SpeedInsights/>
						</main>
						{/* 移动端底部导航栏 */}
						<div className="sm:hidden fixed bottom-0 left-0 w-full bg-white border-t bg-opacity-100 z-10">
							<NavbarBottom />
						</div>
						{/* 底部 */}
						<div className="w-11/12 sm:flex">
							<footer className="w-full flex items-center justify-center py-3 gap-1">
								<span className="text-default-500">由</span>
								<Link isExternal underline="hover" className="flex items-center"  href="https://liuxin.online" title="#公众号：一个正经的程序员">
									<p className="text-primary" color="primary">#公众号：一个正经的程序员</p>
								</Link>
								<span className="text-default-500">提供技术支持</span>
							</footer>
							<footer className="flex justify-end py-3 gap-2 mb-[80px]">
								<Tooltip showArrow color="primary" placement="top-start" className="text-white p-2" size="lg" delay={0} closeDelay={0} content="开源社区">
									<Link isExternal underline="hover" href="https://github.com/hupiao-coder" title="开源社区">
										<Button isIconOnly radius="full" aria-label="开源社区">
											<RiCommunityLine size="20" />
										</Button>
									</Link>
								</Tooltip>
								<Tooltip showArrow color="primary" placement="top-start" className="text-white p-2" size="lg" delay={0} closeDelay={0} content="提交反馈">
									<Link isExternal underline="hover" href="https://github.com/hupiao-coder/moyu-office/issues" title="提交反馈">
										<Button isIconOnly radius="full" aria-label="提交反馈">
											<FaBug size="18" />
										</Button>
									</Link>
								</Tooltip>
							</footer>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
