import { Group } from '../group/group';
import { LeagueRules } from './league-rules';

export abstract class League {
  abstract groups: Group[];
  abstract leagueRules: LeagueRules;

  protected constructor() {
    this.validateTeamCount();
  }

  private validateTeamCount() {
    this.groups.forEach((group) => {
      const teamCountValid =
        group.teams.length >= this.leagueRules.minTeamCount &&
        group.teams.length <= this.leagueRules.maxTeamCount;

      if (!teamCountValid) {
        throw Error(`Invalid team count in one of groups`);
      }
    });
  }
}
