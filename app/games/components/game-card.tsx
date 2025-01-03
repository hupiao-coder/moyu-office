"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { Game } from "../data/definitions";

export default function GameCard({ game }: { game: Game}) {
	return (
		<Card className="w-full" isHoverable>
			<CardHeader className="flex gap-3">
				<Image src={ game.icon } fallbackSrc="https://via.placeholder.com/128x128.png/6495ed/ffffff?text=+" alt={ game.name } radius="sm" height={40} width={40} />
				<div className="flex flex-col">
					<p className="text-base">{ game.name }</p>
				</div>
			</CardHeader>
			<Divider />
			<CardBody className="h-[100px]">
				<p className="text-sm">{ game.description }</p>
			</CardBody>
			<Divider />
			<CardFooter className="justify-end">
				<Button href={ game.url } isExternal showAnchorIcon as={Link} color="primary" variant="bordered" >在线畅玩</Button>
			</CardFooter>
		</Card>
	);
}
