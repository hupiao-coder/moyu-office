import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Kbd } from "@nextui-org/kbd";
import { Tooltip } from "@nextui-org/tooltip";
import { getYear, getToday, getDayOfYear, getDayOfWeek, getDayOfWeekFormat, getDateOfMonth, getDaysInMonth, getDaysInDiff, getNextPublicHolidays } from "./data";
import { Holiday } from './definitions';

export default async function Home() {
	const year = getYear();
	const holidays = await getNextPublicHolidays();

	// 定义数据
	const data = {
		year: getYear(),
		today: getToday(),
		dayOfYear: getDayOfYear(),
		dayOfWeek: getDayOfWeek(),
		dayOfWeekFormat: getDayOfWeekFormat(),
		date: getDateOfMonth(),
		daysInMonth: getDaysInMonth(),
	};

	return (
		<section className="flex flex-col justify-center">
			<div className="inline-block text-center justify-center">
				<Card fullWidth className="p-4">
					<CardHeader className="flex gap-3">
						<div className="flex flex-col">
							<p className="text-xl">【摸鱼办】提醒您: 今天是{ data.today }，{ data.dayOfWeekFormat }。 </p>
						</div>
					</CardHeader>
					<Divider/>
					<CardBody className="gap-1">
						<div>{ data.year } 年已经过去 { data.dayOfYear } 天！</div>
						<div>你好，摸鱼人！工作再忙，一定不要忘记摸鱼哦！</div>
						<div>有事没事起身去茶水间，去厕所，去走廊走走，去找同事聊聊八卦！别老在工位上坐着，钱是老板的但命是自己的。</div>
					</CardBody>
				</Card>

				<div className="flex gap-4 mt-4">
					<Card fullWidth className="p-5">
						<CardBody className="gap-1">
							<div>
								<Kbd className="text-xl">周末</Kbd>
							</div>
							<Divider className="my-2" />
							<div>距离【周六】还有 <span className="text-xl">{ 6 - data.dayOfWeek }</span> 天</div>
							<div>距离【周日】还有 <span className="text-xl">{ data.dayOfWeek == 0 ? 0 : 7 - data.dayOfWeek }</span> 天</div>
						</CardBody>
					</Card>

					<Card fullWidth className="p-5">
						<CardBody className="">
							<div>
								<Kbd className="text-xl">工资</Kbd>
							</div>
							<Divider className="my-2" />
							<div>距离【1号发工资】还有 <span className="text-xl">{ 1 >= data.date ? (1 - data.date) : (data.daysInMonth - data.date + 1) }</span> 天</div>
							<div>距离【5号发工资】还有 <span className="text-xl">{ 5 >= data.date ? (5 - data.date) : (data.daysInMonth - data.date + 5) }</span> 天</div>
							<div>距离【10号发工资】还有 <span className="text-xl">{ 10 >= data.date ? (10 - data.date) : (data.daysInMonth - data.date + 10) }</span> 天</div>
							<div>距离【15号发工资】还有 <span className="text-xl">{ 15 >= data.date ? (15 - data.date) : (data.daysInMonth - data.date + 15) }</span> 天</div>
							<div>距离【20号发工资】还有 <span className="text-xl">{ 20 >= data.date ? (20 - data.date) : (data.daysInMonth - data.date + 20) }</span> 天</div>
							<div>距离【月底发工资】还有 <span className="text-xl">{ data.daysInMonth - data.date }</span> 天</div>
						</CardBody>
					</Card>

					<Card fullWidth className="p-5">
						<CardBody className="">
							<div>
								<Kbd className="text-xl">节假日</Kbd>
							</div>
							<Divider className="my-3" />
							{
								holidays.map((holiday: Holiday, index: number) => (
									<Tooltip key={`holiday-${index}`} showArrow color="primary" placement="top-start" className="text-white p-2" size="lg" delay={0} closeDelay={0} content={ holiday.date }>
										<div key={`holiday-${index}`}>
											距离【{ holiday.localName }】还有&nbsp;
											<span className="text-xl">
												{ getDaysInDiff(holiday.date) }
											</span>&nbsp;天
										</div>
									</Tooltip>
								))
							}
						</CardBody>
					</Card>
				</div>
			</div>
		</section>
	);
}
