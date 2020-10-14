import { PlayoffFormatInterface } from './playoff-format.interface';
import { PlayOffFormatEnum } from './play-off-format.enum';
import { Tournament } from './tournament';
import { TournamentFormatEnum } from './tournament-format.enum';

export interface TournamentRulesInterface {
  teamCount: number;
  groupCount: number;
  format: TournamentFormatEnum;
  qualification: boolean;
  qualificationRules?: TournamentRulesInterface;
  playOffFormat?: PlayoffFormatInterface;
  playOffTeamCount?: PlayOffFormatEnum;
  promotions?: boolean;
  promotionTo?: Tournament;
  relegationTo?: Tournament;
  recurring?: boolean;
}
