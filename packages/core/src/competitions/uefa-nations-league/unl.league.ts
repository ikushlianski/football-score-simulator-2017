import { TeamsManager } from '../../team/teams.manager';
import { TournamentRules } from '../../rules/tournament-rules';
import { DatabaseInterface } from '../../db/database.interface';
import { TeamInterface } from '../../team/team.interface';
import { TournamentRulesInterface } from '../../rules/tournament-rules.interface';
import { League } from '../../league/league';

export abstract class UnlLeague extends League {
  teams: TeamInterface[];
  rules: TournamentRulesInterface;

  protected constructor(
    teamsManager: TeamsManager,
    rulesManager: TournamentRules,
    private db: DatabaseInterface,
  ) {
    super();
    this.teams = teamsManager.getTeams();
    this.rules = rulesManager.getRules();
    this.db = db;
  }

  abstract start(): Promise<void>;
  abstract end(): Promise<void>;
}
