import { TournamentRulesInterface } from './tournament-rules.interface';
import { TournamentFormatEnum } from '../tournament/tournament-format.enum';
import { Tournament } from '../tournament';
import { PlayOffFormatInterface } from '../format/play-off-format.interface';
import { PlayOffFormatEnum } from '../format/play-off-format.enum';

export abstract class TournamentRules {
  // structure
  abstract teamCount: number;
  abstract leagueCount: number;
  abstract groupsPerLeague: number;

  abstract format: TournamentFormat;

  // points
  abstract pointsForWin: number;
  abstract pointsForDraw: number;
  abstract pointsForDefeat: number;
}
