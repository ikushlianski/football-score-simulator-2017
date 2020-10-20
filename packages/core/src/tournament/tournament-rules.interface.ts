import { PlayOffFormatInterface } from '../format/play-off-format.interface';
import { PlayOffFormatEnum } from '../format/play-off-format.enum';
import { Tournament } from './tournament';
import { TournamentFormatEnum } from './tournament-format.enum';
import { PromotionRulesInterface } from './promotion-rules.interface';
import { RelegationRulesInterface } from './relegation-rules.interface';

export interface TournamentRulesInterface {
  teamCount: number;
  leagueCount: number;
  groupsPerLeague: number;
  format: TournamentFormatEnum;
  qualification: boolean;
  qualificationTournament: Tournament;
  qualificationRules?: TournamentRulesInterface;
  playOffFormat?: PlayOffFormatInterface;
  playOffTeamCount?: PlayOffFormatEnum;
  recurring?: boolean;
}
