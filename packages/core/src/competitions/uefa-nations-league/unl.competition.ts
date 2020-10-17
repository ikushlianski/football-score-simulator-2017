import { Tournament } from '../../tournament';
import { TeamsManager } from '../../tournament/teams-manager';
import { RulesManager } from '../../tournament/rules-manager';
import { DatabaseInterface } from '../../db/database.interface';
import { TeamInterface } from '../../team/team.interface';
import { TournamentRulesInterface } from '../../tournament/tournament-rules.interface';
import { CompetitionsEnum } from '../competitions.enum';

export abstract class UnlCompetition implements Tournament {
  tournamentCode: string;
  teams: TeamInterface[];
  rules: TournamentRulesInterface;

  protected constructor(
    teamsManager: TeamsManager,
    rulesManager: RulesManager,
    private db: DatabaseInterface,
  ) {
    this.tournamentCode = CompetitionsEnum.UNL;
    this.teams = teamsManager.getTeams();
    this.rules = rulesManager.getRules();
    this.db = db;
  }

  abstract start(): Promise<void>;
  abstract end(): Promise<void>;
}
