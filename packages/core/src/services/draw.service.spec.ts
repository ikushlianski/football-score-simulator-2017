import { DrawService } from './draw.service';
import { Team } from '../entities/team/team';
import { NationsEnum } from '../entities/nation/nations.enum';
import { UnlGroupStage } from '../competitions/uefa-nations-league/unl.group-stage';
import { UnlLeague } from '../competitions/uefa-nations-league/unl.league';
import { UnlGroup } from '../competitions/uefa-nations-league/unl.group';

const createLeagueTournament = () => {
  const team1 = new Team('Belarus', NationsEnum.Belarus, 2.5);
  const team2 = new Team('Lithuania', NationsEnum.Lithuania, 2.0);
  const team3 = new Team('Kazakhstan', NationsEnum.Kazakhstan, 2.0);
  const team4 = new Team('Albania', NationsEnum.Albania, 2.5);
  const teams = [team1, team2, team3, team4];
  const group1 = new UnlGroup(teams);
  const groups = [group1];
  const league = new UnlLeague(groups);
  const leagues = [league];
  const stage = new UnlGroupStage(leagues);

  return { stage, teams };
};

// const createCupTournament = () => {
// };

describe('Draw Service', () => {
  describe('drawTournament', () => {
    const initSpec = () => {
      const drawService = new DrawService();
      const { stage, teams } = createLeagueTournament();

      const drawLeagueSpy = jest.spyOn(drawService as any, 'drawLeague');

      drawService.drawTournament(teams, stage);

      return { stage, teams, drawLeagueSpy };
    };

    it('should call drawLeague method if league is specified in stage', () => {
      const { drawLeagueSpy, teams, stage } = initSpec();

      expect(drawLeagueSpy).toHaveBeenCalledTimes(1);
      expect(drawLeagueSpy).toHaveBeenCalledWith(
        teams,
        stage.leagues[0],
        undefined,
      );
    });
  });
});
