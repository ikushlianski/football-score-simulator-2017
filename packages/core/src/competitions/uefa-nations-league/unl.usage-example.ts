import { UnlCompetition } from './unl.competition';
import { UnlGroupStage } from './unl.group-stage';
import { UnlFinals } from './unl.finals';
import { UnlLeague } from './unl.league';
import { UnlGroup } from './unl.group';
import { Team } from '../../entities/team/team';
import { NationsEnum } from '../../entities/nation/nations.enum';

const unlGroup1LeagueA = new UnlGroup([
  new Team('Belarus', NationsEnum.Belarus, 2.5),
  new Team('Lithuania', NationsEnum.Lithuania, 2.0),
  new Team('Kazakhstan', NationsEnum.Kazakhstan, 2.0),
  new Team('Albania', NationsEnum.Albania, 3.0),
]);

const unlLeagueA = new UnlLeague([unlGroup1LeagueA]);

const unlGroupStage = new UnlGroupStage([unlLeagueA]);
const unlFinals = new UnlFinals([]);
const unlStages = [unlGroupStage, unlFinals];
const nationsLeague = new UnlCompetition(unlStages);
