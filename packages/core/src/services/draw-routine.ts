import { Team } from '../entities/team/team';
import { Group } from '../entities/group/group';

export class DrawRoutine {
  teams: Team[];
  drawTargets = [];

  constructor(teams: Team[]) {
    this.teams = teams;

    this.teams.sort((team1, team2) => team2.stars - team1.stars);
  }

  public pullRandomTeam = (): Team | undefined => {
    const randomIndex = this.pickRandomIndex(this.teams);
    const [pickedTeam] = this.teams.splice(randomIndex, 1);

    return pickedTeam;
  };

  public pullNextTeam = (): Team | undefined => {
    const [pickedTeam] = this.teams.splice(0, 1);

    return pickedTeam;
  };

  public addTeamToGroup = (team: Team, group: Group): void => {
    group.teams.push(team);
  };

  private pickRandomGroup = (groups: Group[]): Group | undefined => {
    const availableGroups = this.getAvailableGroups(groups);
    const groupIndex = this.pickRandomIndex(availableGroups);

    return groups[groupIndex];
  };

  public placeTeamToRandomGroup = (team: Team, groups: Group[]): void => {
    const availableGroups = this.getAvailableGroups(groups);
    const group = this.pickRandomGroup(availableGroups);

    if (group) {
      group.teams.push(team);
    } else {
      throw Error(
        `pickRandomGroup returned ${group}, but a group was expected`,
      );
    }
  };

  private getAvailableGroups = (groups: Group[]) => {
    const currentMaxTeamCount = this.getMaxTeamsInAllGroups(groups);

    const availableGroups = groups.filter(
      (group) => group.teams.length < currentMaxTeamCount,
    );

    if (availableGroups.length === 0) {
      return groups;
    }

    return availableGroups;
  };

  private getMaxTeamsInAllGroups = (groups: Group[]) => {
    return groups.reduce((max, group) => {
      if (group.teams.length > max) {
        max = group.teams.length;
      }

      return max;
    }, 0);
  };

  private pickRandomIndex = (items: any[]) => {
    return Math.floor(Math.random() * items.length);
  };
}
