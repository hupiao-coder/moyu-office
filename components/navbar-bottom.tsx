"use client";

// Default
import { usePathname } from "next/navigation";
// UI
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

// Component
import clsx from "clsx";
import { siteConfig } from "@/config/site";

export const NavbarBottom = () => {

	// 获取当前路径
	const pathname = usePathname();

	return (
		<>
			<NextUINavbar maxWidth="full" position="static" isBordered isBlurred={ false } >
				<NavbarContent>
					<div className="w-full flex justify-around">
						{siteConfig.navItems.map((item) => (
							<Link color="foreground" href={item.href} key={item.href} >
								<Button className={clsx(pathname === item.href && "bg-primary text-white font-bold")} variant="light">
									{item.label}
								</Button>
							</Link>
						))}
					</div>
				</NavbarContent>
			</NextUINavbar>
		</>
	);
};
