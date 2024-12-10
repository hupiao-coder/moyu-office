"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { Game } from "../data/definitions";

export default function GameCard({ game }: { game: Game}) {
	return (
		<Card className="w-full" isHoverable>
			<CardHeader className="flex gap-3">
				<Image src={ game.icon } alt={ game.name } radius="sm" height={40} width={40} />
				<div className="flex flex-col">
					<p className="text-xl">{ game.name }</p>
				</div>
			</CardHeader>
			<Divider />
			<CardBody className="h-[100px]">
				<p>{ game.description }</p>
			</CardBody>
			<Divider />
			<CardFooter className="justify-end">
				<Button href={ game.url } isExternal showAnchorIcon as={Link} color="primary" variant="bordered" >在线畅玩</Button>
			</CardFooter>
		</Card>
	);
}
