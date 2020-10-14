import { TeamInterface } from '../team/team.interface';
import { TournamentRulesInterface } from './tournament-rules.interface';

export abstract class Tournament {
  teams: TeamInterface[];
  rules: TournamentRulesInterface;

  protected constructor(
    teams: TeamInterface[],
    rules: TournamentRulesInterface,
  ) {
    this.teams = teams;
    this.rules = rules;
  }

  abstract start(): Promise<void>;
  abstract end(): Promise<void>;
}
