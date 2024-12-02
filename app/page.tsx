import { Code } from "@nextui-org/code";
import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function Home() {
	return (
		<section className="flex flex-col justify-center">
			<div className="inline-block text-center justify-center">
				<Card fullWidth>
					<CardHeader className="flex gap-3">
						<div className="flex flex-col">
							<p className="text-xl">【摸鱼办】提醒您: 2024 年已经过去 337 天 </p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody>
						<p>今天是 2024年12月2日, 星期一</p>
					</CardBody>
				</Card>
			</div>
		</section>
	);
}
