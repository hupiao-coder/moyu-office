import { Logo } from "@/components/icons";

export default function AboutPage() {
	return (
		<main className="container mx-auto px-4 pb-10">
			<h1 className="flex justify-center items-center text-center gap-1 text-4xl font-bold mb-6">关于摸鱼办 <Logo /></h1>

			<section className="mb-8 text-left">
				<p className="text-lg leading-7">
					欢迎来到 <strong>摸鱼办</strong>！我们是一款专为上班族打造的在线摸鱼小工具，旨在帮助大家在繁忙的工作中寻找片刻的轻松与乐趣！
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">网站设计</h2>
				<ul className="list-disc list-inside space-y-2 text-left">
					<li>🔥 <strong>幽默文案</strong>：用幽默温馨的文案提醒大家工作重要，但健康和生活更重要。</li>
					<li>⏰ <strong>日历提醒</strong>：实时更新距离周末、发工资日和节假日的天数，帮助你规划生活，保持期待。</li>
					<li>📒 <strong>每日一句</strong>：每日生成一条励志、幽默或轻松的句子，积累并提升自己。</li>
					<li>🎮 <strong>游戏中心</strong>：提供丰富的在线轻量小游戏，无需下载安装，在线畅玩，沉浸式体验快速放松。</li>
					<li>🌗 <strong>黑白主题</strong>：自由切换黑白主题，方便用户根据喜好调整视觉界面。</li>
					<li>✨ <strong>极简设计</strong>：界面清爽，信息一目了然，带来轻松的用户体验。</li>
					<li>⚡️ <strong>一键分享</strong>：支持用户快速复制并分享给好友，让更多人了解和使用摸鱼办。</li>
				</ul>
				</section>

				<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">技术团队</h2>
				<p className="text-lg leading-7 text-left">
					<span>摸鱼办由{' '}</span>
					<a href="https://liuxin.online" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4" title="#公众号：一个正经的程序员">
						<span>#公众号：一个正经的程序员</span>
					</a>
					<span>{' '}提供技术支持，</span>
					<a href="https://hxp.liuxin.online" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4" title="沪小漂">
						<span>#沪小漂</span>
					</a>
					<span>{' '}协同开发，旨在通过简单、实用的功能，为忙碌的你增添一丝愉悦和从容。</span>
				</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">联系我们</h2>
				<p className="text-lg leading-7 text-left">
					<span>如果你对摸鱼办有任何建议或反馈，欢迎通过{' '}</span>
					<a href="https://github.com/hupiao-coder/moyu-office/issues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4" title="GitHub">GitHub</a>
					<span>{' '}联系我们，和我们一起让工作变得更轻松！</span>
				</p>
			</section>
      	</main>
	);
}
