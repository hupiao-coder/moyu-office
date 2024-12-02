import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
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
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link isExternal className="flex items-center gap-1 text-current" 
                href="https://liuxin.online" title="#公众号：一个正经的程序员">
                <span className="text-default-600">由</span>
                <p className="text-primary">#公众号：一个正经的程序员</p>
                <span className="text-default-600">提供技术支持</span>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
