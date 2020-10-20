import { TeamInterface } from '../team/team.interface';
import { TournamentRulesInterface } from '../tournament/tournament-rules.interface';
import { Group } from '../group/group';
import { Tournament } from '../tournament';
import { PromotionRulesInterface } from '../tournament/promotion-rules.interface';
import { RelegationRulesInterface } from '../tournament/relegation-rules.interface';
import { LeagueRulesInterface } from './league-rules.interface';

export abstract class League {
  abstract groups: Group[];
  abstract rules: LeagueRulesInterface;
}
