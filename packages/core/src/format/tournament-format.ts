import { TournamentFormatEnum } from '../tournament/tournament-format.enum';
import { Tournament } from '../tournament';
import { PlayOffFormatInterface } from './play-off-format.interface';
import { PlayOffFormatEnum } from './play-off-format.enum';

export abstract class TournamentFormat {
  abstract format: TournamentFormatEnum;
  abstract qualification: boolean;
  abstract qualificationTournament: Tournament;
  abstract playOffFormat?: PlayOffFormatInterface;
  abstract playOffTeamCount?: PlayOffFormatEnum;
  abstract recurring?: boolean;
}
