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
      this.drawCup(teams, rules);
    }
  }

  public drawLeague(teams: Team[], league: League, rules?: DrawRules) {
    const teamsToDraw = [...teams];
    const drawRoutine = new DrawRoutine(teamsToDraw);

    do {
      const team = drawRoutine.pullFirstTeam();

      if (team) {
        drawRoutine.placeTeamToRandomGroup(team, league.groups);
      }
    } while (teamsToDraw.length > 0);
  }

  public drawCup(teams: Team[], rules?: DrawRules) {}
}

class DrawRoutine {
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

  public pullFirstTeam = () => {
    const [pickedTeam] = this.teams.splice(0, 1);

    return pickedTeam;
  };

  public placeTeamToGroup = (team: Team, group: Group) => {
    group.teams.push(team);
  };

  private pickRandomGroup = (groups: Group[]) => {
    const availableGroups = this.getAvailableGroups(groups);
    const groupIndex = this.pickRandomIndex(availableGroups);
  };

  public placeTeamToRandomGroup = (team: Team, groups: Group[]) => {};

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
