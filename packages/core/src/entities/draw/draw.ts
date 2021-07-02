import { DrawService } from './draw.service';
import { Team } from '../team/team';

export abstract class Draw {
  abstract teams: Team[];
  abstract rules: DrawRules;

  protected constructor(private drawService: DrawService) {}

  public conductDraw() {
    return this.drawService.drawTeams(this.teams, this.rules);
  }
}
