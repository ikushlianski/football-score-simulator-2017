import { Group } from '../group/group';
import { LeagueRules } from './league-rules';
import { TeamInterface } from '../team/team.interface';
import { Team } from '../team/team';

export abstract class League {
  abstract groups: Group[];
  abstract leagueRules: LeagueRules;

  // todo shouldn't manager do this?
  abstract promoteTeams: (teams: Team[]) => void;
  abstract relegateTeams: (teams: Team[]) => void;
}
