import { TournamentRulesInterface } from './tournament-rules.interface';
import { TournamentFormatEnum } from '../tournament/tournament-format.enum';
import { Tournament } from '../tournament';
import { PlayOffFormatInterface } from './play-off-format.interface';
import { PlayOffFormatEnum } from './play-off-format.enum';
import { RelegationRulesInterface } from './relegation-rules.interface';
import { PromotionRulesInterface } from './promotion-rules.interface';

export abstract class TournamentRules {
  // structure
  abstract teamCount: number;
  abstract leagueCount: number;
  abstract groupsPerLeague: number;

  // points
  abstract pointsForWin: number;
  abstract pointsForDraw: number;
  abstract pointsForDefeat: number;

  // format
  abstract format: TournamentFormatEnum;
  abstract qualification: boolean;
  qualificationTournament?: Tournament;
  playOffFormat?: PlayOffFormatInterface;
  playOffTeamCount?: PlayOffFormatEnum;
  promotions?: PromotionRulesInterface;
  relegations?: RelegationRulesInterface;
}
