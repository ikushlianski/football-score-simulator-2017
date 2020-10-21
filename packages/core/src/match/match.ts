import { MatchRules } from '../rules/match-rules';
import { TeamInterface } from '../team/team.interface';
import { MatchEvent } from '../match-events/match-event';

export enum CardEnum {
  yellow,
  red,
}

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

export abstract class Match {
  abstract rules: MatchRules;
  abstract date: Date;
  abstract venue: Venue;
  abstract homeTeam: TeamInterface;
  abstract awayTeam: TeamInterface;
  abstract matchEvents: MatchEvent[];

  abstract matchStatistics: MatchStatistics;
}
