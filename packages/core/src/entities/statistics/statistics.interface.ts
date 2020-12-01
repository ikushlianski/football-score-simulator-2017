import { CardEnum } from './statistics.enum';

export interface BaseStatistics {
  home: number;
  away: number;
}

export interface CardStatistics {
  home: {
    card: CardEnum;
    minute: number;
    player: string;
  };
  away: {
    card: CardEnum;
    minute: number;
    player: string;
  };
}

export interface MatchStatistics {
  goals: BaseStatistics;
  shots: BaseStatistics;
  corners: BaseStatistics;
  fouls: BaseStatistics;
  cards: CardStatistics;
  penalties: BaseStatistics;
}
