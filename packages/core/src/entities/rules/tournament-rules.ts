import { TournamentFormatEnum } from '../tournament/tournament-format.enum';
import { Tournament } from '../tournament';
import { PlayOffRules } from './play-off-rules';
import { PlayOffFormatEnum } from './play-off-format.enum';

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
  playOffFormat?: PlayOffRules;
  playOffTeamCount?: PlayOffFormatEnum;
}
