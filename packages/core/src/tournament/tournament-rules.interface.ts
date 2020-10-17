import { PlayoffFormatInterface } from './playoff-format.interface';
import { PlayOffFormatEnum } from './play-off-format.enum';
import { Tournament } from './tournament';
import { TournamentFormatEnum } from './tournament-format.enum';

export interface TournamentRulesInterface {
  teamCount: number;
  leagueCount: number;
  groupsPerLeague: number;
  format: TournamentFormatEnum;
  qualification: boolean;
  qualificationRules?: TournamentRulesInterface;
  playOffFormat?: PlayoffFormatInterface;
  playOffTeamCount?: PlayOffFormatEnum;
  promotions?: boolean;
  promotionTo?: Tournament | Group | League;
  promotionRules?: PromotionRules;
  relegationRules?: RelegationRules;
  relegationTo?: Tournament;
  recurring?: boolean;
}

export interface GroupRulesInterface {}
