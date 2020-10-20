import { TeamInterface } from './team.interface';
import { Tournament } from '../tournament/tournament';

export abstract class TeamsManager {
  teams: TeamInterface[];

  protected constructor(teams: TeamInterface[]) {
    this.teams = teams;
  }

  getTeams(): TeamInterface[] {
    return this.teams;
  }

  abstract eliminateTeams(): void;

  abstract relegateTeams(
    teams: TeamInterface[],
    toTournament: Tournament,
  ): void;

  abstract promoteTeams(teams: TeamInterface[], toTournament: Tournament): void;
}
