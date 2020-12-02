import { Team } from '../entities/team/team';
import { Stage, StageTypeEnum } from '../entities/stage/stage';
import { DrawRules } from '../entities/draw/draw-rules';
import { League } from '../entities/league/league';

export class DrawService {
  public drawTournament(teams: Team[], stage: Stage, rules?: DrawRules) {
    const { leagues } = stage;

    if (leagues) {
      leagues.forEach((league) => {
        // determine order of leagues to know which chunk of teams to give there for draw
        this.drawLeague(teams, league, rules);
      });
    } else if (stage.teams?.length) {
      // this is a cup tournament
    }
  }

  public drawLeague(teams: Team[], league: League, rules: DrawRules) {}
}
