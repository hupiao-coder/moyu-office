"use client";

// Default
import { useState } from "react";
import { usePathname } from "next/navigation";
// UI
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
// Component
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon, Logo } from "@/components/icons";

export const Navbar = () => {
	// 定义菜单状态
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// 获取当前路径
	const pathname = usePathname();

	const searchInput = (
		<Input aria-label="Search" classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
		endContent={ <Kbd className="hidden lg:inline-block" keys={["command"]}>K</Kbd> } 
		startContent={ <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" /> }
		labelPlacement="outside" placeholder="Search..." 
		type="search" />
	);

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isBordered className="blue" isMenuOpen={ isMenuOpen } >
			{/* PC 头部 */}
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Link color="foreground" className="flex justify-start items-center gap-1" href="/" onClick={() => setIsMenuOpen(false)} >
						<Logo />
						<p className="font-bold text-inherit text-2xl">摸鱼办</p>
					</Link>
				</NavbarBrand>
				<ul className="hidden sm:flex gap-8 justify-start ml-4">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link underline="hover" color="foreground" href={item.href} 
								className={clsx(pathname === item.href && "text-primary font-bold")}>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>
			
			{/* PC 菜单 */}
			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-4">
					<Link isExternal aria-label="Github" href={siteConfig.links.github}>
						<Button variant="bordered" radius="full" color="primary">
							<GithubIcon size={28} /> GitHub
						</Button>
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				{/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
			</NavbarContent>

			{/* 手机头部 */}
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal aria-label="Github" href={siteConfig.links.github}>
					<GithubIcon size={28} className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
			</NavbarContent>

			{/* 手机菜单 */}
			<NavbarMenu>
				{/* {searchInput} */}
				<div className="mx-4 mt-2 flex flex-col gap-2">
				{siteConfig.navMenuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`} className={ clsx("data-[active=true]:text-primary data-[active=true]:font-bold") }>
						<Link underline="hover" color="foreground" href={item.href}
							className={clsx("text-xl mb-2", pathname === item.href && "text-primary font-bold")}
							onClick={() => setIsMenuOpen(false)} >
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
