import { TeamInterface } from '../team/team.interface';
import { TournamentRulesInterface } from './tournament-rules.interface';

export abstract class Tournament {
  abstract tournamentCode: string;
  abstract teams: TeamInterface[];
  abstract rules: TournamentRulesInterface;

  abstract start(): unknown;
  abstract end(): unknown;
}
