import { Team } from '../team/team';
import { NationsEnum } from '../nation/nations.enum';
import { UnlGroup } from '../../competitions/uefa-nations-league/unl.group';
import { DrawRoutine } from './draw-routine';

describe('drawRoutine', function () {
  const initSpec = () => {
    const team1 = new Team('Lithuania', NationsEnum.Lithuania, 2.0);
    const team2 = new Team('Belarus', NationsEnum.Belarus, 2.5);
    const team3 = new Team('Andorra', NationsEnum.Andorra, 1);
    const teams = [team1, team2, team3];
    const drawRoutine = new DrawRoutine(teams);

    return { teams, drawRoutine };
  };

  it('should sort teams, from strongest to weakest', () => {
    const { drawRoutine } = initSpec();

    expect(drawRoutine.teams[0]?.nation).toBe(NationsEnum.Belarus);
    expect(drawRoutine.teams[1]?.nation).toBe(NationsEnum.Lithuania);
    expect(drawRoutine.teams[2]?.nation).toBe(NationsEnum.Andorra);
  });

  describe('pullNextTeam()', function () {
    const initSpec = () => {
      const team1 = new Team('Belarus', NationsEnum.Belarus, 2.5);
      const team2 = new Team('Lithuania', NationsEnum.Lithuania, 2.0);
      const teams = [team1, team2];
      const drawRoutine = new DrawRoutine(teams);
      const pulled = drawRoutine.pullNextTeam();

      return { teams, drawRoutine, pulled };
    };

    it('should pull Belarus', () => {
      const { pulled } = initSpec();
      expect(pulled?.nation).toBe(NationsEnum.Belarus);
    });

    it('should leave Lithuania after pulling Belarus', () => {
      const { drawRoutine } = initSpec();
      expect(drawRoutine.teams[0]?.nation).toBe(NationsEnum.Lithuania);
      expect(drawRoutine.teams).toHaveLength(1);
    });
  });

  describe('getMaxTeamsInAllGroups()', function () {
    const initSpec = () => {
      const team1 = new Team('Belarus', NationsEnum.Belarus, 2.5);
      const team2 = new Team('Lithuania', NationsEnum.Lithuania, 2.0);
      const team3 = new Team('Kazakhstan', NationsEnum.Kazakhstan, 2.0);
      const team4 = new Team('Albania', NationsEnum.Albania, 2.5);
      const teams1 = [team1, team2, team3];
      const teams2 = [team4];
      const group1 = new UnlGroup(teams1);
      const group2 = new UnlGroup(teams2);

      const drawRoutine = new DrawRoutine([]);
      const result = (drawRoutine as any).getMaxTeamsInAllGroups([
        group1,
        group2,
      ]);

      return { group1, group2, result };
    };

    it('should return 3', () => {
      const { result } = initSpec();

      expect(result).toBe(3);
    });
  });
});
