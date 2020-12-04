import { DrawService } from './draw.service';
import { Team } from '../entities/team/team';
import { NationsEnum } from '../entities/nation/nations.enum';
import { UnlGroupStage } from '../competitions/uefa-nations-league/unl.group-stage';
import { UnlLeague } from '../competitions/uefa-nations-league/unl.league';
import { UnlGroup } from '../competitions/uefa-nations-league/unl.group';

const createTournament = () => {
  const team1 = new Team('Belarus', NationsEnum.Belarus, 2.5);
  const teams = [team1];
  const group1 = new UnlGroup(teams);
  const groups = [group1];
  const league = new UnlLeague(groups);
  const leagues = [league];
  const stage = new UnlGroupStage(leagues);

  return { stage, teams };
};

describe('Draw Service', () => {
  const initSpec = () => {
    const { stage, teams } = createTournament();

    const drawService = new DrawService();

    drawService.drawTournament(teams, stage);

    return { stage, teams };
  };

  it('should populate group1 with one team', () => {
    const { stage, teams } = initSpec();

    expect(stage.leagues[0]?.groups[0]?.teams).toHaveLength(1);
    expect(stage.leagues[0]?.groups[0]?.teams[0]).toEqual(teams[0]);
  });
});
