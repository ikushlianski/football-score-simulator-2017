import { DrawService } from './draw.service';
import { Team } from '../team/team';
import { NationsEnum } from '../nation/nations.enum';
import { UnlGroupStage } from '../../competitions/uefa-nations-league/unl.group-stage';
import { UnlLeague } from '../../competitions/uefa-nations-league/unl.league';
import { UnlGroup } from '../../competitions/uefa-nations-league/unl.group';

const createLeagueTournament = () => {
  const team1 = new Team('Belarus', NationsEnum.Belarus, 2.5);
  const team2 = new Team('Lithuania', NationsEnum.Lithuania, 2.0);
  const team3 = new Team('Kazakhstan', NationsEnum.Kazakhstan, 2.0);
  const team4 = new Team('Albania', NationsEnum.Albania, 2.5);
  const teamsToDraw = [team1, team2, team3, team4];
  const group1 = new UnlGroup([]);
  const groups = [group1];
  const league = new UnlLeague(groups);
  const leagues = [league];
  const stage = new UnlGroupStage(leagues);

  return { stage, teamsToDraw };
};

describe('Draw Service', () => {
  describe('drawTournament', () => {
    const initDraw = () => {
      const drawService = new DrawService();
      const { stage, teamsToDraw } = createLeagueTournament();

      const drawLeagueSpy = jest.spyOn(drawService as any, 'drawLeague');

      drawService.drawTournament(teamsToDraw, stage);

      return { stage, teamsToDraw, drawLeagueSpy };
    };

    it('should call drawLeague method if league is specified in stage', () => {
      const { drawLeagueSpy, teamsToDraw, stage } = initDraw();

      expect(drawLeagueSpy).toHaveBeenCalledTimes(1);
      expect(drawLeagueSpy).toHaveBeenCalledWith(teamsToDraw, stage.leagues[0]);
    });

    it('should populate all teams into the league', () => {
      const { stage } = initDraw();

      expect(stage.leagues[0]?.groups[0]?.teams).toHaveLength(4);
    });
  });
});
