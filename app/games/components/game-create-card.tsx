"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { IoGameControllerOutline } from "react-icons/io5";


export default function GameCreateCard() {
	return (
		<>
			{/* <Link href="https://github.com/hupiao-coder/moyu-office/issues" isExternal>
				<Card className="w-full h-full" isHoverable>
					<div className="h-[230px] flex justify-center items-center">
						<CiCirclePlus className="text-primary" size={ 100 } />
					</div>
				</Card>
			</Link> */}
			<Card className="w-full" isHoverable>
				<CardHeader className="flex gap-3">
					<IoGameControllerOutline className="text-primary" size={ 40 } />
					<div className="flex flex-col">
						<p className="text-base">申请收录</p>
					</div>
				</CardHeader>
				<Divider />
				<CardBody className="h-[100px]">
					<p className="text-sm">如果您还知道一些优质的免费在线游戏，欢迎提交申请以供收录，帮助摸鱼办一起做大做强！</p>
				</CardBody>
				<Divider />
				<CardFooter className="justify-end">
					<Button href="https://github.com/hupiao-coder/moyu-office/issues" isExternal showAnchorIcon as={Link} color="primary" variant="bordered">提交申请</Button>
				</CardFooter>
			</Card>
		</>
	);
}
