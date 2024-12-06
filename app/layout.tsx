import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
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
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
              	{children}
            </main>
            <div className="w-11/12 sm:flex">
              <footer className="w-full flex items-center justify-center py-3 gap-1">
					<span className="text-default-500">由</span>
					<Link isExternal underline="hover" className="bg-yellow flex items-center"  href="https://liuxin.online" title="#公众号：一个正经的程序员">
						<p className="text-primary" color="primary">#公众号：一个正经的程序员</p>
					</Link>
					<span className="text-default-500">提供技术支持</span>
              </footer>
              <footer className="flex justify-end py-3 gap-2">
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
