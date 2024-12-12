import type { Metadata, ResolvingMetadata } from 'next'
import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { getDailySentence } from "./data";
import { Sentence } from "./definitions";
import dayjs from 'dayjs';
require('dayjs/locale/en');
import ShareModal from './components/ShareModal';

// 设置页面缓存时间为1小时
export const revalidate = 3600;

// 生成动态元数据
export async function generateMetadata(
	parent: ResolvingMetadata
  ): Promise<Metadata> {
	// 获取每日一句
	const sentence: Sentence = await getDailySentence(null);
	// 选择性地访问和扩展（而不是替换）父元数据
	const previousImages = (await parent).openGraph?.images || []
	return {
		title: `${sentence.note} | 每日一句`,
		description: `${sentence.content}\n${sentence.note}\n—— ${dayjs(sentence.dateline).locale('en').format('D MMM, YYYY')}`,
		openGraph: {
			images: [sentence.fenxiang_img, ...previousImages],
		}
	}
}

export default async function DailyPage() {

	// 获取每日一句
	const sentence: Sentence = await getDailySentence(null);

	return (
		<main>
			<Card isFooterBlurred fullWidth className="h-screen lg:h-full">
				<CardHeader className="absolute z-10 flex justify-between items-start bg-black/15 gap-4">
					<div>
						<p className="text-white lg:text-xl">{ dayjs(sentence.dateline).locale('en').format('D MMM, YYYY') }</p>
						<h4 className="text-white font-medium lg:text-2xl mt-2">{ sentence.content }</h4>
						<h4 className="text-white font-medium lg:text-2xl mt-2">{ sentence.note }</h4>
					</div>
					<ShareModal sentence={sentence}></ShareModal>
				</CardHeader>
				<Image src={ sentence.picture2 } isZoomed removeWrapper alt={ sentence.note } className="z-0 w-full h-full scale-110 -translate-y-6 object-cover" />
			</Card>
      	</main>
	);
}
