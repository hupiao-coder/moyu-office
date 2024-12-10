import GameCard from "./components/game-card";
import GameCreateCard from "./components/game-create-card";
import { getGames } from "./data/data";
import { Game } from "./data/definitions";


export default function GamesPage() {

	// 获取游戏数据
	const games: Game[] = getGames();

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{ games.map((game: Game, index: number) => (
					<GameCard key={`game-${index}`} game={game} />
				))}
				<GameCreateCard />
			</div>
      	</>
	);
}
