import { Game } from 'types/gameTypes';
import GameResultEmptyItem from './GameResultEmptyItem';
import GameResultBigItem from './big/GameResultBigItem';
import GameResultSmallItem from './small/GameResultSmallItem';
import styles from 'styles/game/GameResultItem.module.scss';
import useGameResultList from 'hooks/game/useGameResultList';

interface GameResultListProps {
  path: string;
}

export default function GameResultList({ path }: GameResultListProps) {
  const { data, status, fetchNextPage, isLast, clickedGameItem, pathName } =
    useGameResultList(path);

  if (status === 'loading') return <GameResultEmptyItem status={status} />;

  if (status === 'success' && !data?.pages[0].games.length)
    return <GameResultEmptyItem status={status} />;

  return (
    <div>
      {status === 'success' && (
        <>
          {data?.pages.map((gameList, index) => (
            <div key={index}>
              {gameList.games.map((game: Game, index) => {
                const type = Number.isInteger(index / 2) ? 'LIGHT' : 'DARK';
                return clickedGameItem === game.gameId ? (
                  <GameResultBigItem
                    key={game.gameId}
                    type={type}
                    game={game}
                  />
                ) : (
                  <GameResultSmallItem
                    key={game.gameId}
                    type={type}
                    game={game}
                  />
                );
              })}
            </div>
          ))}
          {pathName === '/game' && !isLast && (
            <div className={styles.getButton}>
              <input
                type='button'
                value='더 보기'
                onClick={() => fetchNextPage()}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
