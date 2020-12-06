import { DrawService } from './draw.service';
import { Team } from '../entities/team/team';
import { NationsEnum } from '../entities/nation/nations.enum';
import { UnlGroupStage } from '../competitions/uefa-nations-league/unl.group-stage';
import { UnlLeague } from '../competitions/uefa-nations-league/unl.league';
import { UnlGroup } from '../competitions/uefa-nations-league/unl.group';
import { create } from 'domain';

const createLeagueTournament = () => {
  const team1 = new Team('Belarus', NationsEnum.Belarus, 2.5);
  const teams = [team1];
  const group1 = new UnlGroup(teams);
  const groups = [group1];
  const league = new UnlLeague(groups);
  const leagues = [league];
  const stage = new UnlGroupStage(leagues);

  return { stage, teams };
};

// const createCupTournament = () => {
//   const team1 = new Team('Belarus', NationsEnum.Belarus, 2.5);
//   const teams = [team1];
//   const league = new UnlLeague(groups);
//   const leagues = [league];
//   const stage = new UnlGroupStage(leagues);
//
//   return { stage, teams };
// };

describe('Draw Service', () => {
  describe('drawTournament', () => {
    const initSpec = () => {
      const drawService = new DrawService();
      const { stage, teams } = createLeagueTournament();

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const drawLeagueSpy = jest.spyOn(drawService, 'drawLeague');

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

    // it('should call drawLeague method if league is specified in stage', () => {
    //   const { drawLeagueSpy } = initSpec();
    //
    //   expect(drawLeagueSpy).toHaveBeenCalledTimes(1);
    // });
  });
});
