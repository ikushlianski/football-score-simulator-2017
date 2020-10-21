import { Tournament } from '../../tournament';
import { Team } from '../../team/team';
import { TournamentRules } from '../../rules/tournament-rules';
import { TeamInterface } from '../../team/team.interface';
import { TournamentRulesInterface } from '../../rules/tournament-rules.interface';
import { CompetitionsEnum } from '../competitions.enum';
import { League } from '../../league/league';

export abstract class UnlCompetition implements Tournament {
  tournamentCode: string;
  teams: Team[];
  leagues: League[];
  tournamentRules: TournamentRulesInterface;

  protected constructor(
    teamsManager: Team,
    rulesManager: TournamentRules,
    leaguesManager: LeaguesManager,
  ) {
    this.tournamentCode = CompetitionsEnum.UNL;
    this.teams = teamsManager.getTeams();
    this.tournamentRules = rulesManager.getRules();
    this.leagues = leagues;
  }

  end(): () => void {
    return function () {};
  }

  start(): () => void {
    return function () {};
  }
}
