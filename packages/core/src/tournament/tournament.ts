import { League } from '../league/league';
import { TournamentRules } from '../rules/tournament-rules';
import { CompetitionsEnum } from '../competitions/competitions.enum';

export abstract class Tournament {
  abstract tournamentCode: CompetitionsEnum;
  abstract tournamentRules: TournamentRules;
  abstract leagues?: League[];

  abstract start(): () => void;
  abstract end(): () => void;
}
