// 获取游戏数据
export function getGames() {
    const games = [
        { name: "遥控汽车", url: "https://bruno-simon.com", icon: "https://bruno-simon.com/favicon/favicon-32x32.png", description: "玩得开心，尽量不要弄坏我的车！" },
        { name: "弹力球", url: "https://bouncyballs.org", icon: "https://bouncyballs.org/assets/images/icon-200.png", description: "用弹跳的大量球来控制喧闹的教室！一个有趣且免费的噪音管理工具。" },
        { name: "请画一个小人", url: "https://www.webhek.com/post/draw-a-stickman/", icon: "https://www.webhek.com/favicon.ico", description: "趣味互动游戏：请随意画出一个小人，它就能活起来，你可以和它一起完成一次充满奇幻色彩的冒险旅程。" },
        { name: "深海鱼大作战", url: "https://deeeep.io", icon: "https://beta.deeeep.io/favicon-32x32.png", description: "你是一条鱼，能活多久？" },
        { name: "自由钢琴", url: "https://www.autopiano.cn", icon: "https://www.autopiano.cn/favicon.ico", description: "自由钢琴(AutoPiano)致力于为钢琴爱好者、音乐爱好者提供一个优雅、简洁的平台。" },
        { name: "俄罗斯方块", url: "http://www.itmind.net/tetris", icon: "http://www.itmind.net/wp-content/uploads/2020/09/1599721603-322895ededfd717.png", description: "经典俄罗斯方块，童年乐趣走起来。" },
        { name: "放风筝", url: "https://bellwoods.xyz", icon: "https://bellwoods.xyz/t.png", description: "一款适用于移动设备和桌面设备的艺术游戏。 让你的风筝穿过无尽的色彩和声音领域，尝试发现新世界。" },
        { name: "贪吃蛇", url: "https://playsnake.org", icon: "https://playsnake.org/assets/images/icon-200.png", description: "免费在线玩复古贪吃蛇游戏。" },
        { name: "点线拼图", url: "https://lines.frvr.com", icon: "https://lines.frvr.com/assets/favicon.ab8d6329.png", description: "一款轻松的益智游戏，您可以在点之间画线来完成关卡。" },
        { name: "斯诺克台球", url: "http://www.heyzxz.me/pcol/", icon: "http://cdn.heyzxz.me/icons-31e05058ed6f57784b684b32a1efb529/apple-touch-icon-180x180.png", description: "现在就在您的浏览器中玩高品质的斯诺克游戏。" },
        { name: "飞扬的鸟", url: "https://flappybird.io", icon: "http://flappybird.io/img/apple-icon.png", description: "单击屏幕，或使用空格键开始。 在不撞到管道的情况下，让小鸟飞得尽可能远。" },
        { name: "变焦地球", url: "https://zoom.earth", icon: "https://zoom.earth/assets/images/icon-100.7.jpg", description: "通过地图来检测区域天气、地形。" },
        { name: "暗室 | 小黑屋", url: "https://adarkroom.doublespeakgames.com/?lang=zh_cn", icon: "https://adarkroom.doublespeakgames.com/favicon.ico", description: "极简主义的文字冒险。" },
        { name: "摇摇乐", url: "http://www.staggeringbeauty.com", icon: "http://www.staggeringbeauty.com/favicon.ico", description: "魔性解压网站，急速晃动还会闪亮你的眼。" },
        { name: "找到那只牛", url: "https://findtheinvisiblecow.com", icon: "https://findtheinvisiblecow.com/favicon.png", description: "一个移动鼠标根据声音找动物的游戏。" },
        { name: "投胎模拟器", url: "https://toutai.cc", icon: "https://toutai.cc/icon.png", description: "如果来世还在种花家，你会出生在哪里？" },
        { name: "反物质分裂症", url: "https://h5mota.com/games/Antimatter", icon: "https://h5mota.com/favicon.ico", description: "H5魔塔广场是专注于魔塔类游戏的平台，在这里，探索魔塔的更多可能性。" },
        { name: "绘谜", url: "https://enazo.cn", icon: "https://enazo.cn/images/icon-192x192.png", description: "支持 断线重连、无限撤销、压感笔刷、智能提示、智能参考、画廊投稿、导出视频 的在线多人你画我猜。" },
        { name: "扫雷", url: "https://www.minesweeper.cn", icon: "https://www.minesweeper.cn/favicon.ico", description: "本站提供了经典扫雷游戏，并略作改进，在电脑或手机上打开网页就可以玩，无需下载安装。" },
        { name: "Nazo Game", url: "https://nazo.one-story.cn", icon: "https://nazo.one-story.cn/favicon.ico", description: "谜题涉及电脑知识,语言学,梗等等。不会因为不懂计算机而卡关，因为这同时也检验了您的搜索水平。" },
        { name: "哄哄模拟器", url: "https://hong.greatdk.com", icon: "https://hong.greatdk.com/_next/image?url=hong.png&w=64&q=75", description: "哄哄模拟器基于AI技术，你需要使用语言技巧和沟通能力，在限定次数内让对方原谅你，这并不容易。" },
        { name: "AI 五子棋", url: "https://game.ur1.fun/gomoku/", icon: "https://game.ur1.fun/gomoku/favicon.png", description: "试试你能打得过 AI 五子棋吗？" },
        { name: "奔跑吧兔子", url: "https://game.ur1.fun/hop/", icon: "https://game.ur1.fun/hop/favicon.png", description: "神庙逃亡风格的跑酷游戏。" },
        { name: "积木切切乐", url: "https://game.ur1.fun/menja/", icon: "https://game.ur1.fun/menja/favicon.png", description: "通过滑动鼠标切碎积木块。" },
        { name: "Looptap", url: "https://game.ur1.fun/looptap/", icon: "https://game.ur1.fun/looptap/favicon.png", description: "消磨时间的小游戏，把球停在有颜色区域。" },
        { name: "3D 魔方", url: "https://game.ur1.fun/cube/", icon: "https://game.ur1.fun/cube/favicon.png", description: "魔方与华容道、法国的独立钻石棋并称为智力游戏界的三大不可思议。" },
        { name: "叠砖块", url: "https://game.ur1.fun/stack/", icon: "https://game.ur1.fun/stack/favicon.png", description: "试试你能叠多高。" },
        { name: "恐龙快跑", url: "https://game.ur1.fun/dinosaur/", icon: "https://game.ur1.fun/dinosaur/favicon.png", description: "谷歌浏览器断网时的恐龙小彩蛋。" },
    ];
    return games;
}