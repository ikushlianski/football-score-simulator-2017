import { Group } from '../group/group';
import { LeagueRulesInterface } from './league-rules.interface';
import { TeamInterface } from '../team/team.interface';

export abstract class League {
  abstract groups: Group[];
  abstract leagueRules: LeagueRulesInterface;

  // todo shouldn't manager do this?
  abstract promoteTeams: (teams: TeamInterface[]) => void;
  abstract relegateTeams: (teams: TeamInterface[]) => void;
}
