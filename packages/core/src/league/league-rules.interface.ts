import { Tournament } from '../tournament';
import { Group } from '../group/group';
import { PromotionRulesInterface } from '../tournament/promotion-rules.interface';
import { RelegationRulesInterface } from '../tournament/relegation-rules.interface';
import { League } from './league';

export interface LeagueRulesInterface {
  maxTeamCount: number;
  minTeamCount: number;
  homeAndAway?: boolean;
  roundCount: number;

  promotions?: boolean;
  promotionTo?: Tournament | Group | League;
  promotionRules?: PromotionRulesInterface;

  relegations?: boolean;
  relegationRules?: RelegationRulesInterface;
  relegationTo?: Tournament | Group | League;
}
