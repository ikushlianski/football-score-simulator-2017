import { Group } from '../../entities/group/group';
import { Team } from '../../entities/team/team';

export class UnlGroup extends Group {
  teams: Team[];
  isSynthetic = false;

  constructor(teams: Team[]) {
    super();

    this.teams = teams;
  }
}
