import { UnlCompetition } from './unl.competition';
import { UnlGroupStage } from './unl.group-stage';
import { UnlFinals } from './unl.finals';
import { UnlLeague } from './unl.league';
import { UnlGroup } from './unl.group';
import { Team } from '../../entities/team/team';
import { NationsEnum } from '../../entities/nation/nations.enum';

const unlGroup1LeagueA = new UnlGroup([
  new Team('Belarus', NationsEnum.Belarus),
]);

const unlLeagueA = new UnlLeague();
const unlLeagueB = new UnlLeague();
const unlLeagueC = new UnlLeague();
const unlLeagueD = new UnlLeague();

const unlGroupStage = new UnlGroupStage([
  unlLeagueA,
  unlLeagueB,
  unlLeagueC,
  unlLeagueD,
]);
const unlFinals = new UnlFinals([]);
const unlStages = [unlGroupStage, unlGroupStage];
const nationsLeague = new UnlCompetition(unlStages);
