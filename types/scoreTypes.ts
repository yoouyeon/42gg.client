import { MatchMode } from 'types/mainType';

/**
 * 경기 후  스코어 입력시 쓰는 타입
 * */
export interface TeamScore {
  myTeamScore: number | '';
  enemyTeamScore: number | '';
}

export interface Player {
  intraId: string;
  userImageUri: string;
  level: number;
}
export interface Team {
  teamScore: number;
  teamId: number;
  players: Player[];
}

export interface Players {
  myTeam: Team;
  enemyTeam: Team;
}

export type AfterGame = {
  mode: Uppercase<MatchMode> | null;
  gameId: number;
  startTime: string;
  isScoreExist: boolean;
  status: 'LIVE' | 'WAIT' | 'END';
  matchTeamsInfo: Players;
};
