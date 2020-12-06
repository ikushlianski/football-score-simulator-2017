import { Team } from '../entities/team/team';
import { Stage, StageTypeEnum } from '../entities/stage/stage';
import { DrawRules } from '../entities/draw/draw-rules';
import { League } from '../entities/league/league';
import { Group } from '../entities/group/group';

export class DrawService {
  public drawTournament(teams: Team[], stage: Stage, rules?: DrawRules) {
    const { leagues } = stage;

    if (leagues) {
      leagues.forEach((league) => {
        // this is a league
        this.drawLeague(teams, league, rules);
      });
    } else if (stage.teams?.length) {
      // this is a cup tournament
      // todo this.drawCup(teams, rules);
    }
  }

  private drawLeague(teams: Team[], league: League, rules?: DrawRules): void {
    const teamsToDraw = [...teams];
    const drawRoutine = new DrawRoutine(teamsToDraw);

    do {
      const team = drawRoutine.pullNextTeam();

      if (team) {
        drawRoutine.placeTeamToRandomGroup(team, league.groups);
      }
    } while (teamsToDraw.length > 0);
  }

  // private drawCup(teams: Team[], rules?: DrawRules) {}
}

export class DrawRoutine {
  teams: Team[];
  drawTargets = [];

  constructor(teams: Team[]) {
    this.teams = teams;

    this.teams.sort((team1, team2) => team2.stars - team1.stars);
  }

  public pullRandomTeam = () => {
    const randomIndex = this.pickRandomIndex(this.teams);
    const [pickedTeam] = this.teams.splice(randomIndex, 1);

    return pickedTeam;
  };

  public pullNextTeam = (): Team | undefined => {
    const [pickedTeam] = this.teams.splice(0, 1);

    return pickedTeam;
  };

  public placeTeamToGroup = (team: Team, group: Group) => {
    group.teams.push(team);
  };

  private pickRandomGroup = (groups: Group[]) => {
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
}
