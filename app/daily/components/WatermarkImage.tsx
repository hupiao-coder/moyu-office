import { useEffect, useState } from "react";
import { Image as NextImage } from "@nextui-org/react";


export default function WatermarkImage(
	{ src, alt, watermarkText, onWatermarkedImageUrl }: 
	{ src: string; alt: string; watermarkText: string, onWatermarkedImageUrl: Function }
) {
	
	// 定义水印图片
	const [watermarkedImageUrl, setWatermarkedImageUrl] = useState<string | null>(null);

	useEffect(() => {
		if (!src) return;

		const addWatermark = async () => {
			// 创建 Canvas
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			if (!ctx) {
				console.error("无法初始化 Canvas 2D 上下文！");
				return;
			}
			// 创建图片
			const image = new Image();
			// 避免跨域问题
			image.crossOrigin = "anonymous";
			image.src = src;

			image.onload = () => {
				// 设置 Canvas 尺寸为图片大小
				canvas.width = image.width;
				canvas.height = image.height;

				// 绘制原始图片
				ctx.drawImage(image, 0, 0);

				// 设置水印样式
				ctx.font = "32px Arial";
				ctx.fillStyle = "rgba(255, 255, 255, 1)";
				ctx.textAlign = "right";
				ctx.textBaseline = "bottom";
				// 绘制水印
				ctx.fillText(watermarkText, canvas.width - 50, canvas.height - 20);

				// 创建二维码图片对象
				const watermarkImage = new Image();
				// 避免跨域问题
				watermarkImage.crossOrigin = "anonymous";
				watermarkImage.src = '/moyu-qrcode.png';

				watermarkImage.onload = () => {
					// 绘制二维码
					ctx.drawImage(watermarkImage, 20, canvas.height - 400);
					// 将 Canvas 转换为 Base64 数据 URL
					const url = canvas.toDataURL("image/png");
					setWatermarkedImageUrl(url);
					// 通知父组件
					if (onWatermarkedImageUrl) {
						onWatermarkedImageUrl(url);
					}
				};
			};

			image.onerror = () => {
				console.error("图片加载失败，请检查链接是否有效！");
			};
		};

		addWatermark();
	}, [src, watermarkText, onWatermarkedImageUrl]);

	// 加载中的占位
	if (!watermarkedImageUrl) {
		return (
			<>
				<div className="h-[580px] flex justify-center items-center">
					加载图片中...
				</div>
			</>
		);
	}

	return (
		<>
			<NextImage src={ watermarkedImageUrl } radius="none" alt={ alt } className="z-0 w-full h-full scale-100 -translate-y-6 object-cover" />
		</>
	);
}
