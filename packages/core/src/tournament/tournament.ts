import { TeamInterface } from '../team/team.interface';
import { TournamentRulesInterface } from './tournament-rules.interface';
import { League } from '../league/league';

export abstract class Tournament {
  abstract tournamentCode: string;
  abstract leagues: League[];
  abstract rules: TournamentRulesInterface;

  abstract start(): unknown;
  abstract end(): unknown;
}
