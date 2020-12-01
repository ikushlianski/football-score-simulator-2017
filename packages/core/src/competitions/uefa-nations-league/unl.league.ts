import { League } from '../../entities/league/league';
import { Group } from '../../entities/group/group';
import { LeagueRules } from '../../entities/league/league-rules';

export class UnlLeague extends League {
  groups: Group[];
  leagueRules: LeagueRules;

  constructor(groups: Group[]) {
    super();

    this.groups = groups;
    this.leagueRules = {
      homeAndAway: true,
      maxTeamCount: 4,
      minTeamCount: 3,
    };
  }
}
