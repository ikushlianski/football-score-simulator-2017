import { MatchRules } from '../rules/match-rules';
import { MatchEvent } from '../match-events/match-event';
import { Team } from '../team/team';
import { MatchStatistics } from '../statistics/statistics.interface';

export abstract class Match {
  abstract rules: MatchRules;
  abstract date: Date;
  abstract venue: string;
  abstract homeTeam: Team;
  abstract awayTeam: Team;
  abstract matchEvents: MatchEvent[];

  abstract matchStatistics: MatchStatistics;
}
