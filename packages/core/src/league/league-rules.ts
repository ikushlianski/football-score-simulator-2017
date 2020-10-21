import { Tournament } from '../tournament';
import { Group } from '../group/group';
import { PromotionRulesInterface } from '../rules/promotion-rules.interface';
import { RelegationRulesInterface } from '../rules/relegation-rules.interface';
import { League } from './league';

export abstract class LeagueRules {
  abstract maxTeamCount: number;
  abstract minTeamCount: number;
  abstract homeAndAway: boolean;
  abstract roundCount: number;

  abstract promotions: boolean;
  promotionTo?: Tournament | Group | League;
  promotionRules?: PromotionRulesInterface;

  abstract relegations: boolean;
  relegationTo?: Tournament | Group | League;
  relegationRules?: RelegationRulesInterface;
}
