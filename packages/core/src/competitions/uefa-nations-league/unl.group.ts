import { Team } from '../../team/team';
import { TournamentRules } from '../../rules/tournament-rules';
import { DatabaseInterface } from '../../db/database.interface';
import { TournamentRulesInterface } from '../../rules/tournament-rules.interface';
import { League } from '../../league/league';

export abstract class UnlGroup extends League {
  teams: Team[];
  rules: TournamentRulesInterface;

  protected constructor(
    teamsManager: Team,
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
